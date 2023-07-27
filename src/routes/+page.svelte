<script lang="ts">
	import type { Route } from '$lib/route.js';
	import { onMount } from 'svelte';

	export let data;
	let position: Route['positions'][0] = data.position;

	onMount(() => {
		const source = new EventSource('stream', {
			withCredentials: false
		});
		source.addEventListener('time', (e) => {
			console.log(e.data);
		});
		return () => {
			source.close();
		};
	});
</script>

<code>
	Start time: {data.startTime}
</code>

<p>
	<code>
		{position}
	</code>
</p>
