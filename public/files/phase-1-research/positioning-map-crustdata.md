# CrustData vs Minerva BI -- Positioning Map & Whitespace Analysis
## Phase 1 Deliverable | Vampire Attack GTM System
### Date: 2026-04-01

---

## HEAD-TO-HEAD COMPARISON

| Dimension | CrustData | Minerva BI | Winner | Gap Size |
|-----------|-----------|------------|--------|----------|
| **Identity Graph Type** | B2B only (professional identifiers) | B2B2C (personal + professional connected) | Minerva | Massive |
| **Fields Per Person** | 90 (professional only) | 2,168+ (13+ categories) | Minerva | 24x more |
| **Fields Per Company** | 250+ (firmographic) | Professional data included but not primary focus | CrustData | Moderate (for B2B use cases) |
| **Match Rate** | N/A for consumer files; strong on LinkedIn/business email | 70-80% across all identifier types | Minerva | N/A (different inputs) |
| **Consumer Income/Wealth** | No | Yes (detailed brackets, net worth) | Minerva | Total gap |
| **Property Records** | No | Yes (MLS, tax, valuation, 186M homeowners) | Minerva | Total gap |
| **Interests/Behavioral** | No | Yes (62 interest flags + 7.5B behavioral rows) | Minerva | Total gap |
| **Professional Data** | Yes (strong -- work history, skills, education) | Yes (83M with occupation data, multi-sourced from Coresignal + Salutary Data, standardized/cleaned) | Minerva (quality edge) | Small-Moderate |
| **Household Data** | No | Yes (children, adults, composition, 469M records) | Minerva | Total gap |
| **Political/Donor Data** | No | Yes (party, voter status, donation behavior, 28M+) | Minerva | Total gap |
| **Auto/Vehicle Data** | No | Yes (296 fields, 157M vehicle records) | Minerva | Total gap |
| **Digital Behavioral** | No | Yes (3.3B mobile device, 8B IP records) | Minerva | Total gap |
| **Real-Time Company Signals** | Yes (Watcher -- job changes, funding, hiring) | Not primary focus | CrustData | Moderate |
| **Data Freshness** | Real-time / live API | Batch-enriched (vendor refresh cadences) | CrustData | Moderate (for B2B signals) |
| **Platform / Workflows** | No (API only) | Yes (3 workflows: paid media, direct mail, lead triage) | Minerva | Total gap |
| **CDP Functionality** | No | Yes (agentic data engineer) | Minerva | Total gap |
| **Analytics Agent** | No | Yes (NL query interface) | Minerva | Total gap |
| **API Quality** | Excellent (clean docs, structured JSON, sub-1s cached) | Yes (REST API, low latency) | Tie/slight CrustData edge on DX | -- |
| **Web Search for Agents** | Yes (entity-linked, but Tavily/Exa/Brave also compete here) | No | CrustData | Moderate (not unique category) |
| **Implementation Complexity** | Low (API key, start calling) | Low for API; moderate for platform (days, not months) | CrustData edge for pure API | Small |
| **Price** | Developer-friendly, per-call pricing *(CrustData's $200/mo starting price sourced from Product Hunt launch copy and third-party reviews; not visible on crustdata.com)* | Usage-based pricing (no per-seat model; pricing can be negotiated and will be matched for product integrations; mission is to get data in hands of builders) | CrustData (for developers) | Moderate |
| **Named Customers** | Company names appear in product demos but no confirmed customer endorsements or published case studies | Hard Rock Stadium, Wander, Juicebox, Luxury Presence, FlyUSA | Minerva | Large |
| **Partnerships** | YC network | NBA, Experian, Clay | Minerva | Large |
| **Funding** | YC-backed, early stage | $20M raised (pre-seed/seed/Series A) | Minerva | Moderate |
| **Compliance** | Unknown | CCPA compliant by design | Minerva | Unknown |
| **Primary Buyer** | Developer / AI engineer / technical founder | CMO, CRO, VP Product, VP Marketing | Different buyers | -- |
| **B2B Coverage** | Strong (250+ company fields, 90+ people fields) | Included but not primary differentiator | CrustData | Moderate |
| **B2C Coverage** | None | 270M+ Americans, 469M individual records | Minerva | Total gap |
| **US Population Coverage** | N/A (company/professional records) | 270M+ individuals | Minerva | Total gap |

---

## VISUAL POSITIONING MAP

```
                    CONSUMER DATA DEPTH
                    (Income, Wealth, Property, Interests, Behavioral)
                         |
                    HIGH |
                         |         MINERVA BI
                         |         (2,168 fields, B2B2C graph,
                         |          platform + API, 270M Americans)
                         |
                         |
                    MED  |
                         |
                         |                    WINDFALL
                         |                    (Wealth/career only,
                         |                     nonprofit focus)
                    LOW  |
                         |
                         |
                    NONE |  CRUSTDATA          APOLLO/ZOOMINFO
                         |  (B2B only,          (B2B contact data,
                         |   API-first,          outbound sequences)
                         |   AI agents)
                         |
                         +------------------------------------------------
                         NONE        LOW        MED         HIGH
                                  B2B DATA DEPTH
                              (Firmographic, Headcount, Funding, Tech Stack)
```

```
                    PLATFORM CAPABILITY
                    (Workflows, Orchestration, Analytics, CDP)
                         |
                    FULL |
                    PLAT |         MINERVA BI
                         |         (3 workflows, agentic CDP,
                         |          analytics agent)
                         |
                    SOME |                    APOLLO/ZOOMINFO
                    WORK |                    (Sequences, basic workflows)
                         |
                         |                              WINDFALL
                         |                              (Nonprofit SaaS app)
                    API  |
                    ONLY |  CRUSTDATA
                         |  (Pure API, no platform,
                         |   built for developers)
                         |
                         +------------------------------------------------
                              DEVELOPER       MARKETER/       ENTERPRISE
                              (API buyer)     SALES LEADER    (Full platform)
                                           TARGET BUYER
```

---

## WHITESPACE ANALYSIS

### Territory CrustData Claims
1. Real-time B2B data via APIs
2. Data infrastructure for AI agents
3. Structured web search for agents
4. Company firmographic intelligence (headcount, funding, tech stack)
5. Professional people data (work history, skills, education)
6. Real-time signal tracking (job changes, funding rounds)

### Territory CrustData Does NOT Claim (Minerva's Whitespace)

| Whitespace | Minerva's Position | Why This Matters |
|------------|-------------------|------------------|
| **Consumer identity resolution** | B2B2C graph connecting personal + professional identifiers | Agents making consumer-facing decisions need to know the person, not just their job title |
| **Consumer financial data** | Income brackets, net worth, credit range on 349M+ records | Any use case involving affordability, purchasing power, or wealth screening |
| **Property and real estate intelligence** | MLS records, home values, ownership status on 186M homeowners | Real estate tech, mortgage, home services, luxury brands |
| **Interest and lifestyle data** | 62 boolean interest flags across hobbies, activities, preferences | Personalization, content targeting, audience segmentation |
| **Behavioral intent signals** | 7.5B behavioral rows, IAB category engagement | Predictive modeling, propensity scoring, media targeting |
| **Household composition** | Children present + ages, adults, generations, veteran status | Family-focused products, education, insurance, financial planning |
| **Purchase behavior** | 408 transactional fields across categories | Predictive modeling for retail, DTC, subscription businesses |
| **Political and donor intelligence** | Party affiliation, donation behavior, cause alignment | Nonprofit fundraising, political campaigns, cause marketing |
| **Vehicle ownership data** | Make, model, year across 296 fields on 157M records | Auto, insurance, luxury brands |
| **Demand generation platform** | Paid media optimization, direct mail targeting, lead triage | CMOs/CROs who need outcomes, not raw data |
| **CDP / data unification** | Agentic data engineer that unifies first-party sources in days | Companies drowning in fragmented data across HubSpot, Stripe, Klaviyo |
| **Consumer-facing verticals** | Hospitality, real estate, DTC, luxury, sports, financial services | Every vertical that sells to people (not just businesses) |

### Territory Where CrustData Wins (Don't Fight Here)

| Their Territory | Why They Win | Minerva's Play |
|----------------|-------------|----------------|
| B2B firmographic real-time data | 250+ company fields, live refresh, Watcher signals | Acknowledge -- "CrustData is great for B2B firmographic signals. We're great for the consumer layer on top." |
| AI SDR agent data layer | Purpose-built for agent consumption, structured output | Compete selectively -- Minerva's API also serves agents, but for consumer context |
| Web Search API | Entity-linked results tied to B2B graph (Tavily, Exa, Brave also compete in AI search) | Don't compete -- different product category |
| Developer-first DX for B2B data | Clean docs, fast integration, low price point | Compete on DX quality for consumer data API |

---

## ATTACK ANGLES (Ranked by Potency)

### Angle 1: "The Other 80%" (Primary)
**Narrative:** CrustData tells your agents about the company and the job title. Minerva tells them about the person. Income, wealth, property, interests, household, buying behavior. The 80% of context that actually determines whether someone will buy.

**Best for:** AI agent builders who are currently using CrustData for B2B data but whose agents make consumer-facing decisions (personalization, pricing, qualification, routing).

**Proof:** 2,168 fields vs 90 fields. 24x more data depth per person, and it's all consumer data that CrustData doesn't have.

### Angle 2: "B2B2C Identity Resolution" (Secondary)
**Narrative:** CrustData can only match on LinkedIn URLs and business emails. Hand them a personal email and they return nothing. Minerva's B2B2C graph connects personal and professional identifiers on the same person. That's why we match 70-80% of any file you give us.

**Best for:** Companies that have mixed identifier types in their customer data (personal emails, business emails, phones, addresses). The default move: run the head-to-head test on your actual list. We're confident we're better.

**Proof:** 70-80% match rate. 733M email records, 899M phone records.

### Angle 3: "Platform vs. Raw Pipe" (Tertiary)
**Narrative:** CrustData gives you raw data through an API. You still need to build audience generation, lead scoring, campaign orchestration, and analytics on top. Minerva gives you the data AND the platform -- paid media optimization, direct mail targeting, and lead triage out of the box.

**Best for:** CMO/CRO buyers who want outcomes (better ROAS, qualified leads, targeted mailers) not infrastructure projects.

**Proof:** Hard Rock Stadium ICP scoring, Wander ROAS improvement, Ramp/Honey Homes direct mail results.

### Angle 4: "Track Record vs. Promise" (Support Angle)
**Narrative:** Minerva has named customers (Hard Rock Stadium, Wander), partnerships (NBA, Experian, Clay), and $20M raised. CrustData has a YC badge and Product Hunt upvotes. When you're betting your data infrastructure on a provider, track record matters.

**Best for:** Enterprise or mid-market buyers doing formal vendor evaluation.

---

## RECOMMENDED PRIMARY DISPLACEMENT NARRATIVE

For the CrustData vampire attack campaign, lead with:

> **"CrustData powers your agents with B2B data. Minerva powers your agents with consumer intelligence AND cleaner professional data. If your agents interact with prospects and leads — not just companies — you need the other 80% of the data. And even on the 20% you already have, ours is better sourced and better cleaned."**

This narrative:
- Respects CrustData's strength (B2B data for agents) without conceding the consumer space
- Positions Minerva as complementary AND superior, depending on use case
- Introduces the apples-to-apples data quality angle (multi-sourced, standardized, cleaned)
- Creates urgency: "your agents are making decisions with incomplete data"
- Maps directly to Minerva's core differentiator (B2B2C graph, 2,168 fields, consumer data)

---

## CAMPAIGN TARGETING RECOMMENDATION

Given CrustData's thin customer social proof (company names appear in product demos but no formal case studies or logo bars), the Vampire Attack should prioritize:

1. **List C (ICP-Matched)** -- Companies building AI agents that interact with prospects and leads (not just B2B outbound)
2. **List B (Category Buyers)** -- Companies currently using any B2B data API (Apollo, ZoomInfo, Clearbit, Lusha, CrustData) who also need consumer data
3. **List A (Direct Displacement)** -- Build via alternative extraction methods (Product Hunt scrapers, Twitter engagement, LinkedIn follower scraping, job posting search)

The messaging should speak to the gap: "You've solved B2B data. Now solve consumer data."
