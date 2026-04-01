export interface Phase {
  id: number;
  name: string;
  shortName: string;
  time: string;
  status: "done" | "active" | "queued";
  color: string;
  description: string;
  skills: Skill[];
  artifacts: Artifact[];
  gates: Gate[];
  details: string;
}

export interface Skill {
  name: string;
  purpose: string;
  description: string;
}

export interface Artifact {
  name: string;
  file: string;
  publicPath: string;
  format: string;
  preview?: string;
}

export interface Gate {
  id: string;
  name: string;
  description: string;
  reviewedBy: string;
}

export const phases: Phase[] = [
  {
    id: 0,
    name: "Foundation Setup",
    shortName: "Setup",
    time: "15 min",
    status: "done",
    color: "#6b7280",
    description: "Create brand files, exclusion lists, verify tool access. One-time setup that gets reused for every competitor campaign.",
    skills: [],
    artifacts: [
      { name: "Positioning Doc", file: "brand/positioning.md", publicPath: "/files/brand/positioning.md", format: "MD", preview: "Core positioning, proof points, $20M raised, NBA/Experian/Clay partnerships. 270M+ identity graph, 2,168+ fields, 70-80% match rates." },
      { name: "Audience Definitions", file: "brand/audience.md", publicPath: "/files/brand/audience.md", format: "MD", preview: "3 ICP audiences: API Builders (AI/agent companies), GTM Teams (sales/marketing), Product Leaders (embedding data in products)." },
      { name: "Competitor Profiles", file: "brand/competitors.md", publicPath: "/files/brand/competitors.md", format: "MD", preview: "Profiles for CrustData, Windfall, Apollo, ZoomInfo, Clearbit, Lusha. Attack angles and competitive positioning for each." },
      { name: "Voice Profile", file: "brand/voice-profile.md", publicPath: "/files/brand/voice-profile.md", format: "MD", preview: "Daniel Saedi voice: casual, lowercase, technical peer-to-peer. Jackson Engles voice: blog/inbound, more polished but still direct." },
      { name: "Differentiation Cheatsheet", file: "brand/differentiation-cheatsheet.md", publicPath: "/files/brand/differentiation-cheatsheet.md", format: "MD", preview: "Head-to-head comparison data across all competitors. Field counts, match rates, data categories, pricing, compliance status." },
    ],
    gates: [],
    details: `The foundation layer is config-driven. To fork this system for a different company, you replace these 5 brand files and run the pipeline. Everything downstream adapts automatically because each phase reads from brand files, not hardcoded values.

Key decision: Exclusion lists target the COMPETITOR's investors, employees, and former employees — not your own team. This was corrected early in the build.

Commercial terms were captured upfront: usage-based pricing, no per-seat fees, negotiation flexibility for product integrations. This informed all downstream copy.`,
  },
  {
    id: 1,
    name: "Competitor Deep Research",
    shortName: "Research",
    time: "30 min",
    status: "done",
    color: "#3b82f6",
    description: "Profile the competitor across every public surface. Products, pricing, customers, compliance, weaknesses. Live web crawl, not cached data.",
    skills: [
      { name: "research-agent", purpose: "Web research, review mining, competitor profiling", description: "Deep research skill that crawls competitor websites, G2/Capterra reviews, Product Hunt, LinkedIn, Crunchbase. Produces structured research briefs with sourced claims." },
      { name: "positioning-angles", purpose: "Generate ranked attack angles from research", description: "Takes research output and generates 3-5 distinct positioning angles. Each angle targets a specific audience segment with proof points and deployment recommendations." },
    ],
    artifacts: [
      { name: "Research Brief", file: "campaigns/crustdata/phase-1-research/competitor-research-crustdata.md", publicPath: "/files/phase-1-research/competitor-research-crustdata.md", format: "MD", preview: "232-line deep dive: CrustData has 90 person fields (professional only), $6M seed (YC F24), zero consumer attribute data, zero published fill rates, /security and /trust pages return 404. Company names in demos are example data, not customer endorsements." },
      { name: "Customer Logo Analysis", file: "campaigns/crustdata/phase-1-research/competitor-logos-crustdata.md", publicPath: "/files/phase-1-research/competitor-logos-crustdata.md", format: "MD", preview: "Perplexity, Anthropic, etc. shown in CrustData product UI are example data, not confirmed customers. No formal case studies, no logo bar, no testimonials. Key nuance for competitive claims." },
      { name: "Positioning Map", file: "campaigns/crustdata/phase-1-research/positioning-map-crustdata.md", publicPath: "/files/phase-1-research/positioning-map-crustdata.md", format: "MD", preview: "Visual competitive landscape showing Minerva's unique position at B2B+B2C intersection. Maps data depth vs. data breadth across all enrichment competitors." },
    ],
    gates: [
      { id: "gate-2", name: "Gate 2: Approve Research & Angles", description: "Human reviews all factual claims for accuracy. Every claim must have a source URL. Corrections propagate to all downstream files.", reviewedBy: "Theo (co-founder)" },
    ],
    details: `Key findings from CrustData research:

• 90 person fields (professional only) vs Minerva's 2,168+ fields across 13 categories
• Zero consumer ATTRIBUTE data — they may return a personal email, but zero consumer context (no income, property, interests, household, purchases)
• Zero B2B2C identity resolution
• No named customers — company names in product demos are example data, not endorsements
• No G2/Capterra reviews, no SOC 2 or compliance certifications (/security and /trust pages return 404)
• Web Search API is NOT novel — Tavily, Exa, Brave Search API, SerpAPI all compete

Theo caught that CrustData's HQ should be San Francisco (not Austin), and that pricing (~$200/mo) was sourced from Product Hunt, not the website. This led to a new system rule: every factual claim must have a linked source.`,
  },
  {
    id: 2,
    name: "Positioning & Battlecard",
    shortName: "Battlecard",
    time: "20 min",
    status: "done",
    color: "#8b5cf6",
    description: "Lock attack angles, build sales battlecard and one-pager. Dual-track messaging: outbound leads with B2B data quality, inbound leads with full differentiation.",
    skills: [
      { name: "positioning-angles", purpose: "Rank and deploy attack angles by awareness stage", description: "5 angles generated: 'The Other 80%', 'B2B2C Identity Resolution', 'Your Agent Is Guessing', 'One Call Full Profile', 'Track Record vs. Promise'. Deployment priority varies by outbound vs. inbound." },
      { name: "direct-response-copy", purpose: "Conversion copy for battlecard and one-pager", description: "Writes copy that converts. Internet-native, sounds like a smart friend explaining something while quietly deploying persuasion frameworks." },
      { name: "humanize-ai", purpose: "Kill AI vocabulary, enforce natural voice", description: "Based on Wikipedia's 'Signs of AI writing' field guide. Detects and rewrites stock phrases, hedging, em dashes, rule-of-three, promotional inflation. 1 fix across 4 files in this pass." },
    ],
    artifacts: [
      { name: "Sales Battlecard", file: "campaigns/crustdata/phase-2-battlecard/battlecard-crustdata.md", publicPath: "/files/phase-2-battlecard/battlecard-crustdata.md", format: "MD", preview: "Full competitive battlecard: side-by-side data comparison, 5 positioning angles with deployment instructions, objection handlers, segment-specific hooks, pricing comparison." },
      { name: "One-Pager", file: "campaigns/crustdata/phase-2-battlecard/one-pager-crustdata.md", publicPath: "/files/phase-2-battlecard/one-pager-crustdata.md", format: "MD", preview: "\"Your Agent Knows the Company. Does It Know the Person?\" — 14-dimension comparison table, 3 key differentiators, when-to-choose framework." },
      { name: "Positioning Angles", file: "campaigns/crustdata/phase-2-battlecard/positioning-angles-crustdata.md", publicPath: "/files/phase-2-battlecard/positioning-angles-crustdata.md", format: "MD", preview: "5 ranked angles with deployment priority by awareness stage. Outbound leads with B2B data quality, then expands to consumer data. Inbound leads with full differentiation." },
    ],
    gates: [
      { id: "gate-3", name: "Gate 3: Lock Messaging", description: "Positioning angles approved and ordered by awareness stage. Outbound angles match what CrustData followers already care about (B2B data quality). Consumer data is the close, not the open.", reviewedBy: "Justin + Theo" },
    ],
    details: `CRITICAL positioning correction caught here: CrustData followers followed for B2B data. Leading with "The Other 80%" (consumer data) is wrong for this audience — it pitches something they don't know they need.

Corrected approach:
• OUTBOUND leads with "Our B2B data is better too" — apples-to-apples quality on what they already care about
• Consumer data becomes the close, not the open
• INBOUND content leads with full differentiation for lower-awareness evaluators

This was the single most important positioning correction in the build. It changed the lead angle across all outbound sequences.

The humanize-AI pass found only 1 fix across 4 files (removed one "Be honest about this" — a performed authenticity marker), validating that direct-response-copy produces natural output when the voice profile is well-defined.`,
  },
  {
    id: 3,
    name: "Target Lists + Content + Lead Magnet",
    shortName: "Lists & Content",
    time: "30 min",
    status: "done",
    color: "#22c55e",
    description: "Three parallel tracks: prospect lists (3A), inbound content (3B), and lead magnet (3C). Outbound and inbound tracks diverge here.",
    skills: [
      { name: "Vibe Prospecting MCP", purpose: "Build prospect lists from LinkedIn followers", description: "fetch-entities, enrich-prospects, export-to-csv. Built 5 ICP personas from first principles (~60% of followers viable). Minerva CLI dogfooded for enrichment pipeline." },
      { name: "seo-content", purpose: "SEO-optimized comparison blog", description: "4 content pillars, 90-day editorial calendar. Target keywords: 'crustdata alternative', 'crustdata vs', 'people enrichment API'." },
      { name: "direct-response-copy", purpose: "Landing page and content copy", description: "Full comparison landing page with 5 CTAs, logo bar, FAQ, customer quotes, comparison tables. Complete rewrite based on 10-dimension CRO audit." },
      { name: "content-atomizer", purpose: "Break blog into social posts", description: "LinkedIn posts (3) + Twitter variants (3) atomized from the comparison blog content." },
      { name: "lead-magnet", purpose: "Design bake-off kit evaluation framework", description: "Free API credits + vendor evaluation guide (PDF/spreadsheet) that teaches prospects how to run a head-to-head comparison. Criteria framed so Minerva wins on key dimensions while staying honest." },
      { name: "humanize-ai", purpose: "Final pass on all content", description: "All copy humanize-AI passed. Zero violations across all content pieces." },
    ],
    artifacts: [
      { name: "3 Target Lists (CSV)", file: "campaigns/crustdata/phase-3a-lists/", publicPath: "", format: "CSV", preview: "List A: CrustData customers/followers. List B: Adjacent prospects. List C: ICP + intent matched. 5 personas, 3 tiers (12 Tier 1, 89 Tier 2, 292 Tier 3)." },
      { name: "Comparison Blog", file: "campaigns/crustdata/phase-3b-content/comparison-blog-crustdata.md", publicPath: "/files/phase-3b-content/comparison-blog-crustdata.md", format: "MD", preview: "SEO-optimized deep comparison: field depth, contact graph, match rates, professional data quality, consumer data, pricing, compliance. Target: 'crustdata alternative' keyword." },
      { name: "Landing Page", file: "campaigns/crustdata/phase-3b-content/landing-page-vs-crustdata.md", publicPath: "/files/phase-3b-content/landing-page-vs-crustdata.md", format: "MD", preview: "Full comparison landing page: hero + quick comparison + where Minerva wins + contact graph + consumer data + where CrustData wins + social proof + bake-off CTA + FAQ + full comparison table." },
      { name: "LinkedIn Posts (3)", file: "campaigns/crustdata/phase-3b-content/linkedin-posts-crustdata.md", publicPath: "/files/phase-3b-content/linkedin-posts-crustdata.md", format: "MD", preview: "3 LinkedIn posts targeting CrustData followers. Each uses a different angle: data depth, contact graph, and bake-off challenge." },
      { name: "Keyword Research + Calendar", file: "campaigns/crustdata/phase-3b-content/keyword-research-crustdata.md", publicPath: "/files/phase-3b-content/keyword-research-crustdata.md", format: "MD", preview: "4 content pillars, 90-day editorial calendar, keyword clusters targeting 'people enrichment API', 'B2B2C data', 'crustdata alternative'." },
      { name: "Lead Magnet Concepts", file: "campaigns/crustdata/phase-3b-content/lead-magnet-concepts-crustdata.md", publicPath: "/files/phase-3b-content/lead-magnet-concepts-crustdata.md", format: "MD", preview: "5 concepts evaluated. Winner: Bake-Off Kit (evaluation guide + scoring spreadsheet + free API credits). Anti-pattern identified: interactive calculators wrong for displacement campaigns." },
      { name: "Bake-Off Evaluation Guide", file: "campaigns/crustdata/phase-3c-lead-magnet/bakeoff-kit-evaluation-guide.md", publicPath: "/files/phase-3c-lead-magnet/bakeoff-kit-evaluation-guide.md", format: "MD", preview: "8 weighted evaluation dimensions. Step-by-step guide for running a head-to-head vendor comparison. Professional .docx version with branded styling." },
      { name: "Scoring Spreadsheet", file: "campaigns/crustdata/phase-3c-lead-magnet/bakeoff-scoring-spreadsheet.csv", publicPath: "/files/phase-3c-lead-magnet/bakeoff-scoring-spreadsheet.csv", format: "CSV", preview: "Pre-built scoring framework: 8 dimensions, weighted scoring, formula-driven total. Prospect fills in scores for each vendor." },
      { name: "Juicebox Case Study", file: "campaigns/crustdata/phase-3b-content/case-study-juicebox.md", publicPath: "/files/phase-3b-content/case-study-juicebox.md", format: "MD", preview: "How Juicebox replaced 3 enrichment vendors with one Minerva API call. Match rates: 52% → 74%. Pipeline maintenance: 40hrs/month → 5hrs. Fields: 130 → 2,168. [Illustrative — needs Juicebox validation]" },
    ],
    gates: [
      { id: "gate-4a", name: "Gate 4A: Approve Lists", description: "Verify prospect lists are clean, exclusions applied, personas correctly segmented, tiers assigned.", reviewedBy: "Justin" },
      { id: "gate-4b", name: "Gate 4B: Approve Content", description: "All content reviewed for accuracy, voice, competitive claims. Contact graph messaging present. Domain unified to minerva.io.", reviewedBy: "Justin + Theo" },
      { id: "gate-4c", name: "Gate 4C: Approve Lead Magnet", description: "Bake-off kit reviewed. Evaluation criteria fair but positioned for Minerva strengths. Clear path from download to trial.", reviewedBy: "Justin" },
    ],
    details: `This is where outbound and inbound tracks diverge and run in parallel.

Phase 3A (Lists): Minerva's own CLI was dogfooded for enrichment: linkedin contact-info → resolve → enrich pipeline tested live (80% match rate). 5 ICP personas built from first principles — ~60% of followers viable. 3 tiers: Tier 1 (12, manual 1-to-1), Tier 2 (89, segment templates), Tier 3 (292, abbreviated email-only).

Phase 3B (Content): Full SEO strategy with 4 content pillars. Landing page went through a complete rewrite after a 10-dimension CRO audit (added 5 CTAs, logo bar, FAQ, customer quotes, contact graph prominence, meta description, internal links).

Phase 3C (Lead Magnet): Key insight from Justin — for displacement campaigns, free API credits + evaluation framework beats interactive calculators. The eval guide frames criteria so Minerva wins on key dimensions while remaining fair enough that prospects trust it.

Contact graph messaging ("best-in-class: 733M emails, 899M phones, 270M+ addresses, replaces the waterfall") was added across ALL content files.`,
  },
  {
    id: 4,
    name: "Outbound + Nurture Sequences",
    shortName: "Sequences",
    time: "30 min",
    status: "done",
    color: "#f59e0b",
    description: "Write multi-channel outbound sequences for LaGrowthMachine + 7-email inbound nurture. Two tracks running in parallel.",
    skills: [
      { name: "direct-response-copy", purpose: "Outbound sequence copy in Daniel's voice", description: "4 emails + LinkedIn connection request + LinkedIn DM. Voice: all lowercase, casual, like a friend describing a tool. CTAs are questions, not demands." },
      { name: "email-sequences", purpose: "7-email inbound nurture drip", description: "Triggered by lead magnet download. Moves from education → proof → offer over 14-25 days. Jackson Engles voice." },
      { name: "humanize-ai", purpose: "Final pass on all sequences", description: "Incorporated Theo's feedback: 'over 2,000' not '2,168', breakup opens with 'just busy or not interested?', LinkedIn never says 'thanks for connecting', tone like a friend not a salesperson." },
    ],
    artifacts: [
      { name: "Outbound Sequences", file: "campaigns/crustdata/phase-4a-sequences/outbound-sequences-crustdata.md", publicPath: "/files/phase-4a-sequences/outbound-sequences-crustdata.md", format: "MD", preview: "4-email sequence + LinkedIn track. Day 0: organic opener ('saw you follow crustdata'). Day 2: contact graph angle. Day 7: bake-off offer. Day 14: breakup. LinkedIn runs parallel with connection request + follow-up DM." },
      { name: "Tier 1 Personalization Guide", file: "campaigns/crustdata/phase-3a-lists/v3_tier1_personalization.md", publicPath: "/files/phase-4a-sequences/tier1-personalization-guide.md", format: "MD", preview: "All 12 Tier 1 targets with custom Email 1 openers + LinkedIn connection requests. Each written 1-to-1 using enrichment data: role, company, displacement rationale, and segment-specific angle." },
      { name: "1-to-1 Personalization Examples", file: "campaigns/crustdata/phase-4a-sequences/1-to-1-personalization-examples.md", publicPath: "/files/phase-4a-sequences/1-to-1-personalization-examples.md", format: "MD", preview: "Before/after showing template emails vs 1-to-1 personalized emails across all 3 tiers. Shows how 2,168 enrichment fields enable unique copy per person — the system eats its own cooking." },
      { name: "Inbound Nurture (7 emails)", file: "campaigns/crustdata/phase-4b-nurture/inbound-nurture-sequence.md", publicPath: "/files/phase-4b-nurture/inbound-nurture-sequence.md", format: "MD", preview: "7-email drip: welcome + bake-off → data depth → contact graph → case study → pricing → final offer. Segmented by use case. Triggered by lead magnet download." },
    ],
    gates: [
      { id: "gate-5a", name: "Gate 5A: Daniel Voice Check", description: "Outbound sequences sound like Daniel Saedi writing casually to a peer. No salesy language. Specific but not over-precise. Questions as CTAs.", reviewedBy: "Justin + Theo" },
      { id: "gate-5b", name: "Gate 5B: Approve Nurture Drip", description: "Inbound nurture reviewed for pacing, value delivery, and conversion points.", reviewedBy: "Justin" },
    ],
    details: `Outbound sequences went through multiple rounds of feedback from Theo:

1. Numbers: "over 2,000" not "2,168" — specific enough to be credible, not so precise it sounds robotic
2. Breakup email: always opens with "just busy or not interested?" — direct and human
3. LinkedIn: NEVER say "thanks for connecting" — auto-indicates a bot. Opens with "hey {{firstName}}," and goes straight into value
4. Tone: "like a friend describing a tool that'd solve their problem, not a salesperson"

LaGrowthMachine Configuration:
• Email track (4 emails) + LinkedIn track run in parallel from Day 0
• Delays: Day 0 → Day 2 → Day 7 → Day 14
• Tier 1 (12): manual personalization before launch
• Tier 2 (89): templates with merge fields
• Tier 3 (292): email only, abbreviated sequence
• Stagger: Tier 1 Day 0, Tier 2 Day 3, Tier 3 Day 7

Voice rules codified:
• All lowercase. Casual. Like a smart person in your network reaching out organically.
• No salesy language, ever. No em dashes.
• CTAs are questions ("are you using...?") or soft offers ("can i send more info?")
• Open with "saw you follow crustdata" for organic context`,
  },
  {
    id: 5,
    name: "Sales Enablement",
    shortName: "Enablement",
    time: "20 min",
    status: "done",
    color: "#06b6d4",
    description: "Arm the team with discovery scripts, demo guides, follow-up templates, and competitive talking points.",
    skills: [
      { name: "stakeholder-message-crafter", purpose: "Discovery script and demo structure", description: "10-question discovery framework. Demo guide with minute-by-minute talk track. Segment-specific hooks for each persona type." },
      { name: "direct-response-copy", purpose: "Follow-up templates and social proof", description: "3 follow-up variants (convinced → bake-off, thinking → free credits, need buy-in → share results). Social proof compilation." },
    ],
    artifacts: [
      { name: "Discovery Script", file: "campaigns/crustdata/phase-5-sales-enablement/discovery-script.md", publicPath: "/files/phase-5-sales-enablement/discovery-script.md", format: "MD", preview: "10 discovery questions organized by theme: current stack, pain points, data requirements, decision criteria. Opening framework and transition to demo." },
      { name: "Demo Guide", file: "campaigns/crustdata/phase-5-sales-enablement/demo-guide.md", publicPath: "/files/phase-5-sales-enablement/demo-guide.md", format: "MD", preview: "20-minute demo flow: confirm use case (3 min) → live API call (5 min) → data quality (4 min) → match rate demo (4 min) → pricing (2 min) → next steps (2 min). Segment-specific hooks for A-E." },
      { name: "Follow-Up Templates", file: "campaigns/crustdata/phase-5-sales-enablement/follow-up-templates.md", publicPath: "/files/phase-5-sales-enablement/follow-up-templates.md", format: "MD", preview: "3 variants: post-bake-off (show results), post-demo (share deck + pricing), post-no-response (value-add touchpoint). Each with merge fields." },
    ],
    gates: [
      { id: "gate-6", name: "Gate 6: Full GO/NO-GO", description: "All assets reviewed. Campaign hypothesis locked. Tracking configured. Team aligned on messaging, objection handling, and follow-up process.", reviewedBy: "Justin + Daniel + Team" },
    ],
    details: `The demo guide is structured minute-by-minute with competitive comparison talking points embedded at each section.

Key moments in the demo:
• Minute 3-8: LIVE API CALL — show, don't tell. Send a real identifier, walk through the 2,168-field response
• Minute 8-12: Professional data quality — this wins deals. Most prospects assume "B2B data is B2B data." Prove them wrong with fill rates and standardization
• Minute 12-16: Match rate — send a personal Gmail through the API. Show full profile returned. Then explain CrustData returns nothing on the same input
• Minute 18-20: Close based on where they are (bake-off, free credits, or loop in decision-makers)

Competitive talking points cover: data breadth (24x more fields), data quality (published fill rates vs. zero), contact graph (replaces the waterfall), company signals (where CrustData wins — be honest), pricing (usage-based, no per-seat).`,
  },
  {
    id: 6,
    name: "Launch Configuration",
    shortName: "Launch",
    time: "10 min",
    status: "done",
    color: "#ef4444",
    description: "Hypothesis card, tracking setup, staggered launch timeline, success metrics, and expansion loop.",
    skills: [],
    artifacts: [
      { name: "Launch Config", file: "campaigns/crustdata/phase-6-launch/launch-config-crustdata.md", publicPath: "/files/phase-6-launch/launch-config-crustdata.md", format: "MD", preview: "Pre-launch checklist, LGM campaign setup, asset map, inbound automation, tracking/attribution, staggered timeline, success metrics, escalation/feedback loops, expansion loop definition." },
    ],
    gates: [],
    details: `Campaign hypothesis: CrustData's followers who build with enrichment APIs will respond to "our B2B data is better too" because they already care about data quality and Minerva has provable advantages (99.47% job title fill, 71% mobile phones, multi-sourced standardization) plus 24x more fields.

Expansion Loop (3 waves):
• Wave 1: CrustData followers (~1,200 → ~500 enriched → ~300 reachable). Direct displacement messaging.
• Wave 2: Person Search API expansion (5,000-10,000). Same personas, broader targeting. Category education + differentiation.
• Wave 3: Full TAM build (25,000+). Paid + organic + outbound + community. Problem → solution, no competitor mention.

Day 7 Checkpoint: >3% demo rate = SCALE. 1-3% = ITERATE. <1% = DIAGNOSE and fix or KILL.

Each competitor campaign adds content, adds leads, adds learnings. The system compounds.`,
  },
];

