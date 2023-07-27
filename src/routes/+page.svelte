<script lang="ts">
	import type { CurrentPosition } from '$lib/getCurrentPosition.js';
	import { onMount } from 'svelte';

	export let data;
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
</script>

<code>
	<pre>Tour start time: {data.startTime}</pre>
	<pre>Current sample: {stop}</pre>
	<pre>Current position: {position}</pre>
</code>
