import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Globe,
  Quote,
  Users,
} from "lucide-react";
import { LinkButton } from "@/components/site/link-button";
import { Container, SectionHeading } from "@/components/site/section";
import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";
import {
  PostCard,
  ProjectCard,
  ServiceCard,
} from "@/components/site/cards";
import {
  aboutPoints,
  approach,
  company,
  founder,
  partners,
  stats,
  whyChooseUs,
} from "@/data/site";
import { featuredServices } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { posts } from "@/data/posts";

const whyIcons = {
  users: Users,
  building: Building2,
  globe: Globe,
  brain: BrainCircuit,
} as const;

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/images/banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/10"
        aria-hidden
      />
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber backdrop-blur">
            <span className="size-1.5 rounded-full bg-amber" aria-hidden />
            Education partner · Bangalore, India
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Empower. <span className="text-amber">Evolve.</span>
            <br />
            Innovate.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Join us in shaping a brighter future through innovative educational
            solutions and impactful partnerships.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href="/contact-us" variant="amber">
              Get in touch <ArrowRight />
            </LinkButton>
            <LinkButton
              href="/services"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Explore services
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -left-4 -top-4 size-full rounded-3xl bg-amber/30"
            aria-hidden
          />
          <Image
            src="/images/about-us.jpg"
            alt="Learners collaborating in a skilling programme"
            width={569}
            height={600}
            className="relative aspect-[4/4.4] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand px-6 py-5 text-white shadow-xl sm:-right-6">
            <p className="text-4xl font-extrabold">20+</p>
            <p className="text-sm text-white/80">Years in education</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            eyebrow="About us"
            title="A premier partner for education and skills"
            description={company.description}
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-4 border-amber pl-4 text-lg font-semibold text-ink">
            Join us in shaping a brighter future, one step at a time.
          </p>
          <LinkButton href="/about-us" className="mt-8">
            More about us <ArrowRight />
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our services"
            title="Skills, curriculum and careers"
          />
          <LinkButton href="/services" variant="outline">
            View all services <ArrowRight />
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div
        className="absolute -right-32 -top-32 -z-10 size-96 rounded-full bg-brand/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-32 -z-10 size-96 rounded-full bg-amber/20 blur-3xl"
        aria-hidden
      />
      <Container>
        <SectionHeading
          light
          align="center"
          eyebrow="Why choose us"
          title="Built on experience, driven by impact"
          description="From building skill centers to running large programmes like PMKVY, placing learners abroad and delivering NEP 2020 aligned vocational education."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = whyIcons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:bg-white/10">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Partners() {
  return (
    <section id="partners" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Partners & clients"
            title="Trusted by national and global organisations"
          />
          <LinkButton href="/our-projects" variant="outline">
            View all <ArrowRight />
          </LinkButton>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <li
              key={p.image}
              className="flex aspect-[3/2] items-center justify-center rounded-2xl bg-white p-5 ring-1 ring-border transition-all hover:shadow-lg"
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
      </Container>
    </section>
  );
}

export function FounderMessage() {
  return (
    <section id="founder" className="bg-cream py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="mx-auto w-full max-w-sm">
          <Image
            src={founder.image}
            alt={`${founder.name}, ${founder.role}`}
            width={368}
            height={432}
            className="w-full rounded-3xl object-cover shadow-2xl ring-8 ring-white"
          />
          <div className="mt-6 text-center">
            <p className="text-xl font-extrabold text-ink">{founder.name}</p>
            <p className="text-sm font-semibold text-brand">{founder.role}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading eyebrow="Message from the founder" title="Where the mind is without fear" />
          <Quote className="mt-8 size-10 text-amber" aria-hidden />
          <div className="mt-3 space-y-4 text-lg leading-relaxed text-ink/80">
            {founder.message.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {founder.traits.map((t) => (
              <li
                key={t}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand ring-1 ring-brand/20"
              >
                {t}
              </li>
            ))}
          </ul>
          <LinkButton href="/about-us" className="mt-8">
            Know more <ArrowRight />
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our projects"
            title="Programmes that are changing how India learns"
          />
          <LinkButton href="/our-projects" variant="outline">
            View all projects <ArrowRight />
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-gradient-to-br from-brand to-brand-dark py-16 text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-5xl font-extrabold sm:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
              <p className="mx-auto mt-2 max-w-[14rem] text-sm font-medium text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Our approach" title="How we get results" />
          <LinkButton href="/services" variant="outline">
            View all <ArrowRight />
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="group relative isolate h-80 overflow-hidden rounded-3xl">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="flex h-full flex-col justify-end p-7 text-white">
                  <span className="mb-3 text-sm font-bold text-amber">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {a.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="What our partners say"
        />
      </Container>
      <div className="mt-12 overflow-x-auto pb-6 [scrollbar-width:thin]">
        <ul className="mx-auto flex w-max snap-x snap-mandatory gap-5 px-5 sm:px-8">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex w-[84vw] max-w-sm shrink-0 snap-center flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border"
            >
              <Quote className="size-8 text-amber" aria-hidden />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t pt-5">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
                  aria-hidden
                >
                  {t.name
                    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s/, "")
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section id="news" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="News & events" title="Latest from MPASL" />
          <LinkButton href="/blog" variant="outline">
            All posts <ArrowRight />
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CallToAction() {
  return (
    <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center text-white sm:px-16 sm:py-20">
        <div
          className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-brand/40 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-16 -z-10 size-72 rounded-full bg-amber/25 blur-3xl"
          aria-hidden
        />
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-5xl">
          Let&apos;s build a brighter future together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Whether you run an institution, a company or a government programme,
          we&apos;d love to hear from you.
        </p>
        <LinkButton href="/contact-us" variant="amber" className="mt-9">
          Get in touch <ArrowRight />
        </LinkButton>
      </div>
    </section>
  );
}
