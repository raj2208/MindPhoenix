import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "cn";
import { ChevronRight } from "lucide-react";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]",
            light ? "text-amber" : "text-brand",
          )}
        >
          <span
            className={cn("h-px w-6", light ? "bg-amber" : "bg-brand")}
            aria-hidden
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold leading-tight sm:text-4xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  description,
  crumbs = [],
}: {
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 -z-10 bg-[url('/images/banner.jpg')] bg-cover bg-center opacity-30"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40"
        aria-hidden
      />
      <Container className="py-16 sm:py-24">
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-1.5 text-sm text-white/60"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5" aria-hidden />
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
        )}
      </Container>
    </section>
  );
}
