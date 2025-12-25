-- Simple fix: Disable RLS entirely for account_deletion_requests table
-- This allows public inserts without any policy restrictions

ALTER TABLE account_deletion_requests DISABLE ROW LEVEL SECURITY;

