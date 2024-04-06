import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vghimkrayzusosjcweiy.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnaGlta3JheXp1c29zamN3ZWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzNDY2MDAsImV4cCI6MjAyMTkyMjYwMH0.SS3bslyM9qANY0BV9NHEqXJQXnysOUsUk-REsBAmTAc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
