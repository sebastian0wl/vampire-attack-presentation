# Minerva BI — Competitor Profiles

## Competitor 1: Windfall

**Website:** windfall.com
**Category:** Direct competitor (data enrichment, wealth screening)
**HQ:** San Francisco, CA
**Funding:** ~$100M+ raised (Series B+)
**CEO:** Arup Banerjee

### Positioning
**Hero headline:** "Windfall enables data-driven teams to personalize go-to-market workflows with wealth and career data."
**Tagline:** "People Intelligence and AI"
**Claimed positioning:** The most accurate net worth and wealth data provider for go-to-market teams and nonprofits.

### Products
1. **Enrichment** — Enrich CRM/database with wealth, career, and demographic insights
2. **Wealth Screening** — Precise household-level net worth figures using deterministic inputs and proprietary algorithms
3. **Predictive AI / Propensity Modeling** — ML models for donor propensity, customer LTV, acquisition propensity
4. **SaaS Application (Nonprofit)** — Self-serve tool for fundraising teams to segment, prioritize, and build lists

### Value Propositions
1. Most accurate net worth data (deterministic, not modeled from zip codes)
2. Weekly data refresh (freshness)
3. Career intelligence (job title, employer, function)
4. Propensity modeling bespoke to your organization
5. Easy CRM integration (works with all constituent databases)

### Industries Served
- Nonprofit (primary — fundraising, major gifts, planned giving)
- Retail
- Travel & Hospitality
- Financial Services
- Healthcare
- Education

### Key Logos / Customers
- Heavy nonprofit presence: universities, hospitals, community organizations
- Commercial: 1stdibs mentioned in press
- Claims "thousands of nonprofits" as customers
- Specific customer quotes from: Dexter Southfield (education), various unnamed nonprofits

### Pricing
- Not publicly listed
- Enterprise sales model (request a demo)
- Free Wealth Analytics Report available as lead gen

### Known Weaknesses / Attack Angles

**1. Data is narrow — wealth and career only.**
Windfall gives you net worth, income, and job title. That's it. No behavioral data, no interests, no household composition, no property details beyond valuation, no purchase behavior, no political data, no mobile device IDs, no online behavioral signals. Minerva has 2,168+ fields per person across all of these categories. If you want to know more than "can this person afford it?" — Windfall can't help.

**2. Primarily a nonprofit tool trying to be a commercial platform.**
Windfall's roots and majority of customers are in nonprofit fundraising. Their SaaS app launched for nonprofits first. Their case studies, testimonials, and use cases skew heavily toward major gifts, donor screening, and portfolio management. Commercial teams (retail, hospitality, financial services) are a secondary audience they're growing into. Minerva was built for commercial teams from day one.

**3. No B2B2C identity graph.**
Windfall doesn't connect professional and personal identifiers across the same person. If you have someone's work email, Windfall won't match it to their home address, personal email, or consumer behavior. Minerva's B2B2C graph connects both sides, which is why our match rate is 3-4x higher.

**4. No platform for demand generation workflows.**
Windfall enriches your data, but it doesn't help you build audiences, orchestrate campaigns, score leads by product fit, or route leads to sales reps. You still need to take the enriched data and manually build workflows in your CRM or ad platform. Minerva's platform automates the three core workflows: paid media optimization, direct mail targeting, and lead triage.

**5. No agentic data engineering / CDP functionality.**
Windfall doesn't unify your first-party data sources. You bring clean data to Windfall, they append wealth data, and send it back. If your data is fragmented across HubSpot, Stripe, and Klaviyo, that's your problem. Minerva's agentic data engineer automates the unification.

**6. Match rate likely lower (no public benchmarks).**
Windfall doesn't publish match rate benchmarks. Based on their data sources (public records, SEC filings, real estate transactions), their coverage is likely strong on homeowners and high-net-worth individuals but weaker on younger consumers, renters, and people without public financial footprints. Minerva's 70-80% match rate comes from the breadth of our identity graph (personal + professional + digital identifiers).

### Windfall's Strengths (Be Honest)
- Deeper net worth precision: they've invested heavily in modeling individual-level net worth, and their deterministic approach (real estate + SEC filings + court records) is genuinely good for wealth screening specifically
- Strong nonprofit brand: if a prospect is primarily a nonprofit, Windfall has purpose-built tooling for that workflow
- Weekly data refresh: their wealth data refresh cadence is solid
- SOC 2 Type 2 compliant

---

## Competitor 2: Crustdata

