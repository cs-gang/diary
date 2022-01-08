<script lang="ts">
	import { days as totalDays } from '$lib/dateutils';

	export let header: string = "";
	export let data: Set<string>;
	export let urlFormat: string | null = null;

	let today = new Date(Date.now());
	let year = today.getFullYear();
</script>

<div class="grid w-[80%] items-center days p-6 m-5 bg-primary-400 rounded-l">
	{#each [...totalDays(year)] as day}
		{#if data.has(day.toDateString())}
			<div class="h-5 w-5 my-1 bg-red-300" id={day.toDateString()} />
		{:else}
			<div class="h-5 w-5 my-1 bg-primary-600" id={day.toDateString()} />
		{/if}
	{/each}
</div>

<style>
	.days {
		grid-template-columns: repeat(auto-fill, 2.5rem);
		box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12), 0 5px 15px rgba(0, 0, 0, 0.06);
	}
</style>
