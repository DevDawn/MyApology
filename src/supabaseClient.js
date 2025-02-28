import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xdvpniinzgiwoplarpls.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdnBuaWluemdpd29wbGFycGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1ODEwOTIsImV4cCI6MjA1NjE1NzA5Mn0.-E9Dho2J5zI-4o5NjffsHEGZ6SUpRC-WF85lADXKQao";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);