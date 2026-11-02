import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, Section, SectionHeading } from "@/components/site/section";
import { LinkButton } from "@/components/site/link-button";
import { projects } from "@/data/projects";
import { partners } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Skill Olympics, BSVT, Atomos, Door to Dorm, Proofile.in and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our projects"
        description="From state-level skill competitions to AI-enabled classrooms, here is what we are building with our partners."
        crumbs={[{ label: "Our Projects" }]}
      />

      <Section containerClassName="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.slug}
            id={p.slug}
            className="group/card h-full scroll-mt-28 gap-0 rounded-2xl bg-white py-0 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>
            <CardContent className="flex flex-1 flex-col p-6">
              <h2 className="text-balance text-lg font-bold leading-snug text-ink">
                {p.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2.5 text-sm text-ink/80"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      strokeWidth={3}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </Section>

      <Section className="bg-cream">
        <SectionHeading
          align="center"
          eyebrow="Partners & clients"
          title="Organisations we work with"
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {partners.map((p) => (
            <li key={p.image}>
              <Card className="aspect-[3/2] items-center justify-center gap-0 rounded-2xl bg-white p-4 py-4 ring-1 ring-border">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={220}
                  height={146}
                  className="max-h-full w-auto object-contain mix-blend-multiply grayscale transition duration-300 hover:grayscale-0"
                />
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <LinkButton href="/contact-us">Partner with us</LinkButton>
        </div>
      </Section>
    </>
  );
}
