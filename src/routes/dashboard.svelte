<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { currentUser } from "$lib/supabase";
    import type { DiaryUser } from "$lib/user";
    
    let user: DiaryUser;

    currentUser.subscribe(value => {
        user = value;
    })

    function foo(): string {
        console.log(user.avatar_url());
        return user.avatar_url();
    }
</script>

<main>
    <title>Dashboard</title>
    {#if !user.discordUser}
        <center class="h-screen justify-between">
            <p class="text-gray-50 font-display text-5xl">Loading...</p>
            <p class="text-gray-50 font-display text-xl animate-pulse">
                Psst if you've been stuck here for too long, you've probably not logged in.<br>
                I know I should probably redirect you to the login page, but right now I'm too lazy.
            </p>
        </center>
    {:else}
        <Navbar username={user.discordUser.username} avatarUrl={foo()} />
    {/if}
</main>
