import type { Metadata } from "next";
import { Container, PageHero } from "@/components/site/section";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { albums } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from IndiaSkills competitions, project launches and inaugurations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Moments from our competitions, inaugurations and community projects."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="space-y-20">
          <nav aria-label="Albums" className="flex flex-wrap gap-2">
            {albums.map((a) => (
              <a
                key={a.slug}
                href={`#${a.slug}`}
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-brand hover:text-white"
              >
                {a.title}
              </a>
            ))}
          </nav>
          {albums.map((album) => (
            <section key={album.slug} id={album.slug} className="scroll-mt-32">
              <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
                {album.title}
              </h2>
              {album.description && (
                <p className="mt-3 max-w-3xl text-muted-foreground">
                  {album.description}
                </p>
              )}
              <div className="mt-8">
                <GalleryGrid album={album} />
              </div>
            </section>
          ))}
        </Container>
      </section>
    </>
  );
}
