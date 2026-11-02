import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, nav, socials } from "@/data/site";
import { socialIcons } from "./social-icons";
import { Container } from "./section";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.4fr]">
        <div>
          <span className="inline-block rounded-xl bg-white p-3">
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={158}
              height={50}
              className="h-11 w-auto"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {company.description}
          </p>
          <ul className="mt-6 flex items-center gap-3">
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
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-amber">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="hover:text-amber">
                News &amp; Events
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-5 text-sm">
            {[company.headquarters, company.registeredOffice].map((o) => (
              <li key={o.label} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-amber" />
                <span>
                  <a
                    href={o.map}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white hover:text-amber"
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
              <a href={company.phoneHref} className="hover:text-amber">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-amber" />
              <a href={`mailto:${company.email}`} className="hover:text-amber">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © 2026 {company.name}. All Rights Reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href={company.poweredBy.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white hover:text-amber"
            >
              {company.poweredBy.name}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
