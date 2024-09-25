import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://zwgdeavhxcopwohoacom.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z2RlYXZoeGNvcHdvaG9hY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMjY1MjcsImV4cCI6MjA0MjYwMjUyN30.752jOeDNNKQ_XjLG2gg5l7rKLYvTEjezJpcZJsdQugM"
const supabase = createClient(projectUrl, key);

export default supabase;