"use server";

import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { todos } from "@/db/schema";

export async function createTodo(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return;
  await db.insert(todos).values({ title });
  revalidatePath("/");
}

export async function toggleTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .update(todos)
    .set({ done: not(todos.done) })
    .where(eq(todos.id, id));
  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/");
}
