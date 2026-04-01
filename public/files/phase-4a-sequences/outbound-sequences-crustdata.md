# Outbound Sequences: CrustData Vampire Attack
## Wave 1 | LaGrowthMachine Configuration
### Voice: Daniel Saedi, Co-Founder | daniel@minerva.io
### Last Updated: 2026-04-01

---

> **Context:** These sequences target CrustData LinkedIn followers -people who already use or evaluate B2B data APIs. They are HIGH awareness. Lead with data quality and price (apples-to-apples displacement), NOT consumer data. Consumer data is the close, not the open.
>
> **LaGrowthMachine workflow:** Email track (4 emails with delays) runs parallel with LinkedIn track (connection request + message on accept). Identity: Jackson Engles (or Daniel Saedi).
>
> **Merge fields:** `{{firstName}}`, `{{company}}`, `{{title}}`
>
> **Voice rules:**
> - All lowercase. Casual. Like a smart person in your network reaching out organically.
> - No salesy language, ever. Goal is to inform, not sell.
> - No em dashes. Hyphens okay if natural.
> - CTAs are questions ("are you using...?") or soft offers ("can i send more info?"). Never pushy.
> - Open with "saw you follow crustdata" for organic context, then ask a genuine question.
> - Short. Direct. Specific but not over-precise (say "over 2,000" not "2,168").
> - Tone: like a friend describing a tool that'd solve their problem. Not a salesperson.

---

## EMAIL TRACK

---

### Email Intro #1 - Day 0

**Subject options (test 2):**
- A: `{{firstName}}, quick question on your enrichment stack`
- B: `saw you follow crustdata`

**Body:**

hey {{firstName}},

saw you follow crustdata. are you actively using them at {{company}}, or just keeping tabs?

i'm daniel, co-founder at minerva. we built a people enrichment API that returns over 2,000 fields per person in one call. professional data that's multi-sourced and standardized, plus consumer data that b2b-only providers don't touch. juicebox swapped their entire enrichment stack for ours.

curious what you're running now and if it'd be worth comparing?

daniel

---

### Email FollowUp #1 - Day 2 (if no reply)

**Subject options:**
- A: `re: enrichment stack`
- B: `{{firstName}}, one more thing`

**Body:**

hey {{firstName}},

one thing i didn't mention. our contact graph is probably the part that matters most day-to-day.

733M emails, 899M phones, 270M+ addresses. personal and professional, all linked. most teams i talk to are either running a waterfall across 2-3 contact providers or just living with gaps. we return verified emails, mobile phones, and addresses in the same call as everything else. no second vendor. no waterfall.

on top of that, we return income, property, household, interests, purchase behavior. over 2,000 fields per person. if you're scoring leads or personalizing anything, the consumer layer changes what's possible.

no per-seat pricing either. purely usage-based.

worth a look for {{company}}?

daniel

---

### Email FollowUp #2 - Day 7 (if no reply)

**Subject options:**
- A: `free head-to-head test`
- B: `we'll run the comparison for you`

**Body:**

hey {{firstName}},

figured i'd just offer this directly. send us the same file you run through your current provider and we'll run a head-to-head. match rates by identifier type, field preview, side-by-side comparison.

24 hours. no commitment. no call required.

hard rock stadium, wander, and juicebox all started with this exact test. happy to do the same for {{company}} if you're curious.

daniel
daniel@minerva.io

---

### Email BreakUp #1 - Day 14 (if no reply)

**Subject options:**
- A: `closing the loop`
- B: `last one from me`

**Body:**

hey {{firstName}},

just busy or not interested?

either way, no worries. if enrichment data ever comes up at {{company}}, here's the short version: over 2,000 fields per person, one API call, no per-seat pricing, and we'll run a free head-to-head test on your actual data anytime.

daniel@minerva.io if anything changes.

daniel

---

## LINKEDIN TRACK

---

### LinkedIn Connection Request - Day 0 (concurrent with Email 1)

**Character limit: 300 characters**

**Option A (organic + curious):**
hey {{firstName}}, saw you follow crustdata so figured you're in the enrichment world. i'm building minerva, people enrichment API. over 2,000 fields per person, multi-sourced professional data. would be good to connect.

**Option B (organic + direct):**
hey {{firstName}}, noticed you're in the data/AI space. co-founder at minerva, we do people enrichment. over 2,000 fields per person in one API call. curious to connect.

