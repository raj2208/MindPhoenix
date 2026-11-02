"use server";

import { revalidatePath } from "next/cache";
import { pool } from "@/lib/db";

export async function createTodo(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return;
  await pool.query("INSERT INTO todos (title) VALUES ($1)", [title]);
  revalidatePath("/");
}

export async function toggleTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  await pool.query("UPDATE todos SET done = NOT done WHERE id = $1", [id]);
  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  await pool.query("DELETE FROM todos WHERE id = $1", [id]);
  revalidatePath("/");
}
