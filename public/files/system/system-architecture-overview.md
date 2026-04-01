# VAMPIRE ATTACK GTM SYSTEM -- Architecture Overview

**Built for Minerva BI | Designed as a reusable playbook for any B2B/B2B2C company**
**Version 1.0 | April 2026**

---

## 1. WHAT IS THE VAMPIRE ATTACK GTM SYSTEM?

**A repeatable competitive displacement machine** that systematically attacks competitor customer bases through coordinated inbound + outbound campaigns.

The name borrows from DeFi: a **vampire attack** intercepts a competitor's users by offering strictly better value on the dimensions they care about. In DeFi, SushiSwap vampire-attacked Uniswap by offering the same AMM plus token rewards. Here, Minerva vampire-attacks data enrichment competitors by offering 24x more data fields, 3-4x higher match rates, and a full demand generation platform where competitors offer raw APIs or narrow datasets.

**The core insight:** Most GTM systems treat competitors as context. This system treats them as *lead sources*. Every competitor's customer list, review page, SEO footprint, and social proof becomes an acquisition channel.

**Built for Minerva BI** (minerva.io) -- a B2B2C consumer data and demand generation platform with a 270M+ American identity graph, 2,168+ fields per person, and 70-80% match rates. But the system is **config-driven and forkable**: swap the brand files and run it for any company.

---

## 2. SYSTEM ARCHITECTURE

### Folder Structure

```
VAMPIRE ATTACK GTM SYSTEM/
|
|-- Vampire attack/              # THE ENGINE (system docs + master prompt)
|   |-- vampire-attack-gtm-prompt.md    # Master prompt -- paste to start a run
|   +-- vampire-attack-project-plan.md  # Build sequence, gates, skill map
|
|-- brand/                       # COMPANY CONFIG (swap these to fork)
|   |-- positioning.md           # Core positioning + proof points
|   |-- audience.md              # ICP definitions (3 audiences)
|   |-- competitors.md           # Competitor profiles + attack angles
|   |-- voice-profile.md         # Founder voice for outbound copy
|   +-- differentiation-cheatsheet.md   # Quick-reference comparison data
|
|-- campaigns/                   # PER-COMPETITOR RUNS (outputs go here)
|   |-- crustdata/               # Campaign 1 (in progress)
|   |   |-- phase-1-research/
|   |   |-- phase-2-battlecard/
|   |   |-- phase-3a-lists/
|   |   |-- phase-3b-content/
|   |   |-- phase-4a-sequences/
|   |   |-- phase-4b-nurture/
|   |   |-- phase-5-enablement/
|   |   +-- phase-6-launch/
|   +-- windfall/                # Campaign 2 (queued)
|
|-- system/                      # REUSABLE INFRASTRUCTURE
|   |-- dashboard/index.html     # Visual campaign tracking UI
|   +-- templates/               # Reusable templates for future runs
|
+-- differentiation-cheatsheet.md  # Head-to-head comparison snapshot
```

### Three-Layer Separation

| Layer | Purpose | Changes When... |
|-------|---------|-----------------|
| **System** (engine) | Master prompt, project plan, dashboard, templates | You improve the process |
| **Brand** (config) | Positioning, audience, competitors, voice | You fork for a new company |
| **Campaigns** (output) | Per-competitor research, copy, lists, content | You attack a new competitor |

### How Skills/Agents Chain Together

```
                    MASTER PROMPT
                         |
          +--------------+--------------+
          |                             |
     BRAND FILES                  SKILL LIBRARY
  (positioning, audience,      (42 marketing skills
   competitors, voice)          at ~/Documents/.agents/skills/)
          |                             |
          +----------+------------------+
                     |
              PHASE EXECUTOR
              (Claude agent runs phases sequentially,
               stops at gates for human approval)
                     |
          +----------+----------+
          |                     |
    OUTBOUND TRACK        INBOUND TRACK
    (Phases 3A, 4A)       (Phases 3B, 4B)
    run in parallel        run in parallel
          |                     |
          +----------+----------+
                     |
              CAMPAIGN OUTPUT
         (campaigns/[competitor]/)
```

---

## 3. THE 7-PHASE PIPELINE

