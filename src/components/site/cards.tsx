import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/format";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import type { Post } from "@/data/posts";

const cardBase =
  "group/card h-full gap-0 rounded-2xl bg-white py-0 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 hover:ring-brand/30";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className={cardBase}>
      <Link
        href={`/services#${service.slug}`}
        className="flex h-full flex-col outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 82vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>
        <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-balance text-lg font-bold leading-snug text-ink">
            {service.title}
          </h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            Learn more
            <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-1" />
          </span>
        </CardContent>
      </Link>
    </Card>
  );
}

/** Image-led tile with the title overlaid. */
export function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/our-projects#${project.slug}`}
      className="group/tile relative isolate block aspect-[4/5] overflow-hidden rounded-3xl bg-ink outline-none focus-visible:ring-3 focus-visible:ring-ring"
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
        className="-z-20 object-cover transition-transform duration-700 group-hover/tile:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      <div className="flex h-full flex-col justify-end p-6 text-white">
        <Badge className="mb-3 w-fit bg-amber text-ink">Project</Badge>
        <h3 className="text-balance text-xl font-bold leading-snug">
          {project.title.replace(/ \(.*\)$/, "")}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/75">
          {project.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber">
          Explore
          <ArrowRight className="size-4 transition-transform group-hover/tile:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className={cardBase}>
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
      >
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 82vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        </div>
        <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
          <Badge variant="secondary" className="w-fit gap-1.5 bg-accent text-accent-foreground">
            <Calendar />
            {formatDate(post.date)}
          </Badge>
          <h3 className="mt-3 text-balance text-lg font-bold leading-snug text-ink transition-colors group-hover/card:text-brand">
            {post.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            Read more
            <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-1" />
          </span>
        </CardContent>
      </Link>
    </Card>
  );
}
