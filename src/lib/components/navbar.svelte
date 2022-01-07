<script lang="ts">
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
            <!---TODO: make settings-->
            <a href="/#">
                <p class="hidden font-display font-normal text-amber-500 hover:text-secondary-400">{username}</p>
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="inline object-cover w-16 h-16 mr-4 rounded-full" src={avatarUrl} alt="User's profile picture">
            </a>
        </div>
    </nav>
</main>
