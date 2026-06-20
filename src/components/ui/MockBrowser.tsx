import type { Project } from "@/lib/data";

export function MockBrowser({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-[#1E1E22] overflow-hidden bg-[#0D0D10] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1E1E22] bg-[#0A0A0B]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        <span className="ml-4 font-mono text-[11px] text-[#4A4A5A] truncate">{project.domain}</span>
      </div>
      <div className="p-5 h-[260px] relative overflow-hidden">
        {project.visual === "map" && <MapVisual />}
        {project.visual === "marketplace" && <MarketVisual />}
        {project.visual === "terminal" && <TerminalVisual />}
      </div>
    </div>
  );
}

function MapVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6E56CF]/5 via-transparent to-[#3DD68C]/5" />
      {/* Pins */}
      {[
        { x: "20%", y: "30%", color: "#FF5F57" },
        { x: "55%", y: "45%", color: "#F5A623" },
        { x: "75%", y: "25%", color: "#FF5F57" },
        { x: "35%", y: "70%", color: "#3DD68C" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: p.x, top: p.y }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: p.color, boxShadow: `0 0 12px ${p.color}` }}
          />
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: p.color }}
          />
        </div>
      ))}
      {/* Floating card */}
      <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-[#111113]/85 border border-[#2A2A32] rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="font-mono text-[10px] text-[#8A8A9A] uppercase tracking-wider">Hazard · 0.8km</span>
        </div>
        <div className="text-xs text-[#F1F1F3] font-medium">Broken streetlight — MG Road</div>
        <div className="text-[10px] text-[#4A4A5A] mt-1 font-mono">Reported 12m ago · 3 confirmations</div>
      </div>
    </div>
  );
}

function MarketVisual() {
  return (
    <div className="absolute inset-0 p-1">
      <div className="grid grid-cols-2 gap-3 h-full">
        {[
          { name: "Basmati Rice", price: "₹4,200", trend: "+2.4%" },
          { name: "Wheat", price: "₹2,150", trend: "−0.8%" },
          { name: "Tomato", price: "₹1,800", trend: "+5.1%" },
          { name: "Onion", price: "₹2,400", trend: "+1.2%" },
        ].map((c, i) => (
          <div key={i} className="border border-[#1E1E22] rounded-lg p-3 bg-[#0A0A0B] flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#4A4A5A] uppercase tracking-wider">Per Qtl</div>
              <div className="text-sm text-[#F1F1F3] font-medium mt-1">{c.name}</div>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-base font-semibold text-[#F1F1F3]">{c.price}</div>
              <div
                className="text-[10px] font-mono"
                style={{ color: c.trend.startsWith("+") ? "#3DD68C" : "#FF5F57" }}
              >
                {c.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 right-3">
        <div className="px-3 py-1.5 rounded-md bg-[#6E56CF] text-white text-[11px] font-medium">
          Bid Now →
        </div>
      </div>
    </div>
  );
}

function TerminalVisual() {
  const lines = [
    { p: "$", t: "recircuit analyze ./capacitor.jpg", c: "text-[#F1F1F3]" },
    { p: ">", t: "uploading to CDN... done (220ms)", c: "text-[#4A4A5A]" },
    { p: ">", t: "gemini-vision: classifying...", c: "text-[#4A4A5A]" },
    { p: "✓", t: "component: aluminum electrolytic cap", c: "text-[#3DD68C]" },
    { p: "✓", t: "reusability: 0.72 / repair: feasible", c: "text-[#3DD68C]" },
    { p: "→", t: "action: desolder + reuse in audio rigs", c: "text-[#6E56CF]" },
  ];
  return (
    <div className="absolute inset-0 p-4 font-mono text-[11px] leading-relaxed">
      {lines.map((l, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-[#4A4A5A] w-3">{l.p}</span>
          <span className={l.c}>{l.t}</span>
        </div>
      ))}
      <div className="flex gap-2 mt-2">
        <span className="text-[#4A4A5A] w-3">$</span>
        <span className="w-2 h-3.5 bg-[#6E56CF] animate-pulse" />
      </div>
    </div>
  );
}
