import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { RiskBadge } from "./RiskBadge";

interface InsightMetric {
  label: string;
  value: string;
}

interface InsightCardProps {
  title: string;
  badge: { label: string; tone: "risk" | "safe" | "normal" | "violet" };
  description: string;
  metrics: InsightMetric[];
}

export function InsightCard({ title, badge, description, metrics }: InsightCardProps) {
  return (
    <Card className="h-full border-slate-800/80 bg-slate-900/85">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{title}</CardTitle>
          <RiskBadge label={badge.label} tone={badge.tone} />
        </div>
        <CardDescription className="leading-6 text-slate-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric) => (
            <div key={`${title}-${metric.label}`} className="rounded-lg border border-slate-800 bg-slate-950/60 p-2.5">
              <p className="text-[11px] uppercase tracking-[0.1em] text-slate-500">{metric.label}</p>
              <p className="mt-1 font-mono text-sm font-semibold text-slate-200">{metric.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
