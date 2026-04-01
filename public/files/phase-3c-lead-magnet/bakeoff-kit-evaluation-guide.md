# The Data Enrichment Bake-Off Kit

**A structured evaluation framework for comparing data enrichment providers**

*By Jackson Engles, CEO, Minerva BI*

---

## What's Inside

This kit gives you everything you need to run a controlled, side-by-side test of two data enrichment providers in under 30 minutes.

You get:

1. **This evaluation guide** — the 8 dimensions that matter, what to test, and how to score
2. **A scoring spreadsheet** (CSV) — pre-weighted, ready to fill in
3. **500 free Minerva API calls** — no credit card, no sales call, just an API key

The goal is simple: take real records from your CRM, run them through two providers, and compare results on the same rubric. No demos. No slide decks. Just data.

## Who This Is For

- Data engineers evaluating enrichment APIs for a production pipeline
- Product teams building person-level features (recommendations, matching, fraud detection)
- GTM leaders comparing providers before signing an annual contract
- Anyone spending $10K+/year on data enrichment who suspects they're leaving coverage on the table

---

## The 8 Evaluation Dimensions

Every enrichment provider makes claims. Most of them are hard to verify from a sales deck. These 8 dimensions give you a repeatable, quantitative framework for testing those claims against your actual data.

### 1. Field Depth Per Person (Weight: 20%)

**What it measures:** How many distinct attributes does the provider return per resolved person?

This is the single most important predictor of enrichment value. A provider that returns 40 fields per person is fundamentally different from one that returns 2,168 fields across 13 categories.

**What to test:**
- Count the total unique fields returned per record
- Check for demographic, psychographic, financial, and interest-level attributes
- Note whether you get only professional data (title, company, LinkedIn) or also consumer data (household income, interests, property data, vehicle data, political affiliation)
- Look at the field taxonomy. Is it flat or hierarchical? Are fields typed or are they all strings?

**What good looks like:** 500+ fields per person with typed values across at least 8 distinct categories. Anything under 100 fields is a B2B-only provider repackaging the same LinkedIn-derived data everyone else has.

### 2. Match Rate by Identifier Type (Weight: 20%)

**What it measures:** Given an input identifier, what percentage of records does the provider successfully resolve to a person profile?

Match rate varies dramatically by identifier type. A provider might hit 90% on work emails but 15% on personal emails. If your data is phone-heavy or personal-email-heavy, that difference kills your pipeline.

**What to test:**
- Segment your 100-record test file by identifier type: work email, personal email, phone number, name + company
- Calculate match rate for each segment independently
- Check whether partial matches (some fields but not all) are counted as matches

**What good looks like:** 80%+ overall match rate. 85%+ on work emails. 60%+ on personal emails. 50%+ on phone numbers. Providers that only accept work emails as input are disqualified from this dimension entirely.

### 3. Data Quality — Fill Rates (Weight: 15%)

**What it measures:** Of the fields the provider claims to return, what percentage are actually populated for your specific records?

A provider can advertise 500 fields but return 480 of them as null. Fill rate is the gap between schema and reality.

**What to test:**
- For each returned record, count populated fields vs. total available fields
- Calculate fill rate as: (populated fields / total fields) * 100
- Break this down by category (contact info, demographics, financial, interests)
- Flag fields that are populated but obviously stale (e.g., a job title from 2019)

**What good looks like:** 70%+ fill rate across core categories. 90%+ for contact-level fields (name, email, phone). Below 50% fill rate means the provider has the schema but not the data.

### 4. Data Standardization (Weight: 10%)

**What it measures:** Are returned values normalized, typed, and ready for production use? Or do you need to write transformation logic?

This is the hidden cost of enrichment. If a provider returns job titles as free text ("VP of Eng," "Vice President, Engineering," "vp engineering"), you're building a normalization layer before the data is usable.

**What to test:**
- Check if job titles, industries, and locations follow a standard taxonomy
- Look for consistent date formats, phone number formats, and address structures
- Test whether categorical fields (gender, education level, income bracket) use enumerated values or free text
- Verify that the same field returns the same data type across different records

**What good looks like:** Enumerated values for categorical fields. ISO formats for dates and country codes. Pre-normalized job titles mapped to a standard hierarchy. If you have to regex-parse the output, the standardization score drops.

### 5. Consumer Data Coverage (Weight: 15%)

**What it measures:** Does the provider return attributes about the person beyond their professional identity?

Most enrichment APIs are B2B-only. They give you title, company, LinkedIn URL, and maybe a work email. That's fine if all you need is firmographic targeting. But if you're building person-level models, doing identity resolution across channels, or enriching for consumer-facing use cases, you need the other 80% of a person's data.

**What to test:**
- Check for household income, net worth, or financial indicators
- Look for property data (homeowner status, property value, dwelling type)
- Look for interest and affinity data (hobbies, purchase categories, lifestyle segments)
- Check for vehicle data, political data, charitable giving, education history
- Note whether consumer data is available at all, or only professional attributes

**What good looks like:** At least 5 distinct consumer data categories with 50+ populated fields per person. Zero consumer attribute data is a disqualifier for any use case beyond basic B2B outreach.

