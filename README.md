# MindPhoenix

A new project. More details coming soon.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/raj2208/MindPhoenix.git
cd MindPhoenix
```

## Database

Requires a local Postgres. Create the database and table, then point the app at it:

```bash
npm run db:setup
echo "DATABASE_URL=postgres://$USER@localhost:5432/mindphoenix" > .env.local
npm run dev
```

The home page is a minimal todo CRUD app used to verify the Postgres connection.

## License

TBD
