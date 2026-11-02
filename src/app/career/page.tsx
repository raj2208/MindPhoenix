import type { Metadata } from "next";
import { Briefcase, GraduationCap, MapPin, Clock } from "lucide-react";
import { Container, PageHero, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { LinkButton } from "@/components/site/link-button";
import { company } from "@/data/site";
import { jobs } from "@/data/jobs";
import { ApplicationForm } from "./application-form";

export const metadata: Metadata = {
  title: "Career",
  description: "Open positions at MindPhoenix Advisory Services LLP.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="Join our team"
        description="Help us make skills and opportunity accessible. MPASL is an equal-opportunity employer."
        crumbs={[{ label: "Career" }]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Current openings"
            title={`${jobs.length} open positions`}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={(i % 2) * 80}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-brand/10 sm:p-8">
                  <h3 className="text-xl font-bold leading-snug text-ink">
                    {job.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-brand" /> {job.location}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Clock className="size-4 text-brand" /> {job.type}
                    </li>
                  </ul>
                  <p className="mt-5 leading-relaxed text-ink/80">{job.summary}</p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <dt className="mt-0.5 shrink-0 text-brand">
                        <Briefcase className="size-4" />
                        <span className="sr-only">Experience</span>
                      </dt>
                      <dd className="text-ink/80">{job.experience}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="mt-0.5 shrink-0 text-brand">
                        <GraduationCap className="size-4" />
                        <span className="sr-only">Education</span>
                      </dt>
                      <dd className="text-ink/80">{job.education}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <LinkButton href="#apply" variant="outline">
                      Apply now
                    </LinkButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="scroll-mt-24 bg-cream py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Send us your application"
              description="Fill in the form and attach your resume. You can also email your CV and a short cover letter to us directly."
            />
            <a
              href={`mailto:${company.careersEmail}`}
              className="mt-6 inline-block text-lg font-bold text-brand hover:underline"
            >
              {company.careersEmail}
            </a>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-border sm:p-10">
            <ApplicationForm positions={jobs.map((j) => j.title)} />
          </div>
        </Container>
      </section>
    </>
  );
}
