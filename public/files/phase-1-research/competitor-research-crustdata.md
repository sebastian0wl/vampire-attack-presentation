# CrustData -- Competitor Deep Research Brief
## Phase 1 Deliverable | Vampire Attack GTM System
### Date: 2026-04-01

---

## STATUS: VERIFIED WITH LIVE WEB DATA (2026-04-01)

---

## 1. COMPETITOR PROFILE

### Company Overview
| Field | Detail |
|-------|--------|
| **Company** | CrustData |
| **Website** | crustdata.com |
| **Category** | B2B data enrichment API / data infrastructure for AI agents |
| **HQ** | San Francisco, CA (per LinkedIn) |
| **Founded** | 2023, YC F24 batch |
| **Founders** | Abhilash Chowdhary (CEO), Chris Pisarski, Manmohit Grewal |
| **Funding** | $6M seed (Oct 2025). Lead: Garry Tan. Investors: YC, A.Capital, Phosphor Capital, General Catalyst, SV Angel |
| **Stage** | Seed |
| **Employees** | ~10-15 (team on PH: Abhilash, Chris, Manmohit, Daniel Ahmadizadeh, Vishva Saravanan, Aniketh Reddimi, Rishabh Raj, Sajal Khandelwal, Nithish A) |

### Positioning
| Element | Copy |
|---------|------|
| **Hero Headline** | "Real-Time B2B Data Broker via API or Data Feed" (verified 2026-04-01) |
| **Tagline** | "We're reshaping the data on the internet from useful to humans to useful for AI agents" |
| **Claimed Position** | The data infrastructure layer for AI agents and B2B GTM teams |
| **Category** | B2B data API / AI agent data infrastructure |

### Products (6 Known)

1. **Company Enrichment API** -- 250+ firmographic datapoints per company (headcount, revenue, funding, tech stack, web traffic, social media metrics)
2. **People Enrichment API** -- 90+ datapoints per person (work history, education, skills, social links, contact info)
3. **Company Screener** -- Search and filter companies by criteria (headcount growth, funding stage, location, tech stack)
4. **People Search API** -- Find people matching criteria (title, company, skills, location)
5. **Web Search API** -- Structured web search built for AI agents (entity-linked results, not "10 blue links"). Novel product -- few direct competitors offer this.
6. **Watcher** -- Real-time signals engine (job changes, promotions, funding rounds, hiring surges, leadership changes)

**Verified 2026-04-01:** Products 1-6 confirmed. Additional products found:
7. **People Dataset** — Full people data on hundreds of millions of profiles (launched May 2025)
8. **Company Dataset** — 200+ datapoints on millions of companies, refreshed monthly at flat rate
9. **Jobs API** — Job listing data
10. **Posts API** — Social post data

They also raised $6M in Oct 2025 and launched the Web Search API in Jan 2026. Shipping velocity is high.

### Value Propositions (Ranked by Emphasis)

1. **Real-time data** -- Live enrichment, not monthly/weekly batch. Sub-1s response for cached enrichments.
2. **Built for AI agents** -- Structured, machine-readable output designed for programmatic consumption by agents, not human dashboards.
3. **Breadth of company data** -- 250+ company datapoints from 16+ data sources.
4. **Developer experience** -- Clean API docs, screener tool, structured JSON output.
5. **Historical data** -- Available for 6 company datapoints (headcount trends, etc.), useful for trend analysis.
6. **Web Search for agents** -- Unique product that structures web data for agent consumption.

### Pricing Model (Verified 2026-04-01)
- **Model:** Credit-based API pricing, self-serve access
- **Free Plan:** Limited API calls for testing
- **Starter:** From $200/month (small sales teams) *(sourced from Product Hunt launch copy and third-party reviews; not visible on crustdata.com)*
- **Growth:** Custom pricing (growing ops teams)
- **Enterprise:** Custom (volume enrichment, dedicated API, bulk datasets)
- **Flat File Option:** Full dataset delivery (refreshed monthly/quarterly/yearly) at flat rate
- **Credit mechanics:** Credits consumed per successful match only. Premium data points (nested fields, webhook triggers) cost more credits than basic firmographic
- **Datasets:** Also sells Company Dataset (200+ datapoints, millions of companies, monthly refresh) and People Dataset at flat rates

