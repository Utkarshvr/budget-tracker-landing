-- Create email_join_list table for waitlist signups
CREATE TABLE IF NOT EXISTS email_join_list (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  excitement TEXT NOT NULL CHECK (excitement IN ('very-excited', 'somewhat-excited', 'curious')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_join_list_email ON email_join_list(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_email_join_list_created_at ON email_join_list(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE email_join_list ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public signup)
CREATE POLICY "Allow public insert on email_join_list"
  ON email_join_list
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (optional - for admin dashboard later)
CREATE POLICY "Allow authenticated read on email_join_list"
  ON email_join_list
  FOR SELECT
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_email_join_list_updated_at
  BEFORE UPDATE ON email_join_list
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comment to table
COMMENT ON TABLE email_join_list IS 'Waitlist signups for Budget Tracker app';

