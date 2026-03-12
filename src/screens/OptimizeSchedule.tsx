import { ArrowRight, BarChart3, CalendarCheck2, Clock3, TrendingDown } from "lucide-react";

import { ProgressBar } from "../components/ProgressBar";
import { RiskBadge } from "../components/RiskBadge";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { RiskTimelineChart } from "../charts/RiskTimelineChart";
import { optimizeScheduleData } from "../data/mockData";

interface OptimizeScheduleProps {
  theme: "pro" | "neutral" | "contrast";
}

function RiskFactorList({ factors }: { factors: { name: string; value: number }[] }) {
  const maxValue = Math.max(...factors.map((factor) => factor.value));

  return (
    <div className="space-y-4">
      {factors.map((factor) => (
        <div key={factor.name} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">{factor.name}</span>
            <span className="font-mono text-blue-200">{factor.value}%</span>
          </div>
          <ProgressBar value={(factor.value / maxValue) * 100} tone="neutral" />
        </div>
      ))}
    </div>
  );
}

export function OptimizeSchedule({ theme }: OptimizeScheduleProps) {
  return (
    <div
      className={`max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-800/80 p-7 sm:p-10 ${
        theme === "pro"
          ? "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.96))]"
          : theme === "neutral"
            ? "bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.14),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.97),rgba(2,6,23,0.99))]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_45%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(2,6,23,1))]"
      }`}
    >
      <header className="reveal-item mb-8" style={{ animationDelay: "40ms" }}>
        <SectionHeader title="Optimize Execution Window" subtitle="AI-Powered Recommendation" />
      </header>

      <Card className="reveal-item mb-8 border-emerald-400/30 bg-emerald-500/10" style={{ animationDelay: "110ms" }}>
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-emerald-200" />
              <CardTitle>Optimization Available</CardTitle>
            </div>
            <RiskBadge label="AI Recommendation" tone="safe" />
          </div>
          <p className="text-sm text-emerald-100/90">{optimizeScheduleData.summary}</p>
        </CardHeader>
      </Card>

      <div className="space-y-8">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="reveal-item" style={{ animationDelay: "170ms" }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Current Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-mono text-3xl text-slate-100">{optimizeScheduleData.currentSchedule.time}</p>
                <p className="text-sm text-slate-400">{optimizeScheduleData.currentSchedule.day}</p>
              </div>
              <RiskBadge label={optimizeScheduleData.currentSchedule.riskLabel} tone="normal" />
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.12em] text-slate-500">Risk Factors</p>
                <RiskFactorList factors={optimizeScheduleData.currentSchedule.factors} />
              </div>
            </CardContent>
          </Card>
        </div>

        <ArrowRight className="mx-auto hidden h-6 w-6 text-slate-500 lg:block" />

        <div className="reveal-item" style={{ animationDelay: "230ms" }}>
          <Card className="border-emerald-400/30">
            <CardHeader>
              <CardTitle className="text-base">Recommended Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-mono text-3xl text-emerald-100">{optimizeScheduleData.recommendedSchedule.time}</p>
                <p className="text-sm text-slate-400">{optimizeScheduleData.recommendedSchedule.day}</p>
              </div>
              <RiskBadge label={optimizeScheduleData.recommendedSchedule.riskLabel} tone="safe" />
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.12em] text-slate-500">Risk Factors</p>
                <RiskFactorList factors={optimizeScheduleData.recommendedSchedule.factors} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="reveal-item border-emerald-400/30 bg-emerald-500/10 text-center" style={{ animationDelay: "300ms" }}>
        <CardContent className="p-8">
          <p className="text-xs uppercase tracking-[0.12em] text-emerald-200">Potential Risk Reduction</p>
          <p className="mt-2 font-mono text-5xl font-semibold tracking-tight text-emerald-100">
            {optimizeScheduleData.riskReduction}%
          </p>
          <p className="mt-3 text-sm text-emerald-100/80">Large-signal recommendation from temporal risk model</p>
        </CardContent>
      </Card>

      <Card className="reveal-item" style={{ animationDelay: "380ms" }}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-300" />
            <CardTitle>24 Hour Risk Profile</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <RiskTimelineChart
            data={optimizeScheduleData.hourlyRiskProfile}
            currentHour={3}
            recommendedHour={21}
          />
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Current time risk
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Recommended time risk
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="reveal-item" style={{ animationDelay: "460ms" }}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-slate-300" />
            <CardTitle>Historical Context</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm leading-6 text-slate-300">{optimizeScheduleData.historicalContext}</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Total runs</p>
              <p className="mt-1 font-mono text-2xl text-slate-100">{optimizeScheduleData.totals.extracts}</p>
              <p className="mt-2 text-sm text-slate-400">Failure rate: {optimizeScheduleData.totals.failureRate}</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Mondays at 03:00 UTC</p>
              <p className="mt-1 font-mono text-2xl text-slate-100">{optimizeScheduleData.totals.mondayExtracts} runs</p>
              <p className="mt-2 text-sm text-slate-400">
                {optimizeScheduleData.totals.mondayFailureRate} failure rate
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-800 pt-4">
            <Button variant="secondary" className="gap-2">
              <Clock3 className="h-4 w-4" />
              Cancel
            </Button>
            <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400">
              <CalendarCheck2 className="h-4 w-4" />
              Apply Recommendation
              <TrendingDown className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
