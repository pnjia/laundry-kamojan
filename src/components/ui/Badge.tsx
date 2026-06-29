import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "positive" | "negative" | "default";
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-3 py-1 font-sans text-[14px] font-semibold leading-[20px] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2";
    
    const variants = {
      default: "bg-brand-canvas-soft text-brand-ink",
      positive: "bg-brand-primary-pale text-brand-positive-deep",
      negative: "bg-brand-negative-bg text-white",
    };

    return (
      <div className={cn(baseStyles, variants[variant], className)} ref={ref} {...props} />
    );
  }
);
Badge.displayName = "Badge";
