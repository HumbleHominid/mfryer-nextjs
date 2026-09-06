# Graph Report - mfryer-nextjs  (2026-09-06)

## Corpus Check
- 39 files · ~8,775 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 128 nodes · 226 edges · 10 communities
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e2d9637a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- nav-socials.tsx
- NeuralNetwork
- navbar.tsx
- portfolio/page.tsx
- cv-pdf-renderer.tsx
- ref-links.ts
- separability-plots.tsx
- footer.tsx

## God Nodes (most connected - your core abstractions)
1. `useCvModal()` - 10 edges
2. `NeuralNetwork` - 8 edges
3. `useHoverEffect()` - 7 edges
4. `useClientMediaQuery()` - 5 edges
5. `useEscapeKey()` - 5 edges
6. `Email` - 5 edges
7. `CvModal()` - 5 edges
8. `GitHub` - 4 edges
9. `Navbar()` - 4 edges
10. `NeuralNetDemo()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --calls--> `useCvModal()`  [EXTRACTED]
  app/ui/footer/footer.tsx → app/lib/hooks/use-cv-modal.ts
- `useCvModal()` --calls--> `useClientMediaQuery()`  [EXTRACTED]
  app/lib/hooks/use-cv-modal.ts → app/lib/hooks/use-client-media-query.ts
- `Title()` --calls--> `useClientMediaQuery()`  [EXTRACTED]
  app/ui/home/title.tsx → app/lib/hooks/use-client-media-query.ts
- `CvLink()` --calls--> `useCvModal()`  [EXTRACTED]
  app/ui/cv/cv-link.tsx → app/lib/hooks/use-cv-modal.ts
- `NavSocials()` --calls--> `useCvModal()`  [EXTRACTED]
  app/ui/navbar/nav-socials.tsx → app/lib/hooks/use-cv-modal.ts

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "nav-socials.tsx"
Cohesion: 0.16
Nodes (10): useClientMediaQuery(), useCvModal(), Bluesky, LinkedIn, CvLink(), Title(), NavSocial(), NavSocialWrapper() (+2 more)

### Community 1 - "NeuralNetwork"
Cohesion: 0.22
Nodes (9): NeuralNetwork, randNormal(), sigmoid(), sigmoidPrime(), buildNetwork(), Gate, GATE_DATA, lossToY() (+1 more)

### Community 2 - "navbar.tsx"
Cohesion: 0.23
Nodes (7): useHoverEffect(), NavBadge(), NavExpansionWidget(), NavLink(), NavLinkData, NavMail(), routeLinks

### Community 3 - "portfolio/page.tsx"
Cohesion: 0.23
Nodes (11): favoriteRepos, getRepos, GitHubRepo, Repo, estimateHeight(), metadata, Page(), splitColumns() (+3 more)

### Community 4 - "cv-pdf-renderer.tsx"
Cohesion: 0.29
Nodes (6): CV_EMBED, CvPdfRenderer(), readBgColor(), subscribeNever(), CvPdfRenderer, CvViewer()

### Community 5 - "ref-links.ts"
Cohesion: 0.14
Nodes (13): alternateFloat(), metadata, Page(), revalidate, CV_PDF, Email, GitHub, YouTube (+5 more)

### Community 6 - "separability-plots.tsx"
Cohesion: 0.27
Nodes (7): metadata, GatePlot, GatePlotSvg(), GATES, SeparabilityPlots(), toSvgX(), toSvgY()

### Community 9 - "footer.tsx"
Cohesion: 0.18
Nodes (8): metadata, useEscapeKey(), CV, CvModal(), inter, Footer(), FooterLink(), Navbar()

## Knowledge Gaps
- **14 isolated node(s):** `metadata`, `revalidate`, `metadata`, `GitHubRepo`, `favoriteRepos` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 29 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SlideInItem()` connect `ref-links.ts` to `portfolio/page.tsx`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Why does `Email` connect `ref-links.ts` to `nav-socials.tsx`, `footer.tsx`, `navbar.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `useCvModal()` connect `nav-socials.tsx` to `footer.tsx`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useCvModal()` (e.g. with `close()` and `open()`) actually correct?**
  _`useCvModal()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `useHoverEffect()` (e.g. with `onMouseEnter()` and `onMouseLeave()`) actually correct?**
  _`useHoverEffect()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `metadata`, `revalidate`, `metadata` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ref-links.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1422924901185771 - nodes in this community are weakly interconnected._