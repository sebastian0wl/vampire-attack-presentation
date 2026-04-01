# Inbound Nurture Email Sequence: CrustData Vampire Attack
## Phase 4b Deliverable | Vampire Attack GTM System
### Date: 2026-04-01

---

> **Audience:** Inbound leads from the comparison blog, /vs/crustdata landing page, or Bake-Off Kit download (free API credits + vendor evaluation guide). LOW-to-MEDIUM awareness. May or may not use CrustData. Found Minerva through content, not from CrustData's follower list.
>
> **Sender:** Daniel Saedi, Co-Founder, Minerva BI
>
> **Voice:** Short, direct, specific. Founder sending a personal note. Not a marketing drip.
>
> **Messaging strategy:** Lead with full differentiation (consumer data + professional data quality + price + support). These are not high-awareness CrustData users, so consumer data leads from email 1.

---

## Email 1: Welcome + Instant Value (Day 0, auto-send on lead capture)

**Subject line options:**
1. The 2,168 vs 90 comparison
2. Your gap analysis results (+ one thing most teams miss)
3. Quick context on what you just downloaded

**From:** Daniel Saedi, Co-Founder @ Minerva BI

**Body:**

Hey {{first_name}},

Thanks for checking out the comparison. Wanted to send one number that frames the whole thing.

CrustData returns 90 fields per person. All professional. Minerva returns 2,168 fields across 13 categories: income, property, household, interests, purchase behavior, and the professional data too. Same API call.

That gap matters when your product or model needs to understand buying power, lifestyle, or intent. Not just job title.

Here's the full breakdown if you want to dig deeper: [Minerva vs CrustData: When B2B Data Isn't Enough →]

**Want to see the difference on your own data? Reply and I'll set up a match rate test.**

- Daniel

---

**Word count:** 97
**Notes:** No fluff opener. Leads with the stat. Single CTA. Blog link adds value without requiring a click.

---

## Email 2: The Data Quality Story (Day 3)

**Subject line options:**
1. The fill rate numbers CrustData won't publish
2. Where our professional data comes from
3. 99.47% job title accuracy (and how we get there)

**From:** Daniel Saedi, Co-Founder @ Minerva BI

**Body:**

Hey {{first_name}},

Quick follow-up on the data comparison. Most people see the 2,168 vs 90 field gap and assume it's all about consumer data.

It's not. Even on the professional fields where we overlap with CrustData, our data is better.

Our professional data is multi-sourced from 7+ verified providers covering 839M+ employee records. The numbers: 99.47% job title fill rate, 94.62% job level accuracy, 71% mobile phone fill rate, 95% email accuracy. Three cleaning passes before a record enters our graph: compiler-level standardization, source-level deduplication, cross-reference matching.

CrustData aggregates from 16+ scraped sources. They publish zero fill rates. Zero accuracy guarantees. No third-party verification.

Then there's the contact graph. 733M emails, 899M phones, 270M+ addresses. Personal and professional, all linked. Most teams are either running a waterfall across 2-3 contact providers or living with gaps. We return verified emails (work + personal), mobile phones, and addresses in the same call. No second vendor. No waterfall.

And the consumer layer on top: income brackets, property records, household composition, behavioral signals on 270M+ Americans. Juicebox uses our API to power their recruiter search tool. One integration replaced multiple vendors. Their match rates jumped because our graph resolves personal emails and phones that B2B-only providers can't touch.

**Send us 100 records. We'll run the comparison in 24 hours.**

- Daniel

---

**Word count:** 178
**Notes:** Leads with professional data quality (the "our B2B data is better too" angle), then expands to consumer as "and also." Juicebox proof point. CTA is low-friction.

---

## Email 3: Use Case / Case Study (Day 7)

**Subject line options:**
1. How Hard Rock Stadium scores 100-level vs suite buyers
2. Three teams using this data differently
3. Which of these sounds like your use case?

**From:** Daniel Saedi, Co-Founder @ Minerva BI

**Body:**

Hey {{first_name}},

Sharing three quick examples of teams using Minerva's data for different problems. One of these probably looks familiar.

**Hard Rock Stadium** scores season ticket leads across product tiers (100-level, 200-level, 300-level, suites). Their ICP scoring model uses income, property value, purchasing behavior, and proximity. None of those fields exist in a B2B-only enrichment API. They route leads to the right product and the right rep before the first conversation happens.

**Wander** rebuilt their Meta and Google audiences using actual consumer attributes instead of black-box ad platform targeting. Same budget, better ROAS. They also use our data for direct mail scoring on vacation property buyers.

**Juicebox** powers their recruiter search with our API. They needed professional data (employer, title, skills) and consumer data (location, household, contact info across identifier types) in a single call. One integration replaced multiple vendors.

**Which use case is closest to yours? Reply and I'll send the relevant case study.**

- Daniel

---

**Word count:** 161
**Notes:** Three distinct use cases covering ICP scoring, paid media optimization, and recruiter/product integration. Each proof point is specific. CTA invites self-segmentation for follow-up.

---

## Email 4: Pricing + Easy Trial (Day 14)

**Subject line options:**
1. No per-seat pricing. Here's how it works.
2. Pricing that makes sense for builders
3. One more thing before I stop emailing you

**From:** Daniel Saedi, Co-Founder @ Minerva BI

**Body:**

Hey {{first_name}},

Last note from me on this.

Minerva is purely usage-based. No per-seat pricing. For product integrations, we'll match pricing. Our goal is to get this data into builders' hands, not optimize for invoice size.

White-glove integration support. We help you get live in a day, not hand you docs and disappear.

**Reply with your use case and I'll send a custom pricing estimate. Or just send us a file and we'll run the bake-off.**

- Daniel

---

**Word count:** 74
**Notes:** Shortest email. Two CTAs (pricing estimate OR bake-off). "Last note from me" signals respect for their inbox without being performative. No specific dollar amounts since Minerva's pricing is custom and usage-based.

---

## Sequence Summary

| Email | Day | Subject (recommended) | Word Count | CTA |
|-------|-----|----------------------|------------|-----|
| 1 | 0 | The 2,168 vs 90 comparison | 97 | Reply for match rate test |
| 2 | 3 | The fill rate numbers CrustData won't publish | 178 | Send 100 records for comparison |
| 3 | 7 | How Hard Rock Stadium scores 100-level vs suite buyers | 161 | Reply with your use case |
| 4 | 14 | No per-seat pricing. Here's how it works. | 74 | Reply for pricing or send a file |

---

## Implementation Notes

1. **Trigger:** Any of: comparison blog form fill, /vs/crustdata page conversion, Consumer Data Gap Calculator PDF download.
2. **Exit conditions:** Reply to any email (move to sales conversation). Book a demo (move to demo nurture). Unsubscribe.
3. **Segmentation opportunity:** If the Consumer Data Gap Calculator captures use case data (lead scoring, paid media, agent personalization, etc.), use that to select the most relevant case study in Email 3 instead of sending all three.
4. **Reply handling:** All replies should route to Daniel Saedi or the assigned AE. These are warm inbound leads with self-identified interest. Response SLA: under 4 hours during business hours.
5. **Tracking:** Tag each email with UTM parameters. Track reply rate per email, not just open/click. Reply is the primary conversion metric for this sequence.
6. **Blog link in Email 1:** Use the published comparison blog post: "Minerva vs CrustData: When B2B Data Isn't Enough."
