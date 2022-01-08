<script lang="ts">
  import YearChartElement from './YearChartElement.svelte';
  import { days as totalDays } from '$lib/dateutils';

  export let header: string = '';
  export let data: Set<string>;
  export let urlFormat: ((slug: string) => string) | null = null;

  let today = new Date(Date.now());
  let year = today.getFullYear();
  console.log(year);
  console.log(data);
</script>

<div class="flex-row w-[80%] items-center p-6 m-5 bg-primary-400 rounded-l">
  <h3 class="font-body font-bold text-3xl p-1 m-1 text-gray-900">{header}</h3>
  <div class="grid items-center days ml-2">
    {#each [...totalDays(year)] as day}
      <YearChartElement {day} active={data.has(day.toDateString())} {urlFormat} />
    {/each}
  </div>
</div>

<style>
  .days {
    grid-auto-flow: column;
    grid-template-rows: repeat(7, 1.75rem);
  }
</style>