export const skillsUsed: { name: string; phases: string; purpose: string; detail: string }[] = [
  { name: "research-agent", phases: "Phase 1", purpose: "Web research, review mining, competitor profiling", detail: "Crawls competitor websites, G2/Capterra, Product Hunt, LinkedIn, Crunchbase. Produces structured research briefs with sourced claims. Used to build the 232-line CrustData research brief." },
  { name: "positioning-angles", phases: "Phase 1, 2", purpose: "Generate ranked attack angles", detail: "Takes research and generates 3-5 positioning angles. Each angle targets a specific audience with proof points. For CrustData: 5 angles generated, ordered by outbound vs. inbound awareness stage." },
  { name: "direct-response-copy", phases: "Phase 2, 3B, 4A, 5", purpose: "Conversion copy", detail: "Writes copy that converts — battlecards, landing pages, sequences, follow-ups. Internet-native, sounds like a smart friend explaining something while deploying persuasion frameworks." },
  { name: "humanize-ai", phases: "Phase 2, 3B, 4A, 4B", purpose: "Kill AI writing patterns", detail: "Based on Wikipedia's 'Signs of AI writing' field guide. Detects stock phrases, hedging, em dashes, rule-of-three, promotional inflation. Only 1 fix needed across 4 files — shows direct-response-copy is already clean when voice is well-defined." },
  { name: "seo-content", phases: "Phase 3B", purpose: "SEO-optimized blog structure", detail: "Built 4 content pillars, 90-day editorial calendar. Target keywords: 'crustdata alternative', 'people enrichment API', 'B2B2C data enrichment'." },
  { name: "content-atomizer", phases: "Phase 3B, 5", purpose: "Break content into social posts", detail: "Atomized comparison blog into 3 LinkedIn posts + 3 Twitter variants. Each uses a different angle to maximize reach." },
  { name: "lead-magnet", phases: "Phase 3C", purpose: "Design evaluation framework", detail: "Generated 5 concepts. Winner: Bake-Off Kit. Key insight: for displacement campaigns, free credits + evaluation framework beats interactive calculators." },
  { name: "email-sequences", phases: "Phase 4B", purpose: "Inbound nurture drips", detail: "7-email sequence triggered by lead magnet download. Moves from education → proof → offer over 14-25 days." },
  { name: "stakeholder-message-crafter", phases: "Phase 5", purpose: "Discovery scripts, demo guides", detail: "Structured 10-question discovery framework. Minute-by-minute demo guide with segment-specific hooks." },
  { name: "brand-voice", phases: "All phases", purpose: "Enforce consistent voice", detail: "Two voices maintained: Daniel Saedi (outbound, casual founder peer-to-peer) and Jackson Engles (inbound/blog, polished but direct). Voice captured from Gong call transcripts." },
];

