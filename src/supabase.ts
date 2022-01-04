import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';


const url = config().parsed.API_URL;
const key = config().parsed.API_KEY;


export const supabase = createClient(url, key);
