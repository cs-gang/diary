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
    {#if !user.discordUser}
        <p class="font-body text-gray-50">loading</p>
    {:else}
        <Navbar username={user.discordUser.username} avatarUrl={foo()} />
    {/if}
</main>
