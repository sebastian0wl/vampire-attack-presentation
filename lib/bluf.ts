// BLUF (Bottom Line Up Front) summaries for every artifact
// Shown as a highlighted card at the top of the file viewer

export const blufMap: Record<string, { bluf: string; type: string; phase: string; audience: string }> = {
  // Brand files
  "/files/brand/positioning.md": {
    bluf: "Minerva's core positioning is \"The Context Advantage\" — your CRM knows 20% of your customer, we know the other 80%. Backed by 270M+ Americans, 2,168+ fields per person, 70-80% match rates, and $20M raised with NBA/Experian/Clay partnerships.",
    type: "Brand Config",
    phase: "Phase 0",
    audience: "Internal — all teams",
  },
  "/files/brand/audience.md": {
    bluf: "Three ICP audiences: (1) API Builders — AI/agent companies embedding enrichment data, (2) GTM Teams — sales and marketing orgs needing contact data and lead scoring, (3) Product Leaders — companies embedding consumer data into their product experience.",
    type: "Brand Config",
    phase: "Phase 0",
    audience: "Internal — all teams",
  },
  "/files/brand/competitors.md": {
    bluf: "Competitive profiles for CrustData, Windfall, Apollo, ZoomInfo, Clearbit, and Lusha. Each profile maps their strengths, weaknesses, and specific displacement angles. CrustData is the first campaign target — weakest on consumer data, compliance, and named customers.",
    type: "Brand Config",
    phase: "Phase 0",
    audience: "Internal — sales + marketing",
  },
  "/files/brand/voice-profile.md": {
    bluf: "Two voice profiles. Daniel Saedi (co-founder): casual, lowercase, technical peer-to-peer, used for cold outbound. Jackson Engles: blog/inbound content, more polished but still direct. Both captured from Gong call transcripts of actual conversations.",
    type: "Brand Config",
    phase: "Phase 0",
    audience: "Internal — anyone writing copy",
  },
  "/files/brand/differentiation-cheatsheet.md": {
    bluf: "Quick-reference comparison data across all enrichment competitors. Field counts, match rates, data categories, pricing, and compliance status in one table. Used as the source of truth for all competitive claims across the campaign.",
    type: "Brand Config",
    phase: "Phase 0",
    audience: "Internal — sales + marketing",
  },

  // Phase 1
  "/files/phase-1-research/competitor-research-crustdata.md": {
    bluf: "CrustData: 90 person fields (professional only), $6M seed (YC F24), zero consumer attribute data, zero published fill rates, zero named customers (company names in demos are example data). /security and /trust pages return 404. Their Web Search API is not novel — 5+ competitors exist.",
    type: "Research Brief",
    phase: "Phase 1",
    audience: "Internal — strategy + sales",
  },
  "/files/phase-1-research/competitor-logos-crustdata.md": {
    bluf: "Perplexity, Anthropic, etc. shown in CrustData's product UI are example data, not confirmed customer endorsements. No formal case studies, no logo bar, no testimonials. Important nuance: attack the lack of proof, not the logos themselves.",
    type: "Research Analysis",
    phase: "Phase 1",
    audience: "Internal — sales enablement",
  },
  "/files/phase-1-research/positioning-map-crustdata.md": {
    bluf: "Visual competitive landscape mapping data depth vs. data breadth. Minerva occupies unique position at the B2B + B2C intersection — no other provider combines 2,168+ person fields with consumer attributes AND professional data in one API.",
    type: "Strategic Analysis",
    phase: "Phase 1",
    audience: "Internal — strategy",
  },

  // Phase 2
  "/files/phase-2-battlecard/battlecard-crustdata.md": {
    bluf: "Full competitive battlecard for sales team use. Side-by-side comparison across 14 dimensions, 5 positioning angles with deployment instructions, objection handlers for common pushbacks, segment-specific hooks for each persona, and pricing comparison.",
    type: "Sales Battlecard",
    phase: "Phase 2",
    audience: "Internal — sales team",
  },
  "/files/phase-2-battlecard/one-pager-crustdata.md": {
    bluf: "\"Your Agent Knows the Company. Does It Know the Person?\" One-page comparison: 14-dimension table, 3 key differentiators (the other 80%, best-in-class contact graph, proven at scale), and a when-to-choose framework for CrustData vs. Minerva.",
    type: "Sales One-Pager",
    phase: "Phase 2",
    audience: "External — can share with prospects",
  },
  "/files/phase-2-battlecard/positioning-angles-crustdata.md": {
    bluf: "5 ranked positioning angles: (1) The Other 80%, (2) B2B2C Identity Resolution, (3) Your Agent Is Guessing, (4) One Call Full Profile, (5) Track Record vs. Promise. Key insight: outbound leads with B2B data quality (what they already care about), consumer data is the close.",
    type: "Positioning Strategy",
    phase: "Phase 2",
    audience: "Internal — strategy + copy",
  },

  // Phase 3b Content
  "/files/phase-3b-content/comparison-blog-crustdata.md": {
    bluf: "SEO-optimized comparison blog targeting 'crustdata alternative' keyword. Full breakdown: field depth (2,168 vs 90), contact graph (733M emails, 899M phones), match rates (70-80% vs 20-30% on mixed files), consumer data (Minerva has it, CrustData doesn't), pricing, compliance.",
    type: "SEO Content",
    phase: "Phase 3B",
    audience: "External — prospects searching for alternatives",
  },
  "/files/phase-3b-content/landing-page-vs-crustdata.md": {
    bluf: "Conversion-optimized comparison landing page. 5 CTAs, logo bar, quick comparison table, where Minerva wins (contact graph, 2,000+ fields, clean professional data, pricing), where CrustData wins (company signals, web search API), customer proof, FAQ, full comparison table.",
    type: "Landing Page",
    phase: "Phase 3B",
    audience: "External — evaluators comparing solutions",
  },
  "/files/phase-3b-content/linkedin-posts-crustdata.md": {
    bluf: "3 LinkedIn posts for Daniel Saedi targeting CrustData followers. Post 1: data depth angle (2,168 vs 90 fields). Post 2: contact graph angle (replaces the waterfall). Post 3: bake-off challenge (send your file, get results in 24 hours).",
    type: "Social Content",
    phase: "Phase 3B",
    audience: "External — LinkedIn audience",
  },
  "/files/phase-3b-content/keyword-research-crustdata.md": {
    bluf: "4 content pillars with a 90-day editorial calendar. Target keywords: 'crustdata alternative', 'people enrichment API', 'B2B2C data enrichment', 'consumer data API'. Prioritized by search volume, difficulty, and conversion intent.",
    type: "SEO Strategy",
    phase: "Phase 3B",
    audience: "Internal — content team",
  },
  "/files/phase-3b-content/lead-magnet-concepts-crustdata.md": {
    bluf: "5 lead magnet concepts evaluated. Winner: Bake-Off Kit (evaluation guide + scoring spreadsheet + free API credits). Key insight: for displacement campaigns, free trial + evaluation framework beats interactive calculators. Calculators are for Wave 2+ lower-awareness audiences.",
    type: "Lead Magnet Strategy",
    phase: "Phase 3B",
    audience: "Internal — marketing",
  },
  "/files/phase-3b-content/case-study-juicebox.md": {
    bluf: "How Juicebox replaced 3 enrichment vendors with one Minerva API call. Before: 52% match rate, 3 vendors, 130 fields, 40hrs/month pipeline maintenance. After: 74% match rate, 1 vendor, 2,168 fields, 5hrs/month. Integration completed in one afternoon. [ILLUSTRATIVE — needs Juicebox validation]",
    type: "Case Study",
    phase: "Phase 3B",
    audience: "External — prospects (after validation)",
  },

  // Phase 3c Lead Magnet
  "/files/phase-3c-lead-magnet/bakeoff-kit-evaluation-guide.md": {
    bluf: "Step-by-step guide for prospects to run a head-to-head vendor evaluation. 8 weighted dimensions (match rate, field depth, data quality, contact graph, consumer data, compliance, pricing, integration). Weighted so Minerva's strengths carry the most points while staying fair.",
    type: "Lead Magnet",
    phase: "Phase 3C",
    audience: "External — evaluators",
  },
  "/files/phase-3c-lead-magnet/bakeoff-scoring-spreadsheet.csv": {
    bluf: "Pre-built scoring spreadsheet: 8 dimensions, each weighted, score 1-5 per vendor. Total auto-calculates. Prospect fills in their own scores. Designed to make the evaluation structured and the result defensible to their team.",
    type: "Lead Magnet (Spreadsheet)",
    phase: "Phase 3C",
    audience: "External — evaluators",
  },

  // Phase 4
  "/files/phase-4a-sequences/outbound-sequences-crustdata.md": {
    bluf: "4-email + LinkedIn outbound sequence in Daniel Saedi's voice. Day 0: organic opener ('saw you follow crustdata'). Day 2: contact graph angle (replaces the waterfall). Day 7: direct bake-off offer. Day 14: breakup ('just busy or not interested?'). LinkedIn runs parallel. 3 tiers: 12 manual, 89 templates, 292 email-only.",
    type: "Outbound Sequences",
    phase: "Phase 4A",
    audience: "Internal — sales/BDR",
  },
  "/files/phase-4a-sequences/tier1-personalization-guide.md": {
    bluf: "All 12 Tier 1 targets with hand-written Email 1 openers and LinkedIn connection requests. Each email is unique — written using the person's title, company, displacement score, and inferred use case. Includes displacement rationale explaining WHY each person is Tier 1 (e.g., Stephen Salaka, CTO of MealMatch AI, score 75 — needs consumer + business data for AI food platform).",
    type: "Personalization Guide",
    phase: "Phase 4A",
    audience: "Internal — Daniel Saedi (sender)",
  },
  "/files/phase-4a-sequences/1-to-1-personalization-examples.md": {
    bluf: "Before/after comparison: template emails vs 1-to-1 personalized emails powered by Minerva's 2,168-field enrichment. Shows examples across all 3 tiers — same voice, same length, but each email references the person's specific role, company type, likely use case, and relevant proof point. The system eats its own cooking: we use Minerva's data to sell Minerva.",
    type: "Personalization Examples",
    phase: "Phase 4A (Wave 2/3)",
    audience: "Internal — hackathon presentation",
  },
  "/files/phase-4b-nurture/inbound-nurture-sequence.md": {
    bluf: "7-email inbound nurture triggered by lead magnet download. Sequence: welcome + bake-off offer → data depth education → contact graph proof → Juicebox case study → pricing comparison → urgency + final offer. 14-25 day drip. Jackson Engles voice.",
    type: "Nurture Sequence",
    phase: "Phase 4B",
    audience: "Internal — marketing automation",
  },

  // Phase 5
  "/files/phase-5-sales-enablement/discovery-script.md": {
    bluf: "10-question discovery framework organized by theme: current enrichment stack, pain points/gaps, data requirements, and decision criteria. Includes 15-second opener template, competitive intel questions, and segment-specific variants for engineers, GTM, founders, and product leaders.",
    type: "Sales Enablement",
    phase: "Phase 5",
    audience: "Internal — sales team",
  },
  "/files/phase-5-sales-enablement/demo-guide.md": {
    bluf: "20-minute demo script, minute by minute. (0-3) Confirm use case. (3-8) LIVE API CALL — show the 2,168-field response. (8-12) Professional data quality — fill rates, standardization. (12-16) Match rate — send a personal Gmail, show CrustData returns nothing. (16-18) Pricing. (18-20) Close. Segment-specific hooks for A-E.",
    type: "Sales Enablement",
    phase: "Phase 5",
    audience: "Internal — sales team",
  },
  "/files/phase-5-sales-enablement/follow-up-templates.md": {
    bluf: "3 post-demo follow-up variants: (1) Convinced → send bake-off file. (2) Needs to think → free API credits, no credit card. (3) Needs internal buy-in → results + pricing to share with team. Plus competitive talking points for CrustData objections.",
    type: "Sales Enablement",
    phase: "Phase 5",
    audience: "Internal — sales team",
  },

  // Phase 6
  "/files/phase-6-launch/launch-config-crustdata.md": {
    bluf: "Pre-launch checklist, LaGrowthMachine campaign setup, staggered timeline (Tier 1 Day 0, Tier 2 Day 3, Tier 3 Day 7), success metrics (3-5% demo rate target), Day 7 checkpoint framework (scale/iterate/kill), and expansion loop from 300 reachable → 10,000 → 25,000+ TAM.",
    type: "Launch Config",
    phase: "Phase 6",
    audience: "Internal — ops + sales",
  },

  // Skills
  "/files/skills/outbound-voice.md": {
    bluf: "Codified voice rules for cold outbound: all lowercase, no salesy language, questions as CTAs, organic context openers, specific but not over-precise numbers. Quality checklist: under 100 words, ends with question, zero em dashes, zero exclamation marks.",
    type: "Skill File",
    phase: "New — Created During Build",
    audience: "Internal — reusable for any campaign",
  },
  "/files/skills/competitive-displacement.md": {
    bluf: "The complete vampire attack methodology: research → angles → dual-track (outbound + inbound) → test → scale. Includes displacement scoring rubric, tiering framework, content strategy, awareness-stage mapping, and the principle that the bake-off is the conversion mechanism.",
    type: "Skill File",
    phase: "New — Created During Build",
    audience: "Internal — reusable for any campaign",
  },
  "/files/skills/tiered-personalization.md": {
    bluf: "Framework for scaling outbound quality: Tier 1 (3-5%, manual 1-to-1, 20-35% reply rate), Tier 2 (20-25%, segment templates, 10-18%), Tier 3 (remaining, abbreviated, 5-10%). Includes staggered launch strategy and future evolution to LLM-generated 1-to-1 at scale.",
    type: "Skill File",
    phase: "New — Created During Build",
    audience: "Internal — reusable for any campaign",
  },
  "/files/skills/sales-discovery.md": {
    bluf: "Structured discovery call framework: 15-second opener, 3 question categories (current state, pain points, decision criteria), objection handling (acknowledge → reframe → proof → bridge), and segment-specific variants for technical, GTM, founder, and product personas.",
    type: "Skill File",
    phase: "New — Created During Build",
    audience: "Internal — reusable for any campaign",
  },
  "/files/skills/bake-off-design.md": {
    bluf: "How to design a head-to-head evaluation that drives trials. Core principle: weight your strongest dimensions highest while keeping the framework credible. Includes dimension design, scoring rubrics, spreadsheet structure, and the anti-pattern of making it too obviously biased.",
    type: "Skill File",
    phase: "New — Created During Build",
    audience: "Internal — reusable for any campaign",
  },

  // System
  "/files/system/system-architecture-overview.md": {
    bluf: "The full system design: 3-layer architecture (system/brand/campaigns), 7-phase pipeline with parallelization, dual-track approach (outbound + inbound converging at demo), 10 skills chained across phases, expansion loop from followers → full TAM, and 14 key learnings from the CrustData build.",
    type: "Architecture Doc",
    phase: "System",
    audience: "Internal — anyone understanding the system",
  },
};
