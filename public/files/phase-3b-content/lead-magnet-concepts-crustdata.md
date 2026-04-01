# Lead Magnet Concepts: Minerva BI vs CrustData Displacement Campaign
## Phase 3b Deliverable | Vampire Attack GTM System
### Date: 2026-04-01

---

## Strategic Context

**Goal:** Create gated content that positions Minerva's consumer data depth, B2B2C identity graph, and 70-80% match rate as the evaluation criteria for data enrichment -- criteria CrustData structurally cannot meet. Each lead magnet must provide genuine standalone value, work as a conversion mechanism on comparison/SEO pages, and feed downloaded leads into a demo-booking email nurture sequence.

**Target Audience:**
- CPOs, VP Product, AI Engineers currently using CrustData who need consumer data their tool cannot provide
- CMOs/CROs at consumer-facing brands evaluating data enrichment solutions
- Technical founders building AI agents that interact with consumers (not just businesses)

**CrustData Blind Spots We Exploit:**
1. Zero consumer data (income, wealth, property, interests, behavioral, household)
2. No B2B2C identity resolution (cannot match personal emails, phones, or ad IDs)
3. No platform/workflows (API-only, no audience generation or campaign tools)
4. 90 people fields vs Minerva's 2,168+ fields (24x gap)
5. Only serves B2B use cases (no DTC, luxury, real estate, hospitality, nonprofit)

---

## Concept 1: The Data Enrichment Buyer's Guide

**Name:** "The 2026 Data Enrichment Buyer's Guide: How to Evaluate Providers When You Need More Than B2B"
**Format:** PDF guide (20-25 pages, designed)

### Hook
"Most enrichment API comparison guides only evaluate B2B fields. If your product or go-to-market touches consumers, you're evaluating with the wrong scorecard. This guide gives you the right one."

### Outline
1. **Why most enrichment evaluations get it wrong** -- The default criteria (company fields, professional data, pricing per call) only measure B2B capability. If your use case involves consumers, you need different criteria entirely.
2. **The 7 dimensions that actually matter** -- Identity graph type (B2B vs B2B2C), consumer data categories, match rate across identifier types, field depth per person, platform vs raw API, compliance posture, and vertical coverage.
3. **Evaluation scorecard (fillable)** -- A weighted scoring matrix with 30+ line items across the 7 dimensions. Buyer fills in vendor names and scores each. Consumer data categories are heavily weighted.
4. **Red flags in vendor demos** -- What to watch for: vendors who demo company data but dodge consumer data questions, match rate claims without methodology, "coming soon" roadmap items, lack of named customers.
5. **The B2B2C identity graph test** -- How to run a real-world test: send 1,000 records with mixed identifiers (personal emails, business emails, phones, addresses) and measure match rate and field completeness. Step-by-step instructions.
6. **Sample RFP questions** -- 25 questions to include in your data enrichment RFP that expose whether a vendor has consumer data or is B2B-only.
7. **Decision framework** -- Flowchart: "If your use case involves [X], you need [Y] capability." Maps use cases to required data categories.

### Gate Strategy
- **Primary placement:** CTA within the "Minerva vs CrustData" comparison blog post and the /vs/crustdata landing page
- **Secondary placement:** Bottom of "What is a B2B2C Identity Graph?" pillar guide
- **Tertiary:** Paid social ads targeting "data enrichment API" and "crustdata alternative" search retargeting audiences

### Why It Works Against CrustData
The scorecard reframes the evaluation criteria. Instead of comparing API response time and company field count (where CrustData is competitive), the guide makes consumer data depth, B2B2C identity resolution, and match rate across identifier types the primary dimensions. CrustData scores zero on consumer data categories, cannot match personal identifiers, and has no platform -- exposing fatal gaps on 3 of the 7 dimensions without Minerva saying a single negative word about them. The buyer reaches the conclusion themselves.

---

## Concept 6: Free API Credits + Vendor Evaluation Guide (STAR -- REVISED WINNER)

**Name:** "The Data Enrichment Bake-Off Kit: Free API Credits + Head-to-Head Evaluation Guide"
**Format:** Free trial credits + PDF/spreadsheet evaluation framework

