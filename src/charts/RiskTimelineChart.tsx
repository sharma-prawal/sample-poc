import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface RiskPoint {
  hour: number;
  label: string;
  risk: number;
}

interface RiskTimelineChartProps {
  data: RiskPoint[];
  currentHour: number;
  recommendedHour: number;
}

export function RiskTimelineChart({
  data,
  currentHour,
  recommendedHour,
}: RiskTimelineChartProps) {
  const recommendationLeft = `${((recommendedHour + 0.5) / 24) * 100}%`;

  return (
    <div className="relative h-[280px] w-full rounded-xl border border-slate-800/80 bg-[linear-gradient(to_right,rgba(51,65,85,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.13)_1px,transparent_1px)] bg-[size:28px_28px] p-3">
      <div
        className="pointer-events-none absolute inset-y-3 z-0 w-12 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/10 via-emerald-400/15 to-emerald-500/10 blur-md"
        style={{ left: recommendationLeft }}
      />
      <div className="relative z-10 h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={8} barSize={18}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: "#64748b", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value.toFixed(1)}%`}
            />
            <Tooltip
              cursor={{ fill: "rgba(30,41,59,0.5)" }}
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #334155",
                borderRadius: 8,
                color: "#e2e8f0",
              }}
              formatter={(value) => {
                const numericValue = typeof value === "number" ? value : Number(value ?? 0);
                return [`${numericValue.toFixed(2)}%`, "Failure probability"];
              }}
              labelFormatter={(label) => `Hour ${label}`}
            />
            <Bar dataKey="risk" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => {
                let color = "#64748b";
                if (entry.hour === currentHour) color = "#ef4444";
                if (entry.hour === recommendedHour) color = "#10b981";

                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={color}
                    style={
                      entry.hour === recommendedHour
                        ? { filter: "drop-shadow(0px 0px 6px rgba(16,185,129,0.6))" }
                        : undefined
                    }
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
