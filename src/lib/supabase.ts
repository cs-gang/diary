import { createClient } from '@supabase/supabase-js';
import { getDiscordUserData, DiaryUser } from '$lib/user';
import { readable } from 'svelte/store';

const url = import.meta.env.VITE_API_URL as string;
const key = import.meta.env.VITE_API_KEY as string;

export const supabase = createClient(url, key);

export const currentUser = readable(DiaryUser.initial(), (set) => {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_OUT') {
      set(null);
    } else {
      const discordUser = await getDiscordUserData(session.provider_token);
      set(new DiaryUser(session.user, discordUser));
    }
  });
});
