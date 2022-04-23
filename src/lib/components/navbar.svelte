<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { fly, fade } from 'svelte/transition';
  import { backOut } from 'svelte/easing';

  export let username: string;
  export let avatarUrl: string;

  let burgerDrawerVisible = false; //make false

  function flipDrawerState() {
    burgerDrawerVisible = !burgerDrawerVisible;
  }
</script>

<main>
  {#if burgerDrawerVisible}
    <div
      class="h-screen w-screen z-0 bg-primary-900 absolute md:hidden"
      in:fly={{ x: 200, duration: 1000, easing: backOut }}
      out:fade
    >
      <div class="w-auto flex flex-col items-center">
        <!---TODO: make settings-->
        <div class="flex flex-row justify-between ml-24">
          <a href="/dashboard#">
            <p class="hidden font-display font-normal text-amber-500 hover:text-secondary-400">
              {username}
            </p>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              class="inline object-cover w-16 h-16 mr-4 rounded-full my-16 ml-4"
              src={avatarUrl}
              alt="User's profile picture"
            />
          </a>
          <button class="ml-16" on:click={flipDrawerState}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 22 22"
              stroke="white"
            >
              <line x1="0" y1="0" x2="16" y2="16" />
              <line x1="16" y1="0" x2="0" y2="16" />
            </svg>
          </button>
        </div>
        <div class="text-2xl font-display font-light text-amber-300 text-center">
          <a href="/dashboard#" class="hover:text-gray-50 p-4 block">Entries</a>
          <a href="/dashboard#" class="hover:text-gray-50 p-4 block">StickyBoard</a>
          <a href="/dashboard#" class="hover:text-gray-50 p-4 block">Habits</a>
        </div>
        <a href="/" class="p-4 mt-12">
          <button on:click={supabase.auth.signOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 22 22"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  {/if}

  <nav class="bg-primary-800 flex justify-between px-4 py-4 md:py-0 w-full text-2xl font-display">
    <a
      href="/"
      class="text-2xl md:text-3xl p-2 md:py-4 md:m-4 font-bold font-display text-red-300 hover:text-amber-200"
    >
      Diary
    </a>

    <button tabindex="0" class="md:hidden text-gray-50 mr-5" on:click={flipDrawerState}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 20 20"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </button>

    <div class="items-center w-auto hidden md:flex">
      <ul class="text-base font-display font-light text-amber-300 p-4 flex justify-between">
        <li>
          <!--- TODO: make entries --->
          <a href="/dashboard#" class="hover:text-gray-50 p-4 block">Entries</a>
        </li>
        <li>
          <!--- TODO: make habits -->
          <a href="/dashboard#" class="hover:text-gray-50 p-4 block">Habits</a>
        </li>
      </ul>
    </div>
    <div class="items-center w-auto hidden md:flex">
      <button on:click={supabase.auth.signOut} class="mr-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 22 22"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
      <!---TODO: make settings-->
      <a href="/dashboard#" class="mr-2">
        <p class="hidden font-display font-normal text-amber-500 hover:text-secondary-400">
          {username}
        </p>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          class="inline object-cover w-16 h-16 mr-4 rounded-full"
          src={avatarUrl}
          alt="User's profile picture"
        />
      </a>
    </div>
  </nav>
</main>
