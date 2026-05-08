# Graph Report - app  (2026-05-08)

## Corpus Check
- Corpus is ~5,720 words - fits in a single context window. You may not need a graph.

## Summary
- 63 nodes · 74 edges · 9 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `estimateHeight()` - 2 edges
2. `splitColumns()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Home Page & Info Slides"
Cohesion: 0.2
Nodes (2): estimateHeight(), splitColumns()

### Community 1 - "Navbar Controls"
Cohesion: 0.18
Nodes (0): 

### Community 2 - "CV PDF & Social Icons"
Cohesion: 0.22
Nodes (0): 

### Community 3 - "CV Modal & Viewer"
Cohesion: 0.29
Nodes (0): 

### Community 4 - "Title & Media Query Hook"
Cohesion: 0.29
Nodes (0): 

### Community 5 - "Portfolio Section"
Cohesion: 0.33
Nodes (0): 

### Community 6 - "Footer & Layout"
Cohesion: 0.33
Nodes (0): 

### Community 7 - "Logo Component"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Video Component"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Logo Component`** (2 nodes): `MFLogo.tsx`, `MFLogo()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Video Component`** (2 nodes): `VideoComponent.tsx`, `VideoComponent()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._