# Waitlist Setup Guide

## Prerequisites

1. Make sure you have a `.env.local` file in the `landing` directory with:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

## Database Setup

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `sql/email_join_list.sql`
4. Run the SQL script

This will create:
- `email_join_list` table with columns: id, email, name, excitement, created_at, updated_at
- Indexes for performance
- Row Level Security (RLS) policies
- Automatic timestamp updates

## Testing

1. Start the development server: `npm run dev`
2. Navigate to the landing page
3. Scroll to the "Join the Waitlist" section
4. Fill out the form and submit
5. Check your Supabase table to verify the entry was created

## Features

- ✅ Email validation
- ✅ Duplicate email prevention
- ✅ Form validation
- ✅ Success/error messaging
- ✅ Loading states
- ✅ Responsive design matching your app theme

