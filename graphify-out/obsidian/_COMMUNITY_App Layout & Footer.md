---
type: community
cohesion: 0.33
members: 6
---

# App Layout & Footer

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[FooterLink()]] - code - app/ui/footer/footer-link.tsx
- [[RootLayout()]] - code - app/layout.tsx
- [[fonts.ts]] - code - app/ui/fonts.ts
- [[footer-link.tsx]] - code - app/ui/footer/footer-link.tsx
- [[footer.tsx]] - code - app/ui/footer/footer.tsx
- [[layout.tsx]] - code - app/layout.tsx

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/App_Layout_&_Footer
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Navigation Components]]
- 1 edge to [[_COMMUNITY_CV PDF & API Route]]
- 1 edge to [[_COMMUNITY_CV Modal Viewer]]
- 1 edge to [[_COMMUNITY_Title & CV Link]]

## Top bridge nodes
- [[footer.tsx]] - degree 5, connects to 3 communities
- [[layout.tsx]] - degree 4, connects to 1 community