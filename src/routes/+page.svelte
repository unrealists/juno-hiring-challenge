<script lang="ts">
	import type { CurrentPosition } from '$lib/getCurrentPosition.js';
	import { onMount } from 'svelte';

	export let data;
	let position: CurrentPosition['position'] = data.position;

	onMount(() => {
		const source = new EventSource('/stream-position', {
			withCredentials: false
		});
		source.addEventListener('position', (e) => {
			// TODO: implement typeguard instead of typecasting
			const currentPosition = JSON.parse(e.data) as CurrentPosition;
			position = currentPosition.position;
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
