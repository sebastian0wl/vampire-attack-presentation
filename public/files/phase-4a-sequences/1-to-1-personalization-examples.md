# 1-to-1 Personalized Outbound: Examples Across All Tiers
## Future Capability | Vampire Attack GTM System
### Date: 2026-04-01

---

> **What this is:** A preview of what outbound looks like when every email is dynamically written using Minerva's 2,168-field enrichment data. Not templates with merge fields. Not segment-level variants. Each email is unique to the person, their company, their role, and their inferred use case.
>
> **Why this matters:** This IS Minerva's product in action. We enrich a prospect. We use that enrichment to write a message only possible with our data depth. The email itself becomes the proof of concept.
>
> **Current status:** Concept for hackathon presentation. Planned for Wave 2/3 implementation.

---

## How It Works

```
INPUT (per contact):
  - full_name, current_title, current_company, company_industry
  - seniority_level, department, city, state
  - estimated_income, estimated_wealth
  - linkedin_title (their self-description)
  - segment (A/B/C/D/E), displacement_score
  - has_consumer_signal (boolean)

CONSTRAINTS:
  - Daniel Saedi voice (casual, lowercase, direct)
  - "saw you follow crustdata" organic opener
  - Lead with displacement angle relevant to THEIR specific role
  - Under 100 words
  - End with a question, not a pitch
  - Humanize-AI clean

OUTPUT:
  - Unique email body per person
```

---

## TIER 1 EXAMPLES (12 targets, score 45-75)

### Stephen Salaka — CTO, MealMatch AI | Score: 75
**Enriched data used:** CTO title, AI food company, Melbourne FL, $101K-$250K income, executive seniority

```
hey stephen, saw you follow crustdata. building the data layer at mealmatch AI,
are you pulling enrichment data into the matching engine? curious because most
food/consumer AI companies hit a wall with B2B-only APIs — they get job titles
but nothing on the actual consumer side (income, dietary preferences, household
size). we return both in one call. curious if that gap has come up yet for you.

daniel
```

### Matt Savage — Agent PM, Decagon | Score: 72
**Enriched data used:** Agent PM title, Decagon (AI agents), SF, age 28, software dev industry

```
hey matt, saw you follow crustdata. building AI agents at decagon — what
enrichment data are you feeding into agent context right now? asking because
agents that know more about the person they're talking to (not just company
and title, but income bracket, household, purchase behavior) handle
conversations differently. we return over 2,000 fields per person. might change
what your agents can do.

daniel
```

### Danny Wen — GTM/Strategy, Findem | Score: 55
**Enriched data used:** GTM at Findem (people search platform), YC investor, Santa Clara, $2M-$5M wealth

```
hey danny, saw you follow crustdata. running GTM at findem, you're probably
deeper in the people data world than almost anyone on this list. curious —
is findem using crustdata as an upstream source, or do you have your own
enrichment pipeline? we power similar use cases with 70-80% match rates on
mixed-identifier files and over 2,000 fields per person. might be interesting to
compare what we return vs what you're ingesting now.

daniel
```

### Brittney Taylor — Director of Sourcing, HireArt | Score: 45
**Enriched data used:** Sourcing director, recruiting company, Mount Vernon NY, $2M-$5M wealth, director level

```
hey brittney, saw you follow crustdata. running sourcing at hireart — what's
your hit rate on mobile phone numbers from your current enrichment provider?
asking because ours is 71% and we return personal emails alongside work
emails. for sourcing teams that's usually the gap: the candidate doesn't
answer their work email, and your provider didn't give you a personal one.

daniel
```

---

## TIER 2 EXAMPLES (89 targets, score 25-44)

> These currently get the same template. With 1-to-1, each one gets copy tailored to their specific role + company + industry.

### Example A — VP Engineering at a fintech startup, NYC
**Enriched data used:** VP Eng title, fintech industry, NYC, $250K+ income, executive seniority

```
hey {{firstName}}, saw you follow crustdata. running engineering at a fintech
company — curious what enrichment API you're using for KYC or customer
identity resolution. most fintech teams need to match across personal emails,
phones, and addresses. B2B-only providers fall apart on those identifiers.
we match 70-80% on mixed files. might be worth a quick comparison.

daniel
```

### Example B — Data Engineer at a recruiting SaaS, Austin
**Enriched data used:** Data eng title, recruiting industry, Austin TX, mid-level seniority

```
hey {{firstName}}, saw you follow crustdata. building data pipelines at a
recruiting company — are you enriching candidate records with their API? we
return over 2,000 fields per person including personal emails, mobile phones (71%
fill rate), and consumer data that most B2B APIs don't touch. for recruiting
use cases the difference shows up fast in candidate reachability.

daniel
```

### Example C — Head of Growth at an AI company, SF
**Enriched data used:** Growth title, AI industry, San Francisco, strategy department

