import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container, PageHero, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { LinkButton } from "@/components/site/link-button";
import { company, founder } from "@/data/site";
import { team, values } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founder, team and values behind MindPhoenix Advisory Services LLP.",
};

function initials(name: string) {
  return name
    .replace(/^(Mr|Mrs|Ms|Dr|Col|Capt)\.?\s/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Where the mind is without fear"
        description="MPASL is an education partner headquartered in Bangalore, focused on skill development, curriculum enhancement and global placement opportunities."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="Two decades of experience in education"
              description="Founded in 2023 by Capt. Kaustav Nath, MindPhoenix Advisory Services LLP brings together more than 20 years of combined experience across government and private education."
            />
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              Capt. Nath serves as State Engagement Officer for the National
              Skill Development Corporation (NSDC) in Karnataka and Goa, and
              previously in Tripura. His &ldquo;philosophy of touch&rdquo; is
              simple: recognise what every team member contributes so people feel
              valued and do their best work.
            </p>
            <p className="mt-4 border-l-4 border-amber pl-4 text-lg font-semibold text-ink">
              Our vision: to be the world&apos;s leading choice for education
              and skill development.
            </p>
          </Reveal>
          <Reveal delay={100} className="relative">
            <Image
              src="/images/about-us.jpg"
              alt="Learners at a skilling programme"
              width={569}
              height={600}
              className="aspect-[4/3.2] w-full rounded-3xl object-cover shadow-2xl"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title="What guides everything we do"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-2xl bg-white p-7 ring-1 ring-border">
                  <span className="text-sm font-bold text-amber">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Image
            src={founder.image}
            alt={`${founder.name}, ${founder.role}`}
            width={368}
            height={432}
            className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-2xl ring-8 ring-white"
          />
          <div>
            <SectionHeading eyebrow="Our founder" title={founder.name} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              {founder.message.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              &ldquo;Do right for rights&rdquo; — the mission motto of the Nath
              family&apos;s work
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            light
            eyebrow="Our team"
            title="The people behind MPASL"
            description="Educators, administrators, designers and advisors who share one goal: making skills and opportunity accessible."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 70}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10">
                  <span
                    className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-amber text-lg font-extrabold text-white"
                    aria-hidden
                  >
                    {initials(m.name)}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
                  <p className="text-sm font-semibold text-amber">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {m.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Visit us"
            title="Our offices in Bangalore"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[company.headquarters, company.registeredOffice].map((o) => (
              <a
                key={o.label}
                href={o.map}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl bg-white p-7 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-brand/30"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{o.label}</h3>
                <p className="mt-2 text-muted-foreground">{o.address}</p>
                <p className="mt-4 text-sm font-semibold text-brand">
                  Open in Google Maps →
                </p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ink">
            <a href={company.phoneHref} className="flex items-center gap-2 font-semibold hover:text-brand">
              <Phone className="size-4 text-brand" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 font-semibold hover:text-brand">
              <Mail className="size-4 text-brand" /> {company.email}
            </a>
          </div>
          <div className="mt-10 text-center">
            <LinkButton href="/contact-us">Contact us</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
