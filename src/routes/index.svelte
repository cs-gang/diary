<script lang="ts">
  // TODO: check if a user is already signed in and send them to dashboard
  import { supabase } from '$lib/supabase';

  function getRedirectUrl(): string {
    if (import.meta.env.VITE_PRODUCTION === 'false') {
      return 'http://localhost:3000/dashboard';
    } else {
      return 'https://diary.anand2312.tech/dashboard';
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
      <p class="font-body text-2xl md:text-3xl text-amber-200 italic">How was your day?</p>
      <br /><br />
      <small
        ><p class="font-body text-lg text-gray-100 animate-pulse mt-8 md:mt-16 lg:mt-20">
          Click anywhere to login
        </p></small
      >
    </div>
  </center>
</main>