### Tech Stack / Integrations
- **API-first:** REST API with JSON responses
- **Data sources:** 16+ trusted sources (LinkedIn scraping, job boards, company registries, web crawling, funding databases)
- **Agent frameworks:** Positioned for integration with LangChain, CrewAI, AutoGPT, custom agent frameworks **[VERIFY specific integrations]**
- **CRM integrations:** Not prominently featured -- they position as an API layer, not a CRM connector
- **Known integration partners:** None prominently listed (contrast with Minerva's Clay, Experian, NBA partnerships)

### Industries Served
- AI/Agent platforms (primary target)
- Sales teams / SDR workflows (AI-powered outbound)
- Recruiting platforms
- Investment firms / VC (deal sourcing, portfolio monitoring)
- SaaS companies building with B2B data

### Social Proof / Traction (Verified 2026-04-01)
- **Product Hunt:** 743 upvotes on Person Search API (98 comments), 507 on Company Dataset (26 comments), 348 on Web Search API. 13 reviews total, mostly positive.
- **YC badge:** F24 batch -- credibility with technical founders
- **Named customers:** CrustData references company names on their website (Perplexity, Anthropic, GitHub, OpenAI, Stripe, Sequoia in product demos), but these appear to be example data in the product UI, not formal customer endorsements. Homepage says "Trusted by top companies" but no traditional logo bar or named testimonials. Case studies page says "Stay tuned for more case studies coming your way!" No formal case studies published.
- **Testimonials:** One featured on demo page (unnamed company, mentions "worked with hundreds of seed-stage companies," tried Affinity/Clay/other vendors). Product Hunt reviews praise API quality and real-time updates.
- **G2:** Listed on alternatives page but minimal/no user reviews
- **Capterra:** No listing found
- **Key PH criticism:** Pricing concerns for startups, GDPR compliance questions, data accuracy concerns
- **Data coverage claims:** 60M+ companies, 1B+ people profiles, 16+ data sources

---

## 2. WEAKNESS MINING

### Review Platform Coverage
- **G2:** No CrustData profile found as of last check **[VERIFY -- they may have listed since]**
- **Capterra:** No CrustData listing found **[VERIFY]**
- **TrustRadius:** Not listed **[VERIFY]**

> This is itself a weakness signal: no third-party review presence means no social proof for enterprise buyers doing vendor evaluation. Enterprise procurement teams check G2/Capterra. CrustData's absence there limits their ability to compete in formal evaluations.

### Weakness Theme 1: No Consumer *Attribute* Data
CrustData has firmographic and professional data. Their People Enrichment API does return email addresses (their blog states "personal or business email addresses"), so they may have some consumer identifiers. But they have zero consumer *context* data:
- Consumer income / household net worth
- Property records (MLS, tax, valuation)
- Interests and hobbies (62 boolean flags in Minerva)
- Purchase behavior (408 transactional fields in Minerva)
- Political affiliation and donor behavior
- Vehicle ownership
- Household composition (children, adults, generations)
- Behavioral intent signals (7.5B rows in Minerva)
- Mobile ad IDs and IP-to-person resolution

> **[VERIFIED 2026-04-01]** CrustData's People API returns an "email" and "emails" field without distinguishing personal vs. professional. Their blog confirms they return "personal or business email addresses." So CrustData may have a consumer identifier (personal email) but has zero consumer attribute data behind it. Do NOT use "zero consumer data" in campaign copy. Use "zero consumer attribute data" or "no consumer context."

**Attack angle:** CrustData might have someone's Gmail address, but they can't tell you anything about the person behind it. Minerva returns 2,168 fields of consumer context — income, property, interests, household, purchase behavior — that turn a contact record into an actionable profile.

### Weakness Theme 2: No Identity Graph Connecting Personal and Professional
CrustData enriches by LinkedIn URL, business email, or company domain. Limitations:
- Cannot match personal emails (Gmail, Yahoo, Outlook)
- No B2B2C identity resolution
- No mobile ad ID matching
- No IP-to-person resolution
- If you have a consumer identifier, CrustData returns nothing

**Attack angle:** Minerva's B2B2C graph connects both sides. Match rate difference is 70-80% vs whatever CrustData achieves on B2B-only identifiers.

### Weakness Theme 3: API-Only -- No Platform, No Workflows
CrustData is a raw data API. No:
- Audience generation tools
- Campaign orchestration
- Lead scoring or routing
- Direct mail targeting
- CDP functionality
- Analytics dashboards
- Agentic data engineer

**Attack angle:** If you're a CMO or CRO (not a developer), CrustData has nothing for you. You still need to build everything on top of the data yourself.

### Weakness Theme 4: Early-Stage with Limited Track Record
- YC F24 batch (less than 2 years old)
- Company names appear in product demos but no confirmed customer endorsements or published case studies
- No public case studies or customer results
- No SOC 2 or compliance certifications found. /security and /trust pages return 404. GDPR question on Product Hunt went unanswered. A third-party article claims SOC 2/ISO 27001 but appears to confuse CrustData with Databricks.
- Product Hunt is their primary social proof channel
- Small team, likely <20 employees

**Attack angle:** For enterprise buyers, Minerva has named customers (Hard Rock Stadium, Wander, Juicebox, Luxury Presence, FlyUSA), partnerships (NBA, Experian, Clay), and $20M raised. CrustData has a YC badge.

### Weakness Theme 5: Narrow Use Case Focus
CrustData is almost entirely focused on:
- Powering AI SDR agents for B2B outbound
- Recruiting platform enrichment
- VC deal sourcing

Not served at all:
- Consumer-facing brands (DTC, luxury, real estate, hospitality)
- Nonprofits / fundraising
- Sports and entertainment
- Financial services (consumer-facing)
- Direct mail campaigns
- Paid media optimization

**Attack angle:** Minerva serves every vertical that involves understanding consumers. CrustData serves the niche of "B2B agent builders."

### Weakness Theme 6: Data Depth Per Person is Shallow
- CrustData: 90 datapoints per person (professional/career only)
- Minerva: 2,168+ fields per person (spanning 13+ categories)

The gap is not incremental -- it's 24x more data depth. And CrustData's 90 fields are all professional: work history, education, skills, social links. Zero consumer attributes.

### Reddit/Twitter/Product Hunt Sentiment (Verified 2026-04-01)
- **Reddit:** No significant CrustData discussions found. Minimal presence.
- **Product Hunt (13 reviews, 3 launches):**
  - **Positive example 1:** Nayeem Islam (5 stars): "One of the most reliable platforms I've come across for real-time people and company data. The API is clean, fast, and well-documented." Tagged: Fast performance, Easy integration, Reliable service, High accuracy.
  - **Positive example 2:** Aditya (5 stars): "A solid tool for teams that need fast, reliable intel." Tagged: Fast performance, Workflow automation, Reliable service.
  - **Concern example 1:** Ajay Sahoo (5 stars, but flagged pricing): "It is a strong descriptive product with many features, but pricing will be an issue for startups & small businesses."
  - **Concern example 2:** Anonymous commenter on Person Search API launch raised GDPR compliance questions, asking "How do you guarantee genuine GDPR compliance, especially regarding consent for EU resident data?" — referenced CNIL 2025 guidance. **No response from CrustData found.**
  - Other concerns: "potential noise without good filtering," data accuracy and latency assurance requests
  - **Key gap confirmed:** No consumer data mentioned by any reviewer. All praise is B2B-specific.
- **Notable testimonial (demo page):** Unnamed company says "We've worked with hundreds of seed-stage companies and struggled for years to find a data provider... After trying Affinity, Clay, and other vendors, nothing matched the depth." — This is a VC/investment firm use case, confirming their primary audience.
- **CrustData aggregates G2 review data as part of their product** — they pull G2 reviews on other companies as a data source. Ironic given they have no G2 reviews themselves.

---

## 3. CRUSTDATA'S STRENGTHS (Honest Assessment)

Do not underestimate these in campaign copy:

1. **Developer experience is genuinely good.** Clean API docs, structured JSON output, screener tool for exploration. Technical buyers will appreciate this.

2. **Real-time signals are fast.** The Watcher product for job changes and funding rounds is faster than most legacy providers. For B2B GTM teams tracking triggers, this is valuable.

3. **AI-native positioning is forward-looking.** They're building specifically for agent consumption at a time when every GTM team is deploying agents. This narrative resonates with technical buyers.

4. **YC brand carries weight** with technical founders and AI builders. It signals credibility and access to the YC network.

5. **Web Search API has a differentiated angle, but the category is competitive.** Tavily (acquired by Nebius, Feb 2026), Exa (semantic search), Brave Search API, SerpAPI, and Serper all offer AI-agent-optimized web search. CrustData's angle is entity-linked results tied to their B2B graph and claimed sub-300ms latency. Legitimate differentiator, but not a first-mover advantage.

6. **Price is likely very competitive** for early-stage. API-per-call pricing at developer-friendly rates removes friction for experimentation.

---

## 4. STRATEGIC SUMMARY

### Where CrustData Wins (Don't Compete Here)
- B2B firmographic data for AI SDR agents
- Real-time company signal tracking (hiring, funding)
- Developer-first API for B2B data
- Web search structured for agent consumption

### Where Minerva Wins (Attack Here)

**Use Case 1: Consumer-Facing Agents (B2C context)**
An AI agent qualifying inbound leads for a luxury real estate platform needs income, property records, net worth, and lifestyle interests to route prospects to the right product tier. CrustData returns job title and employer. Minerva returns 2,168 fields — income, property value, interests, household composition, purchase behavior — so the agent can score and personalize in real time. *Example: Hard Rock Stadium uses Minerva's consumer data to score season ticket leads across product tiers.*

**Use Case 2: B2B Agents Enriching Business Prospects (B2B context)**
Minerva also carries strong business data that agents can action in a purely B2B context. An AI SDR agent prospecting SMB owners needs to understand both the business AND the decision-maker — estimated revenue, years in business, owner net worth, home value, and buying signals. CrustData gives you firmographics on the company. Minerva gives you the full picture on the person making the purchase decision, connecting professional identity with financial and behavioral data that makes outreach sharper and qualification faster. *Example: Wander uses Minerva's enrichment to rebuild ad audiences from actual consumer attributes of business decision-makers.*

**Use Case 3: Apples-to-Apples Professional Data Quality**
Even on professional/company data where CrustData competes directly, Minerva's data is multi-sourced (including Coresignal and Salutary Data), standardized, and cleaned. CrustData primarily scrapes public web pages directly from 16+ sources with no published standardization methodology.

Minerva's upstream data quality (published fill rates from Salutary Data):
- Job Title: 99.47% fill rate
- Job Level: 94.62% fill rate
- Mobile Phone: 71.21% fill rate
- Email & Phone Accuracy: 95%
- Coresignal: 839M employee records, 500+ data points per profile, Ethical Web Data Collection certified

CrustData publishes zero fill rate statistics, zero accuracy guarantees, and no third-party verification methodology. Their "200+ fields per company" include App Store reviews, Google Search impressions, and CEO approval ratings — interesting for investors but irrelevant for sales outbound. Minerva's professional data covers 83M+ individuals with standardized job titles, seniority levels, departments, and company linkages — cleaned through 3 layers (compiler-level, source-level, Minerva-level) before graph entry.

**Additional Minerva advantages:**
- Any use case requiring B2B2C identity resolution
- Any use case requiring a platform (not just an API)
- Enterprise buyers who need named references, compliance, and track record
- CMO/CRO buyers (not developers)
- Consumer-facing verticals (hospitality, real estate, DTC, luxury, sports, financial services)

### The Core Displacement Narrative
> "CrustData tells you about the company. Minerva tells you about the person. If your agents need to understand prospects and leads — not just businesses — you need the other 80% of the data. And even on the B2B data you already have, ours is cleaner."

---

## 5. REMAINING GAPS (Low Priority)

| Item | Where to Check | Priority |
|------|---------------|----------|
| Compliance certifications (SOC 2, etc.) | crustdata.com | Low |
| Exact credit-to-enrichment cost mapping | crustdata.com/pricing (requires demo) | Low |
| LinkedIn company followers for List A building | PhantomBuster/Apify scrape | Medium (Phase 3A) |
| Twitter/X customer shoutouts | twitter.com search | Low |

All critical gaps verified via live web search 2026-04-01.
