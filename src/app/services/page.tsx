import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Container,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/section";
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

      <div className="sticky top-16 z-30 border-b bg-white/90 backdrop-blur-xl lg:top-[4.5rem]">
        <Container>
          <ScrollArea className="w-full">
            <nav
              aria-label="Services on this page"
              className="flex w-max gap-2 py-3"
            >
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="rounded-full border bg-white px-4 py-1.5 text-sm font-semibold text-ink/80 transition-colors hover:border-brand hover:bg-accent hover:text-brand"
                >
                  <span className="mr-1.5 text-amber">0{i + 1}</span>
                  {s.title.replace(/^MPASL[:-]\s?(TI:\s?)?/, "")}
                </Link>
              ))}
            </nav>
            <ScrollBar orientation="horizontal" className="h-1.5" />
          </ScrollArea>
        </Container>
      </div>

      <Section containerClassName="space-y-14 sm:space-y-24">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              className="grid scroll-mt-40 items-center gap-6 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <Badge className="bg-amber text-ink">0{i + 1}</Badge>
                <h2 className="mt-3 text-balance text-2xl font-extrabold text-ink sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {s.summary}
                </p>
                <ul className="mt-5 space-y-3">
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
      </Section>

      <Section className="bg-cream">
        <SectionHeading align="center" eyebrow="Our approach" title="How we deliver" />
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {approach.map((a, i) => (
            <Card
              key={a.title}
              className="h-full gap-0 rounded-2xl bg-white py-0 ring-1 ring-border"
            >
              <CardContent className="p-6">
                <Badge className="bg-amber text-ink">0{i + 1}</Badge>
                <h3 className="mt-3 text-xl font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton href="/contact-us">Talk to our team</LinkButton>
        </div>
      </Section>
    </>
  );
}
