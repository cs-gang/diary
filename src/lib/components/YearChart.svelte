<script lang="ts">
  import { days as totalDays } from '$lib/dateutils';

  export let header: string = 'Chart';
  export let data: Set<string>;
  export let urlFormat: ((slug: string) => string) | null = null;

  let today = new Date(Date.now());
  let year = today.getFullYear();
  console.log(year);
</script>

<div class="flex-row w-[80%] items-center p-6 m-5 bg-primary-400 rounded-l">
  <h3 class="font-body font-bold text-3xl p-1 m-1 text-gray-900">{header}</h3>
  <div class="grid items-center days ml-2">
    {#each [...totalDays(year)] as day}
      {#if data.has(day.toDateString())}
        <div class="h-5 w-5 my-1 bg-red-300" id={day.toDateString()} />
      {:else}
        <div class="h-5 w-5 my-1 bg-primary-600" id={day.toDateString()} />
      {/if}
    {/each}
  </div>
</div>

<style>
  .days {
    grid-auto-flow: column;
    grid-template-rows: repeat(7, 1.75rem);
  }
</style>
