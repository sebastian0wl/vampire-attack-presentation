# Follow-Up Templates: CrustData Vampire Attack
## Phase 5 — Sales Enablement
### Voice: Daniel Saedi, Co-Founder | daniel@minerva.io
### Last Updated: 2026-04-01

---

> **Usage notes:** All templates are from Daniel Saedi. Send from daniel@minerva.io. Keep it short, specific, and human. Replace all [bracketed] placeholders before sending. These are plain text emails, not HTML newsletters.

---

## 1. POST-DISCOVERY CALL FOLLOW-UP

**When to send:** Within 1 hour of discovery call
**Subject:** `good talking, {{firstName}}`

---

Hey {{firstName}},

Appreciated the conversation today. A few things stuck out:

- You mentioned [specific pain point they raised — e.g., "your match rates drop to ~25% when you send personal emails through CrustData"]
- [Second pain point or use case — e.g., "your team is stitching together 3 vendors to cover professional + contact + firmographic data"]
- [What they said they wished they had — e.g., "you want income and household data but assumed that meant a separate consumer data vendor"]

Minerva handles all three in one API call. 2,168 fields per person, 70-80% match rate on mixed files, usage-based pricing.

[Relevant case study — choose one]:
- Juicebox consolidated their entire enrichment stack into a single Minerva integration
- Hard Rock Stadium uses our consumer data for sponsor matchmaking
- Luxury Presence uses our property + income data for real estate personalization

Next step we agreed on: [bake-off with your file / free API credits / follow-up demo with your team].

I'll [send the bake-off results by tomorrow / email you the API key and quick start guide / send a calendar link for the team demo].

Daniel

---

## 2. POST-DEMO FOLLOW-UP

**When to send:** Within 1 hour of demo
**Subject:** `recap + next steps`

---

Hey {{firstName}},

Thanks for sitting through the demo. Here's everything in one place:

**What we showed you:**
- Live API call with [the identifier type you used — e.g., "a personal Gmail address"] → full 2,168-field response
- Professional data quality: 99.47% job title fill, multi-sourced from 7+ verified providers, standardized
- Match rate on mixed identifiers: 70-80% vs ~20-30% from B2B-only providers
- [Any specific field categories they reacted to — e.g., "income brackets and household composition for your scoring model"]

**Resources:**
- API docs: [docs.minerva.io link]
- Quick start guide: [link]
- [If pricing was discussed]: Pricing estimate based on your volume: [X per month / usage-based at $Y per call]

**Next step:** [What you agreed on — e.g., "You're sending me 200 records by EOD Friday. I'll run the head-to-head and have results back within 24 hours."]

If anything comes up before then, reply here or text me.

Daniel

---

## 3. BAKE-OFF RESULTS DELIVERY

**When to send:** When 24-hour bake-off results are ready
**Subject:** `your bake-off results are in`

---

Hey {{firstName}},

Ran your [X] records through Minerva. Here's what came back.

**Match Rate:**
- Total records submitted: [X]
- Minerva matched: [Y] ([Z]%)
- [If known] Your current provider typically matches: [A]% on this type of file

**Field Depth (per matched record):**
- Professional fields returned: [X] (job title, company, seniority, work email, work phone, LinkedIn)
- Consumer fields returned: [X] (income, property, household, interests, behavioral, vehicle)
- Contact fields returned: [X] (personal emails, mobile phones, verified addresses)
- Total fields per person: up to 2,168

