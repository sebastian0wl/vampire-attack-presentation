# CrustData -- Customer Logo Extraction
## Phase 1 Deliverable | Vampire Attack GTM System
### Date: 2026-04-01

---

## STATUS NOTE

> Web access tools were unavailable during this research pass. CrustData does NOT prominently display customer logos or names on their website (confirmed from prior research). This file documents all known/inferred customers and companies associated with CrustData. Items marked **[VERIFY]** require live web confirmation.
>
> **This is the weakest deliverable in this phase.** CrustData's early stage and developer-API focus means they likely don't have a logo wall or case study section. Customer extraction will require alternative methods (see recommendations at bottom).

---

## KNOWN CUSTOMERS / USERS

### From Website
| Company Name | Source | Confidence | Notes |
|-------------|--------|------------|-------|
| None found | crustdata.com | -- | No logo wall, no case studies, no testimonials found on site as of last check **[VERIFY]** |

### From Product Hunt Launches
CrustData had 3 Product Hunt launches with significant upvotes:
- Launch 1: 703 upvotes
- Launch 2 (People Dataset): 568 upvotes
- Launch 3 (Web Search API): 348 upvotes

**[VERIFY]** Scrape the Product Hunt pages for:
- Companies whose team members upvoted or commented
- Users who identified themselves as customers in comments
- Companies that endorsed the product publicly

| Company Name | Source | Confidence | Notes |
|-------------|--------|------------|-------|
| **[VERIFY]** | Product Hunt comments | -- | Need to scrape 3 launch pages |

### From YC Network
As a YC F24 company, CrustData likely has customers from the YC network:

| Company Name | Source | Confidence | Notes |
|-------------|--------|------------|-------|
| YC F24 batchmates | Inferred | Low | YC companies often use each other's products. Check YC F24 batch list for companies building AI agents, SDR tools, or recruiting platforms |

### Inferred Customer Segments (High Probability)
Based on CrustData's positioning ("data infrastructure for AI agents"), their customers are likely:

**AI SDR / Sales Agent Platforms:**
| Company Name | Source | Confidence | Notes |
|-------------|--------|------------|-------|
| Relevance AI | Inferred from category | Low | AI agent platform, would need B2B enrichment |
| Artisan AI (Ava) | Inferred from category | Low | AI SDR platform |
| 11x.ai | Inferred from category | Low | AI SDR agent |
| Regie.ai | Inferred from category | Low | AI sales engagement |
| SalesAPE | Inferred from category | Low | AI sales agent |
| Qualified | Inferred from category | Low | AI pipeline generation |
| Orum | Inferred from category | Low | AI-powered dialing |

**Recruiting / People Data Platforms:**
| Company Name | Source | Confidence | Notes |
|-------------|--------|------------|-------|
| Various early-stage recruiting AI tools | Inferred | Low | People enrichment API fits recruiting use case |

**VC / Investment Research:**
| Company Name | Source | Confidence | Notes |
|-------------|--------|------------|-------|
| Various VC firms using company screener | Inferred | Low | Company screener fits deal sourcing |

---

## ALTERNATIVE EXTRACTION METHODS

Since CrustData doesn't publicly showcase customers, use these methods to build the target list:

### Method 1: Product Hunt Scrape
- Go to each of CrustData's 3 Product Hunt launches
- Export all commenters and upvoters
- Cross-reference company names against LinkedIn
- Filter for decision-makers at companies that engaged

### Method 2: Twitter/X Engagement
- Search Twitter for accounts that @mention or discuss CrustData
- Look for "we use crustdata" or "built with crustdata"
- Check CrustData's own Twitter for customer shoutouts or retweets

### Method 3: LinkedIn Company Followers
- Use PhantomBuster or Apify to scrape CrustData LinkedIn company followers
- Filter for VP/Director/C-level at tech companies
- These are likely evaluating or already using CrustData

### Method 4: GitHub / API Documentation
- Check if CrustData has a public GitHub with integration examples
- Look for companies that have starred or forked their repos
- Check their API docs for case studies or example use cases

### Method 5: "Powered By" Search
- Google: "powered by crustdata" OR "using crustdata" OR "built on crustdata"
- Check integration marketplace listings (e.g., if they're listed in Clay, n8n, or other workflow tools)

### Method 6: Job Postings
- Search for job postings that mention "CrustData" in the tech stack or tools section
- These companies are confirmed users

### Method 7: YC Demo Day / Batch Network
- Review YC F24 batch list for companies in AI agents, sales tech, recruiting tech
- These are the most likely early adopters given YC internal network effects

---

## RECOMMENDED NEXT STEP

Because CrustData's customer list is not publicly available, the Vampire Attack for CrustData should focus more heavily on:

1. **List C (ICP-Matched Intent)** rather than List A (named customers)
2. **Companies building AI agents that need data enrichment** -- these are CrustData's natural buyers, whether or not they currently use CrustData
3. **Companies using CrustData competitors** (Apollo, ZoomInfo, Clearbit, Lusha) who also need consumer data -- these are prospects who've outgrown B2B-only enrichment

The attack angle shifts from "steal their named customers" to "intercept their category buyers with a better value prop."
