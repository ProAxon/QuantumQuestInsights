## Aurexa Next.js Frontend

This repo contains the Quantum Quest Insights marketing site rebuilt with Next.js (App Router) and Tailwind. It mirrors the previous CRA experience but now supports server-side data fetching with a live Notion-powered blog feed.

### Prerequisites

- Node.js 18.18+ (Next.js 16 requirement)
- NOTION_TOKEN and NOTION_DATABASE_ID env vars (same ones used in the earlier Notion blog project)

### Local Development

```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Environment Variables

Create `.env.local` (or `.env`) in the project root:

```
NOTION_TOKEN=your_integration_token
NOTION_DATABASE_ID=your_database_id
```

The homepage and `/blog` route both call the Notion API on the server, so no manual JSON syncing is required.

### Structure Highlights

- `src/app` – App Router routes (`/`, `/blog`, `/services`, etc.)
- `src/components` – Shared UI (Navigation, Footer, feature sections, ResearchStep template)
- `src/lib/notion.ts` – Server-side fetching + markdown normalization
- `src/data/researchSteps.js` – Content for the six-step research methodology flow

### Deploy

Any platform that supports Next.js (Vercel, Netlify, Render, etc.) will work. Ensure the Notion env vars are configured in your host’s dashboard before deploying.
