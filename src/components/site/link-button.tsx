import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

type Props = ComponentProps<typeof Link> & {
  variant?: "default" | "outline" | "secondary" | "amber" | "light";
};

const extra = {
  default: "shadow-lg shadow-brand/25 hover:bg-brand-dark hover:text-white",
  outline: "",
  secondary: "",
  amber: "bg-amber text-ink hover:bg-amber/90 shadow-lg shadow-amber/25",
  light: "bg-white text-ink hover:bg-white/90",
} as const;

export function LinkButton({ variant = "default", className, ...props }: Props) {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant:
            variant === "amber" || variant === "light" ? "default" : variant,
        }),
        "h-11 rounded-full px-6 text-sm font-semibold [&_svg]:size-4",
        extra[variant],
        className,
      )}
      {...props}
    />
  );
}
