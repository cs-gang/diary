<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { currentUser } from "$lib/supabase";
    import type { DiaryUser } from "$lib/user";
    
    let user: DiaryUser;

    currentUser.subscribe(value => {
        user = value;
    })
</script>

<main>
    {#if !user.discordUser}
        <p class="font-body text-gray-50">loading</p>
    {:else}
        <Navbar username={user.discordUser.username} avatarUrl={user.avatar_url()} />
    {/if}
</main>