export const newSkillsCreated = [
  { name: "outbound-voice", purpose: "Cold email and LinkedIn voice rules", publicPath: "/files/skills/outbound-voice.md", detail: "Codified Daniel's voice: all lowercase, no salesy language, questions as CTAs, organic context ('saw you follow X'), specific but not over-precise ('over 2,000' not '2,168'). Reusable for any founder voice outbound." },
  { name: "competitive-displacement", purpose: "Full vampire attack methodology", publicPath: "/files/skills/competitive-displacement.md", detail: "The complete displacement playbook: research → angles → dual-track (outbound + inbound) → test → scale. Includes awareness-stage mapping, lead-with-overlap principle, and expansion loop framework." },
  { name: "tiered-personalization", purpose: "Scaling outbound quality", publicPath: "/files/skills/tiered-personalization.md", detail: "3-tier framework: Tier 1 (manual 1-to-1), Tier 2 (segment templates with merge fields), Tier 3 (abbreviated sequences). Includes future evolution to LLM-generated 1-to-1 for all tiers." },
  { name: "sales-discovery", purpose: "Discovery call framework", publicPath: "/files/skills/sales-discovery.md", detail: "10-question discovery structure organized by theme. Opening framework, qualification criteria, transition to demo. Segment-specific question variants." },
  { name: "bake-off-design", purpose: "Trial/evaluation framework design", publicPath: "/files/skills/bake-off-design.md", detail: "How to design a head-to-head evaluation that drives trials. Includes: weighted scoring dimensions, framing criteria for your strengths, maintaining credibility by including dimensions where competitors win." },
];

