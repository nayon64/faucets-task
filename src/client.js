import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ospphfvknfcjaigezmss.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcHBoZnZrbmZjamFpZ2V6bXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxMzE3NjAsImV4cCI6MTk5MDcwNzc2MH0.odT_eNBIjpZLGoIzUNt06rXGuwsG9I2mtwXe8Xrbl8U";
export const supabase = createClient(supabaseUrl, supabaseKey);