### Why This Beats the Original Winner
The Consumer Data Gap Calculator (Concept 2, below) is an awareness tool. It shows people the gap. But for a displacement campaign targeting people who already know and use data APIs, the goal is to get them to TEST, not to educate. Free credits + an evaluation guide removes friction entirely: the prospect gets free access to run the comparison themselves, and the guide tells them exactly how to do it. The evaluation criteria are framed so Minerva wins on the key dimensions while being fair enough that prospects trust the guide and run the test.

### What's Included

**Part 1: Free API Credits + Trial Period**
- 500 free API calls (enough to enrich a real test file)
- 14-day trial with full access to REST API + MCP server
- No credit card required. No sales call required.
- Setup: API key issued on signup, docs linked, example code included

**Part 2: The Vendor Evaluation Guide (PDF or Google Sheet)**

Structured comparison framework with 8 evaluation dimensions:

| # | Dimension | What to Test | How Minerva Wins | How to Stay Fair |
|---|-----------|-------------|-----------------|-----------------|
| 1 | **Field depth per person** | Count total fields returned per record. List categories. | 2,168 fields (13 categories) vs 90 (2 categories) | Include all categories, not just consumer |
| 2 | **Match rate by identifier type** | Send 100 records with work emails, personal emails, phones, addresses. Measure match % by type. | 70-80% mixed vs 20-30% B2B-only | Use the prospect's actual data, not synthetic |
| 3 | **Data quality (fill rates)** | For matched records, what % of key fields are populated? Job title, phone, email, income, etc. | 99.47% job title, 71% mobile, 95% accuracy (independently audited) | Include professional fields where competitors are strong |
| 4 | **Data standardization** | Are job titles normalized? Seniority levels classified? Departments mapped? | Multi-sourced, standardized, cleaned | Show raw vs standardized examples side by side |
| 5 | **Consumer data coverage** | Does the provider return income, property, household, interests, behavioral? | Yes, all 13 categories | Acknowledge this isn't needed for all use cases |
| 6 | **Identity graph type** | Can it resolve personal emails, phones, home addresses? Or B2B identifiers only? | B2B2C (personal + professional) | Note CrustData's strength on LinkedIn/company identifiers |
| 7 | **Pricing model** | Per-seat? Per-call? Usage-based? Volume discounts? | No per-seat. Usage-based. Will match pricing. | Include transparency of pricing page |
| 8 | **Compliance + trust signals** | CCPA? SOC 2? Named customers? Published case studies? | CCPA compliant, named customers, $20M raised | Note YC badge and funding for competitor |

**Part 3: Step-by-Step Bake-Off Instructions**
1. Export 200 records from your CRM (mix of work emails, personal emails, phones)
2. Split into two identical files (100 each)
3. Send File A to your current provider, File B to Minerva (using your free credits)
4. Use the evaluation spreadsheet to score both providers on all 8 dimensions
5. Compare results side by side using the scoring framework

**Part 4: Scoring Spreadsheet (Google Sheet)**
- Pre-built scoring matrix with weighted dimensions
- Auto-calculates total score per provider
- Weight distribution: field depth (20%), match rate (20%), data quality (15%), standardization (10%), consumer data (15%), identity graph (10%), pricing (5%), compliance (5%)
- Weights are visible and adjustable so the prospect trusts the framework

### Gate Strategy
- **Primary CTA on landing page (/vs/crustdata):** "Get 500 free API calls + our evaluation guide"
- **Primary CTA in outbound sequences:** "We'll run the comparison for you. Or here's 500 free calls to do it yourself."
- **In comparison blog:** "Want to test this on your own data? Get the bake-off kit."
- **Email gate:** Name + work email to get API key + guide download

### Why It Works for Displacement
1. **Removes friction:** No sales call, no commitment, no credit card. Just API key + guide.
2. **Creates product usage:** 500 free calls means they're using Minerva before talking to sales.
3. **Frames the evaluation:** The 8-dimension guide puts consumer data, match rate, and standardization front and center — dimensions where Minerva wins.
4. **Builds trust:** The guide includes dimensions where competitors genuinely excel (company data depth, real-time signals, web search API). Prospects trust a guide that acknowledges competitor strengths.
5. **Ends in a bake-off:** Every step in the guide pushes toward a direct comparison on the prospect's own data.

---

## Concept 2: The Consumer Data Gap Calculator (ORIGINAL WINNER — DEMOTED to Wave 2 Inbound)

