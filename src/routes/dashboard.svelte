<script>
    import { supabase, currentUser } from "$lib/supabase";
    
</script>

<main>
    <p>{$currentUser.discordUser.username}</p>
</main>
