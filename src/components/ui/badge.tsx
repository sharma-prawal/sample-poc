import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]",
  {
    variants: {
      variant: {
        default: "border-slate-700 bg-slate-800/70 text-slate-300",
        violet: "border-violet-400/40 bg-violet-500/15 text-violet-200",
        red: "border-red-400/50 bg-red-500/15 text-red-200",
        green: "border-emerald-400/50 bg-emerald-500/15 text-emerald-200",
        blue: "border-blue-400/50 bg-blue-500/15 text-blue-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
