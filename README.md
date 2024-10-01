
# IIITV Coding Club Website

Welcome to the new repository for the **IIITV Coding Club** website! This project is part of the **Contribut-a-thon**, and we are excited to have you contribute. This document will guide you through the project structure, setup, and contribution process.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Contribution Guidelines](#contribution-guidelines)

## Introduction

This is the new official website for the **IIITV Coding Club**, built with modern web technologies. The project is hosted on Vercel and aims to showcase club activities, blogs, events, and more. We encourage you to explore the project and contribute to its development!

The live site can be accessed here: [IIITV Coding Club Website](https://iiitvcc.vercel.app/).

## Features

- User authentication system (Sign up, login, reset password)
- Blog publishing platform
- Event management system
- Responsive design
- Integration with Supabase for backend services

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** Supabase, REST APIs
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth

## Project Structure

```
/iiitvcc
├── .github                         # GitHub-specific configurations
│   └── workflows                   # GitHub CI/CD Action workflows
├── .gitignore                      # Specifies files and directories to be ignored by Git
├── components.json                 # JSON file to define components or modules in the project
├── next-env.d.ts                   # TypeScript environment definitions for Next.js
├── next-sitemap.config.js          # Configuration for generating sitemaps
├── next.config.mjs                 # Next.js configuration file
├── package-lock.json               # Snapshot of dependencies installed
├── package.json                    # Project metadata and dependencies
├── postcss.config.mjs              # Configuration for PostCSS (used with Tailwind CSS)
├── public                          # Static assets for the project
├── README.md                       # The file you are reading
├── src                             # Source code of the project
│   ├── app                         # Application-specific logic and pages
│   │   ├── account                 # Account-related pages and components
│   │   │   ├── components          # Account-specific reusable components
│   │   │   ├── hooks               # Custom React hooks related to accounts
│   │   │   │   └── useAuth.tsx     # Hook to handle authentication logic
│   │   │   ├── page.tsx            # Account main page layout
│   │   │   └── utils               # Utility functions related to accounts
│   │   ├── api                     # API routes for the application
│   │   │   ├── logout              # API endpoint for logging out
│   │   │   ├── rest                # RESTful API structure
│   │   │   │   └── v1              # Version 1 of the REST API
│   │   │   │       ├── isUserAdmin # Endpoint to check if a user is an admin
│   │   │   │       ├── isUsername  # Endpoint to validate usernames
│   │   │   │       └── users       # Endpoint for user-related operations
│   │   ├── auth                    # Authentication logic and pages
│   │   │   ├── action.tsx          # Actions related to authentication
│   │   │   ├── callback            # OAuth callback handling
│   │   │   ├── component           # Reusable components for authentication
│   │   │   ├── confirm             # Route for email confirmation
│   │   ├── blogs                   # Blog-related pages and components
│   │   │   ├── components          # Reusable blog components (e.g., blog cards)
│   │   │   ├── fetchBlogs.jsx      # Logic for fetching blogs
│   │   │   ├── layout.tsx          # Blog page layout
│   │   ├── contact_us              # Contact page for the application
│   │   │   ├── components          # Contact-related components
│   │   │   ├── layout.tsx          # Contact page layout
│   │   │   └── styles.css          # Styles specific to the contact page
│   │   ├── event                   # Single event page
│   │   │   └── [id]                # Dynamic route for individual events
│   │   │       ├── components      # Components related to an event
│   │   │       │   └── eventPoster.jsx  # Component to display event poster
│   │   ├── events                  # Events listing page
│   │   ├── favicon.ico             # App-specific favicon
│   │   ├── globals.css             # Global styles for the app
│   │   ├── home                    # Home page and layout
│   │   │   ├── components
│   │   │   │   └── hero-parallax.tsx  # Hero section with parallax effect
│   │   │   ├── layout.tsx          # Home page layout
│   │   ├── layout.tsx              # Global layout wrapper
│   │   ├── members                 # Members section
│   │   │   ├── data.json           # Data for members
│   │   └── test_api                # Test API page for demonstration
│   ├── components                  # Global reusable components
│   │   ├── error_dialog.tsx        # Component for error dialogs
│   │   ├── footer.jsx              # Footer component
│   │   ├── navbar.jsx              # Navigation bar component
│   │   ├── ui                      # UI components (e.g., buttons, inputs)
│   │   │   ├── button.tsx          # Reusable button component
│   │   │   ├── alert.tsx           # Alert component for notifications
│   │   │   ├── input.tsx           # Input field component
│   │   │   └── switch.tsx          # Switch/toggle component
│   ├── lib                         # Utility functions and libraries
│   │   └── utils.ts                # Generic utility functions
│   ├── middleware.ts               # Middleware for handling authentication, etc.
│   ├── styles                      # Global styles for the project
│   │   ├── blogs.css               # Styles specific to the blog section
│   │   ├── footer.css              # Styles for the footer
│   └── utils
│       └── supabase                # Supabase client and server configurations
│           ├── client.ts           # Initialize and export the Supabase client
│           ├── middleware.ts       # Middleware to handle Supabase session
│           └── server.ts           # Server-side Supabase logic
├── tailwind.config.ts              # Tailwind CSS configuration file
└── tsconfig.json                   # TypeScript configuration file
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.x or above)
- **npm** or **yarn**
- A **Supabase** account

### Installation

1. Clone the repository (new branch):

   ```bash
   git clone -b new https://github.com/yourusername/iiitvcc.git
   cd iiitvcc
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

To run the project, you need to set up environment variables. Create a `.env.local` file in the root directory and add the following:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_STORAGE_URL=<your-storage-url>
NEXT_PUBLIC_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_BUCKET=web_data
```

You can find these variables in your Supabase project settings.

## Running the Project

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The website will be available at `http://localhost:3000`.

To build the project for production:

```bash
npm run build
# or
yarn build
```

## Contribution Guidelines

We welcome contributions from everyone! To contribute:

1. Fork the repository and create your branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes, then commit them:

   ```bash
   git commit -m "Add feature: description of feature"
   ```

3. Push to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a pull request to the main repository.

Before submitting, ensure your code adheres to our coding standards and passes all linting and testing checks.

### Code Linting

We use **Prettier** to maintain code quality. Run the following command to lint your code:

```bash
npm run pretty
```
