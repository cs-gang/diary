<script lang="ts">
	export let day: Date;
	export let active: boolean;
</script>

{#if active}
	<div class="rounded-sm h-1 w-1 p-1 bg-secondary-500" />
{:else}
	<div class="rounded-sm h-1 w-1 p-1 bg-violet-300" />
{/if}
