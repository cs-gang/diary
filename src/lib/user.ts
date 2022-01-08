import type { User } from '@supabase/supabase-js';

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

export async function getDiscordUserData(token: string): Promise<DiscordUser> {
  // Get the user's data from the Discord API
  // by using the provider access token.
  const url = 'https://discord.com/api/oauth2/@me';
  const headers = {
    Authorization: `Bearer ${token}`
  };
  const res = await fetch(url, {
    method: 'GET',
    headers: headers
  });
  const json = await res.json();
  const userJson = json.user;
  return {
    id: userJson.id,
    username: userJson.username,
    avatar: userJson.avatar,
    discriminator: userJson.discriminator
  };
}

export class DiaryUser {
  // Combines the supabase auth and discord data
  // of a signed in user.
  authUser: User;
  discordUser: DiscordUser;

  constructor(authUser: User, discordUser: DiscordUser) {
    this.authUser = authUser;
    this.discordUser = discordUser;
  }

  avatar_url(): string {
    return `https://cdn.discordapp.com/avatars/${this.discordUser.id}/${this.discordUser.avatar}.png?size=64`;
  }

  static initial(): DiaryUser {
    return new DiaryUser(null, null);
  }
}