**Where some providers win here:** A few B2B-focused providers have stronger real-time company signals (funding rounds, job postings, tech stack changes). If your use case is purely company-level triggers, that matters more than consumer depth. Score accordingly.

### 6. Identity Graph Type (Weight: 10%)

**What it measures:** How does the provider resolve identifiers to person records? Is it a deterministic graph, probabilistic, or just a lookup table?

The identity graph determines everything downstream. A deterministic graph links identifiers (email, phone, name, address) to a single resolved identity with known accuracy. A probabilistic graph guesses. A lookup table just does key-value matching and breaks when someone changes jobs.

**What to test:**
- Ask or determine: is the graph deterministic, probabilistic, or a simple database lookup?
- Test with outdated identifiers (old work email, previous phone number) and see if the provider still resolves to the correct person
- Check if the provider links multiple identifiers to the same person (e.g., work email + personal email + phone all resolve to one record)
- Look for a confidence score or match quality indicator in the response

**What good looks like:** Deterministic graph with multi-identifier linking and a confidence score per match. Bonus if the graph handles identifier decay (people change jobs, phone numbers, and emails).

### 7. Pricing Model (Weight: 5%)

**What it measures:** How much does each enriched record actually cost, and is the pricing predictable?

Pricing weight is low because it's the easiest thing to negotiate. But pricing structure matters. Per-call pricing is straightforward. Tiered pricing with overages can surprise you. Annual minimums lock you in.

**What to test:**
- Calculate effective cost per enriched record at your expected volume
- Check for annual minimums or commit requirements
- Ask about overage pricing
- Compare the cost per field (total cost / fields returned per record) not just cost per call
- Check if you pay for failed lookups (no match found)

**What good looks like:** Transparent per-call pricing under $0.10/record at scale. No charge for failed lookups. No annual minimum. Month-to-month available.

### 8. Compliance + Trust Signals (Weight: 5%)

**What it measures:** Where does the data come from, and can you use it legally?

Compliance weight is low because most legitimate providers clear this bar. But it's a binary gate: if the provider can't tell you where their data comes from or doesn't have SOC 2 / privacy certifications, stop the evaluation.

**What to test:**
- Ask for data sourcing documentation
- Check for SOC 2 Type II, CCPA compliance, GDPR readiness
- Look for third-party data quality certifications (e.g., Ethical Web Data Collection)
- Verify the provider has a published privacy policy and data processing agreement
- Check if opt-out mechanisms exist for data subjects

**What good looks like:** SOC 2 Type II certified. Published DPA. Named data sources (not just "proprietary"). Third-party accuracy audits. For reference, Minerva's professional data is multi-sourced from 7+ verified providers covering 839M+ records, with independently audited accuracy (99.47% job title, 95% overall) and Ethical Web Data Collection certification.

---

## Step-by-Step Bake-Off Instructions

Total time: 20-30 minutes.

### Step 1: Export 200 Records from Your CRM

Pull 200 real records. Not your cleanest segment. Your messiest. The bake-off is most useful when you test with the data that's hardest to enrich.

Mix it up:
- ~80 records with work emails
- ~60 records with personal emails (Gmail, Yahoo, Outlook)
- ~40 records with phone numbers only
- ~20 records with name + company only (no email, no phone)

Export as CSV with columns: `first_name`, `last_name`, `email`, `phone`, `company`.

### Step 2: Split into Two Identical Files

Take the 200 records and split them into two files of 100 each. Alternate rows: odd rows go to File A, even rows go to File B. This ensures both files have the same distribution of identifier types.

- **File A** — send to your current provider
- **File B** — send to Minerva (using your 500 free API calls)

### Step 3: Run Both Enrichments

Send File A through your current provider's API or bulk upload.

Send File B through Minerva's API (instructions in the next section).

Save both result sets.

### Step 4: Score Both Providers

Open the scoring spreadsheet (CSV included in this kit). For each of the 8 dimensions:

1. Analyze the results from both providers
2. Assign a score from 1-10 for each provider on each dimension
3. The spreadsheet auto-calculates weighted scores

**Scoring guide:**
- **1-3:** Poor. Missing data, low match rates, no standardization
- **4-6:** Acceptable. Gets the job done for basic use cases but has clear gaps
- **7-8:** Strong. High coverage, good quality, production-ready
- **9-10:** Exceptional. Best-in-class for this specific dimension

### Step 5: Compare Results

Add up the weighted scores. The provider with the higher total is the better fit for your use case.

But also look at dimension-level scores. If Provider A wins on pricing but loses on field depth and match rate, the weighted total tells the real story. You're not optimizing for the cheapest API call. You're optimizing for the most complete person record per dollar.

---

## How to Use Your 500 Free API Calls

### Get Your API Key

1. Go to [minerva.io/signup](https://minerva.io/signup)
2. Create an account (email only, no credit card)
3. Your API key appears on the dashboard immediately
4. You get 500 free enrichment calls. No expiration.

### REST API Endpoint

```
POST https://api.minerva.io/v1/enrich
```

**Headers:**
```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**Example cURL — enrich by email:**
```bash
curl -X POST https://api.minerva.io/v1/enrich \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane.doe@company.com"
  }'
