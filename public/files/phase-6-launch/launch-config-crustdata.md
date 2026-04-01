# Phase 6: Launch Configuration -- CrustData Vampire Attack
## Wave 1 | Minerva BI
### Date: 2026-04-01

---

> **Purpose:** Operational launch plan for the CrustData vampire attack campaign. Everything in this document is sequenced so that nothing goes live before its dependencies are ready. Follow the checklists top-to-bottom.
>
> **Outbound sender:** Daniel Saedi, Co-Founder | daniel@minerva.io
>
> **Domain:** minerva.io (all URLs, all sender addresses)
>
> **Tool:** LaGrowthMachine for outbound multi-channel execution

---

## 1. PRE-LAUNCH CHECKLIST

### Content Publishing
- [ ] `comparison-blog-crustdata.md` published to minerva.io/blog/minerva-vs-crustdata
- [ ] `landing-page-vs-crustdata.md` published to minerva.io/vs/crustdata
- [ ] `bakeoff-kit-evaluation-guide.md` converted to PDF and hosted as downloadable asset (linked from /vs/crustdata and blog)
- [ ] `bakeoff-scoring-spreadsheet.csv` hosted as downloadable file, linked from the evaluation guide
- [ ] `linkedin-posts-crustdata.md` copied into Daniel's LinkedIn drafts (3 posts, staggered per timeline below)
- [ ] All published pages have UTM-tagged links pointing back to minerva.io (see Section 5)
- [ ] Blog post includes inline form or CTA for bake-off request / free API credits
- [ ] /vs/crustdata landing page includes conversion form (email capture + use case field)

### List Preparation
- [ ] `v3_targets_tier_1.csv` exported, reviewed, and ready for LaGrowthMachine upload (12 targets)
- [ ] `v3_targets_tier_2.csv` exported, reviewed, and ready for LaGrowthMachine upload (89 targets)
- [ ] `v3_targets_tier_3.csv` exported, reviewed, and ready for LaGrowthMachine upload (292 targets)
- [ ] Tier 1 manual personalization complete -- custom Email 1 openers and LinkedIn connection notes written per `v3_tier1_personalization.md`
- [ ] Exclusion list verified: no CrustData employees (3), competitors (3), or investors (12) in any tier CSV
- [ ] Merge fields validated: `{{firstName}}`, `{{company}}`, `{{title}}` populated for all records
- [ ] Spot-check Tier 2: sample 15 records for data accuracy (job title, company, email)

### Tool Setup
- [ ] LaGrowthMachine account active with LinkedIn integration connected
- [ ] Email sender domain (minerva.io) authenticated: SPF, DKIM, DMARC passing
- [ ] Email sender warm-up started at least 7 days before Day 0 (ramp from 10/day to 50/day)
- [ ] Daniel Saedi's LinkedIn account connected to LaGrowthMachine
- [ ] Daily LinkedIn connection limit set to 30-50/day in LaGrowthMachine settings
- [ ] CRM (HubSpot or Pipedrive) connected for reply tracking and deal creation
- [ ] Inbound automation tool configured (see Section 4)
- [ ] Reply routing confirmed: all outbound replies land in Daniel's inbox + CRM

### Review and Approvals
- [ ] Daniel Saedi has reviewed and approved all outbound email copy (`outbound-sequences-crustdata.md`)
- [ ] Daniel has reviewed and approved all LinkedIn connection request and message copy
- [ ] Daniel has reviewed Tier 1 manual personalization for all 12 targets (`v3_tier1_personalization.md`)
- [ ] Daniel has reviewed inbound nurture sequence (`inbound-nurture-sequence.md`)
- [ ] Daniel has reviewed LinkedIn post content (`linkedin-posts-crustdata.md`)
- [ ] Daniel has reviewed sales enablement docs: `discovery-script.md`, `demo-guide.md`, `follow-up-templates.md`
- [ ] Final GO/NO-GO decision recorded

---

## 2. LAGROWTHMACHINE CAMPAIGN SETUP

### Campaign 1: Tier 1 (12 targets) -- Manual Personalization

**Upload:** `v3_targets_tier_1.csv`

**Pre-launch requirement:** Before activating this campaign, manually edit Email 1 body and LinkedIn connection note for each of the 12 targets using the custom openers in `v3_tier1_personalization.md`. Do NOT use the generic template for Tier 1.

