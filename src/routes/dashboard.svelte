<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import WaitingForUserData from '$lib/components/WaitingForUserData.svelte';
  import { currentUser } from '$lib/supabase';
  import type { DiaryUser } from '$lib/user';

  let user: DiaryUser;

  currentUser.subscribe((value) => {
    user = value;
  });

  function foo(): string {
    console.log(user.avatar_url());
    return user.avatar_url();
  }
</script>

<main>
  <title>Dashboard</title>
  {#if !user.discordUser}
    <WaitingForUserData />
  {:else}
    <Navbar username={user.discordUser.username} avatarUrl={foo()} />
  {/if}
</main>
