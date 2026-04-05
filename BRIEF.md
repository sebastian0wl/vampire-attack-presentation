# Vampire Attack GTM System -- Brief

## What Is This?

An interactive presentation/dashboard that showcases a **repeatable competitive displacement system** built for Minerva BI. It documents the complete methodology, outputs, and learnings from running the system against CrustData as the first target competitor.

The name "vampire attack" comes from DeFi -- it means intercepting a competitor's users by offering strictly better value. Here, Minerva targets competitors' LinkedIn followers and customers with coordinated outbound + inbound campaigns.

---

## Who Is This For?

- **The Minerva team** -- as a reference for running future competitor campaigns
- **Stakeholders/investors** -- to demonstrate the GTM engine's sophistication and repeatability
- **Anyone forking the system** -- it's designed to be reusable for any B2B/B2B2C company

---

## What Does the Dashboard Show?

A 7-tab interactive UI built in Next.js:

1. **Overview** -- High-level stats, what the system does, how it works
2. **Pipeline** -- The 7 phases with expandable details, artifacts, and human approval gates
3. **All Files** -- Browse every artifact produced (32 files across brand config, research, battlecards, content, sequences, sales enablement, launch config, and new skills)
4. **Sequences** -- The outbound email/LinkedIn sequences and inbound nurture drip, with full copy visible
5. **Skills** -- Which Claude Code marketing skills were used and which new ones were created
6. **Learnings** -- Critical positioning corrections and decisions made during the build
7. **Future** -- System improvements and the 1-to-1 personalization evolution roadmap

---

## How the System Works (Non-Technical)

**The idea:** Every competitor has a customer base, a LinkedIn following, and public reviews. This system turns those into qualified prospect lists, then runs coordinated campaigns to displace the competitor.

**The process (per competitor):**

1. **Research** the competitor deeply -- products, pricing, weaknesses, customer logos, compliance gaps
2. **Lock positioning** -- build a sales battlecard and rank attack angles by audience awareness stage
3. **Build lists** from the competitor's followers + adjacent prospects, enriched with Minerva's 2,168+ fields per person
4. **Create content** -- comparison blog (SEO), landing page, social posts, lead magnet (bake-off evaluation kit)
5. **Write sequences** -- outbound emails + LinkedIn in the founder's voice, plus a 7-email inbound nurture drip
6. **Arm the team** -- discovery script, demo guide, follow-up templates
7. **Launch** with a hypothesis card, tracking, and a Day 7 checkpoint to decide: scale, iterate, or kill

**Human approval gates** between every phase ensure quality and accuracy.

**Dual-track approach:** Outbound (push) and inbound (pull) run in parallel after Phase 2. Even outbound "nos" become inbound leads through content and lead magnets.

---

## How to Upkeep / Make Changes

### Day-to-day: Adding a new competitor campaign

No code changes required for the actual campaign work -- that happens in Claude Code using the master prompt + brand files. To update the **dashboard** with a new campaign:

1. Add the new campaign's artifact `.md` files to `public/files/`
2. Update `lib/data.ts` with the new campaign data
3. Push to GitHub -- Vercel auto-deploys

### Updating brand positioning or messaging

Edit files in `public/files/brand/`. If display previews in the dashboard need updating, also update the `preview` strings in `lib/data.ts`.

### Modifying the dashboard UI

Everything is in `app/page.tsx` (single-page app). The data model in `lib/data.ts` drives the UI -- in most cases you only need to update the data file, not the UI code.

### Adding new skills

1. Add the skill `.md` file to `public/files/skills/`
2. Add it to `newSkillsCreated` and `allFiles` in `lib/data.ts`

### Deployment

- **Vercel** auto-deploys on push to `main`
- No env vars, no database, no runtime API calls
- All data is static (in `lib/data.ts` and `public/files/`)

---

## Key Design Decisions

1. **Config-driven**: The 5 brand files (`public/files/brand/`) are the only things you swap to run this for a different company. Everything downstream adapts.

2. **Awareness-stage positioning**: Outbound leads with what the audience already cares about (B2B data quality). Consumer data differentiation is the close, not the open. This was the single most important correction during the build.

3. **Tiered personalization**: Tier 1 (12 targets) gets manual 1-to-1. Tier 2 (89) gets segment templates. Tier 3 (292) gets abbreviated email-only. Future: LLM-generated 1-to-1 for all tiers using enrichment data.

4. **Expansion loop**: Wave 1 (competitor followers, ~300 reachable) validates personas and angles. Wave 2 (5,000-10,000 via Person Search API) scales what worked. Wave 3 (25,000+ full TAM) adds paid + organic.

5. **Lead magnet = trial mechanism**: For displacement campaigns, free API credits + evaluation framework beats interactive tools. The goal is getting prospects to TEST, not educate.

---

## What's NOT in This Repo

- Actual prospect CSVs / PII (excluded for privacy)
- The master prompt that drives the Claude Code pipeline (lives separately)
- LaGrowthMachine campaign configs
- Clay enrichment workflows
- Minerva API keys or credentials
