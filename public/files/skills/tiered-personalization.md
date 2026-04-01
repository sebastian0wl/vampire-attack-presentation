# Tiered Personalization — Scaling Outbound Quality

## When to use
Use when planning outbound campaigns with more than 20 targets and you need to decide how much personalization effort to invest per contact. Works for cold email, LinkedIn outreach, direct mail, or any channel where message customization affects response rate.

## The Tiering Framework

### Why tier
Not every prospect deserves a hand-crafted message. But every prospect deserves a message that feels relevant. Tiering lets you allocate effort where it generates the highest ROI while maintaining quality at scale.

### Tier Definitions

**Tier 1: Manual 1-to-1 (top 3-5% of targets)**
- Custom research per person (LinkedIn, company website, recent activity)
- Unique email opener referencing something specific about them, their product, or their role
- Custom LinkedIn connection note
- Full multichannel sequence (email + LinkedIn)
- Time investment: 10-15 minutes per target
- Expected reply rate: 20-35%

**Tier 2: Segment Templates (next 20-25%)**
- Grouped by persona/segment (e.g., "AI builders", "GTM leaders", "Technical founders")
- Template with merge fields (first name, company, title)
- Segment-specific hooks and proof points
- Full sequence (email + LinkedIn for higher-value, email-only for lower)
- Time investment: 2-3 minutes per target (reviewing merge fields)
- Expected reply rate: 10-18%

**Tier 3: Abbreviated (remaining 70-75%)**
- Generic but still voice-consistent templates
- Email only (no LinkedIn)
- Shortened sequence (2-3 emails instead of 4-5)
- Minimal personalization (first name + company)
- Time investment: 30 seconds per target (spot-check)
- Expected reply rate: 5-10%

### How to Score and Assign Tiers

Score each target on dimensions relevant to your campaign:
- Role/title relevance to your product
- Company fit (size, industry, stage)
- Seniority / decision-making authority
- Engagement signals (following competitor, liked relevant content, attended events)
- Data richness (do you have enough info to personalize?)

Assign tiers by score:
- Top 3-5% by score → Tier 1
- Next 20-25% → Tier 2
- Remaining → Tier 3

### Personalization Elements by Tier

| Element | Tier 1 | Tier 2 | Tier 3 |
|---------|--------|--------|--------|
| First name | Yes | Yes | Yes |
| Company name | Yes | Yes | Yes |
| Role/title reference | Custom sentence | Segment-level hook | Generic |
| Company-specific reference | Yes (product, funding, news) | No | No |
| Use case inference | Custom per person | Segment-level | Generic |
| Proof point selection | Matched to their use case | Matched to segment | Best universal proof point |
| LinkedIn outreach | Custom note | Template note | None |
| Number of emails | 4-5 | 3-4 | 2-3 |
| CTA style | Specific question about their situation | Segment-relevant question | Generic soft offer |

### Staggered Launch

Don't launch all tiers simultaneously:
1. **Day 0:** Launch Tier 1 (you want the highest-value conversations first)
2. **Day 3-5:** Launch Tier 2 (after Tier 1 replies start coming in and you can refine messaging)
3. **Day 7-10:** Launch Tier 3 (incorporate learnings from Tier 1 and 2 reply patterns)

This lets you iterate on messaging before it hits the largest audience.

### Future State: AI-Powered 1-to-1 at Scale

The ideal end state is Tier 1 quality for every target:
- Enrich each contact with deep data (2,000+ fields)
- Feed enrichment data + voice rules + constraints into an LLM
- Generate a unique email per person (~$0.01-0.03 per email)
- Human spot-checks 5-10% before sending
- Requires: API-based sending tool (not template-based platforms), enrichment API, LLM API

This eliminates the quality vs. scale tradeoff. Every recipient gets a message that references their specific role, company, industry, and inferred use case. Reply rates should 2-3x compared to segment templates.

### Common Mistakes

1. **Over-personalizing Tier 3.** The ROI isn't there. A clean, voice-consistent template outperforms a poorly researched "personalized" email.
2. **Under-personalizing Tier 1.** If you're sending the same template to your top 12 targets, you're leaving money on the table.
3. **Not staggering launches.** Learning from Tier 1 replies should inform Tier 2 and 3 messaging.
4. **Treating tiers as permanent.** If a Tier 3 target replies with interest, they should immediately get Tier 1 treatment in follow-up.
5. **Ignoring segment fit.** Two people at the same score can need completely different messages if their roles/industries differ. Tier within segments, not just by raw score.