**Name:** "The Consumer Data Gap Calculator: What Your Current Enrichment Provider Can't Tell You About Your Customers"
**Format:** Interactive web tool (calculator/assessment) with PDF results export

### Hook
"Paste your current enrichment provider's field list. We'll show you exactly which consumer data categories you're missing, what decisions you can't make without them, and the revenue impact of the gap."

### Outline
1. **Input step: Select your current provider** -- Dropdown with CrustData, Apollo, ZoomInfo, Clearbit, PDL, Lusha, "Other." Tool auto-loads their known field taxonomy. (For CrustData: 90 people fields, 250 company fields, zero consumer fields.)
2. **Input step: Select your use cases** -- Checkboxes: personalization, lead scoring, audience segmentation, propensity modeling, direct mail, paid media optimization, pricing/affordability screening, agent-powered customer interactions. Each use case maps to required data categories.
3. **Gap analysis output** -- Visual matrix showing: which of the 13 consumer data categories your provider covers (green/red). For CrustData: all 13 categories show red. Shows field count comparison (90 vs 2,168).
4. **Impact assessment** -- For each gap, the tool explains the business decision you cannot make. Example: "Without income data, your agents cannot qualify leads by affordability. Without interest data, your personalization engine is guessing."
5. **Match rate simulation** -- "Your provider matches on [business email, LinkedIn URL]. Here's what happens when your input file contains personal emails, phone numbers, or addresses." Shows projected match rate drop for B2B-only providers vs B2B2C graph.
6. **Benchmark data** -- Anonymous aggregate: "Companies that added consumer data enrichment to their B2B stack saw [X]% improvement in lead qualification accuracy and [Y]% improvement in personalization lift." (Use Minerva customer data: Hard Rock Stadium, Wander, Ramp results.)
7. **Downloadable PDF report** -- Personalized gap analysis with the user's selected provider and use cases. Includes "next steps" section with link to book a Minerva demo.

### Gate Strategy
- **Primary placement:** Embedded directly on the /vs/crustdata comparison landing page as the primary CTA (above the fold, "See what CrustData can't show you" button)
- **Secondary placement:** CTA in every Pillar 1 (CrustData competitive) and Pillar 2 (consumer data enrichment) blog post
- **Tertiary:** Standalone landing page promoted via paid search on "crustdata alternative," "consumer data enrichment API," and retargeting ads to blog visitors
- **Email gate:** Require email to download the PDF results report (the interactive tool itself can be ungated to maximize engagement, but the exportable report is gated)

### Why It Works Against CrustData
This is the most lethal concept because it lets the prospect see the gap with their own eyes. They select CrustData from a dropdown, check their real use cases, and watch 13 consumer data categories light up red. The tool does not editorialize -- it simply shows the structural gap between what CrustData provides (B2B professional data) and what consumer-touching use cases require. The emotional impact of seeing a wall of red "not available" indicators is far more persuasive than any white paper claim. It also generates the highest-quality leads: anyone who completes this tool is actively evaluating their current provider and has self-identified their use cases, giving the sales team perfect context for the follow-up demo.

---

## Concept 3: The B2B2C Data Stack Blueprint

**Name:** "The B2B2C Data Stack Blueprint: Architecture Guide for Teams That Need Both Business and Consumer Intelligence"
**Format:** PDF guide with architecture diagrams (15-18 pages, designed)

### Hook
"Your B2B enrichment API handles company and professional data. But your product serves consumers. Here's how leading teams architect a data stack that covers both sides -- without ripping and replacing what already works."

### Outline
1. **The B2B2C data problem** -- Why teams end up with fragmented data stacks: one vendor for firmographic data, another for contact info, manual CSV uploads for consumer attributes, and no identity resolution tying them together.
2. **Reference architecture: The B2B2C stack** -- Diagram showing how a B2B enrichment API (CrustData, Apollo, etc.) fits alongside a consumer data layer (Minerva). Shows the identity graph as the glue connecting professional and personal identifiers on the same person.
3. **Identity resolution explained** -- How B2B2C matching works: starting from a business email, resolving to a personal identity, and appending consumer attributes. Includes the concept of match rate across identifier types and why B2B-only providers fail on personal email input.
4. **Use case playbooks (3 examples)** -- (a) AI agent personalization: agent queries B2B data for company context + consumer data for personal context. (b) Lead scoring: combine firmographic signals with income/wealth/property for affordability qualification. (c) Audience building: start with a B2B list, enrich with consumer interests and behavioral data for paid media targeting.
5. **Implementation guide** -- Step-by-step: how to add a consumer data layer to an existing B2B stack in under a week. API integration patterns, data flow diagrams, and sample code snippets.
6. **What to look for in a consumer data provider** -- Checklist of 12 requirements (coverage, field depth, match rate, identity graph, compliance, API quality). Designed so Minerva checks all 12 and CrustData checks zero.
7. **ROI framework** -- How to calculate the return on adding consumer data: incremental lead qualification accuracy, personalization lift, media spend efficiency. Includes a simple spreadsheet model.

