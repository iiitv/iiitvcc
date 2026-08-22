# iiitvcc-new — Project Structure

Next.js (App Router) site for the IIITV Coding Club. Uses Supabase for data (auth, blogs, events, team members), Cloudinary for image delivery/transformations, and Tailwind + Radix/shadcn-style UI components. Deployed on Vercel.

```
iiitvcc-new
├── LICENSE
├── README.md
├── components.json          # shadcn/ui config
├── next-env.d.ts
├── next-sitemap.config.js   # sitemap.xml / robots.txt generation
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── tsconfig.json
├── public/                  # static assets — logos, social icons, posters, placeholders
└── src/
    ├── app/                 # Next.js App Router — one folder per route
    ├── components/          # shared/reusable components (navbar, footer, ui/ primitives)
    ├── font/                 # self-hosted "Spotify Mix" font family (all weights/styles)
    ├── lib/                 # utils.ts — shared helper functions (e.g. cn() for classnames)
    ├── proxy.ts             # replaces old middleware.ts — auth/routing proxy logic
    ├── styles/              # standalone CSS files (blogs, event, footer, navbar)
    ├── types/               # supabase.ts — generated/typed DB schema
    └── utils/supabase/      # client.ts, server.ts, middleware.ts — Supabase client setup
```

## `src/app/` — Routes

| Path | Purpose |
|---|---|
| `about/` | About page, with its own scroll-animation hook and animated section component |
| `api/` | Custom API routes — logout, password update, admin checks, username checks, users, email sending |
| `api/v1/` | CRUD-style endpoints for events and blogs (create, delete, get, submit) |
| `auth/` | Login/signup flow — OAuth component, email confirm, password reset/update |
| `blog/[id]/` | Single blog post page, with like/dislike server actions |
| `blogs/` | Blog listing page and card components |
| `blogwriter/` | Blog authoring page |
| `contact_us/` | Contact page with custom illustration components |
| `event/[id]/` | Single event page — convenors, prizes, requirements, venue, winners, etc. |
| `events/` | Event listing page |
| `home/` | Homepage — includes the parallax hero component |
| `members/` | **Team page** — `page.tsx` renders the team grid; `_actions/fetchTeamData.ts` is the Supabase server action pulling from the `team` table |
| `profile/` | User profile, account settings, and `admin/` sub-area (blog/event creation forms, admin-only middleware) |
| `resources/` | Club learning resources, split by track: android, blockchain, cp (competitive programming), development, ml, uiux, web-dev |
| `test_api/` | Internal test page for API routes |

## `src/components/`
Shared UI: `navbar.jsx`, `footer.jsx`, `profile_dropdown.tsx`, `user_dropdown.tsx`, `error_dialog.tsx`, `loading.tsx`, plus `ui/` — the shadcn/Radix primitive components (button, card, dialog, dropdown-menu, switch, checkbox, avatar, input, label, textarea, alert).

## `src/utils/supabase/`
Three Supabase client setups for different execution contexts:
- `client.ts` — browser/client-side client
- `server.ts` — server-side client (used in server actions like `fetchTeamData.ts`)
- `middleware.ts` — used within the auth/session-refresh flow

## Key files for team-member work
- **`src/app/members/page.tsx`** — the team grid UI, filtering, sorting, and card rendering
- **`src/app/members/_actions/fetchTeamData.ts`** — pulls raw rows from the Supabase `team` table (`select("*")`, ordered by batch/name — final display order is actually decided in `page.tsx`, not here)
- **`src/utils/supabase/server.ts`** — the Supabase server client both of the above rely on
