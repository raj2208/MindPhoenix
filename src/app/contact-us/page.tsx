import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section, PageHero } from "@/components/site/section";
import { company } from "@/data/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MindPhoenix Advisory Services LLP in Bangalore.",
};

const infoCard =
  "gap-0 rounded-2xl bg-white py-0 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-brand/30";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Tell us a little about what you have in mind and we'll get back to you."
        crumbs={[{ label: "Contact Us" }]}
      />
      <Section containerClassName="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-4 sm:space-y-5">
          <Card className={infoCard}>
            <a
              href={company.phoneHref}
              className="flex items-center gap-4 p-5 outline-none focus-visible:ring-3 focus-visible:ring-ring/60 sm:p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Call us</span>
                <span className="text-lg font-bold text-ink">{company.phone}</span>
              </span>
            </a>
          </Card>
          <Card className={infoCard}>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-4 p-5 outline-none focus-visible:ring-3 focus-visible:ring-ring/60 sm:p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">Email us</span>
                <span className="block break-words text-base font-bold text-ink sm:text-lg">
                  {company.email}
                </span>
              </span>
            </a>
          </Card>
          {[company.headquarters, company.registeredOffice].map((o) => (
            <Card key={o.label} className={infoCard}>
              <a
                href={o.map}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-5 outline-none focus-visible:ring-3 focus-visible:ring-ring/60 sm:p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber text-ink">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">
                    {o.label}
                  </span>
                  <span className="mt-0.5 block font-semibold text-ink">
                    {o.address}
                  </span>
                </span>
              </a>
            </Card>
          ))}
        </div>

        <Card className="gap-0 rounded-3xl bg-cream py-0 ring-1 ring-border">
          <CardContent className="p-5 sm:p-10">
            <h2 className="text-2xl font-extrabold text-ink">Send us a message</h2>
            <p className="mb-8 mt-2 text-muted-foreground">
              Fields marked with <span className="text-brand">*</span> are required.
            </p>
            <ContactForm />
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
