
# IIITV Coding Club Website

Official website of the **IIITV Coding Club**, built with Next.js and Supabase.  
Live at [iiitvcc.vercel.app](https://iiitvcc.vercel.app/).

---

## Features

- User authentication (sign-up, login, password reset)
- Blog publishing platform (only admins)
- Event management system (only admins)
- Admin control panel (only admins)
- Responsive design
- Supabase backend (PostgreSQL + Auth + Storage)

## Tech Stack

| Layer      | Technology                       |
|------------|----------------------------------|
| Frontend   | Next.js 16, React 19             |
| Styling    | Tailwind CSS v4                  |
| Backend    | Supabase (PostgreSQL, Auth)      |
| Deployment | Vercel                           |

## Getting Started

### Prerequisites

- **Node.js** v20 or later
- **pnpm** — this project uses pnpm exclusively. Other package managers are not allowed.

- [Install pnpm](https://pnpm.io/installation)


### Installation

1. Fork the repository on GitHub.
2. Clone your fork:

   ```bash
   git clone https://github.com/<your-username>/iiitvcc.git
   cd iiitvcc
   pnpm install
   ```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_STORAGE_URL=<your-storage-url>
NEXT_PUBLIC_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_BUCKET=web_data
```

You can find these values in your Supabase project settings.

## Development

```bash
pnpm dev
```

The app runs at `http://localhost:3000`.

## Contribution Guidelines

We welcome contributions from the community! To ensure a smooth review process, please follow these steps:

1. **Fork and Clone**: Fork the repository on GitHub and clone it locally.
2. **Create a Branch**: Create a descriptive branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   or
   git checkout -b fix/fix-name
   ```
3. **Write Code**: Implement your changes or fixes.
4. **Format Your Code**: Run Prettier to format your code before committing:
   ```bash
   pnpm pretty
   ```
5. **Verify Build**: You **must** verify that the project builds successfully without typescript or lint errors before pushing:
   ```bash
   pnpm build
   ```
6. **Code Linting**: We use **Prettier** to maintain code quality. Run the following command to lint your code:

```bash
pnpm pretty
```
6. **Push and PR**: Push to your fork and submit a Pull Request to the `new` branch of the main repository. Preview URLs will automatically be generated for your pull request on approval.

## Server Actions vs API Routes

For new mutating features (things that create/update/delete data on behalf of a logged-in user), prefer **Next.js Server Actions** over Axios + a `/api/v1/...` route handler.

- Axios API routes were the original pattern (predates the team's familiarity with Server Actions) — existing ones don't need to be migrated on their own, but new work should use Server Actions.
- Convention: colocate actions in a `_actions/` folder next to the component/page that uses them, one action (or a small related group) per file, e.g. `src/app/blog/[id]/_actions/like.ts` or `src/app/profile/account/_actions/verify-profile.ts`.
- Start the file with `"use server";`, export typed async functions, and call them **directly** from client components — no `axios.post`/`fetch` to your own API needed.
- GET-only/read endpoints (e.g. `src/app/api/v1/leaderboard/route.ts`) can stay as route handlers; this convention is specifically for mutations.

## Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.