**Website:** crustdata.com
**Category:** Direct competitor (B2B data enrichment API, particularly for agents)
**HQ:** Austin, TX (YC F24)
**Funding:** Y Combinator backed, early-stage
**Founders:** Chris, Abhilash, Manmohit

### Positioning
**Hero headline:** "Real-time B2B data via simple APIs"
**Tagline:** "We're reshaping the data on the internet from useful to humans to useful for AI agents"
**Claimed positioning:** The data infrastructure layer for AI agents and B2B GTM teams. Real-time company and people data via APIs.

### Products
1. **Company Enrichment API** — 250+ firmographic datapoints (headcount, revenue, funding, tech stack, web traffic)
2. **People Enrichment API** — 90+ datapoints per person (work history, education, skills, social links)
3. **Company Screener** — Search/filter companies by criteria (headcount, growth, funding, location)
4. **People Search API** — Find people by criteria
5. **Web Search API** — Structured web search built for AI agents (entity-linked, not "10 blue links")
6. **Watcher** — Real-time signals (job changes, promotions, funding rounds, hiring surges)

### Value Propositions
1. Real-time data (live, not monthly/weekly batch)
2. Built for AI agents (structured output, not dashboards)
3. 250+ company datapoints, 90+ people datapoints
4. 16+ trusted data sources
5. Sub-1s response for cached enrichments
6. Historical data available for 6 company datapoints

### Industries Served
- AI/Agent platforms (primary)
- Sales teams / SDR workflows
- Recruiting platforms
- Investment firms / VC
- Any SaaS building with B2B data

### Key Logos / Customers
- Not prominently displayed on website
- Product Hunt traction: 703 upvotes on initial launch, 568 on People Dataset, 348 on Web Search API
- YC F24 batch
- Customers are primarily other SaaS platforms and AI agent builders

### Pricing
- API-based pricing (per-call or credit-based)
- Not publicly listed in detail
- Has "Full Dataset" option for bulk/enterprise

### Known Weaknesses / Attack Angles

**1. B2B only — zero consumer data.**
Crustdata has firmographic and professional data: headcount, revenue, funding, tech stack, job title, work history. What they don't have: consumer income, household net worth, property records, interests/hobbies, purchase behavior, political affiliation, vehicle ownership, household composition, behavioral intent signals, donor behavior, or any of the 2,000+ consumer attributes Minerva covers. If your use case requires understanding the consumer (not just the professional), Crustdata is the wrong tool.

**2. No identity graph connecting personal and professional.**
Crustdata enriches by LinkedIn URL, business email, or company domain. If you have a personal email (Gmail, Yahoo), they can't match it. No B2B2C resolution. No mobile ad ID matching. No IP-to-person resolution. The whole point of Minerva's identity graph is connecting identifiers across contexts — Crustdata only works within the B2B context.

**3. No consumer workflows or platform.**
Crustdata is an API and dataset company. They provide raw data for developers to build on. No audience generation, no campaign orchestration, no lead scoring, no direct mail targeting, no CDP functionality. If you're a CMO who wants to improve ROAS or a CRO who wants to score leads by buying power, Crustdata has nothing for you.

**4. Narrow use case focus: B2B SDR agents.**
Crustdata's positioning and content are almost entirely focused on powering AI SDR agents and B2B outbound workflows. Recruiting platforms and investment research are secondary. Consumer-facing brands, nonprofits, hospitality, real estate, financial services — all of Minerva's core verticals — are not served by Crustdata.

**5. Early-stage with limited track record.**
YC F24 batch. Limited public case studies or customer testimonials. No named enterprise logos. Product Hunt is their primary social proof channel. Minerva has named customers (Hard Rock Stadium, Wander, Juicebox, Luxury Presence), partnerships (NBA, Experian, Clay), and $20M raised.

**6. "Real-time" advantage is B2B-specific.**
Crustdata's real-time data refresh is genuinely valuable for tracking headcount changes, funding rounds, and job movements. But for consumer data — income, property, interests, household composition — real-time refresh isn't the bottleneck. The bottleneck is having the data at all, which Crustdata doesn't.

### Crustdata's Strengths (Be Honest)
- Genuinely good for B2B firmographic data: headcount trends, funding history, tech stack detection are well-executed
- Real-time signals: their Watcher product for job changes and funding rounds is faster than most competitors
- Developer experience: clean API docs, screener tool, structured output designed for programmatic consumption
- AI-native positioning: they're specifically building for agent consumption, which is forward-looking
- YC network and brand: legitimacy with technical founders and AI builders
- Web Search API: novel product that structures web data for agent consumption — nobody else does this exactly
