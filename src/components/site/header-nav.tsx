"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Handshake,
  Languages,
  Mail,
  Menu,
  Phone,
  Rocket,
  BrainCircuit,
} from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { company, socials } from "@/data/site";
import { services } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { LinkButton } from "./link-button";
import { socialIcons } from "./social-icons";

const serviceIcons = [Rocket, Handshake, GraduationCap, Globe, BrainCircuit, Languages];

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const topLink =
  "h-10 rounded-full px-3.5 text-sm font-semibold text-ink/80 hover:bg-accent hover:text-brand focus:bg-accent data-active:bg-accent data-active:text-brand data-popup-open:bg-accent data-popup-open:text-brand";

function SimpleLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={<Link href={href} />}
        active={isActive(pathname, href)}
        className={cn(navigationMenuTriggerStyle(), topLink)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <NavigationMenu aria-label="Main" className="hidden lg:flex">
      <NavigationMenuList className="gap-0.5">
        <SimpleLink href="/about-us" label="About Us" />

        <NavigationMenuItem>
          <NavigationMenuTrigger
            data-active={isActive(pathname, "/services") ? "" : undefined}
            className={topLink}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[40rem] grid-cols-2 gap-1 p-2">
              {services.map((s, i) => {
                const Icon = serviceIcons[i] ?? Rocket;
                return (
                  <NavigationMenuLink
                    key={s.slug}
                    render={<Link href={`/services#${s.slug}`} />}
                    className="items-start gap-3 p-3"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-snug text-ink">
                        {s.title}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                        {s.summary}
                      </span>
                    </span>
                  </NavigationMenuLink>
                );
              })}
            </div>
            <div className="border-t bg-muted/50 p-2">
              <NavigationMenuLink
                render={<Link href="/services" />}
                className="justify-between px-3 py-2.5 font-semibold text-brand"
              >
                View all services <ArrowRight />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            data-active={isActive(pathname, "/our-projects") ? "" : undefined}
            className={topLink}
          >
            Our Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[34rem] grid-cols-2 gap-1 p-2">
              {featuredProjects.map((p) => (
                <li key={p.slug}>
                  <NavigationMenuLink
                    render={<Link href={`/our-projects#${p.slug}`} />}
                    className="items-center gap-3 p-2.5"
                  >
                    <Image
                      src={p.image}
                      alt=""
                      width={80}
                      height={56}
                      className="h-11 w-14 shrink-0 rounded-md object-cover"
                    />
                    <span className="text-sm font-semibold leading-snug text-ink">
                      {p.title.replace(/ \(.*\)$/, "")}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
            <div className="border-t bg-muted/50 p-2">
              <NavigationMenuLink
                render={<Link href="/our-projects" />}
                className="justify-between px-3 py-2.5 font-semibold text-brand"
              >
                View all projects <ArrowRight />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <SimpleLink href="/gallery" label="Gallery" />
        <SimpleLink href="/career" label="Career" />
        <SimpleLink href="/contact-us" label="Contact Us" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const mobileLink =
  "flex h-12 items-center rounded-xl px-3 text-base font-semibold text-ink transition-colors hover:bg-accent";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  const item = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      onClick={close}
      aria-current={isActive(pathname, href) ? "page" : undefined}
      className={cn(
        mobileLink,
        isActive(pathname, href) && "bg-accent text-brand",
      )}
    >
      {label}
    </Link>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-lg"
            aria-label="Open menu"
            className="size-10 rounded-full lg:hidden"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[88%] gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="flex-row items-center border-b p-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Image
            src="/images/logo.png"
            alt={company.name}
            width={140}
            height={44}
            className="h-10 w-auto"
          />
        </SheetHeader>

        <ScrollArea className="min-h-0 flex-1">
          <nav aria-label="Mobile" className="flex flex-col gap-1 p-3">
            {item("/about-us", "About Us")}

            <Accordion className="gap-0">
              <AccordionItem value="services" className="border-0">
                <AccordionTrigger className="h-12 rounded-xl px-3 text-base font-semibold text-ink hover:bg-accent hover:no-underline">
                  Services
                </AccordionTrigger>
                <AccordionContent className="pb-1 [&_a]:no-underline">
                  <ul className="ml-3 space-y-0.5 border-l pl-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services#${s.slug}`}
                          onClick={close}
                          className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-accent hover:text-brand"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        onClick={close}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand"
                      >
                        View all services
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="projects" className="border-0">
                <AccordionTrigger className="h-12 rounded-xl px-3 text-base font-semibold text-ink hover:bg-accent hover:no-underline">
                  Our Projects
                </AccordionTrigger>
                <AccordionContent className="pb-1 [&_a]:no-underline">
                  <ul className="ml-3 space-y-0.5 border-l pl-3">
                    {featuredProjects.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/our-projects#${p.slug}`}
                          onClick={close}
                          className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-accent hover:text-brand"
                        >
                          {p.title.replace(/ \(.*\)$/, "")}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/our-projects"
                        onClick={close}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand"
                      >
                        View all projects
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {item("/gallery", "Gallery")}
            {item("/career", "Career")}
            {item("/contact-us", "Contact Us")}
          </nav>
        </ScrollArea>

        <Separator />
        <div className="space-y-3 p-4">
          <LinkButton href="/contact-us" onClick={close} className="w-full">
            Get in touch <ArrowRight />
          </LinkButton>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="h-10 rounded-full"
              render={<a href={company.phoneHref} />}
            >
              <Phone /> Call
            </Button>
            <Button
              variant="outline"
              className="h-10 rounded-full"
              render={<a href={`mailto:${company.email}`} />}
            >
              <Mail /> Email
            </Button>
          </div>
          <ul className="flex items-center justify-center gap-2 pt-1">
            {socials.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex size-9 items-center justify-center rounded-full bg-muted text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
