<script lang="ts">
    import { supabase } from "$lib/supabase";

    export let username: string;
    export let avatarUrl: string;
</script>

<main>
    <nav class="bg-primary-800 flex justify-between px-4 py-4 md:py-0 w-full text-2xl font-display">
        <a href="/" class="text-4xl m-2 px-4 py-4 font-bold font-display text-red-300 hover:text-amber-200">
            Diary
        </a>
        <div class="flex items-center w-auto">
            <ul class="text-base font-display font-light text-amber-300 p-4 flex justify-between">
                <li>
                    <!--- TODO: make entries --->
                    <a href="/#" class="hover:text-gray-50 p-4 block">Entries</a>
                </li>
                <li>
                    <!--- TODO: make habits -->
                    <a href="/#" class="hover:text-gray-50 p-4 block">Habits</a>
                </li>
            </ul>
        </div>
        <div class="flex items-center w-auto">
            <a href="/" class="p-4">
                <button on:click={supabase.auth.signOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>
            </a>
            <!---TODO: make settings-->
            <a href="/#">
                <p class="hidden font-display font-normal text-amber-500 hover:text-secondary-400">{username}</p>
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="inline object-cover w-16 h-16 mr-4 rounded-full" src={avatarUrl} alt="User's profile picture">
            </a>
        </div>
    </nav>
</main>
