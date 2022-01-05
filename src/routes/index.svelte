<script lang="ts">
    import { supabase } from '$lib/supabase.ts';   // TODO: fix import errors
    import { currentUser } from '$lib/stores.ts';
    import { getDiscordUserData, DiaryUser } from '$lib/user.ts';

    async function signIn() {
        const { user, session, error } = await supabase.auth.signIn({
            provider: "discord",
        }, {
            scopes: "identify"
        });

        if (error) {
            console.log(error.message, error.status);
            alert("Sign in failed :( Try again");
            return;
        }

        const oauthToken = session.access_token;
        const discordUser = await getDiscordUserData(oauthToken);

        console.log("logged in");
        console.log(discordUser);

        const diaryUser = new DiaryUser(user, discordUser);

        currentUser.set(diaryUser);
    }

</script>
<title>Diary</title>

<center class="flex h-screen justify-between" on:click={signIn}>
    <div class="m-auto">
        <h1 class="font-display text-6xl italic hover:not-italic text-red-300 hover:text-gray-50">Diary</h1>
        <br>
        <p class="font-body text-xl text-amber-200 hover:text-gray-50">How was your day?</p>
        <br><br>
        <small><p class="font-body text-xsm text-gray-100 animate-pulse">Click anywhere to login</p></small>
    </div>
</center>
