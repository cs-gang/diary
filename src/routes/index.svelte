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
      <h1 class="font-display text-6xl italic hover:not-italic text-red-300 hover:text-amber-200">
        Diary
      </h1>
      <br />
      <p class="font-body text-xl text-amber-200">How was your day?</p>
      <br /><br />
      <small
        ><p class="font-body text-xsm text-gray-100 animate-pulse">
          Click anywhere to login
        </p></small
      >
    </div>
  </center>
</main>
