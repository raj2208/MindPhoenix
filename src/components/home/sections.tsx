import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Globe,
  GraduationCap,
  Handshake,
  Quote,
  Rocket,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/site/link-button";
import {
  Container,
  Section,
  SectionHeading,
  SnapRow,
} from "@/components/site/section";
import { CountUp } from "@/components/site/count-up";
import { Reveal } from "@/components/site/reveal";
import { CardCarousel } from "@/components/site/card-carousel";
import { PostCard, ProjectTile, ServiceCard } from "@/components/site/cards";
import {
  aboutPoints,
  approach,
  company,
  founder,
  partners,
  stats,
  whyChooseUs,
} from "@/data/site";
import { services } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { posts } from "@/data/posts";

const whyIcons = {
  users: Users,
  building: Building2,
  globe: Globe,
  brain: BrainCircuit,
} as const;

const aboutIcons = [GraduationCap, Globe, Rocket, Handshake];

function MosaicPhoto({
  src,
  alt,
  sizes,
  className,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/images/banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right opacity-40"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_85%_20%,rgb(212_64_0/0.35),transparent_60%),linear-gradient(to_right,var(--color-ink),rgb(20_26_46/0.85)_55%,rgb(20_26_46/0.55))]"
        aria-hidden
      />
      <Container className="grid items-center gap-12 pb-28 pt-12 sm:pb-32 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-36 lg:pt-20">
        <div>
          <Badge
            variant="outline"
            className="h-8 gap-2 rounded-full border-white/20 bg-white/10 px-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-amber backdrop-blur"
          >
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-amber" />
            </span>
            Education partner · Bangalore, India
          </Badge>
          <h1 className="mt-6 text-balance text-[2.75rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Empower. <span className="text-amber">Evolve.</span> Innovate.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
            Join us in shaping a brighter future through innovative
            educational solutions and impactful partnerships.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact-us" variant="amber" className="h-12 px-7 text-base">
              Get in touch <ArrowRight />
            </LinkButton>
            <LinkButton
              href="/services"
              variant="outline"
              className="h-12 border-white/25 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/15 hover:text-white"
            >
              Explore services
            </LinkButton>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
            {[
              "PMKVY & NSDC experience",
              "NEP 2020 aligned programmes",
              "Global placements",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber/20 text-amber">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[6/5] w-full max-w-xl lg:aspect-square lg:max-w-none">
          <MosaicPhoto
            src="/images/gallery-arunachal-12.jpg"
            alt="Arunachal Pradesh team with medals at the IndiaSkills regional competition"
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="left-0 top-[8%] h-[66%] w-[56%]"
            priority
          />
          <MosaicPhoto
            src="/images/gallery-bsvt-2.jpg"
            alt="Inauguration of the Bharath School of Vertical Transportation"
            sizes="(min-width: 1024px) 20vw, 50vw"
            className="right-0 top-0 h-[38%] w-[40%]"
          />
          <MosaicPhoto
            src="/images/gallery-national-1.jpg"
            alt="Students at the national skills competition opening ceremony"
            sizes="(min-width: 1024px) 25vw, 55vw"
            className="bottom-0 right-[3%] h-[50%] w-[46%]"
          />
          <Card className="absolute bottom-[6%] left-[2%] w-auto gap-0 rounded-2xl border-0 bg-white py-0 shadow-2xl ring-1 ring-black/5">
            <CardContent className="flex items-center gap-3 p-3.5 pr-5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                <GraduationCap className="size-5" />
              </span>
              <span>
                <span className="block text-2xl font-extrabold leading-none text-ink">
                  10K+
                </span>
                <span className="text-xs text-muted-foreground">
                  Students benefitted
                </span>
              </span>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-16 sm:-mt-20">
      <Container>
        <Card className="gap-0 rounded-3xl border-0 bg-white py-0 shadow-2xl shadow-ink/10 ring-1 ring-border">
          <CardContent className="grid grid-cols-2 gap-y-8 p-6 sm:p-8 lg:grid-cols-4 lg:divide-x lg:gap-y-0">
            {stats.map((s) => (
              <dl key={s.label} className="px-2 text-center sm:px-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="bg-gradient-to-br from-brand to-amber bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mx-auto mt-1.5 max-w-[11rem] text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </dl>
            ))}
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

export function TrustedBy() {
  return (
    <section className="pt-14 sm:pt-16" aria-label="Partners and clients">
      <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Trusted by leading institutions & partners
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
          {[...partners, ...partners].map((p, i) => (
            <li
              key={`${p.image}-${i}`}
              aria-hidden={i >= partners.length}
              className="shrink-0"
            >
              <Image
                src={p.image}
                alt={i < partners.length ? p.name : ""}
                width={220}
                height={146}
                className="h-12 w-auto object-contain mix-blend-multiply grayscale transition duration-300 hover:grayscale-0 sm:h-14"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" containerClassName="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div className="relative aspect-[5/4]">
          <MosaicPhoto
            src="/images/gallery-hope-1.jpg"
            alt="Project Hope inauguration with community members and dignitaries"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="left-0 top-0 h-[82%] w-[80%] shadow-xl ring-0"
          />
          <MosaicPhoto
            src="/images/gallery-msdc-4.jpg"
            alt="Ribbon-cutting at the MSDC Skill Center"
            sizes="(min-width: 1024px) 25vw, 55vw"
            className="bottom-0 right-0 h-[56%] w-[52%] ring-8 ring-white"
          />
          <Card className="absolute left-3 top-3 w-auto gap-0 rounded-2xl border-0 bg-brand py-0 text-white shadow-xl sm:left-5 sm:top-5">
            <CardContent className="px-5 py-4">
              <p className="text-3xl font-extrabold leading-none">20+</p>
              <p className="mt-1 text-xs text-white/80">Years in education</p>
            </CardContent>
          </Card>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <SectionHeading
          eyebrow="About us"
          title="A premier partner for education and skills"
          description={company.description}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {aboutPoints.map((point, i) => {
            const Icon = aboutIcons[i];
            return (
              <li key={point}>
                <Card className="h-full gap-0 rounded-2xl bg-muted/60 py-0 ring-0 transition-colors hover:bg-accent">
                  <CardContent className="flex items-center gap-3.5 p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-ink">
                      {point}
                    </span>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
          <LinkButton href="/about-us">
            More about us <ArrowRight />
          </LinkButton>
          <p className="border-l-4 border-amber pl-4 text-sm font-semibold text-ink">
            Join us in shaping a brighter future, one step at a time.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" className="bg-cream">
      <SectionHeading
        eyebrow="Our services"
        title="Skills, curriculum and careers"
        description="Everything an institution needs to turn learners into job-ready professionals."
        action={
          <LinkButton href="/services" variant="outline">
            View all services <ArrowRight />
          </LinkButton>
        }
      />
      <SnapRow className="mt-10 sm:mt-12">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </SnapRow>
    </Section>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative isolate overflow-hidden bg-ink py-14 text-white sm:py-20 lg:py-24"
    >
      <div
        className="absolute -right-32 -top-32 -z-10 size-96 rounded-full bg-brand/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-32 -z-10 size-96 rounded-full bg-amber/15 blur-3xl"
        aria-hidden
      />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            light
            eyebrow="Why choose us"
            title="Built on experience, driven by impact"
            description="From building skill centers to running large programmes like PMKVY, placing learners abroad and delivering NEP 2020 aligned vocational education."
          />
          <LinkButton href="/about-us" variant="amber" className="mt-8">
            Meet the team <ArrowRight />
          </LinkButton>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {whyChooseUs.map((item) => {
            const Icon = whyIcons[item.icon];
            return (
              <Card
                key={item.title}
                className="h-full gap-0 rounded-2xl border-0 bg-white/5 py-0 text-white ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/10"
              >
                <CardContent className="p-4 sm:p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white sm:size-12">
                    <Icon className="size-5 sm:size-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold sm:mt-5 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/65 sm:text-sm">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Our projects"
        title="Programmes that are changing how India learns"
        action={
          <LinkButton href="/our-projects" variant="outline">
            View all projects <ArrowRight />
          </LinkButton>
        }
      />
      <div className="mt-10 sm:mt-12">
        <CardCarousel
          label="Featured projects"
          itemClassName="basis-[82%] sm:basis-1/2 lg:basis-1/3"
          items={featuredProjects.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        />
      </div>
    </Section>
  );
}

export function FounderMessage() {
  return (
    <Section id="founder" className="bg-cream" containerClassName="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <Reveal className="relative mx-auto w-full max-w-sm">
        <div
          className="absolute -bottom-4 -right-4 size-full rounded-3xl bg-amber/40"
          aria-hidden
        />
        <Image
          src={founder.image}
          alt={`${founder.name}, ${founder.role}`}
          width={368}
          height={432}
          className="relative w-full rounded-3xl object-cover shadow-2xl"
        />
        <Card className="absolute -bottom-6 left-4 right-4 gap-0 rounded-2xl border-0 bg-white py-0 shadow-xl ring-1 ring-black/5">
          <CardContent className="px-5 py-4 text-center">
            <p className="text-lg font-extrabold text-ink">{founder.name}</p>
            <p className="text-sm font-semibold text-brand">{founder.role}</p>
          </CardContent>
        </Card>
      </Reveal>
      <Reveal delay={100} className="mt-6 lg:mt-0">
        <SectionHeading
          eyebrow="Message from the founder"
          title="Where the mind is without fear"
        />
        <blockquote className="relative mt-8">
          <Quote
            className="absolute -left-1 -top-2 size-10 text-amber/60"
            aria-hidden
          />
          <div className="space-y-4 pl-0 pt-8 text-base leading-relaxed text-ink/80 sm:text-lg">
            {founder.message.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </blockquote>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {founder.traits.map((t) => (
            <li key={t}>
              <Badge
                variant="outline"
                className="h-8 rounded-full border-brand/20 bg-white px-4 text-sm font-semibold text-brand"
              >
                {t}
              </Badge>
            </li>
          ))}
        </ul>
        <LinkButton href="/about-us" className="mt-8">
          Know more <ArrowRight />
        </LinkButton>
      </Reveal>
    </Section>
  );
}

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading
        eyebrow="Our approach"
        title="How we get results"
        action={
          <LinkButton href="/services" variant="outline">
            View all <ArrowRight />
          </LinkButton>
        }
      />
      <SnapRow className="mt-10 sm:mt-12">
        {approach.map((a, i) => (
          <div
            key={a.title}
            className="group relative isolate h-80 overflow-hidden rounded-3xl bg-ink"
          >
            <Image
              src={a.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 82vw"
              className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-transparent" />
            <div className="flex h-full flex-col justify-end p-6 text-white">
              <Badge className="mb-3 w-fit bg-amber text-ink">0{i + 1}</Badge>
              <h3 className="text-2xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {a.text}
              </p>
            </div>
          </div>
        ))}
      </SnapRow>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-cream">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our partners say"
        description="Leaders from industry, education and healthcare on working with MPASL."
      />
      <div className="mt-10 sm:mt-12">
        <CardCarousel
          label="Testimonials"
          itemClassName="basis-[88%] sm:basis-1/2 lg:basis-1/3"
          items={testimonials.map((t) => (
            <Card
              key={t.name}
              className="h-full gap-0 rounded-3xl bg-white py-0 ring-1 ring-border"
            >
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <Quote className="size-8 text-amber" aria-hidden />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t pt-5">
                  <Avatar size="lg" className="size-11">
                    <AvatarFallback className="bg-brand text-sm font-bold text-white">
                      {t.name
                        .replace(/^(Mr|Mrs|Ms|Dr)\.?\s/, "")
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        />
      </div>
    </Section>
  );
}

export function News() {
  return (
    <Section id="news">
      <SectionHeading
        eyebrow="News & events"
        title="Latest from MPASL"
        action={
          <LinkButton href="/blog" variant="outline">
            All posts <ArrowRight />
          </LinkButton>
        }
      />
      <SnapRow className="mt-10 sm:mt-12">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </SnapRow>
    </Section>
  );
}

export function CallToAction() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:pb-24">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-16 sm:py-20">
        <Image
          src="/images/banner.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-30"
        />
        <div
          className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-brand/40 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-16 -z-10 size-72 rounded-full bg-amber/25 blur-3xl"
          aria-hidden
        />
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold sm:text-5xl">
          Let&apos;s build a brighter future together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
          Whether you run an institution, a company or a government programme,
          we&apos;d love to hear from you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/contact-us" variant="amber" className="h-12 px-7 text-base">
            Get in touch <ArrowRight />
          </LinkButton>
          <LinkButton
            href="/career"
            variant="outline"
            className="h-12 border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/15 hover:text-white"
          >
            Join our team
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
