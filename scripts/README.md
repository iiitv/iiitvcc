# Database Scripts

This directory contains SQL scripts and utilities for database management.

## Add Priyanshu as Website Developer

There are **three ways** to add Priyanshu to the Website Developers section:

---

### Method 1: Direct SQL Query (Fastest & Recommended)

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Run this query:

```sql
UPDATE team
SET is_dev = true
WHERE name = 'Priyanshu';
```

4. Verify the change:

```sql
SELECT id, name, batch, is_dev, position
FROM team
WHERE name = 'Priyanshu';
```

---

### Method 2: Using Supabase Table Editor (Easiest)

1. Go to your Supabase Dashboard
2. Navigate to **Table Editor**
3. Open the `team` table
4. Find the row for **Priyanshu**
5. Click on the `is_dev` column
6. Change the value to `true` (check the checkbox)
7. Save the changes

---

### Method 3: Using the Server Action (Programmatic)

If you want to do this programmatically in your application:

1. Create a temporary API route or page
2. Import and call the action:

```typescript
import { addPriyanshuAsDeveloper } from '@/app/members/_actions/addPriyanshu';

// In your component or API route
const result = await addPriyanshuAsDeveloper();
console.log(result);
```

3. Or use the generic function:

```typescript
import { addAsWebsiteDeveloper } from '@/app/members/_actions/updateDeveloperStatus';

const result = await addAsWebsiteDeveloper('Priyanshu');
console.log(result);
```

---

## Notes

- Make sure Priyanshu's profile exists in the `team` table first
- The name must match exactly as it appears in the database
- After updating, refresh the members page to see the changes
- The "Website Developers" button will now show Priyanshu in the filtered list

## Database Schema Reference

The `team` table has the following relevant fields:
- `id`: Primary key
- `name`: Team member's name
- `batch`: Batch year (e.g., "2024", "2023")
- `is_dev`: Boolean flag for website developers
- `position`: Array of positions (e.g., ["Member", "Lead"])
- `about`: Bio/description
- `expertise`: Array of skills
- `socials`: Array of social media links
- `pfp`: Profile picture URL (Cloudinary)

---

## Troubleshooting

**Problem**: "No team member found with name: Priyanshu"

**Solution**: Check if the name is spelled correctly or search for similar names:

```sql
SELECT * FROM team WHERE name ILIKE '%priyanshu%';
```

**Problem**: Changes not showing on the website

**Solution**: 
1. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear the browser cache
3. Check if the query actually updated the database