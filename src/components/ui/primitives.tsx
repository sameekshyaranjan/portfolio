import type { ReactNode } from "react";

export function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-[#4A4A5A] uppercase mb-4">
      {text}
    </p>
  );
}

export function TechBadge({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#15151A] border border-[#262630] text-[#A8A8B8]">
      {label}
    </span>
  );
}

export function StatusDot({ status }: { status: "live" | "ongoing" }) {
  const color = status === "live" ? "#3DD68C" : "#F5A623";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8A8A9A]">
      <span
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        className="w-1.5 h-1.5 rounded-full"
      />
      {status.toUpperCase()}
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-5xl mx-auto px-6 ${className}`}>{children}</div>;
}
