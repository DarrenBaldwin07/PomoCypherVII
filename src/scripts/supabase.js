import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jvzauxjplwpqsnyhtwne.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2emF1eGpwbHdwcXNueWh0d25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgzMjE4OTksImV4cCI6MTk2Mzg5Nzg5OX0.75TSFAQBb-wsZGkVDDUqYYDm0b2gMib6P0OABvu9lq4'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)