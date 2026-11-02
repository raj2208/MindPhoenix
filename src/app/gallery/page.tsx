import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <section className="py-10 sm:py-16">
        <Container>
          <Tabs defaultValue={albums[0].slug} className="gap-8">
            <ScrollArea className="w-full">
              <TabsList className="w-max gap-2 bg-transparent p-0 pb-4 group-data-horizontal/tabs:h-auto">
                {albums.map((a) => (
                  <TabsTrigger
                    key={a.slug}
                    value={a.slug}
                    className="h-10 flex-none gap-2 rounded-full border-border bg-white px-4 text-sm font-semibold text-ink/80 data-active:border-brand data-active:bg-brand data-active:text-white"
                  >
                    {a.title}
                    <Badge
                      variant="secondary"
                      className="h-5 rounded-full bg-current/10 px-1.5 text-[0.65rem] text-inherit"
                    >
                      {a.photos.length}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {albums.map((album) => (
              <TabsContent key={album.slug} value={album.slug}>
                <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
                  {album.title}
                </h2>
                {album.description && (
                  <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
                    {album.description}
                  </p>
                )}
                <div className="mt-6">
                  <GalleryGrid album={album} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </section>
    </>
  );
}
