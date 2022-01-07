import { supabase } from '$lib/supabase';
import { getDiscordUserData, DiaryUser } from '$lib/user';
import { currentUser } from '$lib/stores';

type EndpointReturn = {
	headers: Record<string, string>;
	status: number;
};

export async function get(): Promise<EndpointReturn> {
	// get the access token that's passed in the URL
	// use it to get the user's data from discord
	// and set it to the store value
	const token = supabase.auth.session().provider_token;
	const discordUser = await getDiscordUserData(token);
	const authUser = supabase.auth.user();
	currentUser.set(new DiaryUser(authUser, discordUser));

	return {
		headers: { Location: '/dashboard' },
		status: 302
	};
}
