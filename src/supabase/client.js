import { createClient } from "@supabase/supabase-js"

// export const supabase = createClient("https://totserbyyoegkptirdob.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvdHNlcmJ5eW9lZ2twdGlyZG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3NzQxNzcsImV4cCI6MTk4NTM1MDE3N30._gIZe39RTrBX-QQESTiKwSo5XUionl2fI-8K5KBZHoM")
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)