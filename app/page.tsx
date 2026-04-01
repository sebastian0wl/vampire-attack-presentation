"use client";

import { useState } from "react";
import { phases, skillsUsed, newSkillsCreated, keyLearnings, sequenceFlow, systemImprovements, stats, allFiles } from "@/lib/data";
import type { Artifact } from "@/lib/data";
import FileViewer from "@/components/FileViewer";
import {
  ChevronDown, ChevronRight, FileText, Zap, Shield, Users,
  ArrowRight, ArrowDown, CheckCircle2, AlertTriangle, BookOpen, Mail,
  Link as LinkedinIcon, Clock, Target, Layers, GitBranch, Brain, Wrench,
  BarChart3, Lightbulb, X, Download, FolderOpen, Eye, Sparkles
} from "lucide-react";

type Tab = "overview" | "pipeline" | "files" | "sequences" | "skills" | "learnings" | "future";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [showSequenceDetail, setShowSequenceDetail] = useState<number | null>(null);
  // File viewer state
  const [viewerFile, setViewerFile] = useState<{ path: string; name: string } | null>(null);

  const openFile = (publicPath: string, name: string) => {
    if (publicPath) setViewerFile({ path: publicPath, name });
  };

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <Layers size={16} /> },
    { id: "pipeline", label: "Pipeline", icon: <GitBranch size={16} /> },
    { id: "files", label: "All Files", icon: <FolderOpen size={16} /> },
    { id: "sequences", label: "Sequences", icon: <Mail size={16} /> },
    { id: "skills", label: "Skills", icon: <Brain size={16} /> },
    { id: "learnings", label: "Learnings", icon: <Lightbulb size={16} /> },
    { id: "future", label: "Future", icon: <Wrench size={16} /> },
  ];

  return (
    <div className="min-h-screen">
      {/* File Viewer Drawer */}
      {viewerFile && (
        <FileViewer
          filePath={viewerFile.path}
          fileName={viewerFile.name}
          onClose={() => setViewerFile(null)}
        />
      )}

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
          <nav className="mt-4 flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-all ${
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
        {activeTab === "overview" && <OverviewTab onOpenFile={openFile} />}
        {activeTab === "pipeline" && (
          <PipelineTab
            expandedPhase={expandedPhase}
            setExpandedPhase={setExpandedPhase}
            onOpenFile={openFile}
          />
        )}
        {activeTab === "files" && <AllFilesTab onOpenFile={openFile} />}
        {activeTab === "sequences" && (
          <SequencesTab showDetail={showSequenceDetail} setShowDetail={setShowSequenceDetail} onOpenFile={openFile} />
        )}
        {activeTab === "skills" && (
          <SkillsTab expandedSkill={expandedSkill} setExpandedSkill={setExpandedSkill} onOpenFile={openFile} />
        )}
        {activeTab === "learnings" && <LearningsTab />}
        {activeTab === "future" && <FutureTab />}
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">
        Designed by Justin Liao for Minerva BI — Engine is reusable: swap the brand files and run it for any company
      </footer>
    </div>
  );
}

/* ============ ARTIFACT BUTTON COMPONENT ============ */
function ArtifactButton({ artifact, onOpenFile }: { artifact: Artifact; onOpenFile: (path: string, name: string) => void }) {
  const hasFile = artifact.publicPath && artifact.publicPath.length > 0;
  return (
    <button
      onClick={() => hasFile && onOpenFile(artifact.publicPath, artifact.name)}
      disabled={!hasFile}
      className={`flex items-center gap-3 rounded-lg border border-zinc-700 p-3 text-left transition-all w-full ${
        hasFile ? "bg-zinc-800/50 hover:bg-zinc-700/50 hover:border-zinc-600 cursor-pointer" : "bg-zinc-800/20 opacity-60 cursor-default"
      }`}
    >
      <FileText size={14} className="text-blue-400 shrink-0" />
      <div className="flex-1 min-w-0">
        <span className="text-xs text-zinc-200 block">{artifact.name}</span>
        {artifact.preview && <span className="text-[10px] text-zinc-500 block truncate mt-0.5">{artifact.preview}</span>}
      </div>
      <span className="text-[10px] text-zinc-600 font-mono shrink-0">{artifact.format}</span>
      {hasFile && <Eye size={12} className="text-zinc-500 shrink-0" />}
    </button>
  );
}

