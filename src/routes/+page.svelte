<script lang="ts">
	import type { Route } from '$lib/route.js';

	export let data;
	let position: Route['positions'][0];

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
		{position}
	</code>
</p>

<h1>
	route: {data.route.name}
</h1>

<code>
	{#each data.route.positions as pos}
		<pre>{pos}</pre>
	{/each}
</code>
