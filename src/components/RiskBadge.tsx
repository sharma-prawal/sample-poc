import { Badge } from "./ui/badge";

type RiskTone = "risk" | "safe" | "normal" | "violet";

interface RiskBadgeProps {
  label: string;
  tone?: RiskTone;
}

export function RiskBadge({ label, tone = "normal" }: RiskBadgeProps) {
  const variantMap = {
    risk: "red",
    safe: "green",
    normal: "blue",
    violet: "violet",
  } as const;

  return <Badge variant={variantMap[tone]}>{label}</Badge>;
}
