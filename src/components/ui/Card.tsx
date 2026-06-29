import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "content" | "featureSage" | "featureGreen" | "featureDark" | "converter";
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "content", ...props }, ref) => {
    const baseStyles = "rounded-xl p-6 transition-all";
    
    const variants = {
      content: "bg-brand-canvas text-brand-ink",
      featureSage: "bg-brand-canvas-soft text-brand-ink",
      featureGreen: "bg-brand-primary-pale text-brand-ink",
      featureDark: "bg-brand-ink text-brand-primary",
      converter: "bg-brand-canvas text-brand-ink border border-brand-ink",
    };

    return (
      <div className={cn(baseStyles, variants[variant], className)} ref={ref} {...props} />
    );
  }
);
Card.displayName = "Card";
