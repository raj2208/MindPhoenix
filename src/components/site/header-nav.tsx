"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { cn } from "cn";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, company } from "@/data/site";
import { LinkButton } from "./link-button";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isActive(pathname, item.href) ? "page" : undefined}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-accent hover:text-brand",
            isActive(pathname, item.href) && "bg-accent text-brand",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-ink lg:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 p-0">
        <SheetHeader className="border-b p-5">
          <SheetTitle className="text-left text-base font-bold text-ink">
            {company.shortName}
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col p-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-accent",
                isActive(pathname, item.href) && "bg-accent text-brand",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t p-5">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Phone className="size-4 text-brand" /> {company.phone}
          </a>
          <LinkButton href="/contact-us" onClick={() => setOpen(false)}>
            Get in touch
          </LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
