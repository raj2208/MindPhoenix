import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container, PageHero, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { LinkButton } from "@/components/site/link-button";
import { services } from "@/data/services";
import { approach } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Skill development, vocational training, international placements and AI in education.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our services"
        description="Programmes and partnerships that move learners from classrooms to careers."
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-20 sm:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <Image
                    src={s.image}
                    alt=""
                    width={371}
                    height={255}
                    className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-amber">
                    0{i + 1}
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-ink/80">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our approach"
            title="How we deliver"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {approach.map((a, i) => (
              <div
                key={a.title}
                className="rounded-2xl bg-white p-7 ring-1 ring-border"
              >
                <span className="text-sm font-bold text-amber">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold text-ink">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <LinkButton href="/contact-us">Talk to our team</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