### Gate Strategy
- **Primary placement:** CTA within the "What is a B2B2C Identity Graph?" pillar guide and "The Consumer Data Gap" pillar guide
- **Secondary placement:** /vs/crustdata landing page as secondary CTA (for prospects not ready for a demo but wanting to learn)
- **Tertiary:** LinkedIn Thought Leadership ads targeting VP Product, CPO, and AI Engineer titles at companies with 50-500 employees

### Why It Works Against CrustData
The blueprint positions CrustData as a component (the B2B layer) rather than a complete solution. It doesn't attack CrustData -- it reframes their product as one piece of a larger architecture that requires a consumer data layer to be complete. This is psychologically effective because it validates the buyer's existing investment in CrustData while making clear they need something else on top of it. The "complement, not replace" framing lowers defensiveness and opens the door for Minerva to occupy the consumer data layer. Once Minerva is in the stack, the buyer often realizes they can consolidate both B2B and B2C into Minerva's unified graph.

---

## Concept 4: The Consumer Data Field Taxonomy

**Name:** "2,168 Fields: The Complete Consumer Data Taxonomy for Product and Growth Teams"
**Format:** Interactive spreadsheet (Google Sheet or Airtable) + PDF reference card

### Hook
"There are 2,168 data fields available on 270M+ Americans that most product and growth teams don't even know exist. Browse the complete taxonomy by category, see example values, and find the fields that transform your use case."

### Outline
1. **The taxonomy (core asset)** -- All 2,168 fields organized into 13 categories: income/wealth, property/real estate, household composition, interests/hobbies, purchase behavior, vehicle ownership, political/donor, professional/occupation, digital behavioral, contact/identity, geographic, demographic, and financial indicators. Each field includes: name, description, example value, coverage (% of 270M), and suggested use cases.
2. **Category deep dives** -- One-page summary for each of the 13 categories explaining: what the data represents, how it's sourced, match rate for the category, and 3 real-world use cases.
3. **Use case index** -- "I want to do [X]. Which fields do I need?" Cross-reference table mapping 20 common use cases (lead scoring, personalization, affordability screening, audience building, propensity modeling, direct mail targeting, etc.) to required field categories.
4. **Field comparison: B2B vs B2B2C** -- Side-by-side showing what a typical B2B enrichment API returns (90 professional fields) vs what a B2B2C provider returns (2,168 fields across 13 categories). The visual gap is stark.
5. **API integration examples** -- Sample API calls and response payloads showing how to query by different identifier types (email, phone, address, MAID) and what comes back.
6. **Data quality and compliance** -- How consumer data is sourced, validated, and refreshed. CCPA compliance framework. Opt-out handling.
7. **Getting started** -- Run the head-to-head test on your actual list. We're confident we're better. Start with 100 records and see these fields populated on your actual customer data.

### Gate Strategy
- **Primary placement:** CTA in "Consumer Data Enrichment API" listicle and "consumer data API for AI agents" content
- **Secondary placement:** Developer documentation pages and API reference sidebar
- **Tertiary:** Product Hunt launch asset, Hacker News Show HN companion piece, and developer community posts (Reddit r/dataengineering, r/machinelearning)

### Why It Works Against CrustData
The sheer volume is the message. When a CrustData user browsing 90 professional fields encounters a taxonomy of 2,168 fields across 13 consumer categories, the scale difference is visceral. The field-by-field comparison makes CrustData's "90 datapoints per person" claim feel like a rounding error. And because the taxonomy is genuinely useful as a reference tool (teams will bookmark it and return to it during planning), it maintains ongoing mindshare. Every time a product team asks "do we have data on X?" they'll check this taxonomy first -- and see Minerva's name on it.