```
hey {{firstName}}, saw you follow crustdata. running growth at an AI company —
curious if you're using enrichment data for lead scoring or more for audience
building. we return income brackets, purchase behavior, and 60+ interest flags
alongside the standard professional data. changes what you can score on. happy
to show you what the full response looks like on a sample file.

daniel
```

### Example D — Co-Founder of a vertical SaaS, remote
**Enriched data used:** Founder title, vertical SaaS, executive seniority, $1M-$2M wealth

```
hey {{firstName}}, saw you follow crustdata. founder to founder — are you
using their API in your product or more for GTM? we do both. over 2,000 fields per
person, one API call, no per-seat pricing. if you're embedding enrichment in
your product, we'll match pricing to make the unit economics work. curious
what you're building.

daniel
```

---

## TIER 3 EXAMPLES (292 targets, score 10-24)

> These currently get a 2-email abbreviated sequence. With 1-to-1, even the lowest-priority targets get a message that feels like it was written for them.

### Example A — Marketing Manager at a mid-size SaaS, Chicago
**Enriched data used:** Marketing title, SaaS industry, Chicago IL, manager level

```
hey {{firstName}}, saw you follow crustdata. running marketing at a SaaS
company — curious if you've tried enrichment data for audience targeting or
lead scoring. we return income, interests, and purchase behavior alongside
the standard professional fields. over 2,000 fields per person. might be worth a
look if your current data only covers the B2B side.

daniel
```

### Example B — ML Engineer at a healthcare company, Boston
**Enriched data used:** ML eng title, healthcare industry, Boston MA

```
hey {{firstName}}, saw you follow crustdata. building ML in healthcare — are
you using enrichment data to train models or more for product features? we
return over 2,000 fields per person including consumer attributes (income, household,
behavioral signals) that most B2B-only APIs don't have. for healthcare ML the
consumer layer usually changes what models can predict. curious if that's
relevant to what you're building.

daniel
```

### Example C — Sales Development Rep at a data company, Denver
**Enriched data used:** SDR title, data industry, Denver CO, entry-level seniority

```
hey {{firstName}}, saw you follow crustdata. running outbound at a data
company — what's your enrichment stack look like? we return over 2,000 fields
including verified mobile phones (71% fill rate) and personal emails. for
SDR teams the difference between getting a personal email vs only a work
email is the difference between a reply and silence. happy to run a quick
comparison on your prospect list.

daniel
```

---

## The Before/After

### BEFORE (segment-level template, what we ship in Wave 1):

```
hey {{firstName}}, saw you follow crustdata. are you actively using them
at {{company}}, or just keeping tabs?

i'm daniel, co-founder at minerva. we built a people enrichment API that
returns over 2,000 fields per person in one call. professional data that's
multi-sourced and standardized, plus consumer data that b2b-only providers
don't touch. juicebox swapped their entire enrichment stack for ours.

curious what you're running now and if it'd be worth comparing?

daniel
```

**Same email goes to:** a CTO at a food AI company, an Agent PM at an enterprise AI startup, a Director of Sourcing at a recruiting company, and a Sales Dev Rep at a data company.

### AFTER (1-to-1, what we build in Wave 2/3):

Each person above gets a completely different email that references their specific:
- **Role** (CTO vs PM vs Sourcing Director vs SDR)
- **Company type** (food AI vs enterprise AI vs recruiting vs data)
- **Likely use case** (data layer architecture vs agent context vs candidate reachability vs outbound prospecting)
- **Relevant proof point** (consumer data gap vs agent enrichment vs phone fill rates vs personal emails)

Same voice. Same length. Same casual tone. But the content is built from over 2,000 fields of enrichment data that only exists because we used Minerva's API.

---

## What This Proves

1. **Minerva's data enables personalization at scale.** This isn't possible with 90 fields. You need income, interests, industry context, household data to write messages this specific.
2. **The system eats its own cooking.** We use Minerva's enrichment to sell Minerva's enrichment. The outbound campaign IS the product demo.
3. **Every tier gets Tier 1 quality.** The 292 Tier 3 targets that currently get a generic 2-email blast would each get a message that feels like Daniel researched them personally.
4. **Reply rates should 2-3x.** Personalized cold email benchmarks show 15-25% reply rates vs 8-12% for template-based. On 393 targets, that's ~20-40 more replies.

---

## Implementation Notes

- **LLM cost:** ~$0.01-0.03 per email at current API pricing. 393 emails = ~$4-12 total.
- **Generation time:** ~2-3 seconds per email. Full batch in under 20 minutes.
- **Review process:** Generate all 393, export to spreadsheet, Daniel spot-checks 20-30, approves the batch.
- **Sending tool:** Instantly or Smartlead (both support unique body per contact via CSV upload or API).
- **A/B test plan:** Wave 2, split 100 targets: 50 get segment template, 50 get 1-to-1. Measure reply rate, positive reply rate, and demo conversion.
