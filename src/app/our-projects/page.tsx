import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container, PageHero, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
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

      <section className="py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <article
                id={p.slug}
                className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold leading-snug text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={3} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Partners & clients"
            title="Organisations we work with"
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p) => (
              <li
                key={p.image}
                className="flex aspect-[3/2] items-center justify-center rounded-2xl bg-white p-5 ring-1 ring-border"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={220}
                  height={146}
                  className="max-h-full w-auto object-contain mix-blend-multiply grayscale transition duration-300 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <LinkButton href="/contact-us">Partner with us</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