/* ============ VISUAL PIPELINE FLOWCHART ============ */
function PipelineFlowchart({ onOpenFile }: { onOpenFile: (path: string, name: string) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const PhaseBlock = ({ id, name, subtitle, skills, outputs, color, artifacts }: {
    id: string; name: string; subtitle: string; skills?: string; outputs: string; color: string; artifacts?: Artifact[];
  }) => {
    const isExpanded = expanded === id;
    return (
      <div className="flex flex-col items-center">
        <button
          onClick={() => setExpanded(isExpanded ? null : id)}
          className="w-full max-w-md rounded-xl border-2 px-5 py-4 text-center transition-all hover:scale-[1.02]"
          style={{ borderColor: color, backgroundColor: color + "15" }}
        >
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-[11px] mt-1" style={{ color: color + "cc" }}>{subtitle}</p>
          {skills && <p className="text-[10px] text-zinc-500 mt-1">Skills: {skills}</p>}
          <p className="text-[10px] text-zinc-400 mt-1">Outputs: {outputs}</p>
        </button>
        {isExpanded && artifacts && artifacts.length > 0 && (
          <div className="mt-2 w-full max-w-md space-y-1.5 animate-fade-in">
            {artifacts.map((a) => (
              <ArtifactButton key={a.name} artifact={a} onOpenFile={onOpenFile} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const GateBlock = ({ label }: { label: string }) => (
    <div className="flex justify-center py-1">
      <div className="rounded-full border-2 border-dashed border-amber-500/40 bg-amber-500/5 px-5 py-2">
        <p className="text-[11px] text-amber-400 font-medium">{label}</p>
      </div>
    </div>
  );

  const Connector = () => (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-zinc-700" />
        <ArrowDown size={14} className="text-zinc-600 -mt-1" />
      </div>
    </div>
  );

  return (
    <div className="space-y-1">
      {/* Phase 0 */}
      <PhaseBlock
        id="p0" name="Phase 0: Foundation setup" color="#6b7280"
        subtitle="Brand memory, competitor list, exclusion lists, tool access"
        outputs="5 brand files, exclusion CSV"
        artifacts={phases[0].artifacts}
      />
      <Connector />
      <GateBlock label="GATE 1: Confirm competitor target" />
      <Connector />

      {/* Phase 1 */}
      <PhaseBlock
        id="p1" name="Phase 1: Competitor deep research" color="#3b82f6"
        subtitle="Website audit, G2 review mining, social scrape, logo extraction"
        skills="research-agent, positioning-angles"
        outputs="Research brief, logo list, positioning map"
        artifacts={phases[1].artifacts}
      />
      <Connector />
      <GateBlock label="GATE 2: Review research, confirm angles" />
      <Connector />

      {/* Phase 2 */}
      <PhaseBlock
        id="p2" name="Phase 2: Positioning + battlecard" color="#8b5cf6"
        subtitle="Side-by-side comparison, objection handling, proof points"
        skills="positioning-angles, direct-response-copy, humanize-ai"
        outputs="Battlecard, one-pager, positioning angles"
        artifacts={phases[2].artifacts}
      />
      <Connector />
      <GateBlock label="GATE 3: Approve messaging + battlecard" />
      <Connector />

      {/* Parallel: Phase 3A + 3B */}
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <PhaseBlock
          id="p3a" name="Phase 3A: Target lists" color="#f59e0b"
          subtitle="Vibe Prospecting MCP\nLists A, B, C + enrichment"
          outputs="3 CSVs, 393 prospects"
          artifacts={[phases[3].artifacts[0]]}
        />
        <PhaseBlock
          id="p3b" name="Phase 3B: Inbound content" color="#22c55e"
          subtitle="SEO comparison post, landing page\nLead magnet, LinkedIn posts"
          skills="seo-content, direct-response-copy, content-atomizer"
          outputs="Blog, landing page, social posts, bake-off kit"
          artifacts={phases[3].artifacts.slice(1)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div className="flex justify-center py-1">
          <div className="rounded-full border-2 border-dashed border-amber-500/40 bg-amber-500/5 px-4 py-1.5">
            <p className="text-[10px] text-amber-400">GATE 4A: Review target lists</p>
          </div>
        </div>
        <div className="flex justify-center py-1">
          <div className="rounded-full border-2 border-dashed border-amber-500/40 bg-amber-500/5 px-4 py-1.5">
            <p className="text-[10px] text-amber-400">GATE 4B: Review content</p>
          </div>
        </div>
      </div>
      <Connector />

      {/* Parallel: Phase 4A + 4B */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          <PhaseBlock
            id="p4a" name="Phase 4A: SDR sequences" color="#f59e0b"
            subtitle="4 emails × 3 tiers + LinkedIn track\nLaGrowthMachine ready"
            skills="direct-response-copy, humanize-ai"
            outputs="Outbound sequences"
            artifacts={[phases[4].artifacts[0]]}
          />
          <PhaseBlock
            id="p4b" name="Phase 4B: Nurture sequences" color="#22c55e"
            subtitle="Lead magnet → demo path\n7-email nurture drip"
            skills="email-sequences, humanize-ai"
            outputs="7-email nurture"
            artifacts={[phases[4].artifacts[1]]}
          />
        </div>
        {/* Repeat loop indicator */}
        <div className="absolute -right-12 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center">
          <div className="border-r-2 border-dashed border-zinc-700 h-full" />
          <p className="text-[9px] text-zinc-600 writing-mode-vertical absolute -right-6 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap">Repeat for next competitor</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div className="flex justify-center py-1">
          <div className="rounded-full border-2 border-dashed border-amber-500/40 bg-amber-500/5 px-4 py-1.5">
            <p className="text-[10px] text-amber-400">GATE 5A: Approve outreach copy</p>
          </div>
        </div>
        <div className="flex justify-center py-1">
          <div className="rounded-full border-2 border-dashed border-amber-500/40 bg-amber-500/5 px-4 py-1.5">
            <p className="text-[10px] text-amber-400">GATE 5B: Approve nurture copy</p>
          </div>
        </div>
      </div>
      <Connector />

      {/* Phase 5 */}
      <PhaseBlock
        id="p5" name="Phase 5: Sales enablement package" color="#06b6d4"
        subtitle="Discovery script, demo talking points, follow-up templates\nLinkedIn posts (3x) + Twitter variants via content-atomizer"
        skills="stakeholder-message-crafter, direct-response-copy"
        outputs="Discovery script, demo guide, follow-up templates"
        artifacts={phases[5].artifacts}
      />
      <Connector />
      <GateBlock label="GATE 6: Full campaign review before launch" />
      <Connector />

      {/* Phase 6 */}
      <PhaseBlock
        id="p6" name="Phase 6: Campaign hypothesis + launch" color="#ef4444"
        subtitle="Hypothesis card, tracking spreadsheet, LaGrowthMachine setup\nBDR executes sequences, content goes live"
        outputs="Launch config, tracking template"
        artifacts={phases[6].artifacts}
      />
      <Connector />
      <GateBlock label="GATE 7: Day 7 checkpoint — kill/scale" />
      <Connector />

      {/* Phase 7 */}
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-xl border-2 px-5 py-4 text-center" style={{ borderColor: "#22c55e", backgroundColor: "#22c55e15" }}>
          <p className="text-sm font-bold text-white">Phase 7: Measure, iterate, repeat</p>
          <p className="text-[11px] mt-1 text-green-400/80">Analyze reply/demo rates, refine sequences, scale winners</p>
          <p className="text-[10px] text-zinc-500 mt-1">Then: loop back to Phase 0 with next competitor</p>
        </div>
      </div>
    </div>
  );
}

/* ============== OVERVIEW TAB ============== */
function OverviewTab({ onOpenFile }: { onOpenFile: (path: string, name: string) => void }) {
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
          <button
            onClick={() => onOpenFile("/files/system/system-architecture-overview.md", "System Architecture Overview")}
            className="mt-4 flex items-center gap-2 rounded-lg bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-xs text-blue-400 hover:bg-blue-500/20 transition-colors"
          >
            <Eye size={14} /> View full architecture document
          </button>
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

      {/* Architecture */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h3 className="text-lg font-semibold text-white mb-2">Three-Layer Separation</h3>
        <p className="text-xs text-zinc-500 mb-6">The system separates engine, config, and output. Swap the brand layer to fork for any company.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center"><Zap size={14} className="text-blue-400" /></div>
              <span className="text-sm font-medium text-blue-400">System (Engine)</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Changes when you improve the process</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Master prompt + project plan</li>
              <li>• Phase pipeline + gates</li>
              <li>• Dashboard + templates</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-purple-500/20 flex items-center justify-center"><Users size={14} className="text-purple-400" /></div>
              <span className="text-sm font-medium text-purple-400">Brand (Config)</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Changes when you fork for a new company</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Positioning + audience</li>
              <li>• Competitor profiles</li>
              <li>• Voice profile</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-green-500/20 flex items-center justify-center"><Target size={14} className="text-green-400" /></div>
              <span className="text-sm font-medium text-green-400">Campaigns (Output)</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Changes when you attack a new competitor</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Research + angles + copy</li>
              <li>• Prospect lists + sequences</li>
              <li>• Sales enablement</li>
            </ul>
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
              The CrustData campaign is complete (all 7 phases, 26+ artifacts). Future improvements include LLM-generated 1-to-1 personalization, automated claims registry, and A/B testing segment templates vs. personalized copy. The engine is production-ready for additional competitor campaigns.
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
  onOpenFile,
}: {
  expandedPhase: number | null;
  setExpandedPhase: (id: number | null) => void;
  onOpenFile: (path: string, name: string) => void;
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">7-Phase Pipeline</h2>
        <p className="mt-1 text-sm text-zinc-400">Click any phase to see its artifacts. Click an artifact to read the full document.</p>
      </div>

      {/* Visual Flowchart */}
      <PipelineFlowchart onOpenFile={onOpenFile} />

      {/* Skill Chain */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 mt-8">
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
    </div>
  );
}

/* ============== ALL FILES TAB ============== */
function AllFilesTab({ onOpenFile }: { onOpenFile: (path: string, name: string) => void }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">All Files ({allFiles.reduce((acc, c) => acc + c.files.length, 0)})</h2>
        <p className="mt-1 text-sm text-zinc-400">Click any file to read its full content. Download button available in the viewer.</p>
      </div>

      {allFiles.map((category) => (
        <div key={category.category}>
          <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">{category.category}</h3>
          <div className="space-y-1.5">
            {category.files.map((file) => (
              <button
                key={file.path}
                onClick={() => onOpenFile(file.publicPath, file.name)}
                className="w-full flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-left hover:bg-zinc-800/50 hover:border-zinc-700 transition-all group"
              >
                <FileText size={16} className="text-blue-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-zinc-200 group-hover:text-white transition-colors">{file.name}</span>
                  <span className="text-[10px] text-zinc-600 font-mono block mt-0.5">{file.path}</span>
                </div>
                <Eye size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============== SEQUENCES TAB ============== */
function SequencesTab({
  showDetail,
  setShowDetail,
  onOpenFile,
}: {
  showDetail: number | null;
  setShowDetail: (idx: number | null) => void;
  onOpenFile: (path: string, name: string) => void;
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">LaGrowthMachine Sequences</h2>
          <p className="mt-1 text-sm text-zinc-400">Click any email to see the full copy.</p>
        </div>
        <button
          onClick={() => onOpenFile("/files/phase-4a-sequences/outbound-sequences-crustdata.md", "Outbound Sequences")}
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          <Eye size={12} /> View full document
        </button>
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

      {/* Tiers + More Files */}
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

      {/* Tier 1 Personalization Showcase */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-purple-400" />
            <h3 className="text-sm font-semibold text-white">Tier 1 Personalization: 1-to-1 Emails</h3>
          </div>
          <button
            onClick={() => onOpenFile("/files/phase-4a-sequences/tier1-personalization-guide.md", "Tier 1 Personalization Guide")}
            className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors"
          >
            <Eye size={12} /> View all 12
          </button>
        </div>
        <p className="text-xs text-zinc-400 mb-4">Each Tier 1 target gets a hand-written email using their title, company, displacement score, and inferred use case. These aren&apos;t templates with merge fields — they&apos;re unique messages.</p>

        <div className="space-y-4">
          {/* Stephen Salaka */}
          <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-purple-500/10 bg-purple-950/20">
              <div className="h-8 w-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-xs font-bold text-purple-400 shrink-0">#1</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-white">Stephen Salaka</span>
                  <span className="text-[10px] text-zinc-400">CTO, MealMatch AI</span>
                  <span className="rounded-full bg-purple-500/15 px-1.5 py-0.5 text-[9px] font-medium text-purple-300">Score: 75</span>
                  <span className="rounded-full bg-zinc-800 px-1.5 py-0.5 text-[9px] text-zinc-400">Segment A</span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-0.5">Why Tier 1: CTO choosing the data stack. MealMatch needs both restaurant/vendor data AND consumer preference data. CrustData only covers half.</p>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-xs text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">{`hey stephen, saw you follow crustdata. are you using them for the
data layer at mealmatch, or still evaluating?

we do people enrichment. over 2,000 fields per person in one call,
professional and consumer. for a company matching people to meals,
how are you thinking about consumer context? most B2B-only APIs
won't get you there. curious if that's come up yet.

daniel`}</pre>
              <p className="text-[10px] text-zinc-500 mt-2 italic">Angle: B2B-only API can't power a consumer matching product</p>
            </div>
          </div>

          {/* Danny Wen */}
          <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-purple-500/10 bg-purple-950/20">
              <div className="h-8 w-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-xs font-bold text-purple-400 shrink-0">#4</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-white">Danny Wen</span>
                  <span className="text-[10px] text-zinc-400">GTM/Strategy, Findem</span>
                  <span className="rounded-full bg-purple-500/15 px-1.5 py-0.5 text-[9px] font-medium text-purple-300">Score: 55</span>
                  <span className="rounded-full bg-zinc-800 px-1.5 py-0.5 text-[9px] text-zinc-400">Segment C</span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-0.5">Why Tier 1: Findem IS a people search platform — they likely use upstream data providers. If he's evaluating sources for Findem's graph, we're a direct upgrade.</p>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-xs text-zinc-300 whitespace-pre-wrap font-sans leading-relaxed bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">{`hey danny, saw you follow crustdata. running GTM at findem, you're
probably deeper in the people data world than anyone. curious — is
findem using crustdata as an upstream source, or do you have your own
enrichment pipeline? we power similar use cases with 70-80% match
rates on mixed-identifier files and over 2,000 fields per person.
might be worth comparing what we return vs what you're ingesting now.

daniel`}</pre>
              <p className="text-[10px] text-zinc-500 mt-2 italic">Angle: upstream data source replacement for a people intelligence platform</p>
            </div>
          </div>
        </div>

        {/* Before/After callout */}
        <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
              <Zap size={14} className="text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white mb-1">The system eats its own cooking</p>
              <p className="text-[11px] text-zinc-400 leading-relaxed">We use Minerva&apos;s 2,168-field enrichment to write personalized emails selling Minerva&apos;s enrichment. The outbound campaign IS the product demo. Wave 2/3 scales this to all 393 targets using LLM generation — every email unique, ~$0.01-0.03 per email.</p>
              <button
                onClick={() => onOpenFile("/files/phase-4a-sequences/1-to-1-personalization-examples.md", "1-to-1 Personalization Examples")}
                className="mt-2 flex items-center gap-1.5 text-[11px] text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Eye size={10} /> View before/after comparison across all tiers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related files */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
        <p className="text-xs font-medium text-zinc-500 mb-3">RELATED FILES</p>
        <div className="grid md:grid-cols-2 gap-2">
          {[
            { name: "Outbound Sequences (full)", path: "/files/phase-4a-sequences/outbound-sequences-crustdata.md" },
            { name: "Tier 1 Personalization Guide (12 targets)", path: "/files/phase-4a-sequences/tier1-personalization-guide.md" },
            { name: "1-to-1 Personalization Examples (all tiers)", path: "/files/phase-4a-sequences/1-to-1-personalization-examples.md" },
            { name: "Inbound Nurture (7 emails)", path: "/files/phase-4b-nurture/inbound-nurture-sequence.md" },
            { name: "Outbound Voice Skill", path: "/files/skills/outbound-voice.md" },
            { name: "Tiered Personalization Skill", path: "/files/skills/tiered-personalization.md" },
          ].map((f) => (
            <button key={f.path} onClick={() => onOpenFile(f.path, f.name)} className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 p-2.5 hover:bg-zinc-700/50 transition-colors text-left">
              <FileText size={12} className="text-blue-400" />
              <span className="text-xs text-zinc-300">{f.name}</span>
              <Eye size={10} className="text-zinc-600 ml-auto" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== SKILLS TAB ============== */
function SkillsTab({
  expandedSkill,
  setExpandedSkill,
  onOpenFile,
}: {
  expandedSkill: string | null;
  setExpandedSkill: (name: string | null) => void;
  onOpenFile: (path: string, name: string) => void;
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-white">Skills & Tools</h2>
        <p className="mt-1 text-sm text-zinc-400">10 skills actively used + 5 new skills created. Click the eye icon on new skills to read the full skill file.</p>
      </div>

      {/* Context */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <p className="text-xs font-medium text-zinc-500 mb-3">HOW SKILLS WORK</p>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Skills are modular prompt components stored at <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-[10px]">~/Documents/.agents/skills/</code>. Each skill is a specialized capability. The Claude agent chains skills together per phase. Brand voice and positioning context flow through all skills via the brand files.
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
              <div className="flex items-center gap-3 p-4">
                <Wrench size={14} className="text-green-400 shrink-0" />
                <button
                  onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                  className="flex-1 text-left flex items-center gap-3"
                >
                  <span className="text-xs font-medium text-green-300 font-mono w-48 shrink-0">{skill.name}</span>
                  <span className="text-[11px] text-zinc-400 flex-1 truncate">{skill.purpose}</span>
                  {expandedSkill === skill.name ? <ChevronDown size={12} className="text-zinc-500" /> : <ChevronRight size={12} className="text-zinc-500" />}
                </button>
                <button
                  onClick={() => onOpenFile(skill.publicPath, skill.name)}
                  className="rounded-lg bg-green-500/10 p-1.5 hover:bg-green-500/20 transition-colors shrink-0"
                  title="View full skill file"
                >
                  <Eye size={14} className="text-green-400" />
                </button>
              </div>
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
        <p className="mt-1 text-sm text-zinc-400">Documented during the CrustData campaign build.</p>
      </div>
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
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="text-sm font-semibold text-white mb-4">Gate Failures → System Improvements</h3>
        <div className="space-y-4">
          {[
            { gate: "Source Verification", what: "CrustData HQ stated as Austin (was SF). Pricing stated without attribution.", fix: "Every factual claim must have a linked source URL." },
            { gate: "Claims Consistency", what: "Correction applied to research brief but NOT propagated to downstream files.", fix: "Claims Registry + mandatory propagation sweep." },
            { gate: "Awareness-Stage Mapping", what: "Led with consumer data for B2B-aware audience.", fix: "Awareness-Stage Map required BEFORE positioning angles." },
            { gate: "Commercial Terms", what: "Discussed pricing without knowing actual terms.", fix: "Commercial Terms Interview in Phase 0." },
            { gate: "Live Verification", what: "Claims based on cached data, not current website.", fix: "Live Website Crawl as Phase 1 Step 1." },
          ].map((f, i) => (
            <div key={i} className="rounded-lg bg-zinc-800/30 p-4">
              <p className="text-xs font-medium text-red-400">{f.gate}</p>
              <p className="mt-1 text-[11px] text-zinc-500">What happened: {f.what}</p>
              <p className="mt-1 text-[11px] text-green-400">Fix: {f.fix}</p>
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
        <p className="mt-1 text-sm text-zinc-400">System improvements identified during the build.</p>
      </div>

      {/* Expansion Loop */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h3 className="text-lg font-semibold text-white mb-6">The Expansion Loop</h3>
        <div className="space-y-4">
          {[
            { wave: "Wave 1", label: "Competitor Followers (Seed)", size: "~1,200 → ~300 reachable", messaging: "Direct displacement", color: "#3b82f6", goal: "Validate which personas + angles convert" },
            { wave: "Wave 2", label: "Person Search Expansion", size: "5,000-10,000", messaging: "Category education + differentiation", color: "#8b5cf6", goal: "Scale what worked in Wave 1" },
            { wave: "Wave 3", label: "Full TAM Build", size: "25,000+", messaging: "Problem → solution (no competitor mention)", color: "#22c55e", goal: "Own the category" },
          ].map((wave, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: wave.color + "20", color: wave.color }}>{i + 1}</div>
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

      {/* 1-to-1 */}
      <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8">
        <h3 className="text-lg font-semibold text-white mb-2">Minerva-Powered 1-to-1 Personalization</h3>
        <p className="text-xs text-zinc-400 mb-6">Use our own enrichment data to write personalized outbound.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-zinc-800/50 p-4">
            <p className="text-xs font-medium text-zinc-500 mb-2">CURRENT (Segment-Level)</p>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>5 email variants across 393 targets</li>
              <li>Only Tier 1 gets manual personalization</li>
              <li>Reply rates: ~8-12%</li>
            </ul>
          </div>
          <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4">
            <p className="text-xs font-medium text-purple-400 mb-2">FUTURE (1-to-1)</p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>393 unique emails from enrichment data</li>
              <li>Every tier gets Tier 1 quality</li>
              <li>Reply rates: 15-25%+ projected</li>
            </ul>
          </div>
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
            <span key={name} className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-400">{name}</span>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-zinc-500">Same personas apply. Each campaign: ~3 hours. The system compounds.</p>
      </div>
    </div>
  );
}
