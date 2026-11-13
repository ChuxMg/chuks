# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Next.js personal portfolio using React, TypeScript/JavaScript, and Tailwind CSS. Keep routing in `pages/` (Pages Router); do not introduce an `app/` router.

- `pages/`: portfolio, resume, blog, editor, and `api/` endpoints.
- `components/`: portfolio components, generally organized as `ComponentName/index.tsx` or `index.js`.
- `src/components/ui/`: shared UI primitives; `src/lib/`: supporting utilities. The `@/*` alias maps to `src/*`.
- `data/portfolio.json`: portfolio content; `_posts/*.md`: blog content.
- `public/`: images and icons; `styles/`: global and Markdown styles.
- `animations/`, `utils/`, and `types/`: animation helpers, content utilities, and type declarations.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build.
- `npm run start`: serve the production build after building.
- `npm run lint`: invoke the configured `next lint` script. This is a legacy command; check compatibility with the installed Next.js version and report failures.
- `npx tsc --noEmit`: check TypeScript without emitting JavaScript.

## Coding Style & Naming Conventions

Follow nearby code: two-space indentation, double-quoted strings, and semicolons. Prefer functional React components, explicit prop types, and hooks for state. Use PascalCase component names and camelCase variables/functions. TypeScript strict mode is enabled.

Inspect existing `pages/` and `components/` styles before changing UI. Reuse Tailwind utilities, theme CSS variables, and installed icon/animation libraries. ESLint extends `next/core-web-vitals`; no dedicated formatter is configured.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is configured. For code changes, run build and type checks, attempt linting, and record any failures. Manually verify affected routes, mobile/desktop layouts, light/dark themes, and resume printing when relevant. If adding automated tests, document the runner and naming convention in the same change.

## Commit & Pull Request Guidelines

Use the history's prefixes: `feat:`, `fix:`, `refactor:`, or `chore:`, followed by a concise description. Keep changes focused. PRs should explain the change, link relevant issues, list validation results, and include screenshots for visual changes.

## Security & Configuration

Keep secrets in ignored `.env.local` files. Preserve development-only restrictions on content-writing APIs. Do not commit generated `.next/` output or dependencies.


## Agent Skills

### 📂 Automations & Workflows

* **Skill: Component & Page Scaffolding**
  * **Trigger:** When asked to "create a new page", "add a route", or "build a new UI element".
  * **Action:**
    1. Enforce the Pages Router constraint: create routes directly inside `pages/` (e.g., `pages/new-page.tsx`). **Never** create an `app/` directory.
    2. Place structural components inside `components/` using the `ComponentName/index.tsx` structure.
    3. Place generic, reusable primitives inside `src/components/ui/` and reference them using the `@/*` alias.

* **Skill: Portfolio Content Sync**
  * **Trigger:** When editing portfolio items, project cards, or work experience.
  * **Action:** Do not hardcode content into TSX components. Always read from or modify `data/portfolio.json`. Maintain the existing JSON structure and ensure types match definitions in `types/`.

* **Skill: Blog Post Automation**
  * **Trigger:** When generating a new blog post or editing markdown content.
  * **Action:** Generate a `.md` file inside `_posts/`. Ensure it begins with the proper YAML frontmatter (title, date, tags, excerpt) required by the parsing utilities located in `utils/`.

### 🚨 Pre-Flight Verification Checklist

* **Skill: Continuous Quality Guard**
  * **Trigger:** Before considering any code task or implementation "complete".
  * **Action:** Automatically run sequential health checks in the terminal:
    1. Execute `npx tsc --noEmit` to verify type safety.
    2. Execute `npm run build` to ensure the production bundler succeeds.
    3. Run `npm run lint` and explicitly output any legacy compatibility errors if they happen.
