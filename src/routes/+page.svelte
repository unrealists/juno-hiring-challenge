<script lang="ts">
	import { Map, Marker, controls } from '@beyonk/svelte-mapbox';
	import type { CurrentPosition } from '$lib/getCurrentPosition.js';
	import { onMount } from 'svelte';
	const { GeolocateControl, NavigationControl, ScaleControl } = controls;

	export let data;

	let mapComponent: Map;
	let position = data.position;
	let stop = data.stop;

	onMount(() => {
		const source = new EventSource('/stream-position', {
			withCredentials: false
		});
		source.addEventListener('position', (e) => {
			// TODO: implement typeguard instead of typecasting
			const currentPosition = JSON.parse(e.data) as CurrentPosition;
			position = currentPosition.position;
			stop = currentPosition.stop;
		});
		return () => {
			source.close();
		};
	});

	const recenterMap = (coordinates: typeof position) => {
		if (!mapComponent) return;
		mapComponent.setCenter(coordinates);
		mapComponent.setZoom(13);
	};

	const flyto = (coordinates: typeof position) => {
		if (!mapComponent) return;
		mapComponent.flyTo({ center: coordinates });
	};

	const onMapReady = (e: Event) => {
		recenterMap(position);
	};

	$: {
		recenterMap(position);
	}
</script>

<code>
	<pre>Tour start time: {data.startTime}</pre>
	<pre>Current sample: {stop}</pre>
	<pre>Current position: {position}</pre>
</code>

<div class="map">
	<Map
		accessToken="pk.eyJ1IjoibWlhc3RvZHdhIiwiYSI6ImNsa2w4dzZ1czBsZWgzcGw5ZTJuZDVhdGoifQ.aZab-1LoXp8A1ljFlahRFw"
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