| # | Phase | Time | What It Does | Key Inputs | Key Outputs | Skills Used | Gate |
|---|-------|------|-------------|------------|-------------|-------------|------|
| 0 | **Foundation Setup** | 15 min | Create brand files, exclusion lists (competitor's investors, employees, former employees), verify tool access | Company knowledge | `brand/` directory, exclusion CSV | Manual | -- |
| 1 | **Competitor Deep Research** | 30 min | Profile competitor: positioning, products, pricing, weaknesses, customer logos | Competitor URL, G2/Capterra reviews | Research brief, logo list, positioning map | research-agent, positioning-angles | GATE 2: Approve angles |
| 2 | **Positioning + Battlecard** | 20 min | Lock attack angles, build battlecard + one-pager | Phase 1 research | Battlecard, one-pager, positioning angles | positioning-angles, direct-response-copy, humanize-ai | GATE 3: Lock messaging |
| 3A | **Target Account Lists** | 20 min | Build 3 prospect lists (competitor customers, adjacents, ICP-intent) | Competitor logos, ICP criteria | 3 CSVs + list summary | Vibe Prospecting MCP | GATE 4A: Approve lists |
| 3B | **Inbound Content** | 30 min | Create comparison blog, landing page, social posts | Approved angles | Blog, landing page, LinkedIn/Twitter posts | seo-content, direct-response-copy, content-atomizer, humanize-ai | GATE 4B: Approve content |
| 3C | **Lead Magnet + Trial Offer** | 20 min | Design lead magnet that drives bake-off requests. Structure: free API credits + trial period + vendor evaluation guide (PDF/spreadsheet). The eval guide should frame criteria so the offering company wins on key dimensions while still being fair enough that prospects trust it. | Approved angles, competitive data | Lead magnet (eval guide PDF/spreadsheet), trial offer terms, landing page CTA copy | lead-magnet, direct-response-copy, humanize-ai | GATE 4C: Approve lead magnet |
| 4A | **Outbound Sequences** | 30 min | Write 3 multi-channel sequences for LaGrowthMachine | Approved angles + lists | 3 sequences (6 touches each) + LGM setup guide | direct-response-copy, humanize-ai | GATE 5A: Daniel voice check |
| 4B | **Nurture Sequences** | 20 min | Write 7-email inbound nurture triggered by lead magnet download | Lead magnet + angles | Nurture sequence (7 emails) | email-sequences, humanize-ai | GATE 5B: Approve drip |
| 5 | **Sales Enablement** | 20 min | Discovery script, demo guide, follow-up templates, social proof | All prior phases | 4 enablement docs | stakeholder-message-crafter, direct-response-copy | GATE 6: Full GO/NO-GO |
| 6 | **Hypothesis + Launch** | 10 min | Write hypothesis card, set up tracking, activate everything | All deliverables | Hypothesis card, tracking template | Manual | -- |
| 7 | **Measure + Iterate** | Ongoing | Day 7 checkpoint, analyze, scale/iterate/kill | Live campaign data | Iteration plan | Manual | GATE 7: Day 7 decision |

**Total per competitor: ~4 hours (first run) | ~3 hours (subsequent runs)**

---

## 4. PARALLELIZATION STRATEGY

### Dependency Graph

```
Phase 0 (setup, one-time)
    |
Phase 1 (research) -------- sequential, everything depends on this
    |
  GATE 2
    |
Phase 2 (battlecard) ------- sequential, angles must be locked
    |
  GATE 3
    |
    +------ Phase 3A (lists) --------+------ PARALLEL
    |                                |
    +------ Phase 3B (content) ------+------ PARALLEL
    |
  GATE 4A + 4B
    |
    +------ Phase 4A (sequences) ----+------ PARALLEL
    |                                |
    +------ Phase 4B (nurture) ------+------ PARALLEL
    |
  GATE 5A + 5B
    |
Phase 5 (enablement) ------- sequential
    |
  GATE 6
    |
Phase 6 (launch) ----------- sequential
    |
Phase 7 (measure) ---------- ongoing
```

### Time Savings From Parallelization

| Without Parallelization | With Parallelization | Savings |
|------------------------|---------------------|---------|
| Phase 3A (20 min) + Phase 3B (30 min) = 50 min | Max(20, 30) = 30 min | 20 min |
| Phase 4A (30 min) + Phase 4B (20 min) = 50 min | Max(30, 20) = 30 min | 20 min |
| **Total: ~5 hours** | **Total: ~4 hours** | **~40 min saved** |

---

## 5. THE DUAL-TRACK APPROACH

```
    OUTBOUND TRACK                           INBOUND TRACK
    (push to prospects)                      (pull prospects to us)
    ==================                       ====================

    Phase 1: Research  <---- shared ---->    Phase 1: Research
    Phase 2: Battlecard <---- shared ---->   Phase 2: Angles
         |                                        |
    Phase 3A: Lists                          Phase 3B: Content
    - List A: competitor customers           - Lead magnet
    - List B: competitor adjacents           - Comparison blog (SEO)
    - List C: ICP + intent                   - Landing page
         |                                   - LinkedIn/Twitter posts
    Phase 4A: Sequences                           |
    - Seq A: displacement                    Phase 4B: Nurture
    - Seq B: cold ICP                        - 7-email drip
    - Seq C: trigger-based                   - Segmented by use case
         |                                        |
    LaGrowthMachine                          Lead Magnet Download
    (LinkedIn + Email,                       (gated content captures
     6 touches over 14 days)                  email, triggers nurture)
         |                                        |
         +------ CONVERGENCE POINT ------+
                        |
                   DEMO BOOKED
                        |
              Phase 5: Enablement
              (discovery script, demo guide,
               follow-up templates)
```

**How the tracks converge:** Outbound sequences include **soft CTA variants** that drive prospects to the lead magnet instead of a demo. When a prospect downloads the magnet, they enter the inbound nurture sequence. The nurture warms them over 14-25 days toward a demo booking. This means even "cold no" outbound touches become inbound leads if the content is compelling enough.

---

## 6. DELIVERABLES PER COMPETITOR

### Complete Asset Inventory (per campaign run)

| Phase | Deliverable | Format |
|-------|------------|--------|
| 1 | Competitor research brief | Markdown |
| 1 | Customer logo extraction | CSV |
| 1 | Positioning map + whitespace analysis | Markdown |
| 2 | Sales battlecard (2 pages) | Markdown/PDF |
| 2 | Comparison one-pager | Markdown/PDF |
| 2 | Positioning angles (ranked) | Markdown |
| 3A | List A -- competitor's customers | CSV |
| 3A | List B -- competitor adjacents | CSV |
| 3A | List C -- ICP + intent matched | CSV |
| 3A | List summary (counts, title breakdown) | Markdown |
| 3B | Lead magnet concept + content | Markdown/Interactive |
| 3B | Comparison blog post (SEO) | Markdown |
| 3B | Comparison landing page copy | Markdown |
| 3B | LinkedIn posts (3) + Twitter variants (3) | Markdown |
| 3B | Keyword research + 90-day content calendar | Markdown |
| 4A | Sequence A -- competitive displacement | Markdown |
| 4A | Sequence B -- cold ICP | Markdown |
| 4A | Sequence C -- trigger-based | Markdown |
| 4A | LaGrowthMachine setup guide | Markdown |
| 4B | Inbound nurture sequence (7 emails) | Markdown |
| 5 | Discovery call script (10 questions) | Markdown |
| 5 | Demo talking points (3 key moments) | Markdown |
| 5 | Post-demo follow-up templates (3 variants) | Markdown |
| 5 | Social proof assets | Markdown |
| 6 | Campaign hypothesis card | Markdown |
| 6 | Tracking template | Spreadsheet |

**Total: 26+ assets per competitor campaign.**

### CrustData Campaign -- Live Example (in progress)

| Phase | Status | Key Deliverables Completed |
|-------|--------|--------------------------|
| Phase 1 | **DONE** | Research brief (232 lines), positioning map with visual diagrams, customer logo extraction, competitive research including fill rate data, compliance gaps, customer logo analysis |
| Phase 2 | **DONE** | Battlecard, one-pager, positioning angles locked. Dual-track messaging: outbound leads with B2B data quality, inbound leads with full differentiation. Humanize-AI pass completed (1 fix across 4 files). |
| Phase 3A | **DONE** | Exclusion list built (competitor's investors, employees, former employees -- NOT Minerva's own people). 5 ICP personas built from first principles (~60% of followers viable). Minerva CLI dogfooded: linkedin contact-info -> resolve -> enrich pipeline tested live (80% match rate, returns personal emails, phones, full 2,168-field consumer profiles). |
| Phase 3B | **DONE** | Keyword research (4 content pillars, 90-day calendar), 5 lead magnet concepts with recommended winner (Consumer Data Gap Calculator), comparison blog, landing page, social posts. All copy humanize-AI passed. |
| Phase 4A | **DONE** | 3 outbound sequences written in Daniel Saedi's voice (co-founder, technical peer). Awareness-stage positioning corrected: leads with B2B data quality, not consumer data. |
| Phase 4B | **DONE** | 7-email inbound nurture sequence. Jackson Engles voice for blog/inbound content. |
| Phase 5 | **DONE** | Discovery script, demo guide, follow-up templates, social proof assets. |
| Phase 6 | **DONE** | Hypothesis card, tracking template, expansion loop defined (Wave 1: 1,200 followers -> Wave 2: 5,000-10,000 via Person Search API -> Wave 3: full TAM). |

**Key finding from CrustData research:** CrustData has 90 people fields (professional only) vs Minerva's 2,168+ fields (13 categories). Zero consumer ATTRIBUTE data (they may return a personal/business email per their blog, but zero consumer context -- no purchase behavior, financial indicators, lifestyle, interests, etc.). Zero B2B2C identity resolution. No named customers (company names shown in product demos are example data, not customer endorsements -- no formal case studies, no logo bar, no testimonials). No G2/Capterra reviews. No SOC 2 or compliance certifications found (/security and /trust pages return 404; GDPR question on Product Hunt went unanswered).

**Primary displacement narrative (OUTBOUND):** *"Our B2B data is better too"* -- lead with apples-to-apples data quality on what CrustData followers already care about (Salutary Data publishes 99.47% job title, 94.62% job level, 71% mobile phone, 95% email/phone accuracy; CrustData publishes zero fill rates). Consumer data becomes the close, not the open.

**Primary displacement narrative (INBOUND):** Full differentiation across all angles for lower-awareness evaluators actively comparing solutions.

---

## 7. REUSABILITY

### Why Competitor #2 Is 2x Faster

| Factor | Competitor #1 (CrustData) | Competitor #2 (Windfall) |
|--------|--------------------------|--------------------------|
| Phase 0 (setup) | 15 min -- build from scratch | 0 min -- already done |
| Brand files | Create all 5 files | Reuse all 5 files |
| Differentiation cheatsheet | Create | Already includes Windfall |
| Lead magnet concepts | Build 5 concepts | Adapt -- Gap Calculator works for any competitor |
| Sequence templates | Write from scratch | Clone + customize angles |
| Nurture architecture | Design segmentation logic | Reuse -- same structure, new angles |
| **Estimated total** | **~4 hours** | **~3 hours** |

### The Config-Driven Approach

To fork this system for a different company:

1. **Replace `brand/`** -- Swap positioning, audience, competitors, voice profile, differentiation cheatsheet
2. **Update master prompt** -- Change company name, products, proof points, and outbound execution stack
3. **Run the pipeline** -- Everything downstream adapts automatically because each phase reads from brand files, not hardcoded values

### What's Reusable vs. What's Custom

| Reusable Across All Runs | Custom Per Competitor |
|--------------------------|---------------------|
| Master prompt structure | Research findings |
| Project plan + gate criteria | Attack angles |
| Phase pipeline + parallelization | Prospect lists |
| Sequence cadence architecture | Sequence copy |
| Nurture email structure | Content topics + keywords |
| Dashboard UI | Metrics data |
| Lead magnet frameworks | Competitor-specific positioning |

---

## 8. TOOLS & SKILLS USED

### Skill Map (10 active skills from the 42-skill library)

| Skill | Used In | Purpose |
|-------|---------|---------|
| `research-agent` | Phase 1 | Web research, review mining, competitor profiling |
| `positioning-angles` | Phase 1, 2 | Generate ranked attack angles from research |
| `direct-response-copy` | Phase 2, 3B, 4A, 5 | Conversion copy for battlecards, landing pages, sequences |
| `humanize-ai` | Phase 2, 3B, 4A, 4B | Kill AI vocabulary, enforce natural voice |
| `seo-content` | Phase 3B | SEO-optimized blog structure and keyword targeting |
| `content-atomizer` | Phase 3B, 5 | Break blog into LinkedIn/Twitter posts |
| `lead-magnet` | Phase 3B | Generate and evaluate lead magnet concepts |
| `email-sequences` | Phase 4B | Inbound nurture drip sequences |
| `stakeholder-message-crafter` | Phase 5 | Discovery scripts, demo guides |
| `brand-voice` | All phases | Daniel Saedi voice for outbound, Jackson Engles voice for inbound/blog |

### MCP Tools

| Tool | Used In | Purpose |
|------|---------|---------|
| **Vibe Prospecting** | Phase 3A | `fetch-entities`, `enrich-prospects`, `export-to-csv` for prospect list building |
| **Web Search** | Phase 1 | Competitor site scraping, review mining, social audit |

### Execution Stack

| Tool | Role |
|------|------|
| **Minerva CLI** | Dogfooded for enrichment: linkedin contact-info -> resolve -> enrich pipeline. 80% match rate, 2,168 fields per person, batch processing (1,000/request) |
| **Clay** | CRM enrichment with Minerva API integration, custom field generation |
| **LaGrowthMachine** | Multi-channel sequence execution (LinkedIn + Email) |
| **Claude Code / Cowork** | Agent that runs the pipeline, chains skills, produces deliverables |

### Skill Chain by Phase

```
Phase 1:  research-agent --> positioning-angles
Phase 2:  positioning-angles --> direct-response-copy --> humanize-ai
Phase 3B: seo-content --> direct-response-copy --> content-atomizer --> humanize-ai
Phase 3C: lead-magnet --> direct-response-copy --> humanize-ai  (lead magnet + trial offer)
Phase 4A: direct-response-copy --> humanize-ai
Phase 4B: email-sequences --> humanize-ai
Phase 5:  stakeholder-message-crafter --> direct-response-copy --> content-atomizer
```

---

## 9. METRICS & MEASUREMENT

### What Gets Measured Per Campaign

| Metric | Target | Track In |
|--------|--------|----------|
| **Demo book rate** (primary) | 3-5% of prospects contacted | LaGrowthMachine + CRM |
| Reply rate | 8-12% | LaGrowthMachine |
| LinkedIn acceptance rate | 25-35% | LaGrowthMachine |
| Lead magnet downloads | -- | Landing page analytics |
| Inbound demo requests (from content) | -- | Landing page / form |
| Blog organic traffic | -- | Google Search Console |
| Comparison page conversion rate | -- | Landing page analytics |
| Nurture-to-demo conversion | -- | Email tool + CRM |

### The Day 7 Checkpoint Framework

After 7 days of a live campaign, evaluate against this decision matrix:

| Signal | Diagnosis | Action |
|--------|-----------|--------|
| **>3% demo rate** | Winning -- angle and list are right | **SCALE:** Add more prospects to winning sequence |
| **1-3% demo rate** | Promising but not there | **ITERATE:** Test new angles on a fresh segment |
| **<1% demo rate** | Not working | **DIAGNOSE:** Is it list, copy, or offer? |
| High reply, low demo | Interest but CTA friction | Fix the CTA or offer |
| High acceptance, low reply | Targeting right, messaging wrong | Rewrite follow-up messages |
| Zero engagement | Fundamental problem | Check deliverability, targeting, or **KILL** campaign |

### Decision Criteria: Scale, Iterate, or Kill

```
                    50 PROSPECTS CONTACTED
                           |
                    Demo book rate?
                    /      |       \
                 >3%     1-3%     <1%
                  |        |        |
               SCALE    ITERATE   DIAGNOSE
                  |        |        |
             Add full   Test new   Check:
             list to    angles on  1. List quality
             winning    fresh 50   2. Copy resonance
             sequence   prospects  3. Offer/CTA fit
                                     |
                                  Fixable?
                                  /      \
                                Yes      No
                                 |        |
                              FIX +     KILL
                              RETEST  campaign
```

### Campaign Hypothesis Card Template

```
CAMPAIGN:         [Competitor] Displacement -- [Date]
HYPOTHESIS:       [Competitor]'s customers who [pain point] will respond
                  to [angle] because [reason].
TARGET LISTS:     List A ([N] prospects), List B ([N]), List C ([N])
SEQUENCES:        A (displacement), B (cold ICP), C (trigger-based)
PRIMARY METRIC:   Demo bookings / prospects contacted (target: 3-5%)
SECONDARY:        Reply rate (8-12%), LinkedIn acceptance (25-35%),
                  lead magnet downloads, inbound demo requests
TIMELINE:         [Start] --> Day 21 (sequence completion)
DAY 7 CHECKPOINT: Evaluate against decision matrix above
```

---

## QUICK REFERENCE: HOW TO RUN A VAMPIRE ATTACK

```
1. Pick a competitor
2. Paste the Master Prompt into Claude with brand files loaded
3. Say: "Run Phase 1 for [competitor]. Website: [URL]"
4. Execute phases sequentially, stop at every GATE for human review
5. Phases 3A+3B and 4A+4B run in parallel
6. At Gate 6: GO/NO-GO decision to launch
7. Launch sequences + publish content simultaneously
8. Day 7: Evaluate and decide -- scale, iterate, or kill
9. EXPANSION LOOP: Generalize validated personas → Person Search API → Wave 2 lists
10. Build inbound systems for lower-awareness prospects
11. Repeat for next competitor (in parallel with expansion)
```

**First competitor: ~4 hours | Each additional: ~3 hours**

---

## 10. THE EXPANSION LOOP — FROM FOLLOWERS TO FULL TAM

### Why This Matters

Wave 1 (competitor LinkedIn followers) targets the highest-awareness prospects: people who already know and follow the competitor. But this is the smallest addressable group. The expansion loop takes what we learn from Wave 1 and scales it:

```
WAVE 1: Competitor Followers (Seed)
  High awareness, high intent
  ~1,200 records → ~500 enriched → ~300 reachable
  Messaging: Direct displacement ("us vs. them")
  Goal: Validate which personas + angles convert
         |
         | Learn: which persona converted best?
         | Learn: which angle drove demos?
         | Learn: which CTA had highest response?
         ↓
WAVE 2: Person Search Expansion (Scale)
  Medium awareness, category-aware
  ~5,000-10,000 records via Minerva Person Search API/MCP
  Same ICP personas, broader targeting (not limited to follower list)
  Messaging: Category education + differentiation
  Goal: Scale what worked in Wave 1
         |
         | + Inbound engine starts producing organic leads
         | + SEO content ranks for category keywords
         | + Lead magnets capture evaluators
         ↓
WAVE 3: Full TAM Build (Dominate)
  Low awareness, problem-aware
  ~25,000+ records via programmatic list building
  Paid ads + organic + outbound + community
  Messaging: Problem → solution (no competitor mention)
  Goal: Own the category, not just displace one competitor
```

### How Expansion Connects to Inbound

The outbound campaign generates data that feeds the inbound engine:

| Outbound Signal | Inbound System It Feeds |
|-----------------|------------------------|
| Which angles get highest reply rates | Blog topics and SEO content priorities |
| Which personas book demos | Lead magnet targeting and ad audience |
| What objections come up most | FAQ content, landing page copy |
| Which CTAs convert | Landing page CTA optimization |
| Which companies show up in replies | Lookalike audience for paid ads |

### Reusability of the Loop

The expansion loop is competitor-agnostic. Once validated for CrustData:
- **Same personas** apply to Apollo, ZoomInfo, Clearbit, Lusha displacement campaigns
- **Same Person Search parameters** build target lists for any data enrichment competitor
- **Same inbound systems** (SEO, lead magnets, comparison pages) capture demand across all competitors
- The system compounds: each competitor campaign adds content, adds leads, adds learnings

---

## 11. KEY LEARNINGS & DECISIONS LOG

Documented in chronological order during the CrustData campaign build session (April 2026).

### 1. Exclusion list scope corrected
Originally planned exclusion lists as Minerva's own people. **Corrected to: competitor's investors, employees, and former employees.** This targets the right exclusions -- you want to suppress CrustData's internal network, not your own team.

### 2. Dogfooding Minerva API
Instead of using only third-party tools for enrichment, we dogfood Minerva's own CLI (`linkedin contact-info` -> `resolve` -> `enrich`) via Clay. **Tested live: 80% match rate on test batch.** Returns personal emails, phones, professional emails, full consumer profiles (2,168 fields). Batch processing works at 1,000 per request. Pipeline: `linkedin contact-info` -> `resolve` -> `enrich` -> filter with ICP -> segment. Key advantage: CrustData can't do this on their own followers -- they lack consumer data resolution.

### 3. Daniel Saedi selected as outbound voice
Daniel Saedi (co-founder, technical peer) selected as the voice for cold outbound sequences. Jackson Engles voice reserved for blog/inbound content. Rationale: outbound to technical prospects works better peer-to-peer from a technical co-founder.

### 4. ICP Personas built from first principles
Built 5 personas from scratch, not just mirroring CrustData's stated ICP. **Key finding: ~60% of followers are viable targets** (up from initial 35% estimate after Persona 3 was upgraded -- see learning #5).

### 5. Persona 3 (AI SDR tools) upgraded from "do not target" to "medium priority"
Originally marked "do not target" because they're CrustData's core happy customers using the platform for AI-powered SDR enrichment. **Justin's insight: Minerva's B2B data is objectively better** -- multi-sourced from Salutary Data + Coresignal, standardized, verified. Even CrustData's core use case is attackable apples-to-apples. Person Search MCP makes Minerva a direct replacement, not just a supplement. This single decision increased the targetable follower pool significantly.

### 6. Data quality established as primary competitive angle
Research revealed concrete fill rate data that CrustData cannot match: **Salutary Data publishes 99.47% job title, 94.62% job level, 71% mobile phone, 95% email/phone accuracy.** CrustData publishes zero fill rates. This became a new primary attack angle for outbound -- provable, quantitative superiority on the exact dimension prospects already care about.

### 7. CrustData email clarification
Theo flagged that CrustData's People API returns "personal or business email addresses" per their blog. **Changed "zero consumer data" to "zero consumer ATTRIBUTE data" across all files.** They may have a consumer identifier (email) but zero consumer context -- no purchase behavior, financial indicators, lifestyle, interests, household composition, etc.

### 8. Web Search API is NOT novel
Verified: Tavily, Exa, Brave Search API, SerpAPI all compete in AI-agent-optimized search. CrustData's angle is entity-linking search results to their B2B graph, not first-mover advantage in the category. This reduces one of CrustData's perceived differentiators.

### 9. Customer logos are nuanced, not definitive
CrustData shows company names (Perplexity, Anthropic, etc.) in product demo UI, but these are example data, not customer endorsements. No formal case studies, no logo bar, no testimonials. "Trusted by top companies" on homepage without specifics. Important nuance for battlecard claims -- attack the lack of proof, not the logos themselves.

### 10. No SOC 2 or compliance certifications found
`/security` and `/trust` pages return 404. GDPR question on Product Hunt went unanswered. Red flag for enterprise buyers. This became a secondary attack angle for enterprise-focused personas.

### 11. Awareness-stage positioning fix (CRITICAL)
CrustData followers followed for B2B data. Leading with "The Other 80%" (consumer data) is wrong for this audience -- it pitches something they don't know they need. **Corrected approach:**
- **OUTBOUND** leads with *"Our B2B data is better too"* -- apples-to-apples quality on what they already care about. Consumer data becomes the close, not the open.
- **INBOUND** content leads with full differentiation (all angles) for lower-awareness evaluators who are actively comparing solutions.

This was the single most important positioning correction in the build. It changed the lead angle across all outbound sequences.

### 12. Expansion loop added
Wave 1 (followers, ~1,200) is the seed. Wave 2 uses validated personas to build 5,000-10,000 target lists via Person Search API. Wave 3 scales to full TAM with inbound + outbound + paid. System compounds across competitor campaigns -- same personas apply to Apollo, ZoomInfo, Clearbit, Lusha displacement campaigns.

### 13. Humanize-AI pass results
All Phase 2 copy passed with only 1 fix needed across 4 files (removed one "Be honest about this" -- a performed authenticity marker). Copy quality was clean from the start, validating that the direct-response-copy skill produces naturally human output when the voice profile is well-defined.

### 14. Minerva CLI tested live end-to-end
API key works. Full pipeline verified:
- `linkedin contact-info` returns name, phones, personal emails, professional emails from LinkedIn usernames
- `resolve` returns `minerva_pid` (Minerva's internal person ID)
- `enrich` returns full 2,168-field consumer profile
- Batch processing works (1,000 per request)
- **Pipeline:** `linkedin contact-info` -> `resolve` -> `enrich` -> filter with ICP -> segment

This confirms the system can be fully operationalized with Minerva's own tools -- no dependency on competitor enrichment APIs for the core data pipeline.

---

## 12. META LEARNINGS: SYSTEM IMPROVEMENTS

Documented after the CrustData campaign build. These are the approval gates and system checks that SHOULD have caught issues found during review, so future campaigns don't repeat these mistakes.

### Gate Failures & Fixes

1. **Missing: Source Verification Gate on All Claims**
   - **What happened:** The research brief stated CrustData's HQ as "Austin, TX" (from web scraping/training data). Theo caught that LinkedIn says San Francisco. The $200/mo pricing was stated as fact but isn't visible on CrustData's website — it was sourced from Product Hunt and third-party reviews without attribution.
   - **Fix for system:** Add a "Source Verification Pass" to Phase 1 Gate. Every factual claim in the research brief must have a linked source URL. If a fact cannot be sourced, it must be tagged [UNVERIFIED]. This should be a checklist item before Phase 1 is marked complete.
   - **Checklist item:** "Every factual claim (HQ, funding, pricing, employee count, product features) has a linked source. Prefer LinkedIn for company details, Crunchbase/YC for funding, company website for products."

2. **Missing: Customer Claims Consistency Check**
   - **What happened:** We said "zero publicly named customers" multiple times even after Theo corrected it in Phase 1 review. The correction was applied to the research brief but NOT propagated to all downstream files (battlecard, one-pager, blog post, positioning map). This required 3 rounds of fixes.
   - **Fix for system:** Add a "Claim Propagation Check" after any correction is applied. When a factual claim is corrected in one file, an automated or manual sweep must update ALL downstream files that reference the same claim. Consider maintaining a "Claims Registry" — a single source of truth for key factual claims that all files reference.
   - **Checklist item:** "After any correction to Phase 1 research, run a grep across all campaign files for the corrected claim and update every instance."

3. **Missing: Awareness-Stage Mapping BEFORE Positioning Angles**
   - **What happened:** We built positioning angles (Phase 2) leading with "The Other 80%" (consumer data differentiation) before mapping the audience's awareness stage. Justin caught that CrustData LinkedIn followers are HIGH awareness B2B data buyers — they followed CrustData for B2B data. Leading with consumer data is pitching something they don't know they need yet. Had to rewrite the entire deployment priority table.
   - **Fix for system:** Add "Awareness-Stage Mapping" as a REQUIRED input to Phase 2 (before positioning angles). The ICP personas should include an explicit "awareness stage" field, and the positioning angles must be ordered per awareness stage BEFORE copy is written. This should be a Gate 2 checklist item.
   - **New Gate 2 checklist item:** "Positioning angles are ordered by audience awareness stage, not just potency. Outbound angles match what the audience already cares about. Inbound angles can lead with differentiation."

4. **Missing: Pricing & Commercial Terms Input**
   - **What happened:** The battlecard discussed pricing without knowing Minerva's actual commercial terms. We didn't know until Justin told us that Minerva has no per-seat pricing (purely usage-based) and that pricing is negotiable for product integrations. This is a critical selling point that was absent from all objection handlers.
   - **Fix for system:** Add a "Commercial Terms Interview" to Phase 0 (brand setup). Before any competitive messaging is written, capture: pricing model, negotiation flexibility, free tier/trial structure, per-seat vs. usage-based, enterprise discounts, and strategic pricing intent (e.g., "mission is to get data in builders' hands").
   - **New Phase 0 checklist item:** "Commercial terms captured: pricing model, negotiation flexibility, free tier, per-seat policy, strategic pricing intent."

5. **Missing: Competitor Website Live Verification**
   - **What happened:** Multiple claims about CrustData (customers, pricing, compliance, products) were based on cached/training data rather than live verification. The Web Search API was called "novel" until verification showed 5+ competitors. Customer logos were called "NONE" until verification showed company names in demos. SOC 2 was tagged [VERIFY] but wasn't checked until Theo flagged it.
   - **Fix for system:** Phase 1 should include a mandatory "Live Website Crawl" step where an agent with web access verifies every claim against the competitor's current website, docs, LinkedIn, Product Hunt, G2, and Crunchbase. This crawl should happen BEFORE the research brief is written, not after.
   - **New Phase 1 step:** "Live competitor website crawl: homepage, /about, /pricing, /customers, /case-studies, /security, /trust, LinkedIn company page, Product Hunt, G2, Capterra, Crunchbase. Capture screenshots or quotes as evidence."

6. **Missing: Lead Magnet Design Principle — Trial + Evaluation Framework > Abstract Tools**
   - **What happened:** Initial lead magnet concept was "Consumer Data Gap Calculator" — an interactive web tool. Justin correctly identified that for a displacement campaign, a better lead magnet is: (a) free API credits + trial period, and (b) a vendor evaluation spreadsheet/PDF that teaches prospects how to run a head-to-head comparison. The evaluation criteria should be framed so the offering company wins on key dimensions while remaining fair enough that prospects trust the guide.
   - **Why this matters:** In a displacement campaign, the goal is to get prospects to TEST your product against their current provider. Abstract tools (calculators, assessments) create awareness but don't create trials. Free credits + an evaluation framework turns the lead magnet into a conversion mechanism that ends in a bake-off.
   - **Fix for system:** Phase 3C (Lead Magnet) should ALWAYS include:
     1. **A trial offer** (free credits, free API calls, free match rate test) that removes friction
     2. **An evaluation guide** (PDF or spreadsheet) that teaches the prospect HOW to compare vendors. Frame the criteria so your product wins on the key dimensions, but include dimensions where competitors genuinely excel so the guide feels honest.
     3. **A clear path from download to trial** — the evaluation guide should reference the free credits and include step-by-step instructions for running the comparison.
   - **Anti-pattern:** Interactive web tools (calculators, assessments) are good for Wave 2+ inbound (lower-awareness audiences who need education) but wrong for Wave 1 displacement (high-awareness audiences who need a reason to switch and a low-friction way to test).
   - **Sequencing consideration:** The lead magnet concept should be designed BEFORE outbound sequences are written, because the sequences reference the lead magnet as a CTA. Add this dependency to Phase 3B/3C.

7. **Missing: Downstream Impact Assessment on Persona Changes**
   - **What happened:** When Persona 3 (AI SDR) was upgraded from "do not target" to "medium priority," the targeting math, campaign estimates, and messaging all needed updating. Some propagated, some didn't. The priority summary table still showed "LOW" until manually caught.
   - **Fix for system:** Persona changes should trigger a "Downstream Impact Checklist": update priority summary table, update filtering framework tier assignments, update campaign math, update "will work / won't work" assessment, update outbound sequence persona variants.
   - **Checklist item:** "After any persona priority change, update: summary table, tier assignments, campaign math, messaging approach, and all downstream references."

### Proposed System Architecture Changes

1. **Add Phase 0.5: "Commercial Terms & Brand Facts Interview"** — Structured capture of pricing, negotiation flexibility, competitive claims policy, and commercial terms BEFORE any competitive copy is written.

2. **Add "Claims Registry" file to each campaign** — A single markdown file listing every key factual claim with its source URL. All other files reference this registry. When a claim is corrected, correct the registry and re-propagate.

3. **Add "Awareness-Stage Map" as required Phase 2 input** — Before positioning angles, explicitly map each target segment's awareness level and what they currently care about. Angles are then ordered per segment, not globally.

4. **Add "Live Verification Crawl" as Phase 1 Step 1** — Web agent crawls competitor's entire public footprint and captures evidence before any analysis begins. Research brief is written FROM the crawl data, not from training data.

5. **Add "Propagation Sweep" after any correction** — Mandatory grep + update across all campaign files when any factual claim is corrected.

---

## 13. FUTURE EVOLUTION: MINERVA-POWERED 1-TO-1 PERSONALIZATION

### The Insight

Wave 1 uses segment-level templates (5 segments × 3 tiers = 15 variants). Daniel manually personalizes the top 12. Everyone else gets merge fields.

But we already have 2,168 fields of enrichment data on every target. Income brackets, property data, household composition, interests, job history, seniority, department, geography. We're sitting on the exact data that makes 1-to-1 personalization possible and sending templates instead.

### What Changes

**Current flow:**
```
Enrich → Segment (A/B/C/D/E) → Pick template by segment → Merge fields → LaGrowthMachine → Send
```

**1-to-1 flow:**
```
Enrich → Full profile available → LLM writes unique email per person
  using: enriched fields + segment angle + brand voice rules + humanize-AI
  → Human review queue (batch approve) → Send via API
```

### Why LaGrowthMachine Can't Do This

LGM supports merge fields (`{{firstName}}`, `{{company}}`), not unique body copy per contact. For 1-to-1 personalization, you need a sending tool that accepts a unique message per recipient. Options: Instantly, Smartlead, Lemlist, or direct SMTP via API.

### How the LLM Generation Step Works

For each enriched contact, the model receives:
- Their full enriched profile (name, title, company, industry, seniority, department, city, income range, interests, property data)
- Their displacement segment (A/B/C/D/E)
- The brand voice rules (Daniel's casual founder voice, all lowercase, organic feel)
- The humanize-AI constraints
- The campaign's value props (data quality → pricing → white-glove → bake-off → consumer data bonus)
- 2-3 example emails that represent the target tone

The model outputs a unique email body. A human reviews batches (e.g., spot-check 10 out of 50) before sending.

### What This Unlocks

| Current (Segment-Level) | Future (1-to-1) |
|--------------------------|------------------|
| 5 email variants across 393 targets | 393 unique emails |
| Angle picked by segment | Angle picked by individual profile data |
| "saw you follow crustdata" is the only personal touch | References their specific company, role, city, and inferred use case |
| Tier 1 gets manual personalization, Tier 2-3 get templates | Every tier gets personalization quality that currently only Tier 1 gets |
| Reply rates: ~8-12% industry average | Reply rates: 15-25%+ (based on personalized outbound benchmarks) |

### What This Proves About Minerva

This is the most powerful demo of Minerva's value. The system:
1. Uses Minerva's API to enrich prospects
2. Uses that enrichment data to write personalized outbound
3. Gets higher response rates because the data is richer
4. Proves the ROI of 2,168 fields vs 90 fields in a concrete, measurable way

It's not a pitch about data depth. It's a working example of what data depth enables.

### Implementation Complexity: Medium-High

| Component | Effort | Status |
|-----------|--------|--------|
| Enrichment pipeline (already built) | Done | ✅ |
| LLM prompt template for email generation | 2-3 hours | Needs build |
| Humanize-AI + brand voice constraints as system prompt | 1 hour | Skills exist, need packaging |
| Sending infrastructure (Instantly or Smartlead API) | 2-4 hours | Needs setup |
| Review queue (spreadsheet or simple UI) | 1-2 hours | Needs build |
| A/B testing framework (personalized vs template) | 2 hours | Needs build |
| **Total** | **~10-15 hours** | **Wave 2 or 3** |

### Recommended Rollout

1. **Hackathon (now):** Show the concept + 3-5 concrete examples in the presentation. Note it as a future capability.
2. **Wave 1 (current):** Ship with segment-level templates + Tier 1 manual personalization. Measure baseline reply rates.
3. **Wave 2:** Build the LLM generation pipeline. Run A/B test: 50 contacts get segment template, 50 get 1-to-1 personalized. Measure reply rate difference.
4. **Wave 3:** If 1-to-1 outperforms (expected), roll out to full list. Kill LaGrowthMachine, move to API-based sending.

---

*System designed by Justin Liao for Minerva BI. Engine is reusable -- swap the brand files and run it for any company.*
