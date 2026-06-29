import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "iconCircular";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 text-[16px] leading-[24px]";
    
    const variants = {
      primary: "bg-brand-primary text-brand-ink hover:bg-brand-primary-active active:bg-brand-primary-neutral px-6 py-3 rounded-xl",
      secondary: "bg-brand-canvas-soft text-brand-ink hover:bg-brand-canvas active:bg-gray-200 px-6 py-3 rounded-xl",
      tertiary: "bg-brand-canvas text-brand-ink border border-brand-ink hover:bg-brand-canvas-soft px-6 py-3 rounded-xl",
      iconCircular: "bg-brand-canvas text-brand-ink hover:bg-brand-canvas-soft rounded-full p-3",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
