# Demo Guide: CrustData Vampire Attack
## Phase 5 — Sales Enablement
### Voice: Daniel Saedi, Co-Founder | daniel@minerva.io
### Last Updated: 2026-04-01

---

## 1. PRE-DEMO PREP (5 minutes before the call)

### Research the Prospect

| What to Find | Where to Look | Why It Matters |
|---|---|---|
| Their product | Company website, Product Hunt, LinkedIn | Determines which fields to highlight |
| Their likely enrichment use case | Job title, team size, product description | Drives demo narrative |
| Their segment (A-E) | Check CRM tag from outbound sequence | Sets demo hook and emphasis |
| Current enrichment provider | Discovery notes, or check their docs/blog for API mentions | Frames competitive comparison |
| Technical depth | Are they an engineer? PM? Sales leader? | Determines how deep to go on API details |

### Pre-Load in Your Browser

- [ ] Minerva API docs (the endpoint they'll care about)
- [ ] A sample API call pre-built with an identifier matching their use case (work email for B2B, personal email for mixed, phone number if relevant)
- [ ] The battlecard side-by-side table (Minerva vs CrustData field comparison)
- [ ] Their company's website on a separate tab (reference during the call)

### Sample Input Strategy

If you have their data from the bake-off or sign-up: use it.

If not, prepare a sample that mirrors their use case:
- **Segment A/B (API builders):** Use a work email → show the full professional + consumer response
- **Segment C (GTM):** Use a personal email → show that Minerva resolves it where B2B-only providers return nothing
- **Segment D (Founders):** Use their own LinkedIn URL or email as input → makes it personal and memorable
- **Segment E (Product leaders):** Use a consumer profile that shows income, interests, household data — the "wow" fields

---

## 2. DEMO FLOW (20 MINUTES)

### Minute 0-3: Confirm Use Case + Set Agenda

> "Thanks for jumping on. Before I share my screen, let me make sure I understand your use case. From our last conversation, you're [building X / enriching Y / trying to solve Z]. That still right?"

Wait for confirmation. Adjust if needed.

> "Cool. Here's what I'll show you in 20 minutes. First, a live API call so you see the raw output. Then I'll walk through data quality — fill rates, sourcing, standardization. Then match rates — what happens with different identifier types. And we'll end with pricing and next steps. Sound good?"

**Do not skip the agenda.** It keeps the demo tight and gives you permission to move through sections.

### Minute 3-8: Live API Call

**This is the most important section. Show, don't tell.**

1. Open terminal or API client (Postman, curl, or your preferred tool)
2. Send a real-time enrichment request using an identifier relevant to their use case
3. Show the full JSON response

**Talk track while the response loads:**

> "I'm sending a single API call with [a work email / personal email / phone number]. One endpoint. One call. What comes back is 2,168 fields organized into 13 categories."

**When the response appears:**

Walk through the categories. Don't read every field. Hit the highlights that matter for their segment:

| Category | When to Highlight |
|---|---|
| Professional (job title, company, seniority) | Always — this is the apples-to-apples comparison |
| Contact info (emails, phones, addresses) | Always — show multiple verified emails, mobile phones |
| Income/wealth | Segments C, D, E — anyone doing personalization or scoring |
| Property/real estate | Segment E, real estate companies, wealth-adjacent use cases |
| Interests/behavioral | Segment B (agent builders), Segment E (product personalization) |
| Household composition | Segment E, anyone doing consumer segmentation |
| Purchase behavior | Segment C (GTM), Segment E |
| Vehicle data | Only if relevant (insurance, automotive, luxury) |
| Digital/mobile | Segment B (agents), Segment A (app builders) |

**Key moment:** After walking through 5-6 categories, pause and say:

> "This is one person, one API call. CrustData would return 90 fields for this same person — all professional. No income, no property, no interests, no household data. Not because they chose not to include it. Because their graph doesn't have it."

### Minute 8-12: Professional Data Quality

This section wins deals. Most prospects assume "B2B data is B2B data." Prove them wrong.

**Show the professional fields side by side:**

> "Let's look at just the professional data — the part where we directly overlap with CrustData."

Point out:
- **Standardized job titles:** "See how the title is normalized? Not just the raw LinkedIn scrape. We standardize to a canonical form so you can filter and segment without regex."
- **Fill rates:** "Across our graph, 99.47% of records have a job title. 94.62% have a job level. These are independently audited numbers. CrustData hasn't published fill rates."
- **Multi-sourcing:** "This professional data is multi-sourced from 7+ verified providers covering 839M+ records, including Ethical Web Data certified sources. We cross-reference and deduplicate. CrustData pulls from 16+ web scrapers. More sources sounds better until you realize there's no published methodology for resolving conflicts between them."
- **Phone coverage:** "71% mobile phone fill. Verified through a third-party phone verification layer before it enters the graph."

### Minute 12-16: Match Rate Demonstration

**This is where the identity graph advantage becomes concrete.**

> "Now let me show you something that really matters for real-world data. I'm going to send a personal Gmail address through the API."

Send a personal email (e.g., a Gmail or Yahoo address) through Minerva. Show the full profile returned.

> "We just resolved a personal email to a full professional and consumer profile. Our contact graph is best-in-class: 733M emails, 899M phones, 270M+ addresses. Personal and professional, all linked. Most teams I talk to are running a waterfall across 2-3 contact providers or just living with gaps. We return everything in one call. No waterfall. No second vendor."

> "If you sent this same Gmail address to CrustData, you'd get nothing. Their graph only indexes professional identifiers — work emails, LinkedIn URLs, company domains. In the real world, your input data is messy. People sign up with personal emails. Your CRM has phone numbers, not LinkedIn URLs. Your event list has Gmail addresses. A B2B-only graph can't resolve any of that. With us, you replace the waterfall."

**Match rate comparison (use these numbers):**

| Input Type | Minerva Match Rate | CrustData Match Rate |
|---|---|---|
| Work email | 70-80% | Similar (their strength) |
| Personal email | 70-80% | ~0% (can't resolve) |
| Phone number | 70-80% | ~0% (can't resolve) |
| Physical address | 60-70% | ~0% (can't resolve) |
| Mixed file (real-world) | 70-80% | 20-30% (only matches work emails in the file) |

> "On a mixed-identifier file — which is what most companies actually have — we match 70-80%. B2B-only providers match 20-30% because they can only resolve the work emails in the file. That's not a small difference. That's the difference between enriching most of your database and enriching a fraction of it."

### Minute 16-18: Pricing + Integration

**Keep this section fast and direct.**

> "Pricing is usage-based. No per-seat fees. No annual minimums. You pay for API calls. If you're coming from CrustData at ~$200/month, we'll match that pricing for product integrations. As you scale, the unit economics get better, not worse."

> "Integration is one REST API endpoint. POST a JSON request, get a JSON response. Same pattern as any enrichment API you've used. We also have an MCP server for agent workflows. Most teams integrate in under a day. And we offer white-glove setup — our engineering team will pair with yours and build it together."

> "We work with Clay as a native integration. If you're in the Clay ecosystem, you can start using Minerva data without writing any code."

### Minute 18-20: Next Steps

**Pick the right close based on where they are:**

**If they're convinced — go to bake-off:**
> "The fastest way to make this real is a head-to-head test on your data. Send me 100-500 records. I'll run them through Minerva tonight and have results back within 24 hours. You'll see match rate, field depth, and accuracy side by side. Want to do that?"

**If they need to think — give free credits:**
> "I'll set you up with free API credits. No credit card. You test it on your own terms. I'll send the quick start guide and check in on Day 2 to make sure your first call went through. Fair?"

**If they need internal buy-in:**
> "Let me send you the results from today's demo plus a pricing estimate. You can share it with your team. Want to loop anyone else into a 15-minute follow-up?"

---

## 3. SEGMENT-SPECIFIC DEMO HOOKS

### Segment A — Active Data API Builder
- **Lead with:** API response structure. Show how clean the JSON is. Mention standardized fields, nested objects, consistent schema.
- **Emphasize:** Fill rates, multi-sourcing, single-endpoint simplicity. "One call replaces 3-4 API vendors."
- **Close with:** "Juicebox replaced their entire enrichment stack with our single integration."

### Segment B — AI/Agent Builder
- **Lead with:** MCP server. Show how an agent can call Minerva natively. Demonstrate structured output that LLMs can parse.
- **Emphasize:** Field depth for agent decision-making. "Your agent can now factor in income, interests, and household data — not just job title."
- **Close with:** "We're building the data layer for AI agents. 2,168 fields per person means your agent has the context it needs to make real decisions."

### Segment C — GTM Data Consumer
- **Lead with:** Match rate on mixed files. Use a personal email as input. Show that CrustData returns nothing on the same input.
- **Emphasize:** Contact info accuracy — verified phones, multiple emails, addresses. Clay integration.
- **Close with:** "You're paying for data that only works on 30% of your file. We work on 70-80%."

### Segment D — Technical Founder
- **Lead with:** Speed. Make the first API call in under 60 seconds during the demo. Show how fast it is to integrate.
- **Emphasize:** Usage-based pricing (no per-seat tax on a small team), white-glove setup (save engineering time), breadth of data (build features your competitors can't).
- **Close with:** "Free credits, no credit card. Test it today, integrate tomorrow."

### Segment E — Product Leader
- **Lead with:** The "wow" fields. Show income brackets, property data, interests, household composition. Paint the picture of what their product could do with this data.
- **Emphasize:** Competitive differentiation. "Your competitors are enriching with 90 fields. You'd have 2,168. That's a product advantage, not just a data advantage."
- **Close with:** "Hard Rock Stadium uses this for sponsor matchmaking. Luxury Presence uses it for real estate personalization. What would your team build with it?"

---

## 4. COMPETITIVE COMPARISON TALKING POINTS

When CrustData comes up during the demo, use these.

### On Data Breadth
> "CrustData has 90 person fields and 250+ company fields. Strong on the company side. On the person side, we return 24x more data — 2,168 fields across 13 categories. Professional, consumer, financial, property, household, interests, behavioral, and more. It's not that CrustData is incomplete for B2B. It's that B2B-only is incomplete for most real-world use cases."

### On Data Quality (Professional Fields)
> "Even on the professional fields where we overlap, our data is multi-sourced from 7+ verified providers, standardized, and deduplicated. 99.47% job title fill. 95% overall accuracy. CrustData pulls from 16+ scraped web sources. More sources is good, but they haven't published fill rates, accuracy metrics, or a standardization methodology. We have."

### On Match Rate / Contact Graph
> "Our contact graph is best-in-class. 733M emails, 899M phones, 270M+ addresses. Personal and professional, all linked in one call. Most teams are running a waterfall across 2-3 contact providers — one for work emails, one for phones, maybe one for personal. That gets expensive and the coverage is still inconsistent. We replace the waterfall. On a real-world mixed file, that's the difference between 70-80% match rate and 20-30%."

### On Company Signals (Where CrustData Is Strong)
Be honest when they have an advantage:
> "CrustData's company data and real-time signals are solid. Their Watcher product — job postings, funding alerts, hiring trends — that's genuinely useful and not something we focus on. If real-time company signals are your primary need, CrustData is a reasonable choice for that specific use case. But if your primary need is person enrichment, we're in a different category."

### On Pricing
> "CrustData is ~$200/month. We're usage-based, no per-seat fees, and we'll match pricing for product integrations. At scale, our unit economics are better because you're making one API call instead of stacking 3-4 vendors to get the same field coverage."

### On YC / Brand
> "CrustData is YC-backed, which is great for credibility. We're partnered with the NBA, Experian, and Clay. Our data sources are independently certified — Ethical Web Data Collection certification, third-party accuracy audits. Brand is nice. Data quality is measurable. Run the bake-off."

---

*Every demo should end with a clear next step. Never let a demo end with "we'll follow up." Either they send a file for the bake-off, they take free credits, or they schedule a follow-up with decision-makers. Pick one and confirm it before you hang up.*