```

**Example cURL — enrich by phone:**
```bash
curl -X POST https://api.minerva.io/v1/enrich \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+14155551234"
  }'
```

**Example cURL — enrich by name + company:**
```bash
curl -X POST https://api.minerva.io/v1/enrich \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Jane",
    "last_name": "Doe",
    "company": "Acme Corp"
  }'
```

### MCP Server Option

If you use Claude, Cursor, or another AI tool with MCP support, you can connect Minerva as an MCP server instead of writing code:

```bash
minerva mcp-server start --api-key YOUR_API_KEY
```

This lets you enrich records directly from your AI workflow without writing integration code.

### What to Expect in the Response

Each successful enrichment call returns up to **2,168 fields** organized across **13 categories:**

| Category | Example Fields | Approx. Field Count |
|---|---|---|
| Identity | Full name, aliases, DOB, gender | ~45 |
| Contact | Emails (work + personal), phones, addresses | ~60 |
| Professional | Title, company, industry, seniority, LinkedIn | ~120 |
| Education | Degrees, institutions, graduation years | ~35 |
| Financial | Income bracket, net worth range, credit indicators | ~80 |
| Property | Homeowner status, property value, dwelling type | ~90 |
| Vehicle | Make, model, year, count | ~40 |
| Interests | Hobbies, affinities, lifestyle segments | ~200 |
| Purchase Behavior | Category preferences, channel preferences | ~150 |
| Household | Household size, composition, presence of children | ~60 |
| Political | Party affiliation, donor status, voter registration | ~45 |
| Charitable | Donation categories, giving level | ~30 |
| Digital | Social profiles, online behavior indicators | ~50 |

The response is JSON. Every field is typed (string, integer, boolean, enum, or array). Null fields are omitted from the response, so you only pay bandwidth for actual data.

---

## Reading Your Results

### What Good Looks Like

**Scenario A: Strong enrichment**
You send a personal Gmail address. The provider returns: full name, 2 phone numbers, home address, employer, title, household income bracket, homeowner status, 12 interest categories, education history, and 3 social profiles. Total populated fields: 847.

This means the provider resolved the personal email through a deterministic identity graph, linked it to a full person record, and returned both professional and consumer data.

**Scenario B: Acceptable but limited**
You send a work email. The provider returns: full name, title, company, LinkedIn URL, and company firmographics. Total populated fields: 23.

This is standard B2B enrichment. Fine for sales outreach. Insufficient for person-level modeling, identity resolution, or consumer use cases.

### What Gaps Look Like

**Red flag 1: Zero consumer attributes.** If every returned record contains only professional fields (name, title, company, email), the provider has no consumer data graph. You're getting LinkedIn-derived data repackaged. This matters if your use case requires anything beyond basic firmographic targeting.

**Red flag 2: Match rate collapses on personal emails.** If the provider hits 85% on work emails but drops to 10% on personal emails, their identity graph is built on business data only. For B2C or mixed-identifier use cases, this is a dealbreaker.

**Red flag 3: High field count, low fill rate.** The schema says 500 fields. The average record comes back with 30 populated. This is a coverage problem, not a capability problem. The provider has the data model but not the data.

**Red flag 4: No standardization.** Job titles come back as free text. Locations are inconsistent. Income is a string instead of an enumerated range. You'll spend engineering time normalizing before the data is usable.

---

## FAQ

**How long does the whole bake-off take?**
20-30 minutes if you have your CRM export ready. The Minerva API responds in under 200ms per call. Batch 100 records and you're done in under a minute.

**What identifiers does Minerva accept?**
Email (work or personal), phone number, or name + company. You can pass multiple identifiers in a single call to improve match confidence. The API also accepts LinkedIn URL and physical address as supplementary inputs.

**Do I have to talk to a salesperson to get started?**
No. Sign up, get your API key, and start calling the API. The 500 free calls require no credit card and no demo. If you want to talk to someone after the bake-off, we're available. But it's not required.

**What happens after I use all 500 free calls?**
You can upgrade to a paid plan from the dashboard. Pricing starts at $0.03/call for the first 10K monthly calls and drops with volume. Or just use the bake-off results to make your decision, no obligation.

**Can I use this framework to evaluate providers other than Minerva?**
Yes. The 8 dimensions and scoring spreadsheet work for any enrichment provider comparison. We built this as a general evaluation tool because we believe structured testing is the fastest way to find the right provider. We're confident in how we perform on this rubric, which is why we publish it.

**Is the data CCPA/GDPR compliant?**
Minerva's data sources are independently audited for accuracy and compliance. We maintain SOC 2 Type II certification, publish a DPA, and support consumer opt-out requests. Our professional data is multi-sourced from 7+ verified providers covering 839M+ records, with 99.47% job title accuracy, 95% overall accuracy, and Ethical Web Data Collection certification.

---

*Questions? Reach Jackson at jackson@minerva.io or the engineering team at api-support@minerva.io.*

*Built by Minerva BI. 2,168 fields. 13 categories. One API call.*
