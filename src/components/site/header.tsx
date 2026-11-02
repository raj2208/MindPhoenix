import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { company, socials } from "@/data/site";
import { DesktopNav, MobileNav } from "./header-nav";
import { HeaderShell } from "./header-shell";
import { LinkButton } from "./link-button";
import { socialIcons } from "./social-icons";

export function SiteHeader() {
  return (
    <HeaderShell
      topBar={
        <div className="mx-auto flex h-10 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-amber"
            >
              <Phone className="size-3.5 text-amber" /> {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-amber"
            >
              <Mail className="size-3.5 text-amber" /> {company.email}
            </a>
          </div>
          <ul className="flex items-center gap-4">
            {socials.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="transition-colors hover:text-amber"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      }
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" aria-label={`${company.name} home`} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={company.name}
            width={158}
            height={50}
            priority
            className="h-10 w-auto lg:h-11"
          />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2 sm:gap-3">
          <LinkButton href="/contact-us" className="hidden sm:inline-flex">
            Get in touch
          </LinkButton>
          <MobileNav />
        </div>
      </div>
    </HeaderShell>
  );
}