---

## Concept 5: The Match Rate Test Kit

**Name:** "The Enrichment Match Rate Test Kit: A Step-by-Step Protocol for Comparing Data Providers"
**Format:** PDF guide (10-12 pages) + CSV template + Python/cURL script package

### Hook
"Every data vendor claims high match rates. Here's a standardized test protocol -- with templates and scripts -- so you can run a real apples-to-apples comparison on your actual customer data. Takes 30 minutes. No vendor involvement required."

### Outline
1. **Why match rate claims are misleading** -- Vendors measure differently: some count partial matches, some exclude unmatched records, some only accept business emails. A standardized test eliminates the ambiguity.
2. **The test protocol** -- Step-by-step: (a) Pull 1,000 records from your CRM/database with mixed identifier types. (b) Split into 4 cohorts by identifier type: business email only, personal email only, phone only, name+address only. (c) Submit each cohort to each vendor's API. (d) Measure match rate and field fill rate per cohort.
3. **CSV template** -- Pre-formatted template with columns for each identifier type, instructions for pulling from common CRMs (HubSpot, Salesforce, Segment), and data cleaning checklist.
4. **Script package** -- Python scripts and cURL commands for submitting test files to popular enrichment APIs (including CrustData, Apollo, Clearbit, PDL, and Minerva). Each script outputs a standardized results CSV for easy comparison.
5. **Scoring rubric** -- How to evaluate results: match rate by identifier type, field completeness score, consumer data fill rate (critical: this is where B2B-only providers score zero), data freshness indicators.
6. **What to expect: Identifier-type performance** -- Explains why B2B-only providers match well on business email/LinkedIn but return nothing on personal email/phone/address. Shows why B2B2C providers maintain 70-80% match rates across all identifier types.
7. **Results interpretation guide** -- "If your match rate drops below X% on personal identifiers, your provider lacks a B2B2C identity graph. If consumer data fields return empty, your provider is B2B-only. Here's what to do next."

### Gate Strategy
- **Primary placement:** CTA in the "We Tested Our Match Rate Against 5 Enrichment Providers" data study blog post
- **Secondary placement:** /vs/crustdata landing page as a "test it yourself" CTA
- **Tertiary:** Developer-targeted LinkedIn and Twitter/X ads, Reddit r/dataengineering posts, and Hacker News distribution

### Why It Works Against CrustData
The test kit is engineered to reveal CrustData's two structural weaknesses without Minerva having to state them. First, the multi-identifier-type test protocol exposes CrustData's inability to match personal emails, phone numbers, and addresses -- identifiers that CrustData's B2B-only graph cannot resolve. Second, the consumer data fill rate metric creates a new evaluation axis where CrustData scores zero. The prospect discovers these gaps through their own testing, which is far more persuasive than marketing claims. And because the kit includes scripts for multiple vendors (not just Minerva), it earns credibility as a neutral evaluation tool -- even though the testing methodology structurally favors providers with B2B2C identity graphs and consumer data.

---

## RECOMMENDED WINNER

### Concept 2: The Consumer Data Gap Calculator

**Why this wins:**

**1. Highest conversion potential.** Interactive tools convert 2-5x higher than static PDFs because they deliver personalized, immediate value. The prospect sees their specific gap, not a generic whitepaper argument.

**2. Self-qualifying leads.** Every user who completes the calculator has: (a) identified their current provider by name, (b) selected their real use cases, and (c) seen exactly which data categories they're missing. This gives the sales team a pre-qualified lead with perfect context for a demo conversation. No other lead magnet generates this level of intent signal.

**3. Maximum psychological impact against CrustData.** When a CrustData user selects their provider and watches 13 consumer data categories light up red, the gap is undeniable. The tool doesn't argue -- it shows. This is more persuasive than any PDF guide because the prospect reaches the conclusion themselves through interaction, not through reading marketing copy.

**4. Dual-gate flexibility.** The interactive tool can remain ungated (maximizing usage and SEO value), while the downloadable PDF report requires an email. This means more people experience the gap analysis (brand impact) while still capturing leads from those who want to save/share their results.

