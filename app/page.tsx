"use client";

import { useState } from "react";
import { phases, skillsUsed, newSkillsCreated, keyLearnings, sequenceFlow, systemImprovements, stats } from "@/lib/data";
import {
  ChevronDown, ChevronRight, FileText, Zap, Shield, Users,
  ArrowRight, CheckCircle2, AlertTriangle, BookOpen, Mail,
  Link as LinkedinIcon, Clock, Target, Layers, GitBranch, Brain, Wrench,
  BarChart3, Lightbulb, ExternalLink, X
} from "lucide-react";

type Tab = "overview" | "pipeline" | "sequences" | "skills" | "learnings" | "future";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [expandedArtifact, setExpandedArtifact] = useState<string | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [showSequenceDetail, setShowSequenceDetail] = useState<number | null>(null);

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <Layers size={16} /> },
    { id: "pipeline", label: "Pipeline", icon: <GitBranch size={16} /> },
    { id: "sequences", label: "Sequences", icon: <Mail size={16} /> },
    { id: "skills", label: "Skills", icon: <Brain size={16} /> },
    { id: "learnings", label: "Learnings", icon: <Lightbulb size={16} /> },
    { id: "future", label: "Future", icon: <Wrench size={16} /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">V</div>
                <h1 className="text-lg font-semibold text-white">Vampire Attack GTM System</h1>
              </div>
              <p className="mt-1 text-xs text-zinc-500">Built for Minerva BI — A repeatable competitive displacement machine</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-green-400 border border-green-500/20">CrustData Campaign: Complete</span>
              <span>April 2026</span>
            </div>
          </div>
          {/* Tabs */}
          <nav className="mt-4 flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "pipeline" && (
          <PipelineTab
            expandedPhase={expandedPhase}
            setExpandedPhase={setExpandedPhase}
            expandedArtifact={expandedArtifact}
            setExpandedArtifact={setExpandedArtifact}
          />
        )}
        {activeTab === "sequences" && (
          <SequencesTab
            showDetail={showSequenceDetail}
            setShowDetail={setShowSequenceDetail}
          />
        )}
        {activeTab === "skills" && (
          <SkillsTab
            expandedSkill={expandedSkill}
            setExpandedSkill={setExpandedSkill}
          />
        )}
        {activeTab === "learnings" && <LearningsTab />}
        {activeTab === "future" && <FutureTab />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">
        Designed by Justin Liao for Minerva BI — Engine is reusable: swap the brand files and run it for any company
      </footer>
    </div>
  );
}