**Option C (shortest):**
hey {{firstName}}, co-founder at minerva. people enrichment API, over 2,000 fields per person. saw you follow crustdata, thought i'd reach out.

---

### LinkedIn Message (on accept, within 60 days)

**Different angle from connection request. Max 2-3 sentences.**

**Option A (bake-off offer):**
hey {{firstName}}, are you actively using an enrichment provider right now? if you ever want to test yours against ours, send me a sample file and i'll return match rates + field preview in 24 hours.

**Option B (resource share):**
hey {{firstName}}, we put together a comparison of enrichment APIs covering field depth, match rates, and pricing. think you'd find it useful. want the link?

*[Link to: landing-page-vs-crustdata.md or comparison-blog-crustdata.md when hosted]*

**Option C (question + info offer):**
hey {{firstName}}, random question. does your current enrichment provider charge per seat? we don't. purely usage-based. curious what you're running at {{company}}.

---

## SEGMENT-SPECIFIC CUSTOMIZATION

For Tier 1 (12 targets), manually customize Email 1 and LinkedIn connection using these segment hooks:

### Segment A: Active Data API Builder
- Email 1 customization: "saw you're building [product/feature] at {{company}}. our API was built for teams like yours."
- LinkedIn note: reference their specific product or linkedin title.

### Segment B: AI/Agent Builder
- Email 1 customization: "if your agents are making decisions off enrichment data, the fill rate and standardization of that data matters way more than most teams realize."
- LinkedIn note: "building AI at {{company}}? we're powering the data layer for teams doing similar stuff."

### Segment C: GTM Data Consumer
- Email 1 customization: "running GTM at {{company}}? our professional data has 99.47% job title fill and 71% verified mobile phones. multi-sourced and standardized."
- LinkedIn note: reference their GTM role and team.

### Segment D: Technical Founder
- Email 1 customization: "founder to founder, the data layer your product sits on matters. ours is multi-sourced, standardized, over 2,000 fields in one call."
- LinkedIn note: "founder to founder, built something i think you'd want to see."

### Segment E: Product Leader
- Email 1 customization: "if you're embedding enrichment data in {{company}}'s product, the quality gap between providers shows up directly in your users' experience."
- LinkedIn note: reference their platform/product and the embedding use case.

---

## LAGROWTHACHINE CONFIGURATION NOTES

1. **Workflow:** Email track + LinkedIn track run in parallel from Day 0
2. **Email delays:** Intro (Day 0) → FollowUp 1 (Day 2, no reply) → FollowUp 2 (Day 7, no reply) → BreakUp (Day 14, no reply)
3. **LinkedIn:** Connection request (Day 0) → Message on accept (within 60 days)
4. **Identity:** Jackson Engles (as shown in screenshot) or Daniel Saedi
5. **Audience:** Upload v3_targets_tier_1.csv, v3_targets_tier_2.csv, v3_targets_tier_3.csv as separate campaigns
6. **Tier 1 (12):** Manual personalization on Email 1 + LinkedIn note before launch
7. **Tier 2 (89):** Use templates with merge fields as-is
8. **Tier 3 (292):** Email track only (no LinkedIn). Use Email 1, FollowUp 2 (skip FollowUp 1), BreakUp.
9. **Daily send limits:** 30-50 LinkedIn connections/day, scale email as allowed
10. **Stagger:** Tier 1 launches Day 0. Tier 2 starts Day 3. Tier 3 starts Day 7.

---

## TRACKING

- Tag every reply by segment (A/B/C/D/E/F) and tier (1/2/3)
- Track which email drives the most bake-off requests
- Track LinkedIn accept rate by connection request variant
- Track which angle (data quality vs price vs bake-off) generates meetings
- After 2 weeks: audit reply rates by segment/tier. Feed learnings into Wave 2 angle selection.

---

## RESOURCES TO LINK IN SEQUENCES

- [ ] Comparison blog: comparison-blog-crustdata.md
- [ ] Landing page: landing-page-vs-crustdata.md
- [ ] Lead magnet: bakeoff-kit-evaluation-guide.md + bakeoff-scoring-spreadsheet.csv
- [ ] Case study: case-study-juicebox.md (illustrative — validate with Juicebox before publishing)
