-- Script to add Priyanshu as a Website Developer
-- Run this in your Supabase SQL Editor

-- Update Priyanshu's is_dev field to true
UPDATE team
SET is_dev = true
WHERE name = 'Priyanshu';

-- Verify the update
SELECT id, name, batch, is_dev, position
FROM team
WHERE name = 'Priyanshu';

-- If you need to find Priyanshu first (in case of multiple people with similar names)
-- Uncomment and run this to see all Priyanshu entries:
-- SELECT * FROM team WHERE name ILIKE '%priyanshu%';
