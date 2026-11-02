# MindPhoenix

A modernised mock-up of the [MindPhoenix Advisory Services LLP (MPASL)](https://www.mpasl.in/) website: an education and skill-development partner based in Bangalore.

Built with Next.js (app router), Tailwind CSS, shadcn/ui, PostgreSQL and Drizzle ORM.

## Pages

| Route | What it has |
| --- | --- |
| `/` | Hero, about, services, why choose us, partners, founder message, projects, stats, approach, testimonials, news |
| `/about-us` | Story, values, founder, team, offices |
| `/services` | All six services |
| `/our-projects` | All nine projects and partner logos |
| `/gallery` | Photo albums with a lightbox |
| `/career` | Open positions and an application form with resume upload |
| `/contact-us` | Contact details and an enquiry form |
| `/blog`, `/blog/[slug]` | News & events |

The contact and career forms are saved to Postgres.

## Getting started

Requires Node.js, [pnpm](https://pnpm.io) and a local PostgreSQL.

```bash
pnpm install
pnpm db:create
echo "DATABASE_URL=postgres://$USER@localhost:5432/mindphoenix" > .env.local
pnpm db:migrate
pnpm dev
```

Open <http://localhost:3000>.

## Editing content

Page content lives in typed data files in `src/data/` (`site.ts`, `services.ts`, `projects.ts`, `testimonials.ts`, `team.ts`, `jobs.ts`, `gallery.ts`, `posts.ts`). Images are in `public/images/`.

Brand colours and fonts are set in `src/app/globals.css` and `src/app/layout.tsx`.

## Database

The schema is in `src/db/schema.ts`. After changing it, run `pnpm db:generate` to create a migration and `pnpm db:migrate` to apply it.

- `pnpm db:studio` opens Drizzle Studio to browse enquiries and applications.
- Uploaded resumes are saved to `uploads/resumes/` (git-ignored) and referenced from the `job_applications` table.

## Notes

- Content and images were taken from the live site. Testimonial quotes, blog post dates and the team bios' wording are placeholders or paraphrased and should be replaced with approved copy.
- Social media links point to each network's home page, as on the original site.
