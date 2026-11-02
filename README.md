# MindPhoenix

A new project. More details coming soon.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/raj2208/MindPhoenix.git
cd MindPhoenix
```

## Database

Requires a local Postgres. The app uses [Drizzle ORM](https://orm.drizzle.team). Create the database, point the app at it, and run the migrations:

```bash
pnpm install
pnpm db:create
echo "DATABASE_URL=postgres://$USER@localhost:5432/mindphoenix" > .env.local
pnpm db:migrate
pnpm dev
```

The schema lives in `src/db/schema.ts`. After changing it, run `pnpm db:generate` to create a migration and `pnpm db:migrate` to apply it. `pnpm db:studio` opens Drizzle Studio.

The home page is a minimal todo CRUD app used to verify the Postgres connection.

## License

TBD