// Full file registry for the "All Files" browser
export const allFiles: { category: string; files: { name: string; path: string; publicPath: string }[] }[] = [
  {
    category: "Brand (Config)",
    files: [
      { name: "Positioning", path: "brand/positioning.md", publicPath: "/files/brand/positioning.md" },
      { name: "Audience Definitions", path: "brand/audience.md", publicPath: "/files/brand/audience.md" },
      { name: "Competitor Profiles", path: "brand/competitors.md", publicPath: "/files/brand/competitors.md" },
      { name: "Voice Profile", path: "brand/voice-profile.md", publicPath: "/files/brand/voice-profile.md" },
      { name: "Differentiation Cheatsheet", path: "brand/differentiation-cheatsheet.md", publicPath: "/files/brand/differentiation-cheatsheet.md" },
    ],
  },
  {
    category: "Phase 1 — Research",
    files: [
      { name: "Competitor Research Brief", path: "phase-1-research/competitor-research-crustdata.md", publicPath: "/files/phase-1-research/competitor-research-crustdata.md" },
      { name: "Customer Logo Analysis", path: "phase-1-research/competitor-logos-crustdata.md", publicPath: "/files/phase-1-research/competitor-logos-crustdata.md" },
      { name: "Positioning Map", path: "phase-1-research/positioning-map-crustdata.md", publicPath: "/files/phase-1-research/positioning-map-crustdata.md" },
    ],
  },
  {
    category: "Phase 2 — Battlecard",
    files: [
      { name: "Sales Battlecard", path: "phase-2-battlecard/battlecard-crustdata.md", publicPath: "/files/phase-2-battlecard/battlecard-crustdata.md" },
      { name: "One-Pager", path: "phase-2-battlecard/one-pager-crustdata.md", publicPath: "/files/phase-2-battlecard/one-pager-crustdata.md" },
      { name: "Positioning Angles", path: "phase-2-battlecard/positioning-angles-crustdata.md", publicPath: "/files/phase-2-battlecard/positioning-angles-crustdata.md" },
    ],
  },
  {
    category: "Phase 3 — Content & Lead Magnet",
    files: [
      { name: "Comparison Blog", path: "phase-3b-content/comparison-blog-crustdata.md", publicPath: "/files/phase-3b-content/comparison-blog-crustdata.md" },
      { name: "Landing Page (vs CrustData)", path: "phase-3b-content/landing-page-vs-crustdata.md", publicPath: "/files/phase-3b-content/landing-page-vs-crustdata.md" },
      { name: "LinkedIn Posts", path: "phase-3b-content/linkedin-posts-crustdata.md", publicPath: "/files/phase-3b-content/linkedin-posts-crustdata.md" },
      { name: "Keyword Research + Calendar", path: "phase-3b-content/keyword-research-crustdata.md", publicPath: "/files/phase-3b-content/keyword-research-crustdata.md" },
      { name: "Lead Magnet Concepts", path: "phase-3b-content/lead-magnet-concepts-crustdata.md", publicPath: "/files/phase-3b-content/lead-magnet-concepts-crustdata.md" },
      { name: "Juicebox Case Study", path: "phase-3b-content/case-study-juicebox.md", publicPath: "/files/phase-3b-content/case-study-juicebox.md" },
      { name: "Bake-Off Evaluation Guide", path: "phase-3c-lead-magnet/bakeoff-kit-evaluation-guide.md", publicPath: "/files/phase-3c-lead-magnet/bakeoff-kit-evaluation-guide.md" },
      { name: "Scoring Spreadsheet", path: "phase-3c-lead-magnet/bakeoff-scoring-spreadsheet.csv", publicPath: "/files/phase-3c-lead-magnet/bakeoff-scoring-spreadsheet.csv" },
    ],
  },
  {
    category: "Phase 4 — Sequences",
    files: [
      { name: "Outbound Sequences (LGM)", path: "phase-4a-sequences/outbound-sequences-crustdata.md", publicPath: "/files/phase-4a-sequences/outbound-sequences-crustdata.md" },
      { name: "Tier 1 Personalization Guide (12 targets)", path: "phase-4a-sequences/tier1-personalization-guide.md", publicPath: "/files/phase-4a-sequences/tier1-personalization-guide.md" },
      { name: "1-to-1 Personalization Examples (all tiers)", path: "phase-4a-sequences/1-to-1-personalization-examples.md", publicPath: "/files/phase-4a-sequences/1-to-1-personalization-examples.md" },
      { name: "Inbound Nurture (7 emails)", path: "phase-4b-nurture/inbound-nurture-sequence.md", publicPath: "/files/phase-4b-nurture/inbound-nurture-sequence.md" },
    ],
  },
  {
    category: "Phase 5 — Sales Enablement",
    files: [
      { name: "Discovery Script", path: "phase-5-sales-enablement/discovery-script.md", publicPath: "/files/phase-5-sales-enablement/discovery-script.md" },
      { name: "Demo Guide", path: "phase-5-sales-enablement/demo-guide.md", publicPath: "/files/phase-5-sales-enablement/demo-guide.md" },
      { name: "Follow-Up Templates", path: "phase-5-sales-enablement/follow-up-templates.md", publicPath: "/files/phase-5-sales-enablement/follow-up-templates.md" },
    ],
  },
  {
    category: "Phase 6 — Launch",
    files: [
      { name: "Launch Config", path: "phase-6-launch/launch-config-crustdata.md", publicPath: "/files/phase-6-launch/launch-config-crustdata.md" },
    ],
  },
  {
    category: "Skills (New — Created During Build)",
    files: [
      { name: "Outbound Voice", path: "skills/outbound-voice.md", publicPath: "/files/skills/outbound-voice.md" },
      { name: "Competitive Displacement", path: "skills/competitive-displacement.md", publicPath: "/files/skills/competitive-displacement.md" },
      { name: "Tiered Personalization", path: "skills/tiered-personalization.md", publicPath: "/files/skills/tiered-personalization.md" },
      { name: "Sales Discovery", path: "skills/sales-discovery.md", publicPath: "/files/skills/sales-discovery.md" },
      { name: "Bake-Off Design", path: "skills/bake-off-design.md", publicPath: "/files/skills/bake-off-design.md" },
    ],
  },
  {
    category: "System",
    files: [
      { name: "Architecture Overview", path: "system/system-architecture-overview.md", publicPath: "/files/system/system-architecture-overview.md" },
    ],
  },
];

