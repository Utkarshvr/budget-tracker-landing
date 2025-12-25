-- Create account_deletion_requests table for storing user account deletion requests
CREATE TABLE IF NOT EXISTS account_deletion_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')),
  requested_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_account_deletion_requests_email ON account_deletion_requests(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_account_deletion_requests_status ON account_deletion_requests(status);

-- Create index on requested_at for sorting
CREATE INDEX IF NOT EXISTS idx_account_deletion_requests_requested_at ON account_deletion_requests(requested_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE account_deletion_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert on account_deletion_requests" ON account_deletion_requests;

-- Create policy to allow anyone to insert (for public deletion requests)
-- Note: For server-side API routes, it's recommended to use SUPABASE_SERVICE_ROLE_KEY
-- which bypasses RLS. If using anon key, this policy allows public inserts.
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

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_account_deletion_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_account_deletion_requests_updated_at
  BEFORE UPDATE ON account_deletion_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_account_deletion_requests_updated_at();

-- Add comment to table
COMMENT ON TABLE account_deletion_requests IS 'User account deletion requests for BudgetWise app';

