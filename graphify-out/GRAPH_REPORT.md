# Graph Report - mfryer-nextjs  (2026-05-08)

## Corpus Check
- 39 files · ~8,651 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 175 nodes · 232 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `54e7592f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `useCvModal()` - 8 edges
2. `NeuralNetwork` - 7 edges
3. `useEscapeKey()` - 5 edges
4. `useClientMediaQuery()` - 5 edges
5. `useHoverEffect()` - 5 edges
6. `PortfolioItem()` - 3 edges
7. `Repo` - 3 edges
8. `getRepos` - 3 edges
9. `sigmoid()` - 3 edges
10. `sigmoidPrime()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Title()` --calls--> `useClientMediaQuery()`  [EXTRACTED]
  ui/home/title.tsx → lib/hooks/use-client-media-query.ts
- `Navbar()` --calls--> `useEscapeKey()`  [EXTRACTED]
  ui/navbar/navbar.tsx → lib/hooks/use-escape-key.ts
- `NavBadge()` --calls--> `useHoverEffect()`  [EXTRACTED]
  ui/navbar/nav-badge.tsx → lib/hooks/use-hover-effect.ts
- `NavMail()` --calls--> `useHoverEffect()`  [EXTRACTED]
  ui/navbar/nav-mail.tsx → lib/hooks/use-hover-effect.ts
- `NavSocials()` --calls--> `useCvModal()`  [EXTRACTED]
  ui/navbar/nav-socials.tsx → lib/hooks/use-cv-modal.ts

## Communities (14 total, 2 thin omitted)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (6): CvModal(), useEscapeKey(), NavLinkData, socials, Navbar(), routeLinks

### Community 3 - "Community 3"
Cohesion: 0.19
Nodes (7): NeuralNetwork, sigmoid(), sigmoidPrime(), buildNetwork(), Gate, GATE_DATA, NeuralNetDemo()

### Community 4 - "Community 4"
Cohesion: 0.16
Nodes (4): CvPdfRenderer, useHoverEffect(), NavBadge(), NavMail()

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (4): alternateFloat(), metadata, Page(), SIDE_CLASSES

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (11): favoriteRepos, getRepos, GitHubRepo, Repo, estimateHeight(), metadata, Page(), splitColumns() (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.26
Nodes (6): CvLink(), Footer(), Title(), useClientMediaQuery(), useCvModal(), NavSocials()

### Community 8 - "Community 8"
Cohesion: 0.2
Nodes (3): metadata, GatePlot, GATES

## Knowledge Gaps
- **14 isolated node(s):** `metadata`, `SIDE_CLASSES`, `routeLinks`, `socials`, `Gate` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useCvModal()` connect `Community 7` to `Community 2`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `metadata`, `SIDE_CLASSES`, `routeLinks` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._