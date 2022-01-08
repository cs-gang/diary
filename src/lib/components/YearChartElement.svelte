<script lang="ts">
  export let day: Date;
  export let active: boolean;
  export let urlFormat: ((slug: string) => string) | null = null;

  const dateString = day.toDateString();
</script>

<!---TODO: implement popups per square-->
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
