
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dhgtkayoascefievmyro.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZ3RrYXlvYXNjZWZpZXZteXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMzA2MjUsImV4cCI6MjAyOTcwNjYyNX0.bN7ZLO1jg8DpqkEXp9QXzKZh2QeW8vBJY3nP98QKHsI'
export const supabase = createClient(supabaseUrl, supabaseKey)