**Notable Findings:**
- [Specific finding #1 — e.g., "143 of your 200 records had personal email inputs. Minerva matched 112 of them (78%). A B2B-only provider would return 0 on personal emails."]
- [Specific finding #2 — e.g., "94% of matched records came back with a mobile phone number. 71% had income bracket data."]
- [Specific finding #3 — e.g., "Job titles were standardized — no raw LinkedIn scrapes. Every record had a normalized seniority level."]

**What this means for {{company}}:**
[1-2 sentences connecting the results to their specific use case — e.g., "Your scoring model would have usable data on 78% of your file instead of 25%. And you'd have income + household data to weight the scores."]

Want to hop on a 15-minute call to walk through the results together? I can show you the raw output and answer questions.

Daniel

---

## 4. POST-BAKE-OFF FOLLOW-UP (DAY 3)

**When to send:** 3 days after bake-off results if no response
**Subject:** `re: your bake-off results are in`

---

Hey {{firstName}},

Checking in on the bake-off results I sent over [day of week]. Two questions:

1. Did the numbers match what you expected, or were there surprises?
2. Is there someone else on your team who should see these results?

Happy to do a 15-minute walkthrough or send a summary formatted for your team. Whatever's easiest.

Daniel

---

## 5. SIGNUP TRIGGER SEQUENCE

*Triggered when someone signs up for free API credits (Bake-Off Kit).*

### Email 1 — Immediate (on signup)

**Subject:** `your Minerva API key`

---

Hey {{firstName}},

You're in. Here's your setup:

**API Key:** [key]
**Quick Start Guide:** [link to docs]
**Endpoint:** `POST https://api.minerva.io/v1/enrich`

Send a JSON request with any identifier — work email, personal email, phone number, address, LinkedIn URL — and you'll get up to 2,168 fields back per person.

Your free credits cover [X] API calls. No credit card on file, no expiration.

Two options:
1. **Run it yourself** — the quick start guide has copy-paste curl examples, Python snippets, and a Postman collection.
2. **Reply to this email and I'll run the bake-off for you.** Send me a CSV with 100-500 records (any identifiers you have) and I'll send back enriched results within 24 hours.

Option 2 is faster and you don't have to write any code.

Daniel
Co-Founder, Minerva BI

---

### Email 2 — Day 2

**Subject:** `did your first call go through?`

---

Hey {{firstName}},

Quick check-in. Did you get a successful API call?

If you ran into anything — auth issues, formatting questions, unexpected responses — reply here and I'll sort it out personally. Not a support ticket. Just me.

If you haven't had time yet, no pressure. But if you want help getting started, we do white-glove setup: our engineering team will hop on a 15-minute call, walk you through the integration, and make sure your first call returns what you need.

Want me to set that up?

Daniel

---

### Email 3 — Day 5

**Subject:** `how'd the test go?`

---

Hey {{firstName}},

It's been a few days since you got your API key. Curious how the test went.

A few things worth looking at if you haven't already:
- **Match rate** — what percentage of your test records came back with a full profile?
- **Field depth** — did you see the consumer fields (income, property, household, interests) alongside the professional data?
- **Data quality** — were the job titles standardized? Were phone numbers verified?

If you want to compare your results to what you're getting from your current provider, I can run a side-by-side analysis. Takes me about an hour.

Or if you're ready to talk about integrating into [your product / your workflow / your stack], let's set up 20 minutes. I'll bring pricing based on your volume.

Daniel

---

## 6. CONTRACT / PRICING FOLLOW-UP

**When to send:** After pricing is discussed in a call or demo
**Subject:** `pricing for {{company}}`

---

Hey {{firstName}},

Here's the pricing breakdown we discussed:

**Your current setup (estimated):**
- [Provider name]: $[X]/month for [what they get]
- [If multiple vendors]: [Provider 2]: $[Y]/month
- Total: ~$[Z]/month for [total fields/coverage they get today]

**Minerva:**
- Usage-based: $[X] per [enrichment call / record / month based on their volume]
- No per-seat fees
- 2,168 fields per person (vs [Y] fields from current setup)
- [Match rate improvement: e.g., "70-80% match rate vs your current ~25% on mixed files"]
- White-glove integration included

**Net difference:** [Specific — e.g., "Same monthly cost, 24x more data per record, 3x better match rate on mixed files. Or: $50/month less and you consolidate 3 vendors into 1."]

We'll match pricing for product integrations. If your volume is higher than what we discussed, the per-record cost drops.

Want to move forward? I can have your account provisioned today and our engineering team paired with yours by [day of week].

Daniel

---

## 7. GONE DARK RE-ENGAGEMENT

**When to send:** After 7+ days of silence at any stage
**Subject:** pick one based on stage:
- Post-discovery: `still thinking about the enrichment switch?`
- Post-demo: `re: minerva demo`
- Post-bake-off: `your bake-off results`
- Post-pricing: `re: pricing for {{company}}`

---

Hey {{firstName}},

I know things get busy. Not going to send you a "just checking in" chain.

One question: is enrichment still a priority for {{company}} right now?

If yes — I'm here. We can pick up wherever we left off. [Reference the last concrete thing: "Your bake-off showed 78% match rate vs your current 25%." / "We had pricing at $X/month." / "You were going to send me a test file."]

If the timing's off, no problem. Just tell me and I'll stop emailing.

Daniel

---

*Filing rule: After sending any template, log the send date, template used, and any personalization notes in the CRM. Every follow-up should reference something specific from prior conversations. Generic follow-ups get ignored.*
