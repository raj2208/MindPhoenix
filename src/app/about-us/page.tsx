import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Container,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { LinkButton } from "@/components/site/link-button";
import { company, founder } from "@/data/site";
import { team, values } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founder, team and values behind MindPhoenix Advisory Services LLP.",
};

const initials = (name: string) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr|Col|Capt)\.?\s/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Where the mind is without fear"
        description="MPASL is an education partner headquartered in Bangalore, focused on skill development, curriculum enhancement and global placement opportunities."
        crumbs={[{ label: "About Us" }]}
      />

      <Section containerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Who we are"
            title="Two decades of experience in education"
            description="Founded in 2023 by Capt. Kaustav Nath, MindPhoenix Advisory Services LLP brings together more than 20 years of combined experience across government and private education."
          />
          <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
            Capt. Nath serves as State Engagement Officer for the National
            Skill Development Corporation (NSDC) in Karnataka and Goa, and
            previously in Tripura. His &ldquo;philosophy of touch&rdquo; is
            simple: recognise what every team member contributes so people feel
            valued and do their best work.
          </p>
          <p className="mt-5 border-l-4 border-amber pl-4 text-base font-semibold text-ink sm:text-lg">
            Our vision: to be the world&apos;s leading choice for education and
            skill development.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/gallery-msdc-5.jpg"
              alt="Ribbon-cutting at the MSDC EV Center"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="bg-cream">
        <SectionHeading
          align="center"
          eyebrow="Our values"
          title="What guides everything we do"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {values.map((v, i) => (
            <Card
              key={v.title}
              className="h-full gap-0 rounded-2xl bg-white py-0 ring-1 ring-border"
            >
              <CardContent className="p-6">
                <Badge className="bg-amber text-ink">0{i + 1}</Badge>
                <h3 className="mt-4 text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section containerClassName="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Image
          src={founder.image}
          alt={`${founder.name}, ${founder.role}`}
          width={368}
          height={432}
          className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-2xl"
        />
        <div>
          <SectionHeading eyebrow="Our founder" title={founder.name} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80 sm:text-lg">
            {founder.message.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Badge
            variant="outline"
            className="mt-6 h-8 rounded-full border-brand/20 bg-brand/5 px-4 text-sm font-semibold text-brand"
          >
            &ldquo;Do right for rights&rdquo;
          </Badge>
        </div>
      </Section>

      <section className="bg-ink py-14 text-white sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Our team"
            title="The people behind MPASL"
            description="Educators, administrators, designers and advisors who share one goal: making skills and opportunity accessible."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {team.map((m) => (
              <Card
                key={m.name}
                className="h-full gap-0 rounded-2xl border-0 bg-white/5 py-0 text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar size="lg" className="size-14">
                      <AvatarFallback className="bg-gradient-to-br from-brand to-amber text-lg font-extrabold text-white">
                        {initials(m.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-snug">
                        {m.name}
                      </h3>
                      <p className="text-sm font-semibold text-amber">
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    {m.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Visit us"
          title="Our offices in Bangalore"
        />
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {[company.headquarters, company.registeredOffice].map((o) => (
            <Card
              key={o.label}
              className="group/card h-full gap-0 rounded-2xl bg-white py-0 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-brand/30"
            >
              <a
                href={o.map}
                target="_blank"
                rel="noreferrer"
                className="block h-full p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{o.label}</h3>
                <p className="mt-2 text-muted-foreground">{o.address}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Open in Google Maps <ArrowUpRight className="size-4" />
                </p>
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button
            variant="outline"
            className="h-11 rounded-full px-5"
            render={<a href={company.phoneHref} />}
          >
            <Phone className="text-brand" /> {company.phone}
          </Button>
          <Button
            variant="outline"
            className="h-11 rounded-full px-5"
            render={<a href={`mailto:${company.email}`} />}
          >
            <Mail className="text-brand" /> {company.email}
          </Button>
          <LinkButton href="/contact-us">Contact us</LinkButton>
        </div>
      </Section>
    </>
  );
}
