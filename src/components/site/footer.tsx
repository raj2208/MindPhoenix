import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { company, nav, socials } from "@/data/site";
import { socialIcons } from "./social-icons";
import { Container } from "./section";
import { LinkButton } from "./link-button";

const headingClass =
  "text-xs font-bold uppercase tracking-[0.18em] text-white";

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-20 text-white/70 lg:pb-0">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.4fr] lg:gap-x-10">
        <div className="col-span-2 lg:col-span-1">
          <span className="inline-block rounded-xl bg-white p-3">
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={158}
              height={50}
              className="h-10 w-auto"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {company.description}
          </p>
          <ul className="mt-6 flex items-center gap-2.5">
            {socials.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[{ label: "Home", href: "/" }, ...nav.slice(0, 3)].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ...nav.slice(3),
              { label: "News & Events", href: "/blog" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className={headingClass}>Get in touch</h2>
          <ul className="mt-5 space-y-5 text-sm">
            {[company.headquarters, company.registeredOffice].map((o) => (
              <li key={o.label} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-amber" />
                <span>
                  <a
                    href={o.map}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white transition-colors hover:text-amber"
                  >
                    {o.label}
                  </a>
                  <br />
                  {o.address}
                </span>
              </li>
            ))}
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-amber" />
              <a href={company.phoneHref} className="transition-colors hover:text-amber">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-amber" />
              <a
                href={`mailto:${company.email}`}
                className="break-all transition-colors hover:text-amber"
              >
                {company.email}
              </a>
            </li>
          </ul>
          <LinkButton href="/contact-us" variant="amber" className="mt-6 hidden sm:inline-flex">
            Send an enquiry <ArrowRight />
          </LinkButton>
        </div>
      </Container>
      <Separator className="bg-white/10" />
      <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:flex-row sm:text-left">
        <p>© 2026 {company.name}. All Rights Reserved.</p>
        <p>
          Powered by{" "}
          <a
            href={company.poweredBy.href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white transition-colors hover:text-amber"
          >
            {company.poweredBy.name}
          </a>
        </p>
      </Container>
    </footer>
  );
}
