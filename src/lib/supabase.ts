import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_API_URL as string;
const key = import.meta.env.VITE_API_KEY as string;

export const supabase = createClient(url, key);
