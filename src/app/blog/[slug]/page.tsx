import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Container, PageHero } from "@/components/site/section";
import { PostCard } from "@/components/site/cards";
import { formatDate } from "@/lib/format";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <PageHero
        title={post.title}
        crumbs={[{ label: "News & Events", href: "/blog" }, { label: "Post" }]}
      />
      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-semibold text-brand">
            <Calendar className="size-4" />
            {formatDate(post.date)}
          </p>
          <Image
            src={post.image}
            alt=""
            width={768}
            height={384}
            priority
            className="mt-6 aspect-[2/1] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/85">
            {post.body.map((section, i) => (
              <section key={i} className="space-y-4">
                {section.heading && (
                  <h2 className="pt-4 text-2xl font-extrabold text-ink">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            <ArrowLeft className="size-4" /> Back to all posts
          </Link>
        </Container>
      </article>
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="text-2xl font-extrabold text-ink">More stories</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
