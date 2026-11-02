import { Suspense } from "react";
import { connection } from "next/server";
import { asc } from "drizzle-orm";
import { db } from "@/lib/db";
import { todos } from "@/db/schema";
import { createTodo, deleteTodo, toggleTodo } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

async function TodoList() {
  await connection();
  const rows = await db.select().from(todos).orderBy(asc(todos.id));

  if (rows.length === 0) {
    return <p className="text-muted-foreground">No todos yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {rows.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <form action={toggleTodo} className="flex-1">
            <input type="hidden" name="id" value={todo.id} />
            <Button
              type="submit"
              variant="ghost"
              className={`w-full justify-start ${todo.done ? "line-through opacity-60" : ""}`}
            >
              {todo.done ? "☑" : "☐"} {todo.title}
            </Button>
          </form>
          <form action={deleteTodo}>
            <input type="hidden" name="id" value={todo.id} />
            <Button type="submit" variant="outline" size="sm">
              Delete
            </Button>
          </form>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 py-16">
      <h1 className="text-3xl font-semibold">MindPhoenix</h1>
      <form action={createTodo} className="flex gap-2">
        <Input name="title" placeholder="New todo" required />
        <Button type="submit">Add</Button>
      </form>
      <Suspense fallback={<p>Loading…</p>}>
        <TodoList />
      </Suspense>
    </main>
  );
}
