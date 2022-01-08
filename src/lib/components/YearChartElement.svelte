<script lang="ts">
  export let day: Date;
  export let active: boolean;
  export let urlFormat: ((slug: string) => string) | null = null;

  const dateString = day.toDateString();
</script>

<!---TODO: implement popups per square-->
<div class="relative flex flex-col items-center group">
  {#if active}
    {#if urlFormat}
      <a href={urlFormat(dateString)}><div class="h-5 w-5 my-1 bg-red-300" id={dateString} /></a>
    {:else}
      <div class="h-5 w-5 my-1 bg-red-300" id={dateString} />
    {/if}
  {:else if urlFormat}
    <a href={urlFormat(dateString)}><div class="h-5 w-5 my-1 bg-primary-600" id={dateString} /></a>
  {:else}
    <div class="h-5 w-5 my-1 bg-primary-600" id={dateString} />
  {/if}

  <div class="absolute bottom-0 items-center hidden mb-6 group-hover:flex flex-col">
    <span
      class="rounded relative z-10 w-[7rem] p-2 text-sm font-display leading-none text-white whitespace-no-wrap bg-gray-800 shadow-lg"
      >{dateString}</span
    >
    <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-800" />
  </div>
</div>
