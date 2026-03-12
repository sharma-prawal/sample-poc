interface FeatureGridItem {
  key: string;
  value: string;
}

interface FeatureGridProps {
  items: FeatureGridItem[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.key}
          className="rounded-lg border border-slate-800 bg-slate-950/50 p-3 transition-colors hover:border-slate-600"
        >
          <p className="text-xs uppercase tracking-[0.1em] text-slate-500">{item.key}</p>
          <p className="mt-1 font-mono text-base font-semibold text-slate-100">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
