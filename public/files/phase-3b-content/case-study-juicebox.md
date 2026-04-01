# How Juicebox Replaced Three Enrichment Vendors with One Minerva API Call
## Customer Case Study | Illustrative

> **Note:** This case study is illustrative. Numbers and quotes are based on known Minerva proof points and Juicebox's public product description. To be validated with Juicebox before publishing.

---

**Company:** Juicebox (juicebox.ai)
**Industry:** AI-powered recruiter search
**Use case:** People enrichment for recruiter intelligence platform
**Minerva product:** People Enrichment API (REST)
**Result:** Replaced 3 data vendors with 1 Minerva integration. Match rates increased. Time to production: 1 day.

---

## The Problem

Juicebox builds AI-powered recruiter search. Their product helps hiring teams find candidates by combining professional signals (employer, title, skills, tenure) with personal context (location, contact info, household) to rank and surface the right people for any role.

Before Minerva, Juicebox pulled data from three separate vendors:

1. A B2B enrichment provider for professional data (employer, job title, work email)
2. A contact data vendor for phone numbers and personal emails
3. A consumer data source for location and demographic attributes

Three APIs. Three contracts. Three data schemas. Three sets of rate limits. Three vendor relationships to manage.

And the data still had gaps.

The B2B provider returned work emails but missed personal emails entirely. The contact vendor had phone numbers, but coverage dropped below 40% for candidates outside major metro areas. The consumer source had demographics but no professional context, so Juicebox had to stitch records together using fuzzy matching on name + location.

Fuzzy matching created duplicates. Duplicates created bad search results. Bad search results meant recruiters lost trust in the product.

"We were spending more engineering time maintaining data pipelines than building search features," said Juicebox's engineering lead. "Every time one vendor changed their schema or deprecated a field, something broke downstream."

---

## Why They Switched

Juicebox's CEO, David Paffenholz, heard about Minerva through the Clay integration marketplace. He ran a test: 500 candidate records from their production database — a mix of work emails, personal emails, LinkedIn URLs, and phone numbers.

Three things stood out in the results.

**Match rate jumped.** Minerva matched 74% of the file. Their previous stack — combining all three vendors — matched 52% of the same records. The gap came from personal emails and phone numbers. Minerva's B2B2C identity graph resolves personal identifiers that B2B-only providers return nothing on.

**Field depth changed what was possible.** Instead of 90 fields from the B2B provider and another 40 from the contact vendor, Minerva returned 2,168 fields per person in a single response. Professional data (employer, title, skills, seniority, work history) came back alongside consumer data (location, household composition, estimated income, interests) — all linked to the same resolved identity.

**The schema was clean.** Job titles were normalized. Seniority levels were classified. Departments were mapped. Phone numbers were typed (mobile vs. landline). Juicebox could pipe the response directly into their search index without transformation.

"I ran the test on a Friday evening," Paffenholz said. "By Monday we had a working prototype with the new data. That's not an exaggeration — the API response was structured exactly how we needed it."

---

## The Integration

One REST API endpoint. POST a JSON request with an identifier (email, phone, name + company, LinkedIn URL). Get back a JSON response with up to 2,168 fields.

Juicebox's integration took less than a day:

**Hour 1-2:** API key provisioned. First test call made. Response schema reviewed.

**Hour 3-5:** Data mapping completed. Juicebox mapped Minerva's response fields to their internal candidate schema. Because Minerva's fields are typed and standardized, most mappings were 1-to-1 with no transformation logic needed.

**Hour 6-8:** Production pipeline updated. The three vendor API calls were replaced with a single Minerva call. Error handling, rate limiting, and retry logic were simpler because there was only one endpoint to manage.

**Day 2:** Full regression test on 10,000 records. Match rates validated. Search quality metrics confirmed improvement. Old vendor integrations deprecated.

Minerva's engineering team paired with Juicebox during setup. Not a support ticket. Not a docs link. A Slack channel with a Minerva engineer who could answer schema questions in real time.

---

## The Results

### Before Minerva

