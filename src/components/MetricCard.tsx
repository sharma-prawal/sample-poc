import type { LucideIcon } from "lucide-react";

import { Card } from "./ui/card";
import { cn } from "../lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  tone?: "blue" | "violet" | "red" | "emerald";
}

export function MetricCard({ label, value, icon: Icon, tone = "blue" }: MetricCardProps) {
  const toneMap = {
    blue: "text-blue-200 bg-blue-500/10 border-blue-400/30",
    violet: "text-violet-200 bg-violet-500/10 border-violet-400/30",
    red: "text-red-200 bg-red-500/10 border-red-400/30",
    emerald: "text-emerald-200 bg-emerald-500/10 border-emerald-400/30",
  } as const;

  return (
    <Card
      className={cn(
        "rounded-xl border border-slate-800 bg-slate-900/90 p-4 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
        toneMap[tone],
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{label}</p>
          <p className="mt-1 font-mono text-xl font-semibold text-slate-100">{value}</p>
        </div>
        {Icon ? <Icon className="h-4 w-4 text-slate-300" /> : null}
      </div>
    </Card>
  );
}
