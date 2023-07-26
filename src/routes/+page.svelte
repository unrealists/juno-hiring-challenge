<script lang="ts">
	export let data;
</script>

<pre>
	{#each data.positions as pos}
		{pos.coordinates} <br />
	{/each}
</pre>
