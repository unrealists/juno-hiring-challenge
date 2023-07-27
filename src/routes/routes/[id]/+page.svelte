<script lang="ts">
	import { Map, Marker, controls } from '@beyonk/svelte-mapbox';
	import type { CurrentPosition } from '$lib/getCurrentPosition.js';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	const { GeolocateControl, NavigationControl, ScaleControl } = controls;

	export let data;

	let mapComponent: Map;

	let position = data.position;
	let stop = data.stop;

	onMount(() => {
		const source = new EventSource(`/api/sse-routes/${data.routeId}`, {
			withCredentials: false
		});
		source.addEventListener(`${data.routeId}-position`, (e) => {
			// TODO: implement typeguard instead of typecasting
			const currentPosition = JSON.parse(e.data) as CurrentPosition;
			position = currentPosition.position;
			stop = currentPosition.stop;
		});
		return () => {
			source.close();
		};
	});

	$: {
		recenterMap(position);
	}

	const recenterMap = (coordinates: typeof position) => {
		if (!mapComponent) return;
		mapComponent.setCenter(coordinates);
		mapComponent.setZoom(15);
	};

	const onMapReady = (e: Event) => {
		recenterMap(position);
	};
</script>

<code>
	<pre>Route: {data.routeId}</pre>
	<pre>Current sample: {stop}</pre>
	<pre>Current position: {position}</pre>
</code>
<div class="map">
	<Map
		accessToken={env.PUBLIC_MAPBOX_API_KEY}
		options={{ scrollZoom: false }}
		bind:this={mapComponent}
		on:ready={onMapReady}
	>
		<Marker lng={position[0]} lat={position[1]} />
		<NavigationControl />
		<GeolocateControl options={{ some: 'control-option' }} />
		<ScaleControl />
	</Map>
</div>

<style>
	.map {
		height: 400px;
	}
</style>