| Metric | Before |
|--------|--------|
| Vendors | 3 |
| Combined match rate | 52% |
| Fields per candidate | ~130 (across all vendors) |
| Monthly data engineering time | ~40 hours (pipeline maintenance, schema updates, dedup) |
| Time to add a new data field to product | 2-3 weeks (vendor negotiation + schema mapping) |
| Personal email coverage | 31% |
| Mobile phone coverage | 38% |

### After Minerva

| Metric | After |
|--------|-------|
| Vendors | 1 |
| Match rate | 74% |
| Fields per candidate | 2,168 |
| Monthly data engineering time | ~5 hours (single pipeline, stable schema) |
| Time to add a new data field to product | Same day (field already in response, just map it) |
| Personal email coverage | 68% |
| Mobile phone coverage | 71% |

### The Math

**Match rate:** 52% → 74%. That's 22 more candidates found per 100 records searched. For a recruiter running 50 searches a day, that's 11 more viable candidates per day showing up in results.

**Engineering time recovered:** 35 hours per month freed from pipeline maintenance. That's almost a full engineering week redirected to product development.

**Vendor cost:** Three contracts replaced with one. Usage-based pricing with no per-seat fees. Total data spend decreased despite getting 16x more fields per record.

---

## What Changed in the Product

With 2,168 fields per candidate instead of 130, Juicebox shipped features that weren't possible before.

**Candidate reachability scoring.** For every candidate, Juicebox now shows a reachability score based on how many contact channels are available: work email, personal email, mobile phone, landline, physical address. Recruiters prioritize candidates they can actually reach, not just candidates who match the job description.

**Household-aware relocation filtering.** Consumer data includes household composition (married, children, homeowner status). Juicebox uses this to flag candidates who are more likely open to relocation vs. rooted in their current metro. Recruiters searching for roles in new offices or remote-optional companies filter on this signal.

**Income-informed offer calibration.** Estimated income brackets help recruiters anchor compensation conversations. Instead of guessing based on title and geography, the search results include a data-informed income range that improves offer competitiveness.

**Multi-identifier search.** Recruiters paste any identifier — a LinkedIn URL from a conference badge scan, a phone number from a referral, a personal Gmail from a resume — and Juicebox resolves it to a full professional + consumer profile. Before Minerva, personal identifiers returned nothing.

---

## Why It Matters for Teams Evaluating CrustData

Juicebox's previous B2B enrichment provider returned 90 fields per person. Professional data only. No personal emails. No mobile phones. No consumer attributes.

That's the same gap teams face with CrustData today.

CrustData built strong company-level data and real-time signals. But on the person enrichment side, they return 90 fields across professional data only. No consumer layer. No identity resolution across personal identifiers.

Juicebox tried to fill that gap with additional vendors. It worked — until the engineering cost of maintaining three pipelines exceeded the value of the data they were stitching together.

Minerva solved it with one API call.

---

## Try the Same Test Juicebox Ran

Send us 100-500 records from your production database. Mix of work emails, personal emails, phones, whatever your real data looks like. We'll return:

1. Match rates broken out by identifier type
2. A preview of the 2,168 fields we return per person
3. Side-by-side comparison vs. what you're getting now

24 hours. No commitment. No sales call required.

**[Run the Bake-Off](https://minerva.io/bake-off)** | **[Get Free API Credits](https://minerva.io/signup)**

---

## Quick Facts

| | |
|---|---|
| **Company** | Juicebox (juicebox.ai) |
| **Product** | AI-powered recruiter search |
| **CEO** | David Paffenholz |
| **Minerva use case** | People enrichment for candidate intelligence |
| **Integration time** | Less than 1 day |
| **Vendors replaced** | 3 → 1 |
| **Match rate improvement** | 52% → 74% |
| **Fields per person** | ~130 → 2,168 |
| **Key data categories** | Professional (employer, title, skills), Consumer (income, household, interests), Contact (personal email, mobile phone, address) |

---

*Questions? Reach Daniel at daniel@minerva.io.*
