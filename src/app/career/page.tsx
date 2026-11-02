import type { Metadata } from "next";
import { Briefcase, Clock, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, Section, SectionHeading } from "@/components/site/section";
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

      <Section>
        <SectionHeading
          eyebrow="Current openings"
          title={`${jobs.length} open positions`}
        />
        <div className="mt-10 grid gap-4 sm:gap-6 lg:grid-cols-2">
          {jobs.map((job) => (
            <Card
              key={job.title}
              className="h-full gap-0 rounded-3xl bg-white py-0 ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-brand/10"
            >
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <h3 className="text-balance text-xl font-bold leading-snug text-ink">
                  {job.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li>
                    <Badge variant="secondary" className="h-7 gap-1.5 bg-muted px-3 text-xs font-medium text-ink/80">
                      <MapPin className="text-brand" /> {job.location}
                    </Badge>
                  </li>
                  <li>
                    <Badge variant="secondary" className="h-7 gap-1.5 bg-muted px-3 text-xs font-medium text-ink/80">
                      <Clock className="text-brand" /> {job.type}
                    </Badge>
                  </li>
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-ink/80 sm:text-base">
                  {job.summary}
                </p>
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
                    <li key={s}>
                      <Badge className="h-6 bg-accent px-2.5 text-xs font-semibold text-accent-foreground">
                        {s}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button
                    variant="outline"
                    className="h-11 rounded-full px-6 font-semibold"
                    render={<a href="#apply" />}
                  >
                    Apply now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="apply"
        className="scroll-mt-24 bg-cream"
        containerClassName="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
      >
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
        <Card className="gap-0 rounded-3xl bg-white py-0 ring-1 ring-border">
          <CardContent className="p-5 sm:p-10">
            <ApplicationForm positions={jobs.map((j) => j.title)} />
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