/* ============== OVERVIEW TAB ============== */
function OverviewTab() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-blue-400 mb-2">What is a Vampire Attack?</p>
          <h2 className="text-3xl font-bold text-white leading-tight">
            Treat competitors as lead sources,<br />not just context.
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
            The name borrows from DeFi: a vampire attack intercepts a competitor&apos;s users by offering strictly better value. SushiSwap did it to Uniswap with token rewards. Here, Minerva does it to data enrichment competitors with 24x more data fields, 3-4x higher match rates, and a full demand generation platform where competitors offer raw APIs.
          </p>
          <p className="mt-3 text-zinc-400 leading-relaxed max-w-2xl">
            Every competitor&apos;s customer list, review page, SEO footprint, and social proof becomes an acquisition channel. The system is config-driven: swap the brand files and run it for any company.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Artifacts Produced", value: stats.totalArtifacts, icon: <FileText size={18} /> },
          { label: "Time per Competitor", value: stats.timePerCompetitor, icon: <Clock size={18} /> },
          { label: "Human Review Gates", value: stats.humanReviewGates.toString(), icon: <Shield size={18} /> },
          { label: "Skills Used", value: `${stats.skillsUsed} of ${stats.skillsAvailable}`, icon: <Brain size={18} /> },
          { label: "Target Prospects", value: stats.targetProspects.toString(), icon: <Target size={18} /> },
          { label: "Fields per Person", value: stats.fieldsPerPerson, icon: <Layers size={18} /> },
          { label: "Contact Match Rate", value: stats.matchRate, icon: <BarChart3 size={18} /> },
          { label: "New Skills Created", value: stats.newSkillsCreated.toString(), icon: <Wrench size={18} /> },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              {stat.icon}
              <span className="text-xs">{stat.label}</span>
            </div>
            <p className="text-xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Architecture Diagram */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h3 className="text-lg font-semibold text-white mb-6">System Architecture</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Layer 1: System */}
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center">
                <Zap size={14} className="text-blue-400" />
              </div>
              <span className="text-sm font-medium text-blue-400">System (Engine)</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Changes when you improve the process</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Master prompt</li>
              <li>• Project plan + gates</li>
              <li>• Phase pipeline</li>
              <li>• Dashboard UI</li>
              <li>• Templates</li>
            </ul>
          </div>
          {/* Layer 2: Brand */}
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-purple-500/20 flex items-center justify-center">
                <Users size={14} className="text-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-400">Brand (Config)</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Changes when you fork for a new company</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Positioning</li>
              <li>• Audience definitions</li>
              <li>• Competitor profiles</li>
              <li>• Voice profile</li>
              <li>• Differentiation data</li>
            </ul>
          </div>
          {/* Layer 3: Campaigns */}
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-green-500/20 flex items-center justify-center">
                <Target size={14} className="text-green-400" />
              </div>
              <span className="text-sm font-medium text-green-400">Campaigns (Output)</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Changes when you attack a new competitor</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Research findings</li>
              <li>• Attack angles + copy</li>
              <li>• Prospect lists</li>
              <li>• Sequences + nurture</li>
              <li>• Sales enablement</li>
            </ul>
          </div>
        </div>

        {/* Skill Chain */}
        <div className="mt-8 rounded-xl border border-zinc-700 bg-zinc-800/30 p-5">
          <p className="text-sm font-medium text-zinc-300 mb-4">Skill Chain by Phase</p>
          <div className="space-y-2 font-mono text-xs">
            {[
              { phase: "Phase 1", chain: "research-agent → positioning-angles" },
              { phase: "Phase 2", chain: "positioning-angles → direct-response-copy → humanize-ai" },
              { phase: "Phase 3B", chain: "seo-content → direct-response-copy → content-atomizer → humanize-ai" },
              { phase: "Phase 3C", chain: "lead-magnet → direct-response-copy → humanize-ai" },
              { phase: "Phase 4A", chain: "direct-response-copy → humanize-ai" },
              { phase: "Phase 4B", chain: "email-sequences → humanize-ai" },
              { phase: "Phase 5", chain: "stakeholder-message-crafter → direct-response-copy → content-atomizer" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-zinc-500 w-20 shrink-0">{item.phase}</span>
                <span className="text-zinc-300">{item.chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Track */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h3 className="text-lg font-semibold text-white mb-6">Dual-Track Approach</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={16} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Outbound Track (Push)</span>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-amber-400 shrink-0" /> Phase 3A: Build 3 prospect lists</li>
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-amber-400 shrink-0" /> Phase 4A: Write multi-channel sequences</li>
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-amber-400 shrink-0" /> LaGrowthMachine: LinkedIn + Email, 6 touches over 14 days</li>
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-amber-400 shrink-0" /> Soft CTAs drive to lead magnet (cross-track)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Inbound Track (Pull)</span>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-cyan-400 shrink-0" /> Phase 3B: SEO blog, landing page, social posts</li>
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-cyan-400 shrink-0" /> Phase 3C: Bake-off kit lead magnet</li>
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-cyan-400 shrink-0" /> Phase 4B: 7-email nurture drip</li>
              <li className="flex items-start gap-2"><ArrowRight size={12} className="mt-0.5 text-cyan-400 shrink-0" /> Captures demand from outbound soft CTAs</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-xs text-zinc-300">
            <span className="text-amber-400">Outbound</span>
            <ArrowRight size={12} className="text-zinc-500" />
            <span className="text-zinc-400">Convergence: Demo Booked</span>
            <ArrowRight size={12} className="text-zinc-500" />
            <span className="text-cyan-400">Inbound</span>
          </div>
        </div>
      </section>

      {/* Hackathon Note */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-zinc-300">Built during a hackathon sprint</p>
            <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
              This system was built under time constraints. The CrustData campaign is complete (all 7 phases, 26+ artifacts). The Windfall campaign is queued but not started. Future improvements include: LLM-generated 1-to-1 personalization for all tiers, automated claims registry propagation, live verification crawls as Phase 1 Step 1, and A/B testing the segment-level templates vs. personalized copy. The engine is production-ready — the expansion loops and additional competitor campaigns are the next sprint.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============== PIPELINE TAB ============== */
function PipelineTab({
  expandedPhase,
  setExpandedPhase,
  expandedArtifact,
  setExpandedArtifact,
}: {
  expandedPhase: number | null;
  setExpandedPhase: (id: number | null) => void;
  expandedArtifact: string | null;
  setExpandedArtifact: (name: string | null) => void;
}) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">7-Phase Pipeline</h2>
        <p className="mt-1 text-sm text-zinc-400">Click any phase to expand. Click artifacts to preview content.</p>
      </div>

      {/* Dependency Graph */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 mb-6">
        <p className="text-xs text-zinc-500 mb-4 font-medium">DEPENDENCY GRAPH</p>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {phases.map((phase, i) => (
            <div key={phase.id} className="flex items-center gap-2">
              <button
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                className="rounded-lg px-3 py-1.5 border transition-all hover:scale-105"
                style={{
                  borderColor: phase.color + "40",
                  backgroundColor: phase.color + "10",
                  color: phase.color,
                }}
              >
                P{phase.id}
              </button>
              {i < phases.length - 1 && (
                <ArrowRight size={12} className="text-zinc-600" />
              )}
              {(phase.id === 2 || phase.id === 4) && (
                <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-500 text-[10px]">GATE</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-zinc-600">Phases 3A+3B+3C run in parallel. Phases 4A+4B run in parallel. All others sequential.</p>
      </div>

      {/* Phase Cards */}
      {phases.map((phase) => (
        <div
          key={phase.id}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all"
        >
          {/* Phase Header */}
          <button
            onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
            className="w-full flex items-center gap-4 p-5 text-left hover:bg-zinc-800/30 transition-colors"
          >
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
              style={{ backgroundColor: phase.color + "20", color: phase.color }}
            >
              {phase.id}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold text-white">{phase.name}</h3>
                <span className="text-[10px] text-zinc-500 bg-zinc-800 rounded px-2 py-0.5">{phase.time}</span>
                <CheckCircle2 size={14} className="text-green-500" />
              </div>
              <p className="mt-0.5 text-xs text-zinc-400 truncate">{phase.description}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] text-zinc-500">{phase.artifacts.length} artifacts</span>
              {phase.skills.length > 0 && (
                <span className="text-[10px] text-zinc-500">{phase.skills.length} skills</span>
              )}
              {phase.gates.length > 0 && (
                <span className="text-[10px] text-amber-400">{phase.gates.length} gate{phase.gates.length > 1 ? "s" : ""}</span>
              )}
              {expandedPhase === phase.id ? <ChevronDown size={16} className="text-zinc-500" /> : <ChevronRight size={16} className="text-zinc-500" />}
            </div>
          </button>

          {/* Expanded Content */}
          {expandedPhase === phase.id && (
            <div className="border-t border-zinc-800 p-5 space-y-5 animate-fade-in">
              {/* Details */}
              <div className="rounded-lg bg-zinc-800/30 p-4">
                <p className="text-xs text-zinc-400 whitespace-pre-line leading-relaxed">{phase.details}</p>
              </div>

              {/* Skills */}
              {phase.skills.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-2">SKILLS USED</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.skills.map((skill) => (
                      <div key={skill.name} className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
                        <div className="flex items-center gap-2">
                          <Brain size={12} className="text-purple-400" />
                          <span className="text-xs font-medium text-purple-300 font-mono">{skill.name}</span>
                        </div>
                        <p className="mt-1 text-[11px] text-zinc-400">{skill.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Artifacts */}
              <div>
                <p className="text-xs font-medium text-zinc-500 mb-2">ARTIFACTS</p>
                <div className="space-y-2">
                  {phase.artifacts.map((artifact) => (
                    <div key={artifact.name}>
                      <button
                        onClick={() => setExpandedArtifact(expandedArtifact === artifact.name ? null : artifact.name)}
                        className="w-full flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800/50 p-3 hover:bg-zinc-700/50 transition-colors text-left"
                      >
                        <FileText size={14} className="text-zinc-400 shrink-0" />
                        <span className="text-xs text-zinc-200 flex-1">{artifact.name}</span>
                        <span className="text-[10px] text-zinc-600 font-mono">{artifact.format}</span>
                        <span className="text-[10px] text-zinc-600 font-mono">{artifact.file}</span>
                        {expandedArtifact === artifact.name ? <ChevronDown size={12} className="text-zinc-500" /> : <ChevronRight size={12} className="text-zinc-500" />}
                      </button>
                      {expandedArtifact === artifact.name && artifact.preview && (
                        <div className="ml-8 mt-1 rounded-lg bg-zinc-800/80 border border-zinc-700/50 p-3 animate-fade-in">
                          <p className="text-[11px] text-zinc-400 leading-relaxed">{artifact.preview}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Gates */}
              {phase.gates.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-2">HUMAN REVIEW GATES</p>
                  {phase.gates.map((gate) => (
                    <div key={gate.id} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                      <div className="flex items-center gap-2">
                        <Shield size={12} className="text-amber-400" />
                        <span className="text-xs font-medium text-amber-300">{gate.name}</span>
                        <span className="text-[10px] text-zinc-500">Reviewed by: {gate.reviewedBy}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-zinc-400">{gate.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ============== SEQUENCES TAB ============== */
function SequencesTab({
  showDetail,
  setShowDetail,
}: {
  showDetail: number | null;
  setShowDetail: (idx: number | null) => void;
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">LaGrowthMachine Sequences</h2>
        <p className="mt-1 text-sm text-zinc-400">Email + LinkedIn tracks running in parallel. Click any email to see the full copy.</p>
      </div>

      {/* Voice Rules */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <p className="text-xs font-medium text-zinc-500 mb-3">VOICE RULES (Daniel Saedi)</p>
        <div className="grid md:grid-cols-2 gap-2 text-xs text-zinc-400">
          {[
            "All lowercase. Casual. Like a smart person in your network.",
            "No salesy language, ever. Goal is to inform, not sell.",
            "No em dashes. Hyphens okay if natural.",
            "CTAs are questions or soft offers. Never pushy.",
            "Open with organic context ('saw you follow crustdata').",
            "Specific but not over-precise ('over 2,000' not '2,168').",
            "Tone: like a friend describing a tool that'd solve their problem.",
            "Short. Direct. Every sentence earns its place.",
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={10} className="mt-1 text-green-500 shrink-0" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Email Track */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Mail size={16} className="text-amber-400" />
          <h3 className="text-sm font-semibold text-white">Email Track</h3>
        </div>
        <div className="space-y-3">
          {sequenceFlow.emailTrack.map((email, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <button
                onClick={() => setShowDetail(showDetail === i ? null : i)}
                className="w-full flex items-center gap-4 p-4 text-left hover:bg-zinc-800/30 transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-xs font-bold text-amber-400 shrink-0">
                  D{email.day}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white">{email.name}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Subject: {email.subject}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-zinc-400 truncate">{email.hook}</p>
                </div>
                {showDetail === i ? <ChevronDown size={14} className="text-zinc-500" /> : <ChevronRight size={14} className="text-zinc-500" />}
              </button>
              {showDetail === i && (
                <div className="border-t border-zinc-800 p-4 animate-fade-in">
                  <pre className="text-xs text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    {email.body}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn Track */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <LinkedinIcon size={16} className="text-blue-400" />
          <h3 className="text-sm font-semibold text-white">LinkedIn Track</h3>
        </div>
        <div className="space-y-3">
          {sequenceFlow.linkedInTrack.map((msg, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded bg-blue-500/10 flex items-center justify-center text-[10px] font-bold text-blue-400">
                  {msg.day !== null ? `D${msg.day}` : "→"}
                </div>
                <span className="text-xs font-medium text-white">{msg.name}</span>
              </div>
              <p className="text-[11px] text-zinc-400 mb-2">{msg.hook}</p>
              <pre className="text-xs text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50">
                {msg.body}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Tiers */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Tiered Personalization</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {sequenceFlow.tiers.map((tier) => (
            <div key={tier.tier} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-white">Tier {tier.tier}</span>
                <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">{tier.count} prospects</span>
              </div>
              <p className="text-[11px] text-zinc-400">{tier.approach}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LGM Config */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
        <p className="text-xs font-medium text-zinc-500 mb-3">LAGROWTHACHINE CONFIG</p>
        <div className="grid md:grid-cols-2 gap-3 text-xs text-zinc-400">
          <div>• Email + LinkedIn run in parallel from Day 0</div>
          <div>• Daily limits: 30-50 LinkedIn connections/day</div>
          <div>• Tier 1 launches Day 0, Tier 2 Day 3, Tier 3 Day 7</div>
          <div>• Identity: Jackson Engles or Daniel Saedi</div>
          <div>• Tier 3: Email only, no LinkedIn</div>
          <div>• Tag every reply by segment (A-E) and tier (1-3)</div>
        </div>
      </div>
    </div>
  );
}

/* ============== SKILLS TAB ============== */
function SkillsTab({
  expandedSkill,
  setExpandedSkill,
}: {
  expandedSkill: string | null;
  setExpandedSkill: (name: string | null) => void;
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">Skills & Tools</h2>
        <p className="mt-1 text-sm text-zinc-400">10 skills from the 47-skill library actively used, plus 5 new skills created during this build.</p>
      </div>

      {/* Context */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <p className="text-xs font-medium text-zinc-500 mb-3">HOW SKILLS WORK</p>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Skills are modular prompt components stored at <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-[10px]">~/Documents/.agents/skills/</code>. Each skill is a specialized capability — SEO content, direct-response copy, email sequences, humanize-AI, etc. The Claude agent chains skills together per phase. Brand voice and positioning context flow through all skills via the brand files.
        </p>
        <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
          Voice profiles were captured from <span className="text-zinc-300">Gong call transcripts</span> of Daniel Saedi and Jackson Engles. Their actual speech patterns, vocabulary, and pacing informed the outbound-voice skill and brand-voice configuration.
        </p>
      </div>

      {/* Skills Used */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Skills Used in Campaign ({skillsUsed.length})</h3>
        <div className="space-y-2">
          {skillsUsed.map((skill) => (
            <div key={skill.name} className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              <button
                onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-zinc-800/30 transition-colors"
              >
                <Brain size={14} className="text-purple-400 shrink-0" />
                <span className="text-xs font-medium text-purple-300 font-mono w-48 shrink-0">{skill.name}</span>
                <span className="text-[10px] text-zinc-500 w-24 shrink-0">{skill.phases}</span>
                <span className="text-[11px] text-zinc-400 flex-1 truncate">{skill.purpose}</span>
                {expandedSkill === skill.name ? <ChevronDown size={12} className="text-zinc-500" /> : <ChevronRight size={12} className="text-zinc-500" />}
              </button>
              {expandedSkill === skill.name && (
                <div className="border-t border-zinc-800 p-4 animate-fade-in">
                  <p className="text-xs text-zinc-400 leading-relaxed">{skill.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* New Skills Created */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">New Skills Created ({newSkillsCreated.length})</h3>
        <div className="space-y-2">
          {newSkillsCreated.map((skill) => (
            <div key={skill.name} className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
              <button
                onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-green-500/10 transition-colors"
              >
                <Wrench size={14} className="text-green-400 shrink-0" />
                <span className="text-xs font-medium text-green-300 font-mono w-48 shrink-0">{skill.name}</span>
                <span className="text-[11px] text-zinc-400 flex-1 truncate">{skill.purpose}</span>
                {expandedSkill === skill.name ? <ChevronDown size={12} className="text-zinc-500" /> : <ChevronRight size={12} className="text-zinc-500" />}
              </button>
              {expandedSkill === skill.name && (
                <div className="border-t border-green-500/10 p-4 animate-fade-in">
                  <p className="text-xs text-zinc-400 leading-relaxed">{skill.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MCP Tools */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">MCP Tools & Execution Stack</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Vibe Prospecting MCP", phase: "Phase 3A", desc: "fetch-entities, enrich-prospects, export-to-csv for prospect list building" },
            { name: "Web Search MCP", phase: "Phase 1", desc: "Competitor site scraping, review mining, social audit" },
            { name: "Minerva CLI", phase: "Phase 3A", desc: "Dogfooded: linkedin contact-info → resolve → enrich. 80% match rate, batch 1,000/request" },
            { name: "LaGrowthMachine", phase: "Phase 4A+", desc: "Multi-channel sequence execution (LinkedIn + Email in parallel)" },
            { name: "Clay", phase: "Phase 3A", desc: "CRM enrichment with Minerva API integration, custom field generation" },
            { name: "Claude Code / Cowork", phase: "All", desc: "Agent that runs the pipeline, chains skills, produces all deliverables" },
          ].map((tool) => (
            <div key={tool.name} className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-3">
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-cyan-400" />
                <span className="text-xs font-medium text-cyan-300">{tool.name}</span>
                <span className="text-[10px] text-zinc-600">{tool.phase}</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-400">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== LEARNINGS TAB ============== */
function LearningsTab() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">Key Learnings & Corrections</h2>
        <p className="mt-1 text-sm text-zinc-400">Documented during the CrustData campaign build. Each learning improved the system for future runs.</p>
      </div>

      {/* Critical Learnings */}
      <div>
        <h3 className="text-sm font-semibold text-amber-400 mb-4">Critical Corrections</h3>
        <div className="space-y-3">
          {keyLearnings.filter(l => l.critical).map((learning, i) => (
            <div key={i} className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-amber-300">{learning.title}</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">{learning.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Learnings */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-300 mb-4">All Learnings</h3>
        <div className="space-y-2">
          {keyLearnings.filter(l => !l.critical).map((learning, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
              <h4 className="text-xs font-medium text-zinc-300">{learning.title}</h4>
              <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed">{learning.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gate Failures */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="text-sm font-semibold text-white mb-4">Gate Failures That Led to System Improvements</h3>
        <div className="space-y-4">
          {[
            { gate: "Source Verification", what: "CrustData HQ stated as Austin (was SF). Pricing stated without attribution.", fix: "Every factual claim must have a linked source URL. Unsourced claims tagged [UNVERIFIED]." },
            { gate: "Customer Claims Consistency", what: "Correction applied to research brief but NOT propagated to battlecard, one-pager, blog.", fix: "Claims Registry + mandatory propagation sweep after any correction." },
            { gate: "Awareness-Stage Mapping", what: "Led with consumer data for B2B-aware audience. Had to rewrite all outbound angles.", fix: "Awareness-Stage Map required BEFORE positioning angles are written." },
            { gate: "Commercial Terms Input", what: "Discussed pricing without knowing Minerva's actual terms.", fix: "Commercial Terms Interview added to Phase 0." },
            { gate: "Live Website Verification", what: "Claims based on cached data, not current competitor website.", fix: "Live Website Crawl mandatory as Phase 1 Step 1." },
          ].map((failure, i) => (
            <div key={i} className="rounded-lg bg-zinc-800/30 p-4">
              <p className="text-xs font-medium text-red-400">{failure.gate}</p>
              <p className="mt-1 text-[11px] text-zinc-500">What happened: {failure.what}</p>
              <p className="mt-1 text-[11px] text-green-400">Fix: {failure.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== FUTURE TAB ============== */
function FutureTab() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">Future Evolution</h2>
        <p className="mt-1 text-sm text-zinc-400">System improvements identified during the build. Each makes the next campaign run faster and better.</p>
      </div>

      {/* Expansion Loop */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h3 className="text-lg font-semibold text-white mb-6">The Expansion Loop</h3>
        <div className="space-y-4">
          {[
            { wave: "Wave 1", label: "Competitor Followers (Seed)", size: "~1,200 → ~300 reachable", messaging: "Direct displacement ('us vs. them')", color: "#3b82f6", goal: "Validate which personas + angles convert" },
            { wave: "Wave 2", label: "Person Search Expansion", size: "5,000-10,000 via Person Search API", messaging: "Category education + differentiation", color: "#8b5cf6", goal: "Scale what worked in Wave 1" },
            { wave: "Wave 3", label: "Full TAM Build", size: "25,000+ records", messaging: "Problem → solution (no competitor mention)", color: "#22c55e", goal: "Own the category" },
          ].map((wave, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: wave.color + "20", color: wave.color }}>
                  {i + 1}
                </div>
                {i < 2 && <div className="w-0.5 h-8 bg-zinc-700 mt-1" />}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">{wave.wave}: {wave.label}</span>
                  <span className="text-[10px] bg-zinc-800 rounded px-2 py-0.5 text-zinc-400">{wave.size}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400">Messaging: {wave.messaging}</p>
                <p className="text-xs text-zinc-500">Goal: {wave.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1-to-1 Personalization */}
      <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8">
        <h3 className="text-lg font-semibold text-white mb-2">Minerva-Powered 1-to-1 Personalization</h3>
        <p className="text-xs text-zinc-400 mb-6">The most powerful demo of Minerva&apos;s value: use our own enrichment data to write personalized outbound that gets higher response rates.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-zinc-800/50 p-4">
            <p className="text-xs font-medium text-zinc-500 mb-2">CURRENT (Segment-Level)</p>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>5 email variants across 393 targets</li>
              <li>Angle picked by segment</li>
              <li>Only Tier 1 gets manual personalization</li>
              <li>Reply rates: ~8-12% industry average</li>
            </ul>
          </div>
          <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4">
            <p className="text-xs font-medium text-purple-400 mb-2">FUTURE (1-to-1)</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>393 unique emails</li>
              <li>Angle picked by individual enrichment profile</li>
              <li>Every tier gets Tier 1 quality</li>
              <li>Reply rates: 15-25%+ projected</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-zinc-800/30 p-3">
          <p className="text-[11px] text-zinc-500">Implementation: ~10-15 hours. Enrichment pipeline already built. Needs: LLM prompt template, sending infrastructure (Instantly/Smartlead), review queue, A/B framework. Planned for Wave 2-3.</p>
        </div>
      </div>

      {/* System Improvements */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Proposed System Changes</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {systemImprovements.map((imp, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Wrench size={12} className="text-cyan-400" />
                <span className="text-xs font-medium text-cyan-300">{imp.title}</span>
              </div>
              <p className="text-[11px] text-zinc-400">{imp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Competitors */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
        <h3 className="text-sm font-semibold text-white mb-4">Next Competitor Campaigns (Queued)</h3>
        <div className="flex flex-wrap gap-2">
          {["Windfall", "Apollo", "ZoomInfo", "Clearbit", "Lusha"].map((name) => (
            <span key={name} className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-400">
              {name}
            </span>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-zinc-500">Same personas apply across all data enrichment competitors. Each campaign: ~3 hours (brand files reused, templates cloned). The system compounds: each campaign adds content, leads, and learnings.</p>
      </div>
    </div>
  );
}