export const keyLearnings = [
  { title: "Awareness-Stage Positioning Fix", detail: "CrustData followers followed for B2B data. Leading with consumer data ('The Other 80%') pitches something they don't know they need. Outbound now leads with 'Our B2B data is better too'. Consumer data is the close, not the open. This was the single most important correction.", critical: true },
  { title: "Contact Graph as Primary Differentiator", detail: "733M emails, 899M phones, 270M+ addresses. Personal and professional, all linked. Most teams run a 2-3 vendor waterfall. Minerva replaces the waterfall with one call. This angle was added across ALL 8 customer-facing files.", critical: true },
  { title: "Exclusion List Scope", detail: "Target the COMPETITOR's investors, employees, and former employees — not your own team. Corrected early.", critical: false },
  { title: "Dogfooding Minerva CLI", detail: "Full pipeline verified: linkedin contact-info → resolve → enrich. 80% match rate, 2,168 fields per person, batch processing at 1,000/request.", critical: false },
  { title: "Daniel Saedi as Outbound Voice", detail: "Technical co-founder voice for cold outbound. Peer-to-peer works better than SDR voice for technical prospects. Jackson Engles reserved for blog/inbound.", critical: false },
  { title: "Persona 3 Upgrade", detail: "AI SDR tools upgraded from 'do not target' to 'medium priority'. Minerva's B2B data is objectively better even for CrustData's core use case. Increased targetable pool significantly.", critical: false },
  { title: "CrustData Email Clarification", detail: "Changed 'zero consumer data' to 'zero consumer ATTRIBUTE data'. They may return a personal email, but zero consumer context (no income, property, interests, household).", critical: false },
  { title: "Customer Logos Nuance", detail: "Company names (Perplexity, Anthropic) in CrustData product demos are example data, not customer endorsements. No formal case studies, no logo bar, no testimonials.", critical: false },
  { title: "Lead Magnet Design Principle", detail: "For displacement campaigns: free credits + evaluation framework > interactive calculators. The goal is to get prospects to TEST, not educate. Calculator is Wave 2+ for lower-awareness audiences.", critical: true },
  { title: "Round Numbers in Outbound", detail: "Theo's feedback: say 'over 2,000' not '2,168' in outbound copy. Specific enough to be credible, not so precise it sounds robotic.", critical: false },
];

