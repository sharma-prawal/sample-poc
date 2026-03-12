export const configurationInsightsData = {
  topRisk: {
    value: 91.4,
    confidence: 85,
    probabilityLabel: "failure probability",
    alert:
      "This integration configuration has a HIGH risk of failure (estimated 91% failure probability) (ML-powered analysis). Several risk factors have been identified.",
  },
  insightCards: [
    {
      title: "Authorizations",
      badge: { label: "AT RISK", tone: "risk" as const },
      description:
        "This authorization is used across 748 integrations. Historical failure rate is 91.1%, which is above average. Consider reviewing the authorization configuration. ML model indicates this authorization is at RISK (risk score: 0.55).",
      metrics: [
        { label: "Integrations", value: "748" },
        { label: "Runs", value: "225" },
        { label: "Failure Rate", value: "91.1%" },
        { label: "ML Risk Score", value: "55%" },
      ],
    },
    {
      title: "Configuration",
      badge: { label: "NORMAL", tone: "normal" as const },
      description:
        "Found 20 integrations with similar configurations but no run history available for comparison. Top error categories: DATA_SCHEMA (204). Configuration appears normal for this integration type (anomaly score: 0.06).",
      metrics: [
        { label: "Similar Configs", value: "20 of 748" },
        { label: "Top Issue", value: "DATA_SCHEMA" },
        { label: "Issue Share", value: "100%" },
        { label: "Anomaly Score", value: "0.06" },
      ],
    },
    {
      title: "Schedule",
      badge: { label: "LOW CONTENTION", tone: "safe" as const },
      description:
        "Excellent: no integrations currently scheduled at 03:00 on Mondays. Workspace has 2309 active integrations on Mondays, peak at 05:00.",
      metrics: [
        { label: "Total Monday Integrations", value: "2309" },
        { label: "Competing Integrations", value: "1504" },
      ],
    },
    {
      title: "Expected Volume",
      badge: { label: "SMALL", tone: "violet" as const },
      description:
        "ML model predicts approximately 26 rows (0.0 MB). Volume category: small.",
      metrics: [
        { label: "Rows", value: "~26" },
        { label: "Size", value: "0.0 MB" },
        { label: "Range", value: "5-122,133" },
        { label: "Confidence", value: "85%" },
      ],
    },
  ],
  keyRiskFactors: [
    { name: "type auth failure rate", value: 326.7 },
    { name: "config field count", value: 243.3 },
    { name: "workspace id", value: -115.4 },
    { name: "type failure rate", value: -21 },
    { name: "auth failure rate", value: 10.5 },
  ],
  modelInputFeatures: [
    { key: "Auth Failure Rate", value: "91.1%" },
    { key: "Auth Run Count", value: "224" },
    { key: "Type Failure Rate", value: "23.4%" },
    { key: "Type+Auth Failure Rate", value: "91.1%" },
    { key: "Has Extra Config", value: "Yes" },
    { key: "Config Fields", value: "16" },
  ],
  recommendations: [
    "AI analysis indicates this authorization has issues specifically with this integration type.",
    "Authorization has elevated failure history - verify auth settings and permissions.",
    "Top historical error categories for similar integrations: DATA_SCHEMA (204).",
    "ML authorization health model indicates at_risk status. Stable failure rate: 91.1%.",
    "Volume estimated by ML model (confidence: 85%).",
    "Top historical error categories for similar configs: DATA_SCHEMA (204).",
  ],
  similarDatastreams: [
    {
      name: "Ashley Aydelhard_Jdd_test",
      meta: "Success Rate: 100% • 0 runs",
      detail: "Same integration type • Same auth authorization • Same workspace • 96% match",
    },
    {
      name: "demo file test",
      meta: "Success Rate: 100% • 0 runs",
      detail: "Same integration type • Same auth authorization",
    },
    {
      name: "Felipe Waelchi_PYTn_test",
      meta: "Success Rate: 100% • 0 runs",
      detail: "Same integration type • Same workspace",
    },
  ],
};

export const optimizeScheduleData = {
  summary:
    "Switching to Wednesday at 21:00:00 UTC could reduce failure risk by 99.6%",
  currentSchedule: {
    time: "03:00 UTC",
    day: "Monday",
    riskLabel: "Low Risk (0.6%)",
    factors: [
      { name: "integration type id", value: 146.9 },
      { name: "day of month", value: 107.2 },
      { name: "workspace hour failure rate", value: 101.4 },
    ],
  },
  recommendedSchedule: {
    time: "21:00 UTC",
    day: "Wednesday",
    riskLabel: "Low Risk (0.0%)",
    factors: [
      { name: "workspace hour failure rate", value: 624.3 },
      { name: "integration type id", value: 148.2 },
      { name: "day of month", value: 72.0 },
    ],
  },
  riskReduction: -99.6,
  hourlyRiskProfile: [
    { hour: 0, label: "00", risk: 1.2 },
    { hour: 1, label: "01", risk: 0.9 },
    { hour: 2, label: "02", risk: 0.7 },
    { hour: 3, label: "03", risk: 0.6 },
    { hour: 4, label: "04", risk: 0.5 },
    { hour: 5, label: "05", risk: 0.8 },
    { hour: 6, label: "06", risk: 0.4 },
    { hour: 7, label: "07", risk: 0.3 },
    { hour: 8, label: "08", risk: 0.5 },
    { hour: 9, label: "09", risk: 0.7 },
    { hour: 10, label: "10", risk: 0.8 },
    { hour: 11, label: "11", risk: 1.1 },
    { hour: 12, label: "12", risk: 0.9 },
    { hour: 13, label: "13", risk: 0.6 },
    { hour: 14, label: "14", risk: 0.4 },
    { hour: 15, label: "15", risk: 0.2 },
    { hour: 16, label: "16", risk: 0.2 },
    { hour: 17, label: "17", risk: 0.1 },
    { hour: 18, label: "18", risk: 0.1 },
    { hour: 19, label: "19", risk: 0.1 },
    { hour: 20, label: "20", risk: 0.05 },
    { hour: 21, label: "21", risk: 0.03 },
    { hour: 22, label: "22", risk: 0.1 },
    { hour: 23, label: "23", risk: 0.3 },
  ],
  historicalContext:
    "Moderate failure rate (20.0%) for Mondays at 03:00 UTC. Smaller runs fail more often (avg 6 rows on failure vs 2,263 rows on success). Common temporal issues: DATA_SCHEMA (100%).",
  totals: {
    extracts: "19,538",
    failureRate: "24.8%",
    mondayExtracts: "5",
    mondayFailureRate: "20.0%",
  },
};
