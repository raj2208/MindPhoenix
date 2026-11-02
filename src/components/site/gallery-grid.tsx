"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Album } from "@/data/gallery";

export function GalleryGrid({ album }: { album: Album }) {
  const [index, setIndex] = useState<number | null>(null);
  const count = album.photos.length;

  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? i : (i + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index === null ? null : album.photos[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {album.photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open photo ${i + 1} of ${count} from ${album.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src={photo.src}
                alt={photo.caption ?? `${album.title} photo ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-white opacity-0 transition-all group-hover:bg-ink/40 group-hover:opacity-100 group-focus-visible:bg-ink/40 group-focus-visible:opacity-100">
                <Expand className="size-6" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={index !== null}
        onOpenChange={(open) => !open && setIndex(null)}
      >
        <DialogContent className="max-w-[calc(100%-1rem)] gap-3 border-0 bg-ink p-3 text-white sm:max-w-4xl">
          <DialogTitle className="sr-only">{album.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Photo {index === null ? "" : index + 1} of {count}
          </DialogDescription>
          {current && (
            <div className="relative aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-lg bg-black">
              <Image
                src={current.src}
                alt={current.caption ?? album.title}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-contain"
              />
            </div>
          )}
          <div className="flex items-center justify-between gap-3 px-1">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={count < 2}
              aria-label="Previous photo"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronLeft className="size-5" />
            </button>
            <p className="min-w-0 flex-1 truncate text-center text-sm text-white/80">
              {current?.caption ?? album.title}
              <span className="ml-2 text-white/50">
                {index === null ? "" : `${index + 1} / ${count}`}
              </span>
            </p>
            <button
              type="button"
              onClick={() => step(1)}
              disabled={count < 2}
              aria-label="Next photo"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