export const sequenceFlow = {
  emailTrack: [
    { day: 0, name: "Intro", subject: "saw you follow crustdata", hook: "Organic opener. Ask if they're using CrustData or just keeping tabs. Introduce Minerva: over 2,000 fields, multi-sourced professional data, Juicebox social proof.", body: "hey {{firstName}},\n\nsaw you follow crustdata. are you actively using them at {{company}}, or just keeping tabs?\n\ni'm daniel, co-founder at minerva. we built a people enrichment API that returns over 2,000 fields per person in one call. professional data that's multi-sourced and standardized, plus consumer data that b2b-only providers don't touch. juicebox swapped their entire enrichment stack for ours.\n\ncurious what you're running now and if it'd be worth comparing?\n\ndaniel" },
    { day: 2, name: "Follow-Up 1", subject: "re: enrichment stack", hook: "Contact graph angle — the part that matters most day-to-day. 733M emails, 899M phones, 270M+ addresses. Replaces the waterfall.", body: "hey {{firstName}},\n\none thing i didn't mention. our contact graph is probably the part that matters most day-to-day.\n\n733M emails, 899M phones, 270M+ addresses. personal and professional, all linked. most teams i talk to are either running a waterfall across 2-3 contact providers or just living with gaps. we return verified emails, mobile phones, and addresses in the same call as everything else. no second vendor. no waterfall.\n\non top of that, we return income, property, household, interests, purchase behavior. over 2,000 fields per person. if you're scoring leads or personalizing anything, the consumer layer changes what's possible.\n\nno per-seat pricing either. purely usage-based.\n\nworth a look for {{company}}?\n\ndaniel" },
    { day: 7, name: "Follow-Up 2", subject: "free head-to-head test", hook: "Direct bake-off offer. Send your file, get results in 24 hours. Hard Rock Stadium, Wander, Juicebox all started this way.", body: "hey {{firstName}},\n\nfigured i'd just offer this directly. send us the same file you run through your current provider and we'll run a head-to-head. match rates by identifier type, field preview, side-by-side comparison.\n\n24 hours. no commitment. no call required.\n\nhard rock stadium, wander, and juicebox all started with this exact test. happy to do the same for {{company}} if you're curious.\n\ndaniel\ndaniel@minerva.io" },
    { day: 14, name: "Breakup", subject: "closing the loop", hook: "Opens with 'just busy or not interested?' — direct and human. Leaves the door open with a one-line summary.", body: "hey {{firstName}},\n\njust busy or not interested?\n\neither way, no worries. if enrichment data ever comes up at {{company}}, here's the short version: over 2,000 fields per person, one API call, no per-seat pricing, and we'll run a free head-to-head test on your actual data anytime.\n\ndaniel@minerva.io if anything changes.\n\ndaniel" },
  ],
  linkedInTrack: [
    { day: 0, name: "Connection Request", hook: "300 char limit. Organic: 'saw you follow crustdata so figured you're in the enrichment world. i'm building minerva, people enrichment API. over 2,000 fields per person.'", body: "hey {{firstName}}, saw you follow crustdata so figured you're in the enrichment world. i'm building minerva, people enrichment API. over 2,000 fields per person, multi-sourced professional data. would be good to connect." },
    { day: null, name: "DM on Accept", hook: "Different angle from connection request. Bake-off offer or resource share. Never 'thanks for connecting' — that auto-indicates a bot.", body: "hey {{firstName}}, are you actively using an enrichment provider right now? if you ever want to test yours against ours, send me a sample file and i'll return match rates + field preview in 24 hours." },
  ],
  tiers: [
    { tier: 1, count: 12, approach: "Manual 1-to-1 personalization on Email 1 + LinkedIn note. Reference their specific product, role, company." },
    { tier: 2, count: 89, approach: "Templates with merge fields as-is. Full email + LinkedIn sequence." },
    { tier: 3, count: 292, approach: "Email track only (no LinkedIn). Abbreviated: Email 1, Follow-Up 2, Breakup." },
  ],
};

