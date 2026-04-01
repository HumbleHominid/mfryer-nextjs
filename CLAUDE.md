# mfryer-nextjs

Michael Fryer's personal portfolio site. Deployed to https://www.mfryer.us via Vercel.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Icons**: @heroicons/react
- **Analytics**: @vercel/analytics
- **Utilities**: clsx for conditional classnames

## Project Structure

```
app/
  layout.tsx          # Root layout: navbar + content slot + footer, grid-rows-layout
  page.tsx            # Home page (server component)
  about/page.tsx      # About page (server component)
  portfolio/page.tsx  # Portfolio: fetches GitHub repos with 7-day ISR cache
  globals.css         # CSS variables, blob animations, base styles
  lib/
    ref-links.ts      # All external URLs and contact info as constants
    hooks/
      use-client-media-query.ts  # SSR-safe media query hook
  ui/
    fonts.ts          # Google Fonts (Inter)
    slide-in-item.tsx # Scroll-triggered reveal animation (client)
    navbar/           # Collapsible nav with overlay expansion animation
    footer/           # Footer with icon links
    home/title.tsx    # Mouse-tracking skew/rotation effect (client)
    video/            # YouTube embed with Suspense skeleton
    portfolio/        # GitHub repo card display
public/
  cv.pdf              # Served at /cv (redirected in next.config.ts)
  icons/              # SVG/PNG social icons
```

## Commands

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
npm run format   # Prettier (with Tailwind class sorting)
```

## Key Config

- `next.config.ts`: Redirects `/cv` → external PDF link from `lib/ref-links.ts`
- `tailwind.config.ts`: Custom `grid-rows-layout`, letter-spacing, transition durations
- `tsconfig.json`: Path alias `@/*` → project root
- `.prettierrc`: Uses prettier-plugin-tailwindcss; sorts classes against `app/globals.css`

## Additional Documentation

- [Architectural Patterns](.claude/docs/architectural_patterns.md) — server/client split, data fetching, animation conventions, type exports
