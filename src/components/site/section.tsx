import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "cn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & { containerClassName?: string }) {
  return (
    <section className={cn("py-14 sm:py-20 lg:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "items-center text-center sm:flex-col sm:items-center sm:justify-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <Badge
            variant="outline"
            className={cn(
              "mb-4 h-7 rounded-full px-3 text-[0.7rem] font-bold uppercase tracking-[0.14em]",
              light
                ? "border-amber/40 bg-amber/10 text-amber"
                : "border-brand/20 bg-brand/5 text-brand",
            )}
          >
            {eyebrow}
          </Badge>
        )}
        <h2
          className={cn(
            "text-balance text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-pretty text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/** Cards swipe horizontally on phones and become a grid from `sm` up. */
export function SnapRow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scroll-padding-inline:1rem]",
        "sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0",
        "lg:grid-cols-3 lg:gap-6",
        "[&>*]:w-[82%] [&>*]:shrink-0 [&>*]:snap-start sm:[&>*]:w-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PageHero({
  title,
  description,
  crumbs = [],
  compact = false,
}: {
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
  compact?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 -z-10 bg-[url('/images/banner.jpg')] bg-cover bg-[position:75%_center] opacity-25"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/50"
        aria-hidden
      />
      <div
        className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />
      <Container className="py-10 sm:py-16 lg:py-20">
        <Breadcrumb className="mb-4 sm:mb-6">
          <BreadcrumbList className="text-sm text-white/60">
            <BreadcrumbItem>
              <BreadcrumbLink
                render={<Link href="/" />}
                className="hover:text-white"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs.map((c) => (
              <Fragment key={c.label}>
                <BreadcrumbSeparator className="text-white/40" />
                <BreadcrumbItem>
                  {c.href ? (
                    <BreadcrumbLink
                      render={<Link href={c.href} />}
                      className="hover:text-white"
                    >
                      {c.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="line-clamp-1 max-w-[60vw] text-white">
                      {c.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <h1
          className={cn(
            "max-w-3xl text-balance font-extrabold leading-tight",
            compact ? "text-2xl sm:text-4xl" : "text-3xl sm:text-5xl",
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
