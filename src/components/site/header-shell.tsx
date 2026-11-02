"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { cn } from "cn";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getScrolled = () => window.scrollY > 12;

/** Sticky header that tucks away its top bar and gains a shadow once scrolled. */
export function HeaderShell({
  topBar,
  children,
}: {
  topBar: ReactNode;
  children: ReactNode;
}) {
  const scrolled = useSyncExternalStore(subscribe, getScrolled, () => false);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "hidden overflow-hidden bg-ink text-xs text-white/80 transition-[max-height,opacity] duration-300 md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
        )}
      >
        {topBar}
      </div>
      <div
        className={cn(
          "border-b bg-white/90 backdrop-blur-xl transition-shadow duration-300",
          scrolled ? "border-border shadow-md shadow-ink/5" : "border-transparent",
        )}
      >
        {children}
      </div>
    </header>
  );
}
