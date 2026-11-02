import type { Metadata } from "next";
import { PageHero, Section } from "@/components/site/section";
import { PostCard } from "@/components/site/cards";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stories and updates from MindPhoenix Advisory Services LLP.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="News & events"
        description="Stories, milestones and updates from our projects across India."
        crumbs={[{ label: "News & Events" }]}
      />
      <Section containerClassName="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </Section>
    </>
  );
}
