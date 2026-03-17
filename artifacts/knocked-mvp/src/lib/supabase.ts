import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://0ec90b57d6e95fcbda19832f.supabase.co';
const supabaseAnonKey = 'sb_publishable_7zbCho-xXwIu-yRRYuVeow_-SMcWG4W';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
