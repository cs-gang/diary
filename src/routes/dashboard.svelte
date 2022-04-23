<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import WaitingForUserData from '$lib/components/WaitingForUserData.svelte';
  import YearChart from '$lib/components/YearChart.svelte';
  import { currentUser, supabase } from '$lib/supabase';
  import type { DiaryUser } from '$lib/user';

  let user: DiaryUser;

  currentUser.subscribe((value) => {
    user = value;
  });

  function foo(): string {
    return user.avatar_url();
  }
</script>

<main>
  <title>Dashboard</title>

  {#if !user.discordUser}
    <WaitingForUserData />
  {:else}
    <Navbar username={user.discordUser.username} avatarUrl={foo()} />
    <!--
	{#await user.getDiaryEntryDays(supabase) then data}
		<center><YearChart data={data} header="Diary Entries" /></center>
	{/await}-->
  {/if}
</main>