**Email Track:**
| Step | Email | Day | Condition | Notes |
|------|-------|-----|-----------|-------|
| 1 | Email Intro #1 | Day 0 | -- | Manually customized per target. Subject A/B test active. |
| 2 | Email FollowUp #1 | Day 2 | No reply | Subject: "re: enrichment stack" or "{{firstName}}, one more thing" |
| 3 | Email FollowUp #2 | Day 7 | No reply | Bake-off offer. Subject: "free head-to-head test" |
| 4 | Email BreakUp #1 | Day 14 | No reply | Final touch. Subject: "closing the loop" |

**LinkedIn Track (parallel):**
| Step | Action | Day | Condition | Notes |
|------|--------|-----|-----------|-------|
| 1 | Connection Request | Day 0 | -- | Custom note per target from personalization guide |
| 2 | Message on Accept | Within 60 days | Connection accepted | Use Option A (bake-off offer) or Option B (resource share) |

**Identity:** Daniel Saedi (daniel@minerva.io)
**Launch:** Day 0

---

### Campaign 2: Tier 2 (89 targets) -- Semi-Automated

**Upload:** `v3_targets_tier_2.csv`

**Email Track:**
| Step | Email | Day | Condition | Notes |
|------|-------|-----|-----------|-------|
| 1 | Email Intro #1 | Day 0 (of Tier 2 launch = campaign Day 3) | -- | Template with merge fields. Subject A/B test. |
| 2 | Email FollowUp #1 | Day 2 | No reply | Consumer data angle. |
| 3 | Email FollowUp #2 | Day 7 | No reply | Bake-off offer. |
| 4 | Email BreakUp #1 | Day 14 | No reply | Final touch. |

**LinkedIn Track (parallel):**
| Step | Action | Day | Condition | Notes |
|------|--------|-----|-----------|-------|
| 1 | Connection Request | Day 0 (of Tier 2 launch) | -- | Templated note with merge fields (Option A, B, or C) |
| 2 | Message on Accept | Within 60 days | Connection accepted | Option A, B, or C |

**Identity:** Daniel Saedi (daniel@minerva.io)
**Launch:** Day 3 (staggered 3 days after Tier 1)

---

### Campaign 3: Tier 3 (292 targets) -- Email Only, Abbreviated

**Upload:** `v3_targets_tier_3.csv`

