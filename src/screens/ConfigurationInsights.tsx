import {
  AlertTriangle,
  Bot,
  CircleCheckBig,
  Cpu,
  Database,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { FeatureGrid } from "../components/FeatureGrid";
import { InsightCard } from "../components/InsightCard";
import { MetricCard } from "../components/MetricCard";
import { ProgressBar } from "../components/ProgressBar";
import { RiskBadge } from "../components/RiskBadge";
import { SectionHeader } from "../components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { configurationInsightsData } from "../data/mockData";

interface ConfigurationInsightsProps {
  theme: "pro" | "neutral" | "contrast";
}

export function ConfigurationInsights({ theme }: ConfigurationInsightsProps) {
  const maxFactor = Math.max(
    ...configurationInsightsData.keyRiskFactors.map((factor) => Math.abs(factor.value)),
  );

  return (
    <div
      className={`max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-800/80 p-7 sm:p-10 ${
        theme === "pro"
          ? "bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.95))]"
          : theme === "neutral"
            ? "bg-[radial-gradient(circle_at_top_right,rgba(30,41,59,0.28),transparent_44%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_44%),linear-gradient(180deg,rgba(2,6,23,0.97),rgba(2,6,23,1))]"
      }`}
    >
      <header className="reveal-item mb-8 flex flex-wrap items-center justify-between gap-4" style={{ animationDelay: "40ms" }}>
        <SectionHeader title="Integrations Insights" subtitle="AI-Powered Analysis" />
        <RiskBadge
          label="ML Model Active"
          tone={theme === "pro" ? "violet" : theme === "neutral" ? "normal" : "safe"}
        />
      </header>

      <Card
        className="reveal-item mb-8 border-red-400/30 bg-red-500/10 shadow-[0_0_55px_-28px_rgba(248,113,113,0.8)]"
        style={{ animationDelay: "100ms" }}
      >
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-200">
                <ShieldAlert className="h-4 w-4" />
                <p className="text-xs uppercase tracking-[0.12em]">Predicted Failure Risk</p>
              </div>
              <h1 className="font-mono text-5xl font-semibold tracking-tight text-red-100">91.4%</h1>
              <p className="text-sm text-red-100/80">{configurationInsightsData.topRisk.probabilityLabel}</p>
            </div>
            <div className="space-y-2 text-right">
              <RiskBadge label="HIGH RISK" tone="risk" />
              <p className="font-mono text-sm text-slate-300">
                Confidence: {configurationInsightsData.topRisk.confidence}%
              </p>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-200/90">{configurationInsightsData.topRisk.alert}</p>
          <ProgressBar value={configurationInsightsData.topRisk.value} tone="risk" shimmer />
        </CardHeader>
      </Card>

      <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Predicted Risk", value: "91.4%", icon: AlertTriangle, tone: "red" as const },
          { label: "Confidence", value: "85%", icon: Bot, tone: "violet" as const },
          { label: "Authorization Risk", value: "55%", icon: Database, tone: "blue" as const },
          { label: "Workspace Health", value: "Stable", icon: CircleCheckBig, tone: "emerald" as const },
        ].map((metric, index) => (
          <div key={metric.label} className="reveal-item" style={{ animationDelay: `${130 + index * 45}ms` }}>
            <MetricCard label={metric.label} value={metric.value} icon={metric.icon} tone={metric.tone} />
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {configurationInsightsData.insightCards.map((insight, index) => (
          <div
            key={insight.title}
            className="reveal-item"
            style={{ animationDelay: `${160 + index * 60}ms` }}
          >
            <InsightCard
              title={insight.title}
              badge={insight.badge}
              description={insight.description}
              metrics={insight.metrics}
            />
          </div>
        ))}
      </div>

      <Card className="reveal-item" style={{ animationDelay: "430ms" }}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-300" />
            <CardTitle>Key Risk Factors (ML Analysis)</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {configurationInsightsData.keyRiskFactors.map((factor) => {
            const normalized = (Math.abs(factor.value) / maxFactor) * 100;
            const isPositive = factor.value > 0;

            return (
              <div key={factor.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">{factor.name}</span>
                  <span className={`font-mono ${isPositive ? "text-red-300" : "text-blue-300"}`}>
                    {factor.value > 0 ? "+" : ""}
                    {factor.value}%
                  </span>
                </div>
                <ProgressBar value={normalized} tone={isPositive ? "risk" : "neutral"} />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="reveal-item" style={{ animationDelay: "500ms" }}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-violet-300" />
            <CardTitle>Model Input Features</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <FeatureGrid items={configurationInsightsData.modelInputFeatures} />
        </CardContent>
      </Card>

      <Card
        className="reveal-item rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-900/40 to-teal-900/40"
        style={{ animationDelay: "560ms" }}
      >
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-200" />
            <CardTitle>Recommendations</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {configurationInsightsData.recommendations.map((recommendation) => (
              <li key={recommendation} className="flex gap-3 text-sm text-emerald-50/95">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="reveal-item" style={{ animationDelay: "620ms" }}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="h-4 w-4 text-blue-300" />
            <CardTitle>Similar Integrations</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {configurationInsightsData.similarDatastreams.map((datastream) => (
            <div
              key={datastream.name}
              className="rounded-lg border border-slate-800 bg-slate-950/70 p-4 transition-colors hover:border-slate-600"
            >
              <p className="text-sm font-semibold text-slate-100">{datastream.name}</p>
              <p className="mt-1 text-sm text-slate-300">{datastream.meta}</p>
              <p className="mt-1 text-xs text-slate-500">{datastream.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
