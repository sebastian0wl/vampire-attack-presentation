# Discovery Script: CrustData Vampire Attack
## Phase 5 — Sales Enablement
### Voice: Daniel Saedi, Co-Founder | daniel@minerva.io
### Last Updated: 2026-04-01

---

## 1. OPENING (15 SECONDS)

Adjust based on how they entered:

**If they replied to outbound email:**
> "Hey [Name], appreciate you writing back. You mentioned [reference their reply — interested in match rates / pricing / the bake-off]. I want to make sure I understand what you're building so I can show you the right stuff. Mind if I ask a few quick questions first?"

**If they signed up for the Bake-Off Kit:**
> "Hey [Name], Daniel from Minerva. Saw you grabbed API credits — thanks for checking us out. Before I walk you through anything, I want to understand what you're working on so I don't waste your time. Cool?"

**If they booked a demo directly:**
> "Hey [Name], thanks for booking time. I'm Daniel, co-founder at Minerva. We're a people enrichment API — 2,168 fields per person, one call. But before I show you anything, I want to understand your setup. That way I can make the demo actually useful. Sound good?"

---

## 2. DISCOVERY QUESTIONS BY SEGMENT

### Segment A — Active Data API Builder
*These people build products on top of enrichment APIs. They care about reliability, fill rates, and API design.*

1. "What enrichment provider are you calling in production right now? How many API calls per month roughly?"
2. "When a record comes back with missing fields — empty job title, no phone — what do you do? Fallback provider? Manual process? Just skip it?"
3. "If you could change one thing about your current enrichment API's output, what would it be?"

### Segment B — AI/Agent Builder
*Building AI agents or LLM-powered workflows that consume enrichment data. Care about structured output and coverage.*

1. "Walk me through how your agent uses enrichment data today. What fields does it actually need to make decisions?"
2. "What happens when the enrichment call returns incomplete data? Does the agent degrade gracefully, or does the whole workflow break?"
3. "Are you stitching together multiple APIs for different data types, or trying to get everything from one source?"

### Segment C — GTM Data Consumer
*Sales/marketing ops people. Care about contact info accuracy, match rates, and CRM integration.*

1. "What does your enrichment workflow look like today? Clay? Zapier? Direct API? Something homegrown?"
2. "When you upload a list of leads, what percentage actually come back with usable contact info — verified email, phone number?"
3. "How many enrichment vendors are you paying for right now? What's the total monthly spend across all of them?"

### Segment D — Technical Founder
*Building fast, evaluating tools quickly. Care about speed-to-value and total cost.*

1. "What are you building, and where does enrichment data fit in the product?"
2. "Are you using enrichment in production yet, or still evaluating? If evaluating — what's the decision timeline?"
3. "What's your budget for data? Are you on a startup plan somewhere, or paying full price?"

### Segment E — Product Leader
*Owns the product roadmap. Cares about data as a feature, competitive differentiation, user experience.*

1. "How does enrichment data show up in your product? Is it user-facing, or mostly powering internal processes?"
2. "What feedback do your users give you about data quality? Any recurring complaints?"
3. "If you had access to 10x more data fields per person — income, property, interests, household — would that change what your product could do?"

---

## 3. PAIN POINT PROBES

Use these follow-ups after initial questions to go deeper. Pick the 2-3 most relevant based on what they said.

**Match rate issues:**
- "What match rate are you seeing on your typical input file? Are those mostly work emails, or a mix of personal emails, phones, addresses?"
- "When you send personal emails through your current provider, what comes back? Anything?"

**Missing data fields:**
- "Are there fields you wish you had but can't get from your current provider? Consumer income? Mobile phones? Household data?"
- "Do you ever have to call a second API just to fill in gaps from the first one?"

**Vendor frustration:**
- "What's the most annoying thing about working with your current provider? Not the data — the experience. Support, docs, billing, whatever."
- "How long did integration take? Days? Weeks?"

**Pricing pain:**
- "How are you being charged today — per seat, per record, monthly flat rate? Do you know your effective cost per enriched record?"
- "Has your bill gone up as you've scaled? Any surprises?"

**Integration complexity:**
- "How many hours did your last enrichment integration take? Who did the work — engineer, ops person, you?"
- "Do you need this in your CRM, your data warehouse, or called in real-time from your app?"

---

