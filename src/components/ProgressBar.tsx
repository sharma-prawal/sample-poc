import { Progress } from "./ui/progress";
import { cn } from "../lib/utils";

interface ProgressBarProps {
  value: number;
  label?: string;
  tone?: "risk" | "safe" | "neutral";
  shimmer?: boolean;
}

export function ProgressBar({ value, label, tone = "neutral", shimmer = false }: ProgressBarProps) {
  const toneClass =
    tone === "risk"
      ? "bg-gradient-to-r from-red-500 to-orange-400"
      : tone === "safe"
        ? "bg-gradient-to-r from-emerald-400 to-teal-400"
        : "bg-gradient-to-r from-purple-500 to-indigo-400";

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em] text-slate-400">
          <span>{label}</span>
          <span className="font-mono text-slate-300">{value.toFixed(1)}%</span>
        </div>
      ) : null}
      <Progress
        value={value}
        className="h-3 rounded-full bg-slate-800"
        indicatorClassName={cn(
          "rounded-full shadow-[0_0_28px_-8px_rgba(167,139,250,0.8)]",
          toneClass,
          shimmer && "progress-shimmer",
        )}
      />
    </div>
  );
}