**5. Reusable across all campaigns.** The calculator works against every competitor (Apollo, ZoomInfo, Clearbit, PDL), not just CrustData. Build it once, use it across every vampire attack campaign by pre-loading each competitor's field taxonomy.

**6. Natural nurture sequence trigger.** The results data (provider selected, use cases checked, gaps identified) feeds directly into a segmented email nurture. A CrustData user who checked "propensity modeling" and "paid media optimization" gets different nurture emails than one who checked "lead scoring" and "agent personalization." This enables hyper-relevant follow-up at scale.

**7. Defensible SEO asset.** Interactive tools earn backlinks and social shares at rates that PDFs cannot match. The calculator becomes a destination that ranks for "data enrichment comparison," "enrichment provider evaluation," and long-tail variants.

### Runner-Up: Concept 5 (Match Rate Test Kit)
The test kit is the strongest complement to the calculator. The calculator shows the gap conceptually; the test kit lets the prospect prove it with their own data. Deploy the calculator as the primary lead magnet on comparison pages, and the test kit as the secondary CTA for technical buyers who want hands-on validation. Together, they form a one-two punch: see the gap, then test the gap.

### Recommended Deployment Sequence
1. **Week 1-2:** Build and launch the Consumer Data Gap Calculator (interactive tool + PDF export)
2. **Week 3:** Gate the PDF report behind email capture; connect to email nurture sequence
3. **Week 4:** Publish the Match Rate Test Kit as a secondary lead magnet for technical audiences
4. **Month 2:** Create the Data Enrichment Buyer's Guide as a top-of-funnel asset for broader SEO content
5. **Month 3:** Release the B2B2C Data Stack Blueprint for mid-funnel education content
6. **Ongoing:** The Consumer Data Field Taxonomy becomes a living reference asset, updated quarterly

---

## Email Nurture Integration

All five lead magnets feed into the same nurture architecture, segmented by the data captured at download:

| Signal Captured | Segment | Nurture Angle |
|----------------|---------|---------------|
| Current provider = CrustData | Displacement segment | "You've got B2B covered. Here's what's missing." |
| Current provider = Apollo/ZoomInfo | Competitive segment | "Your enrichment provider wasn't built for consumer data." |
| Use case = AI agent personalization | Technical segment | API docs, MCP integration guide, agent architecture content |
| Use case = lead scoring / paid media | Growth segment | ROI case studies (Hard Rock, Wander), ROAS benchmarks |
| Use case = direct mail / audience building | Marketing segment | Campaign playbooks, audience size estimates, CPM comparisons |
| Downloaded PDF report only | Low-intent segment | Educational drip (B2B2C pillar guide, taxonomy reference) |
| Completed calculator + viewed pricing | High-intent segment | Fast-track to demo booking (SDR outreach within 24 hours) |

**Nurture sequence structure (all segments):**
- Email 1 (Day 0): Deliver the asset + 1 key insight from their gap analysis
- Email 2 (Day 3): Case study matched to their use case (e.g., Hard Rock for personalization, Wander for ROAS)
- Email 3 (Day 7): "The data gap costs you $X" -- ROI framework tailored to their segment
- Email 4 (Day 12): Invite to book a 15-minute data walkthrough (not a "demo" -- lower friction)
- Email 5 (Day 18): Social proof email (customer logos, match rate benchmarks, field depth comparison)
- Email 6 (Day 25): Final CTA with time-limited offer (head-to-head test on their actual list -- "we're confident we're better, run the test," extended trial, or custom field analysis)

---

## Production Notes

- **Design:** All PDF assets should follow Minerva BI brand guidelines. The calculator UI should feel like a product experience, not a marketing form.
- **Data accuracy:** Field counts and category claims must be verified against current Minerva product capabilities before publication. The 2,168 field count, 270M coverage, and 70-80% match rate are load-bearing claims that will be scrutinized.
- **Legal review:** The competitor dropdown in the calculator and any field-count comparisons should be reviewed by legal for accuracy and fair comparison claims.
- **CrustData monitoring:** CrustData is early-stage and shipping fast. Their field counts (90 people, 250 company) and product lineup should be verified quarterly. If they add consumer data capabilities, the calculator and all comparison content must be updated immediately.
- **Versium watch:** Versium is the closest competitor on B2B2C positioning and now has an MCP server. If they create similar comparison tools, differentiate on data depth (2,168 vs their field count) and named customer results.