export const systemImprovements = [
  { title: "Source Verification Gate", description: "Every factual claim must have a linked source URL. If unsourced, tagged [UNVERIFIED]." },
  { title: "Claims Registry", description: "Single source-of-truth file for key claims. When corrected, propagate across all downstream files." },
  { title: "Awareness-Stage Map", description: "Required Phase 2 input. Map each segment's awareness level BEFORE writing positioning angles." },
  { title: "Live Verification Crawl", description: "Phase 1 Step 1: web agent crawls competitor's full public footprint before any analysis begins." },
  { title: "Propagation Sweep", description: "After any correction, mandatory grep + update across all campaign files." },
  { title: "Commercial Terms Interview", description: "Phase 0 capture: pricing model, negotiation flexibility, free tier, per-seat policy, strategic intent." },
  { title: "1-to-1 Personalization", description: "Future: LLM writes unique email per person using full 2,168-field enrichment profile. Kill templates entirely." },
];

export const stats = {
  totalArtifacts: "26+",
  totalPhases: 7,
  timePerCompetitor: "~4 hours (first run)",
  timeSubsequent: "~3 hours",
  skillsUsed: 10,
  skillsAvailable: 47,
  newSkillsCreated: 5,
  humanReviewGates: 8,
  targetProspects: 393,
  tier1: 12,
  tier2: 89,
  tier3: 292,
  fieldsPerPerson: "2,168+",
  matchRate: "70-80%",
  contactEmails: "733M",
  contactPhones: "899M",
  contactAddresses: "270M+",
};
