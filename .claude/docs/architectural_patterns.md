# Architectural Patterns

## Server vs. Client Components

Default to server components. Add `"use client"` only when the component needs browser APIs, event handlers, or React state.

**Server components** (no directive): `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/portfolio/page.tsx`

**Client components** (`"use client"`): `app/ui/navbar/navbar.tsx:1`, `app/ui/slide-in-item.tsx:1`, `app/ui/home/title.tsx:1`, `app/ui/navbar/nav-badge.tsx:1`, `app/ui/navbar/nav-mail.tsx:1`, `app/lib/hooks/use-client-media-query.ts:1`

## Data Fetching

Async server components fetch data directly — no SWR or React Query.

Portfolio page (`app/portfolio/page.tsx:17-51`) is the only dynamic data source:
- Fetches GitHub API for public repos
- Filters private repos, sorts by pinned then `pushed_at`
- Wrapped in `unstable_cache()` with a 7-day revalidation period

## External Links / Constants

All URLs and contact info live in `app/lib/ref-links.ts`. Always reference this file when adding or updating links — do not hardcode URLs in components.

## Metadata / SEO

Each page exports a `metadata` object using the Next.js Metadata API (`app/layout.tsx:8-58`). The root layout defines a title template (`%s | mfryer.us`) and full OpenGraph/Twitter card config. Page-level metadata only needs to override `title` and `description`.

## State Management

No external state library. All state is local `useState` / `useRef` hooks. The only shared hook is `useClientMediaQuery` (`app/lib/hooks/use-client-media-query.ts`) for SSR-safe `window.matchMedia` access.

## Animation Conventions

Three recurring patterns:

1. **Scroll reveal** (`app/ui/slide-in-item.tsx`): Scroll listener toggles Tailwind translate/opacity classes. Threshold: element top < 95% viewport height.

2. **Mouse tracking** (`app/ui/home/title.tsx:13-66`): `mousemove` on a ref calculates offset from element center, applies CSS skew/rotation. Disabled on mobile via `useClientMediaQuery`.

3. **Navbar overlay** (`app/ui/navbar/navbar.tsx`): Full-screen blue overlay expands on open (`duration-1000`), nav links fade in with staggered `transitionDelay` set inline. Collapsing uses a 1000ms `setTimeout` before hiding the sub-nav.

## Conditional Classnames

Use `clsx(...)` for any conditional class application. Do not use template literals for conditional classes — the Prettier/Tailwind plugin requires `clsx` calls to sort classes correctly (configured in `.prettierrc` with `tailwindFunctions: ["clsx"]`).

## Type Exports

Types are co-located with the component that owns them and exported for consumers:
- `Repo` — `app/ui/portfolio/portfolio-items.tsx:4`
- `NavLinkData` — `app/ui/navbar/nav-link.tsx:5`

## Images

Always use `next/image`. The profile image on the home page uses `priority` for eager loading (`app/page.tsx:27-33`); all other images use default lazy loading.

## Video

YouTube embeds use a Suspense boundary with `VideoSkeleton` as fallback (`app/ui/video/ArcadiaVideo.tsx`). The iframe is isolated in `VideoComponent` to keep embed logic generic and reusable.