## 4. COMPETITIVE INTEL QUESTIONS

These should feel conversational, not interrogative. Weave them into the discovery flow.

- "You mentioned you're using [X] — how long have you been on them?" *(If they've named their provider)*
- "Are you on an annual contract, or month-to-month?" *(Frames switching cost)*
- "Do you remember roughly what you're paying? I ask because our pricing is usage-based and I want to make sure we're in the same ballpark." *(Opens pricing conversation without being pushy)*
- "Did you evaluate other providers before choosing [X]? What made you pick them?" *(Reveals decision criteria)*
- "If you could keep one thing about your current provider and change everything else, what would you keep?" *(Reveals real lock-in vs. perceived lock-in)*

---

## 5. TRANSITION TO DEMO / BAKE-OFF

**If they're clearly interested and technical:**
> "Based on what you've described, I think the fastest way to prove this out is a head-to-head test. Send me 100-500 records — whatever you normally run through your current provider — and I'll run them through Minerva overnight. You'll see the match rate difference, the field depth, and the data quality side by side. No commitment. Takes you 30 seconds to send the file."

**If they want to see the product first:**
> "Let me show you a live API call right now. I'll pull up someone similar to your typical input — same kind of identifier, same use case — and you can see the full 2,168-field response. Then if it looks interesting, we do the bake-off on your actual data. Sound good?"

**If they're early-stage / just exploring:**
> "We have free API credits — no credit card, no time limit. I can get you set up in under 5 minutes. You test it on your own terms, and if you want help interpreting the results, I'm here. Want me to send you the quick start link?"

---

## 6. OBJECTION HANDLING

### Objection 1: "We're happy with CrustData"

**Response:**
> "Good — that means you already know the value of enrichment data. I'm not saying CrustData is bad. I'm saying there's a measurable difference in what you get back per record. CrustData returns 90 fields, all professional. Minerva returns 2,168 fields — professional data that's multi-sourced from 7+ verified providers and standardized, plus consumer data you can't get from them at all. 839M+ employee records. 99.47% job title fill. 95% accuracy. The only way to know if that matters for your use case is to run the same file through both. Takes 24 hours. No contract. If CrustData wins, I'll tell you."

### Objection 2: "We don't need consumer data"

**Response:**
> "Totally fair — and that's not the reason to switch. The reason to switch is that our professional data is better too. Multi-sourced from 7+ verified providers, standardized job titles and seniority levels, 99.47% job title fill. CrustData pulls from 16+ scraped web sources without published standardization. The consumer data — income, property, interests, household — that's a bonus. Most of our customers didn't think they needed it until they saw what it unlocked. Hard Rock Stadium uses it for sponsor matchmaking. Luxury Presence uses it for real estate personalization. But run the bake-off on professional fields alone. If our B2B data isn't better, fair enough."

### Objection 3: "We're locked into a contract"

**Response:**
> "When does it end? I ask because the bake-off takes 24 hours and costs you nothing. You can run it now, see the results, and have your answer ready before renewal. Most teams that switch tell me they wish they'd tested sooner. If your contract is 6+ months out, I'll check back then — but the test data doesn't expire. Want to run it now so you have it when the time comes?"

### Objection 4: "Our team doesn't have bandwidth to switch"

**Response:**
> "Integration is a single REST API endpoint. Same pattern as what you have now — POST a request, get JSON back. We also have an MCP server if your team is building with agents. Most integrations take under a day. And we do white-glove setup — our engineering team will pair with yours, build the integration, and test it. Juicebox replaced their entire enrichment stack with one Minerva integration. The switching cost is lower than you think."

### Objection 5: "Your company is too small / I haven't heard of you"

**Response:**
> "Fair. We're not a household name yet. But the data speaks: our identity graph covers 270M+ Americans, sourced from Experian-grade compilers. We work with Hard Rock Stadium, Wander, FlyUSA, and Luxury Presence. We have a partnership with the NBA. Our data sources are independently audited and certified — Ethical Web Data Collection certification, third-party accuracy audits, 99.47% job title fill. And the bake-off makes the size of our company irrelevant. You'll see the match rate, field depth, and accuracy on your own data. That's the only thing that matters."

---

*Use this script as a framework, not a teleprompter. Match the energy of the person on the call. If they're technical, go deep on API design and data quality. If they're a buyer, go straight to pricing and ROI.*
