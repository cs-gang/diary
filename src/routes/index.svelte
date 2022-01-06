<script lang="ts">
	import { supabase } from '$lib/supabase.ts'; // TODO: fix import errors

	async function signIn() {
		const { user, session, error } = await supabase.auth.signIn(
			{
				provider: 'discord'
			},
			{
				redirectTo: 'http://localhost:3000/callback.json',
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

<title>Diary</title>

<center class="flex h-screen justify-between" on:click={signIn}>
	<div class="m-auto">
		<h1 class="font-display text-6xl italic hover:not-italic text-red-300 hover:text-gray-50">
			Diary
		</h1>
		<br />
		<p class="font-body text-xl text-amber-200 hover:text-gray-50">How was your day?</p>
		<br /><br />
		<small
			><p class="font-body text-xsm text-gray-100 animate-pulse">Click anywhere to login</p></small
		>
	</div>
</center>
