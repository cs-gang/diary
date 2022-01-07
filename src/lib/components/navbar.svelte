<script lang="ts">
    export let username: string;
    export let avatarUrl: string;
</script>

<main>
    <nav class="bg-primary-800 flex justify-between px-4 py-4 md:py-0 w-full text-2xl font-display">
        <a href="/" class="text-4xl px-4 py-4 font-bold font-display text-red-300 hover:text-amber-200">
            Diary
        </a>
        <div class="flex items-center w-auto">
            <ul class="text-base font-display font-light text-amber-300 pt-4 flex justify-between">
                <li>
                    <!--- TODO: make entries --->
                    <a href="/#" class="hover:text-gray-50 p-4 py-2 block">Entries</a>
                </li>
                <li>
                    <!--- TODO: make habits -->
                    <a href="/#" class="hover:text-gray-50 p-4 py-2 block">Habits</a>
                </li>
            </ul>
        </div>
        <div class="flex items-center w-auto">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={avatarUrl} class="inline object-cover mr-2 rounded-full" alt="User's profile picture">
            <p class="hidden font-display font-normal text-amber-500 pt-4 md:flex">{username}</p>
        </div>
    </nav>
</main>
