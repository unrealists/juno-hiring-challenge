<script lang="ts">
	import type { Position } from './route.js';

	export let data;
	let position: Position;

	const getCurrentLocation = async () => {
		const res = await fetch('/getCurrentLocation?start=2023-07-27T00:58:30');
		position = await res.json();
	};
</script>

<code>
	Start time: {data.tourStartTime}
</code>

<p>
	<button on:click={getCurrentLocation}>where am I</button>
	<code>
		{position?.coordinates}
	</code>
</p>

<h1>
	route: {data.route.route}
</h1>

<code>
	{#each data.route.positions as pos}
		<pre>{pos.coordinates}</pre>
	{/each}
</code>
