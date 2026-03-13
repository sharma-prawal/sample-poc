import { useState } from "react";
import { Bot, Camera, Sparkles } from "lucide-react";

import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { ConfigurationInsights } from "./screens/ConfigurationInsights";
import { OptimizeSchedule } from "./screens/OptimizeSchedule";

type DashboardTheme = "pro" | "neutral" | "contrast";
type CaptureScreen = "configuration" | "optimize";

function App() {
  const [theme, setTheme] = useState<DashboardTheme>("pro");
  const [screenshotMode, setScreenshotMode] = useState(false);
  const [captureScreen, setCaptureScreen] = useState<CaptureScreen>("configuration");

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        className={`pointer-events-none absolute inset-0 ${
          theme === "pro"
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.2),transparent_35%),linear-gradient(rgba(15,23,42,0.75),rgba(2,6,23,0.95))]"
            : theme === "neutral"
              ? "bg-[radial-gradient(circle_at_12%_18%,rgba(14,116,144,0.14),transparent_32%),radial-gradient(circle_at_85%_2%,rgba(51,65,85,0.28),transparent_38%),linear-gradient(rgba(15,23,42,0.86),rgba(2,6,23,0.98))]"
              : "bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_84%_8%,rgba(16,185,129,0.16),transparent_36%),linear-gradient(rgba(2,6,23,0.92),rgba(2,6,23,1))]"
        }`}
      />
      <div className="grid-background pointer-events-none absolute inset-0 opacity-50" />

      <section
        className={`relative z-10 mx-auto flex min-h-screen w-full flex-col px-4 py-10 text-center sm:px-6 ${
          screenshotMode ? "max-w-[1280px] justify-start" : "max-w-5xl items-center justify-center py-16"
        }`}
      >
        {!screenshotMode ? (
          <>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-violet-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI Concept Interface
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl">
              Enterprise AI Analytics Operational Intelligence for Data Integrations
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Concept interface exploring how machine learning can surface operational risk signals and recommend execution improvements for data integrations.
            </p>
          </>
        ) : null}

        <div className={`inline-flex rounded-lg border border-slate-700 bg-slate-900/70 p-1 ${screenshotMode ? "self-center" : "mt-6"}`}>
          <button
            type="button"
            onClick={() => setTheme("pro")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              theme === "pro"
                ? "bg-violet-200 text-violet-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            Dark Pro
          </button>
          <button
            type="button"
            onClick={() => setTheme("neutral")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              theme === "neutral"
                ? "bg-slate-200 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            Dark Neutral
          </button>
          <button
            type="button"
            onClick={() => setTheme("contrast")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              theme === "contrast"
                ? "bg-blue-200 text-blue-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            Dark Contrast
          </button>
        </div>

        <div className={`mt-3 inline-flex rounded-lg border border-slate-700 bg-slate-900/70 p-1 ${screenshotMode ? "self-center" : ""}`}>
          <button
            type="button"
            onClick={() => setScreenshotMode(false)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              !screenshotMode
                ? "bg-slate-200 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            Demo Mode
          </button>
          <button
            type="button"
            onClick={() => setScreenshotMode(true)}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              screenshotMode
                ? "bg-emerald-200 text-emerald-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Camera className="h-3.5 w-3.5" />
            Screenshot Mode
          </button>
        </div>

        {screenshotMode ? (
          <>
            <div className="mt-6 inline-flex self-center rounded-lg border border-slate-700 bg-slate-900/70 p-1">
              <button
                type="button"
                onClick={() => setCaptureScreen("configuration")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  captureScreen === "configuration"
                    ? "bg-slate-200 text-slate-950"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                Capture: ML-Powered Insights
              </button>
              <button
                type="button"
                onClick={() => setCaptureScreen("optimize")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  captureScreen === "optimize"
                    ? "bg-slate-200 text-slate-950"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                Capture: Optimize Execution Window
              </button>
            </div>

            <div className="mt-5 w-full rounded-2xl border border-slate-800/80 bg-slate-950/30 p-2 backdrop-blur-sm">
              {captureScreen === "configuration" ? (
                <ConfigurationInsights theme={theme} />
              ) : (
                <OptimizeSchedule theme={theme} />
              )}
            </div>
          </>
        ) : (
          <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className={`w-full gap-2 ${
                    theme === "pro"
                      ? "bg-violet-200 text-violet-950 hover:bg-violet-100"
                      : theme === "neutral"
                        ? "bg-slate-200 text-slate-950 hover:bg-slate-100"
                        : "bg-blue-200 text-blue-950 hover:bg-blue-100"
                  }`}
                >
                  <Bot className="h-4 w-4" />
                  Open AI Risk Insights
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[1400px] rounded-2xl border-slate-700/70 bg-slate-950/60 p-0">
                <DialogHeader className="sr-only">
                  <DialogTitle>ML-Powered Insights</DialogTitle>
                  <DialogDescription>AI-powered configuration failure diagnostics dashboard.</DialogDescription>
                </DialogHeader>
                <ConfigurationInsights theme={theme} />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="w-full gap-2 border-slate-600 bg-slate-900/90">
                  <Sparkles className="h-4 w-4" />
                  Open Execution Optimization
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[1400px] rounded-2xl border-slate-700/70 bg-slate-950/60 p-0">
                <DialogHeader className="sr-only">
                  <DialogTitle>Optimize Execution Window</DialogTitle>
                  <DialogDescription>AI-recommended schedule optimization comparison dashboard.</DialogDescription>
                </DialogHeader>
                <OptimizeSchedule theme={theme} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