**Email Track (abbreviated -- skip FollowUp #1):**
| Step | Email | Day | Condition | Notes |
|------|-------|-----|-----------|-------|
| 1 | Email Intro #1 | Day 0 (of Tier 3 launch = campaign Day 7) | -- | Template with merge fields. Subject A/B test. |
| 2 | Email FollowUp #2 | Day 7 | No reply | Bake-off offer (skip FollowUp #1 to keep sequence tight). |
| 3 | Email BreakUp #1 | Day 14 | No reply | Final touch. |

**No LinkedIn Track.** Tier 3 is email-only.

**Identity:** Daniel Saedi (daniel@minerva.io)
**Launch:** Day 7 (staggered 7 days after Tier 1)

---

### Workflow Configuration (All Campaigns)

| Setting | Value |
|---------|-------|
| Email delay: Intro to FollowUp 1 | 2 days |
| Email delay: FollowUp 1 to FollowUp 2 | 5 days (Day 2 to Day 7) |
| Email delay: FollowUp 2 to BreakUp | 7 days (Day 7 to Day 14) |
| LinkedIn connection request | Day 0, concurrent with Email Intro |
| LinkedIn message on accept | Auto-send within 60 days of acceptance |
| Daily LinkedIn connection limit | 30-50 connections/day |
| Daily email send limit | Scale as sender reputation allows (start 50/day, ramp to 100/day) |
| Send window | Mon-Fri, 8:00 AM - 11:00 AM recipient local time |
| Stop on reply | Yes -- any reply removes prospect from sequence |
| Stop on bounce | Yes -- hard bounces removed immediately |

---

## 3. ASSET MAP

| Deliverable File | Publish Location | Type | Owner | Status |
|-----------------|------------------|------|-------|--------|
| `comparison-blog-crustdata.md` | minerva.io/blog/minerva-vs-crustdata | Blog post (public) | Justin / dev team | [ ] |
| `landing-page-vs-crustdata.md` | minerva.io/vs/crustdata | Landing page (public) | Justin / dev team | [ ] |
| `bakeoff-kit-evaluation-guide.md` | Downloadable PDF linked from /vs/crustdata and blog | Lead magnet (gated) | Justin / dev team | [ ] |
| `bakeoff-scoring-spreadsheet.csv` | Downloadable file linked from evaluation guide | Lead magnet (gated) | Justin / dev team | [ ] |
| `linkedin-posts-crustdata.md` | Daniel's LinkedIn profile | Social posts (manual) | Daniel Saedi | [ ] |
| `outbound-sequences-crustdata.md` | LaGrowthMachine (Campaigns 1, 2, 3) | Outbound sequences | Daniel / Justin | [ ] |
| `persona-sequence-angle-map.md` | Internal reference doc | Strategy doc (internal) | Justin | [ ] |
| `v3_tier1_personalization.md` | Internal reference for Tier 1 customization | Personalization guide (internal) | Justin | [ ] |
| `inbound-nurture-sequence.md` | Email automation tool (Klaviyo, Customer.io, or HubSpot Workflows) | Inbound drip (automated) | Justin / dev team | [ ] |
| `discovery-script.md` | Internal doc for Daniel | Sales enablement (internal) | Daniel Saedi | [ ] |
| `demo-guide.md` | Internal doc for Daniel | Sales enablement (internal) | Daniel Saedi | [ ] |
| `follow-up-templates.md` | Internal doc, copy-paste per conversation | Sales enablement (internal) | Daniel Saedi | [ ] |
| `v3_targets_tier_1.csv` | LaGrowthMachine Campaign 1 upload | Target list | Justin | [ ] |
| `v3_targets_tier_2.csv` | LaGrowthMachine Campaign 2 upload | Target list | Justin | [ ] |
| `v3_targets_tier_3.csv` | LaGrowthMachine Campaign 3 upload | Target list | Justin | [ ] |
| `battlecard-crustdata.md` | Internal reference for Daniel during calls | Sales enablement (internal) | Daniel Saedi | [ ] |

---

## 4. INBOUND AUTOMATION SETUP

### Trigger Configuration

Set up 4 inbound triggers that enroll leads into the nurture sequence from `inbound-nurture-sequence.md`:

| Trigger | Source | Entry Event | Notes |
|---------|--------|-------------|-------|
| **Trigger 1** | Comparison blog form fill | Visitor submits form on minerva.io/blog/minerva-vs-crustdata | Capture: email, first name, company (optional), use case (optional) |
| **Trigger 2** | /vs/crustdata page conversion | Visitor submits form on minerva.io/vs/crustdata | Capture: email, first name, company, use case |
| **Trigger 3** | Bake-Off Kit download | Visitor requests evaluation guide + scoring spreadsheet | Capture: email, first name, company. Tag as "bakeoff-interest" |
| **Trigger 4** | Free API credits signup | Visitor signs up for free API trial credits | Capture: email, first name, company, use case. Tag as "trial-signup" |

### Nurture Sequence Timing

Once a trigger fires, the lead enters the 4-email nurture sequence:

| Email | Timing | Subject (recommended) | CTA |
|-------|--------|----------------------|-----|
| Email 1 | Day 0 (immediate on trigger) | The 2,168 vs 90 comparison | Reply for match rate test |
| Email 2 | Day 3 | The fill rate numbers CrustData won't publish | Send 100 records for comparison |
| Email 3 | Day 7 | How Hard Rock Stadium scores 100-level vs suite buyers | Reply with your use case |
| Email 4 | Day 14 | No per-seat pricing. Here's how it works. | Reply for pricing or send a file |

### Exit Conditions
- Lead replies to any email --> exit nurture, move to sales conversation
- Lead books a demo --> exit nurture, move to demo pipeline
- Lead unsubscribes --> exit nurture, suppress from future sends

### Tool Recommendation

**Primary recommendation: Customer.io**
- Best for event-triggered email sequences with conditional logic
- API-friendly for triggering from form submissions
- Supports merge fields, delay rules, and exit conditions natively

**Alternative options:**
- **HubSpot Workflows** -- if already using HubSpot as CRM, keeps everything in one system
- **Klaviyo** -- strong if running e-commerce or consumer-facing flows alongside B2B
- **Loops.so** -- lightweight, founder-friendly, good for early-stage teams

### Reply Routing

| Rule | Action |
|------|--------|
| Any reply to nurture emails | Route to Daniel Saedi (daniel@minerva.io) or assigned AE |
| Response SLA | Under 4 hours during business hours (Mon-Fri 9AM-6PM ET) |
| After-hours replies | Acknowledged within 4 hours of next business day |
| High-intent replies (bake-off request, pricing question, demo request) | Flag in CRM, notify Daniel via Slack/email immediately |

---

## 5. TRACKING & ATTRIBUTION

### UTM Parameter Structure

All outbound links should use this UTM structure:

```
https://minerva.io/[page]?utm_source=[source]&utm_medium=[medium]&utm_campaign=crustdata-vampire-wave1&utm_content=[content]
```

| Link Context | utm_source | utm_medium | utm_content |
|-------------|------------|------------|-------------|
| Outbound email (Tier 1) | lgm | email | tier1-email[N] (e.g., tier1-email1) |
| Outbound email (Tier 2) | lgm | email | tier2-email[N] |
| Outbound email (Tier 3) | lgm | email | tier3-email[N] |
| LinkedIn connection message | lgm | linkedin | linkedin-dm |
| LinkedIn post (Daniel) | linkedin | organic | linkedin-post[N] |
| Blog organic traffic | google | organic | blog-crustdata |
| Nurture email | nurture | email | nurture-email[N] |

### What to Track Per Channel

**Outbound Email (LaGrowthMachine):**
| Metric | Segmentation | Target |
|--------|-------------|--------|
| Reply rate | By tier (1/2/3) and segment (A/B/C/D/E/F) | See Section 7 |
| Bounce rate | By tier | Under 3% |
| Open rate | By tier, by subject line variant (A vs B) | 40%+ |
| Bake-off requests | By tier, by email step (which email drove the request) | Track absolute count |
| Unsubscribe rate | By tier | Under 1% |

**LinkedIn (LaGrowthMachine):**
| Metric | Segmentation | Target |
|--------|-------------|--------|
| Connection accept rate | By connection request variant (A/B/C) | 25%+ |
| Message reply rate | By message variant (A/B/C) | 15%+ |
| Profile views (Daniel's) | Weekly trend | Directional |

**Inbound (Blog + Landing Page + Lead Magnet):**
| Metric | Segmentation | Target |
|--------|-------------|--------|
| Page visits | By source (organic, LinkedIn, outbound link) | Track trend |
| Form conversion rate | By page (blog vs /vs/crustdata vs bakeoff kit) | 5%+ |
| Lead magnet downloads | By trigger source | Track absolute count |
| Nurture reply rate | By email step, by trigger source | 8%+ |

### Recommended Tracking Tools

| Tool | Purpose |
|------|---------|
| LaGrowthMachine dashboard | Outbound email + LinkedIn metrics (reply rate, open rate, accept rate) |
| Google Analytics 4 | Inbound page traffic, UTM attribution, conversion tracking |
| CRM (HubSpot or Pipedrive) | Pipeline tracking, deal stage, reply logging, contact timeline |
| Customer.io (or chosen email tool) | Nurture sequence metrics (open, click, reply, unsubscribe) |
| Google Sheets | Weekly rollup dashboard combining all sources (manual, lightweight) |

### Weekly Review Cadence

**Every Monday morning:**
1. Pull LaGrowthMachine stats: reply rates by tier, by segment, by email step
2. Pull LinkedIn accept rates by variant
3. Pull inbound traffic and conversion numbers from GA4
4. Pull nurture sequence metrics from email tool
5. Log all data in weekly tracking spreadsheet
6. Flag any metric that is below target (see Section 7) for discussion

**Review meeting:** 30 minutes, Monday or Tuesday. Daniel + Justin. Decisions: adjust angles, pause underperformers, scale winners.

---

## 6. STAGGERED LAUNCH TIMELINE

### Pre-Launch: Day -7 to Day -1

| Day | Action | Owner | Dependency |
|-----|--------|-------|------------|
| Day -7 | Begin email sender warm-up (daniel@minerva.io). Start at 10 emails/day, ramp 10/day. | Justin | SPF/DKIM/DMARC configured |
| Day -7 | Publish `comparison-blog-crustdata.md` to minerva.io/blog/minerva-vs-crustdata | Dev team | Content approved by Daniel |
| Day -7 | Publish `landing-page-vs-crustdata.md` to minerva.io/vs/crustdata | Dev team | Content approved by Daniel |
| Day -6 | Host `bakeoff-kit-evaluation-guide.md` as downloadable PDF. Host `bakeoff-scoring-spreadsheet.csv`. | Dev team | Guide and spreadsheet finalized |
| Day -6 | Set up conversion forms on blog, /vs/crustdata page, and bakeoff kit download page | Dev team | Pages published |
| Day -5 | Configure inbound automation: 4 triggers, nurture sequence, exit conditions, reply routing | Justin | Email automation tool account active |
| Day -5 | Test inbound flow end-to-end: submit form, receive Email 1, verify merge fields, verify reply routing | Justin | Automation configured |
| Day -4 | Upload `v3_targets_tier_1.csv` to LaGrowthMachine Campaign 1. Input all 12 custom Email 1 bodies and LinkedIn notes from `v3_tier1_personalization.md`. | Justin | Personalization guide reviewed by Daniel |
| Day -4 | Upload `v3_targets_tier_2.csv` to LaGrowthMachine Campaign 2. Configure templates with merge fields. | Justin | CSV validated |
| Day -4 | Upload `v3_targets_tier_3.csv` to LaGrowthMachine Campaign 3. Configure abbreviated sequence (Email 1, FollowUp 2, BreakUp). | Justin | CSV validated |
| Day -3 | Test LaGrowthMachine sequences: send test emails to internal addresses, verify merge fields render, verify delays. | Justin | Campaigns configured |
| Day -2 | Daniel final copy review: outbound sequences, LinkedIn posts, Tier 1 personalization, nurture sequence | Daniel | All copy loaded |
| Day -1 | Set up UTM parameters on all outbound links. Verify tracking in GA4. | Justin | Pages live, GA4 configured |
| Day -1 | Final GO/NO-GO. Confirm: sender warm-up complete, content live, forms working, automation tested, Daniel approved. | Daniel + Justin | All above complete |

### Launch: Day 0 to Day 21

| Day | Action | Owner | Notes |
|-----|--------|-------|-------|
| **Day 0** | **Activate LaGrowthMachine Campaign 1 (Tier 1, 12 targets).** Emails + LinkedIn connection requests go out. | Justin | Monitor for bounces and errors in first 2 hours. |
| Day 0 | Daniel publishes LinkedIn Post #1 from `linkedin-posts-crustdata.md` | Daniel | Time for 9-10 AM ET for maximum reach |
| Day 1 | Check Campaign 1 delivery: any bounces? Any LinkedIn connection errors? Fix issues. | Justin | -- |
| Day 2 | Campaign 1 FollowUp #1 fires automatically (if no reply). Monitor. | Auto | -- |
| **Day 3** | **Activate LaGrowthMachine Campaign 2 (Tier 2, 89 targets).** Emails + LinkedIn connection requests go out. | Justin | LinkedIn daily limit: 30-50 connections. May take 2 days to send all connection requests. |
| Day 3 | Daniel publishes LinkedIn Post #2 | Daniel | Different angle from Post #1 |
| Day 5 | Campaign 2 FollowUp #1 fires automatically. Monitor reply rates across both tiers. | Auto / Justin | -- |
| **Day 7** | **Activate LaGrowthMachine Campaign 3 (Tier 3, 292 targets).** Email only, no LinkedIn. | Justin | Abbreviated sequence: Email 1, FollowUp 2 (Day 14), BreakUp (Day 21). |
| Day 7 | **Inbound nurture automation goes live.** All 4 triggers active. | Justin | Test one more time with a real form submission before confirming. |
| Day 7 | Daniel publishes LinkedIn Post #3 | Daniel | -- |
| Day 7 | Campaign 1 FollowUp #2 fires (bake-off offer). This is often the highest-converting email. Monitor closely. | Auto / Justin | -- |
| Day 10 | Campaign 2 FollowUp #2 fires. Pull first reply rate numbers for Tier 1 + Tier 2. | Auto / Justin | -- |
| **Day 14** | **First performance review.** Full metrics pull across all channels. Compare to targets in Section 7. | Daniel + Justin | See Section 8 for escalation if below target. |
| Day 14 | Campaign 1 BreakUp fires. Campaign 3 FollowUp #2 fires. | Auto | -- |
| Day 14 | Inbound nurture Email 4 fires for Day 0 leads (pricing email). | Auto | -- |
| **Day 21** | **Wave 1 results analysis.** All Tier 1 and Tier 2 sequences complete. Tier 3 BreakUp fires. | Daniel + Justin | Full debrief: what worked, what didn't, which segments responded, which angles converted. |
| Day 21 | **Wave 2 planning begins.** Use learnings from Wave 1 to select angles, segments, and channels for expanded ICP targeting via Person Search API + inbound content scaling. | Justin | Reference Wave 2 outline in `persona-sequence-angle-map.md`. |

---

## 7. SUCCESS METRICS

### Wave 1 Targets

**Outbound Reply Rates:**
| Tier | Targets | Target Reply Rate | Target Replies | Rationale |
|------|---------|-------------------|----------------|-----------|
| Tier 1 | 12 | 25%+ | 3+ replies | Manual personalization + highest-fit targets. Realistic for hyper-personalized founder outreach. |
| Tier 2 | 89 | 12%+ | 11+ replies | Semi-automated with merge fields. Good templates + CrustData follower context. |
| Tier 3 | 292 | 8%+ | 23+ replies | Email only, abbreviated sequence. Lower fit, higher volume. |
| **Total** | **393** | **~10%** | **37+ replies** | -- |

**Bake-Off Requests:**
| Source | Target | Notes |
|--------|--------|-------|
| Outbound (all tiers) | 8-12 bake-off requests | Driven primarily by FollowUp #2 (the bake-off email) |
| Inbound (blog + landing page + lead magnet) | 3-5 bake-off requests | From nurture sequence and direct form fills |
| **Total** | **11-17 bake-off requests** | -- |

**LinkedIn Metrics:**
| Metric | Target | Notes |
|--------|--------|-------|
| Connection accept rate (Tier 1) | 40%+ | Manual, personalized notes |
| Connection accept rate (Tier 2) | 25%+ | Templated notes with merge fields |
| DM reply rate (post-accept) | 15%+ | On the follow-up message after connection |
| LinkedIn post impressions (3 posts) | 2,000+ total | Daniel's network + engagement |

**Inbound Metrics:**
| Metric | Target | Notes |
|--------|--------|-------|
| Blog traffic (minerva.io/blog/minerva-vs-crustdata) | 200+ visits in first 21 days | From LinkedIn posts, outbound links, organic |
| /vs/crustdata page visits | 100+ visits in first 21 days | From blog CTA, outbound links, direct |
| Lead magnet downloads (evaluation guide) | 15-25 downloads | Gated content |
| Nurture sequence reply rate | 8%+ | Across all 4 emails |

**Pipeline Metrics:**
| Metric | Target (Day 21) | Notes |
|--------|-----------------|-------|
| Demos booked | 5-8 | From outbound replies + inbound conversions |
| Bake-offs completed | 4-6 | Subset of bake-off requests that send data |
| Deals in pipeline | 3-5 | Qualified opportunities post-demo or post-bakeoff |
| Revenue pipeline value | Track (no target yet) | Depends on deal size; log for Wave 2 benchmarking |

---

## 8. ESCALATION & FEEDBACK LOOPS

### If Reply Rates Are Below Target After Week 1 (Day 7-14)

**Tier 1 below 25% reply rate (fewer than 3 replies from 12):**
1. Review which 12 targets opened but didn't reply. Check if openers were too generic despite personalization.
2. Have Daniel send a manual LinkedIn voice note to non-responders (30-second personal message).
3. If zero replies: reassess whether these targets are actually active CrustData users or just followers. Adjust Tier 1 criteria for Wave 2.

**Tier 2 below 12% reply rate (fewer than 11 replies from 89):**
1. Check open rates first. If opens are below 30%, the subject lines are the problem -- test new variants.
2. If opens are 30%+ but replies are low, the body copy isn't landing. Test a shorter Email 1 (cut to 3 sentences) or lead with the bake-off offer in Email 1 instead of Email 3.
3. Check segment-level performance: are Segment B (AI/Agent) and Segment C (GTM) responding differently? Double down on the responding segment.

**Tier 3 below 8% reply rate (fewer than 23 replies from 292):**
1. Expected to be lowest-performing. If below 5%, consider pausing and reallocating effort to Tier 1/2 follow-ups.
2. Test a different subject line variant for the remaining unsent emails.
3. Tier 3 is primarily a signal-gathering exercise. Low reply rate is acceptable if it identifies a few high-quality leads.

### When to Adjust Messaging Angles

| Signal | Action |
|--------|--------|
| Data quality angle gets replies but bake-off angle doesn't | Lead with data quality in all emails; move bake-off to a softer CTA |
| Price angle generates the most replies | Elevate pricing to Email 1 for Tier 2/3; test "no per-seat pricing" as subject line |
| Consumer data angle gets the most engaged replies | Consider shifting from "close, not open" strategy -- consumer data may work as opener for certain segments |
| One segment (e.g., Segment C: GTM) significantly outperforms | Create a Segment C-specific sequence for Wave 2 with deeper GTM-focused messaging |
| LinkedIn accept rate is high but DM reply rate is low | Test different DM angles: switch from bake-off offer to resource share, or vice versa |

### Feeding Learnings into Wave 2

At the Day 21 debrief, document:

1. **Winning angle:** Which displacement value prop drove the most replies and bake-off requests? (Data quality? Price? Bake-off offer? Consumer data?)
2. **Winning segment:** Which displacement segments (A/B/C/D/E/F) had the highest reply rate and pipeline conversion?
3. **Winning channel:** Did email or LinkedIn drive more pipeline?
4. **Winning email:** Which email in the sequence (Intro, FollowUp 1, FollowUp 2, BreakUp) drove the most conversions?
5. **Losing angles/segments:** What should be dropped or deprioritized in Wave 2?

Feed these into the Wave 2 plan outlined in `persona-sequence-angle-map.md`:
- Wave 2 outbound source: Minerva Person Search API / MCP
- Wave 2 targets: Expanded ICP beyond CrustData followers (B2C Agent Builders, Platform Product Leaders, Consumer GTM Leaders, Technical Founders)
- Wave 2 messaging: Shift from displacement (our B2B is better) to full differentiation (consumer data leads) based on which angles converted in Wave 1

### When to Expand to Next Competitor Target

**Conditions for launching the next vampire attack (e.g., Windfall):**
- [ ] Wave 1 CrustData campaign has completed at least one full cycle (Day 21+)
- [ ] At least 3 bake-offs completed with measurable results
- [ ] Winning angle and winning segment identified from Wave 1 data
- [ ] System templates updated with Wave 1 learnings
- [ ] Daniel has capacity for a second parallel campaign (or a second sender is identified)

**Next competitor in queue:** Windfall (see `campaigns/windfall/` directory)

---

## APPENDIX: QUICK-REFERENCE FILE LOCATIONS

All files referenced in this document live under:
```
/VAMPIRE ATTACK GTM SYSTEM/campaigns/crustdata/
```

| File | Path |
|------|------|
| Outbound sequences | `phase-4a-sequences/outbound-sequences-crustdata.md` |
| Persona/sequence map | `phase-4a-sequences/persona-sequence-angle-map.md` |
| Inbound nurture | `phase-4b-nurture/inbound-nurture-sequence.md` |
| Tier 1 personalization | `phase-3a-lists/v3_tier1_personalization.md` |
| Tier 1 CSV | `phase-3a-lists/v3_targets_tier_1.csv` |
| Tier 2 CSV | `phase-3a-lists/v3_targets_tier_2.csv` |
| Tier 3 CSV | `phase-3a-lists/v3_targets_tier_3.csv` |
| Comparison blog | `phase-3b-content/comparison-blog-crustdata.md` |
| Landing page | `phase-3b-content/landing-page-vs-crustdata.md` |
| LinkedIn posts | `phase-3b-content/linkedin-posts-crustdata.md` |
| Bake-off evaluation guide | `phase-3c-lead-magnet/bakeoff-kit-evaluation-guide.md` |
| Bake-off scoring spreadsheet | `phase-3c-lead-magnet/bakeoff-scoring-spreadsheet.csv` |
| Discovery script | `phase-5-sales-enablement/discovery-script.md` |
| Demo guide | `phase-5-sales-enablement/demo-guide.md` |
| Follow-up templates | `phase-5-sales-enablement/follow-up-templates.md` |
| Battlecard | `phase-2-battlecard/battlecard-crustdata.md` |
