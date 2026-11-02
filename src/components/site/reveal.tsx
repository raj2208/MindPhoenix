"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "cn";

type State = "visible" | "hidden" | "shown";

/**
 * Content is visible by default (no-JS and SSR safe). After mount, anything
 * that starts below the fold is hidden and then faded in as it scrolls into view.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    const hide = requestAnimationFrame(() => setState("hidden"));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => {
      cancelAnimationFrame(hide);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : undefined }}
      className={cn(
        "transition-all duration-700 ease-out",
        state === "hidden" && "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
