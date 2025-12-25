-- Fix RLS policy for account_deletion_requests table
-- This allows public inserts (anon users) to the table
-- Matches the exact pattern used in email_join_list

-- Drop ALL existing policies on this table to start fresh
DROP POLICY IF EXISTS "Allow public insert on account_deletion_requests" ON account_deletion_requests;
DROP POLICY IF EXISTS "Allow authenticated read on account_deletion_requests" ON account_deletion_requests;

-- Ensure RLS is enabled
ALTER TABLE account_deletion_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public deletion requests)
-- This matches exactly the pattern from email_join_list
CREATE POLICY "Allow public insert on account_deletion_requests"
  ON account_deletion_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (optional - for admin dashboard later)
CREATE POLICY "Allow authenticated read on account_deletion_requests"
  ON account_deletion_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify the policies were created
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'account_deletion_requests'
ORDER BY policyname;
