<script lang="ts">
	export let data;
</script>

<code>
	Start time: {data.tourStartTime}
</code>

<code>
	{#each data.route.positions as pos}
		<pre>{pos.coordinates}</pre>
	{/each}
</code>
