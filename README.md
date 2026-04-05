# Vampire Attack GTM System

A repeatable competitive displacement machine that systematically attacks competitor customer bases through coordinated inbound + outbound campaigns. Built for [Minerva BI](https://minerva.io).

The name borrows from DeFi: a **vampire attack** intercepts a competitor's users by offering strictly better value on the dimensions they care about. This system treats competitors as **lead sources** -- every competitor's customer list, review page, SEO footprint, and social proof becomes an acquisition channel.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

Deployed on **Vercel** -- pushes to `main` auto-deploy.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Markdown rendering | react-markdown + remark-gfm |
| Animation | Framer Motion |
| Deployment | Vercel |

---

## Project Structure

```
vampire-attack-presentation/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   └── page.tsx            # Main dashboard (7-tab interactive UI)
├── components/
│   └── FileViewer.tsx      # Slide-out markdown file viewer
├── lib/
│   └── data.ts             # All system data: phases, skills, artifacts, sequences, stats
├── public/
│   └── files/              # All campaign artifacts (viewable in the UI)
│       ├── brand/          # 5 config files (swap these to fork for another company)
│       ├── phase-1-research/
│       ├── phase-2-battlecard/
│       ├── phase-3b-content/
│       ├── phase-3c-lead-magnet/
│       ├── phase-4a-sequences/
│       ├── phase-4b-nurture/
│       ├── phase-5-sales-enablement/
│       ├── phase-6-launch/
│       ├── skills/         # 5 new skills created during the build
│       └── system/         # Architecture overview doc
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## Architecture: Three-Layer Separation

| Layer | Purpose | When it changes |
|-------|---------|-----------------|
| **System** (engine) | Master prompt, pipeline logic, dashboard UI | When you improve the process |
| **Brand** (config) | `public/files/brand/` -- positioning, audience, competitors, voice | When you fork for a new company |
| **Campaigns** (output) | `public/files/phase-*/` -- per-competitor research, copy, lists | When you attack a new competitor |

The system is **config-driven and forkable**: swap the 5 brand files and the entire pipeline adapts.

---

## The 7-Phase Pipeline

| # | Phase | Time | Outputs | Gate |
|---|-------|------|---------|------|
| 0 | Foundation Setup | 15 min | 5 brand config files, exclusion lists | -- |
| 1 | Competitor Deep Research | 30 min | Research brief, logo analysis, positioning map | Gate 2: Approve research |
| 2 | Positioning & Battlecard | 20 min | Battlecard, one-pager, ranked angles | Gate 3: Lock messaging |
| 3 | Lists + Content + Lead Magnet | 30 min | 3 CSVs, blog, landing page, social posts, bake-off kit | Gates 4A/4B/4C |
| 4 | Outbound + Nurture Sequences | 30 min | 4-email + LinkedIn outbound, 7-email nurture | Gates 5A/5B |
| 5 | Sales Enablement | 20 min | Discovery script, demo guide, follow-up templates | Gate 6: GO/NO-GO |
| 6 | Launch Configuration | 10 min | Hypothesis card, tracking, expansion loop | -- |

**Total: ~4 hours (first competitor) | ~3 hours (subsequent)**

Phases 3A+3B and 4A+4B run in **parallel**. Human approval gates between each phase.

---

## Skills Used (from ~/Documents/.agents/skills/)

10 of 42+ available marketing skills are chained across phases:

| Skill | Phases | Purpose |
|-------|--------|---------|
| `research-agent` | 1 | Web research, competitor profiling |
| `positioning-angles` | 1, 2 | Generate ranked attack angles |
| `direct-response-copy` | 2, 3B, 4A, 5 | Conversion copy |
| `humanize-ai` | 2, 3B, 4A, 4B | Strip AI writing patterns |
| `seo-content` | 3B | SEO blog structure |
| `content-atomizer` | 3B | Blog to social posts |
| `lead-magnet` | 3C | Evaluation framework design |
| `email-sequences` | 4B | Inbound nurture drips |
| `stakeholder-message-crafter` | 5 | Discovery scripts, demo guides |
| `brand-voice` | All | Two voices: Daniel (outbound), Jackson (inbound) |

5 new skills were created during the build: `outbound-voice`, `competitive-displacement`, `tiered-personalization`, `sales-discovery`, `bake-off-design` (see `public/files/skills/`).

---

## Execution Stack (External Tools)

| Tool | Role |
|------|------|
| **Minerva CLI** | Enrichment pipeline: linkedin contact-info -> resolve -> enrich |
| **Clay** | CRM enrichment with Minerva API integration |
| **LaGrowthMachine** | Multi-channel sequence execution (LinkedIn + Email) |
| **Vibe Prospecting MCP** | Prospect list building from LinkedIn followers |
| **Claude Code** | Agent that runs the pipeline, chains skills |

---

## Key Files to Know

| File | What it does |
|------|-------------|
| `app/page.tsx` | The entire interactive dashboard UI (~900 lines) |
| `lib/data.ts` | All structured data: phases, artifacts, sequences, stats, learnings |
| `components/FileViewer.tsx` | Drawer component that renders markdown files from `/public/files/` |
| `public/files/brand/*.md` | The 5 config files -- swap these to fork the system |
| `public/files/system/system-architecture-overview.md` | Deep system documentation |

---

## How to Fork for Another Company

1. Replace the 5 files in `public/files/brand/` (positioning, audience, competitors, voice, differentiation)
2. Update `lib/data.ts` with new phase data, artifacts, and stats
3. Run the pipeline phases in Claude Code with brand files loaded
4. Campaign outputs go into new `public/files/phase-*/` directories

---

## How to Make Changes

### Adding a new campaign (new competitor)

1. Create new artifact files in `public/files/phase-*/` for the competitor
2. Update `lib/data.ts`: add entries to the `phases` array artifacts, update `allFiles` registry, update `stats`
3. The dashboard UI reads from `data.ts` -- no UI changes needed for new campaigns

### Modifying the dashboard UI

All UI is in `app/page.tsx`. It's a single-page app with 7 tabs:
- **Overview**: Stats grid + system architecture summary
- **Pipeline**: Phase-by-phase expandable cards with artifacts and gates
- **All Files**: Browse all campaign artifacts by category
- **Sequences**: Outbound email/LinkedIn + inbound nurture flows
- **Skills**: Skills used and new skills created
- **Learnings**: Key decisions and corrections from the build
- **Future**: System improvements and 1-to-1 personalization roadmap

### Adding new skills

1. Create the skill `.md` file in `public/files/skills/`
2. Add it to `newSkillsCreated` array in `lib/data.ts`
3. Add it to the `allFiles` registry under "Skills" category

### Updating brand positioning

1. Edit the relevant file in `public/files/brand/`
2. If the change affects displayed previews, update the `preview` strings in `lib/data.ts` phase artifacts

---

## Deployment

The app is deployed on **Vercel** via the `sebastian0wl/vampire-attack-presentation` GitHub repo.

- Push to `main` triggers auto-deploy
- No environment variables needed -- it's a static presentation app
- No database, no API calls at runtime -- all data is in `lib/data.ts` and `public/files/`

---

## CrustData Campaign (Live Example)

The first full campaign run targeting CrustData displacement. All 7 phases complete. Key stats:

- **393 prospects** across 3 tiers (12 Tier 1, 89 Tier 2, 292 Tier 3)
- **26+ artifacts** produced
- **2,168+ fields** per enriched person
- **70-80% match rates**
- **733M emails, 899M phones, 270M+ addresses** in contact graph

See `public/files/system/system-architecture-overview.md` for the complete architecture deep-dive, learnings log, and expansion loop strategy.
