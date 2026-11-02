"use client";

import type { ReactNode } from "react";
import { cn } from "cn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const arrow = "static inset-auto my-0 size-10 translate-0 bg-white shadow-sm";

/** shadcn Carousel with arrows above it on larger screens and swipe on phones. */
export function CardCarousel({
  items,
  itemClassName,
  label,
}: {
  items: ReactNode[];
  itemClassName?: string;
  label: string;
}) {
  return (
    <Carousel
      opts={{ align: "start", containScroll: "trimSnaps" }}
      aria-label={label}
      className="-mt-2"
    >
      <div className="mb-6 hidden justify-end gap-2 sm:flex">
        <CarouselPrevious className={arrow} />
        <CarouselNext className={arrow} />
      </div>
      <CarouselContent className="-ml-4 sm:-ml-5">
        {items.map((item, i) => (
          <CarouselItem
            key={i}
            className={cn("pl-4 sm:pl-5", itemClassName)}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
