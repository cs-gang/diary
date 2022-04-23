<script lang="ts">
  // TODO: check if a user is already signed in and send them to dashboard
  import { supabase } from '$lib/supabase';
  import { page } from "$app/stores";

  function getRedirectUrl(): string {
    if (import.meta.env.VITE_PRODUCTION === 'false') {
      return 'http://localhost:3000/dashboard';
    } else {
      return `${$page.url.origin}/dashboard`;
    }
  }

  async function signIn(): Promise<null> {
    const { error } = await supabase.auth.signIn(
      {
        provider: 'discord'
      },
      {
        redirectTo: getRedirectUrl(),
        scopes: 'identify'
      }
    );

    if (error) {
      console.log(error.message, error.status);
      alert('Sign in failed :( Try again');
      return;
    }
  }
</script>

<main>
  <title>Diary</title>

  <center class="flex h-screen justify-between" on:click={signIn}>
    <div class="m-auto">
      <h1 class="font-display text-7xl md:text-8xl lg:text-9xl bold hover:not-italic text-red-300">
        Diary
      </h1>
      <br />
      <p class="font-body text-2xl md:text-3xl text-amber-200 italic waviy mt-2">
        <span style="--i:1">H</span>
        <span style="--i:2">o</span>
        <span style="--i:3">w</span>
        <span style="--i:4" class="ml-6">w</span>
        <span style="--i:5">a</span>
        <span style="--i:6">s</span>
        <span style="--i:7" class="ml-6">y</span>
        <span style="--i:8">o</span>
        <span style="--i:9">u</span>
        <span style="--i:10">r</span>
        <span style="--i:11" class="ml-6">d</span>
        <span style="--i:12">a</span>
        <span style="--i:13">y</span>
        <span style="--i:14">?</span>
      </p>
      <br /><br />
      <small
        ><p class="font-body text-lg text-gray-100 animate-pulse mt-8 md:mt-16 lg:mt-20">
          Click anywhere to login
        </p></small
      >
    </div>
  </center>
</main>

<style>
  .waviy {
    position: relative;
    -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
    letter-spacing: -7px;
  }
  .waviy span {
    position: relative;
    display: inline-block;
    animation: waviy 2s infinite;
    animation-delay: calc(0.15s * var(--i));
  }
  @keyframes waviy {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-8px);
    }
  }
</style>
