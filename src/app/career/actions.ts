"use server";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { db } from "@/lib/db";
import { jobApplications } from "@/db/schema";
import { jobs } from "@/data/jobs";
import { isEmail, isPhone, text, type FormState } from "@/lib/form";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);
const UPLOAD_DIR = path.join(process.cwd(), "uploads", "resumes");

export async function submitApplication(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const n = prev.n + 1;

  if (text(formData, "website")) {
    return { status: "success", message: "Your application has been received.", n };
  }

  const values = {
    firstName: text(formData, "firstName", 60),
    lastName: text(formData, "lastName", 60),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 20),
    position: text(formData, "position", 200),
  };

  const errors: Record<string, string> = {};
  if (!values.firstName) errors.firstName = "Please enter your first name.";
  if (!values.lastName) errors.lastName = "Please enter your last name.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (!isPhone(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!jobs.some((j) => j.title === values.position))
    errors.position = "Please choose a position.";

  const resume = formData.get("resume");
  const ext =
    resume instanceof File ? path.extname(resume.name).toLowerCase() : "";
  if (!(resume instanceof File) || resume.size === 0) {
    errors.resume = "Please attach your resume.";
  } else if (!ALLOWED_EXTENSIONS.has(ext)) {
    errors.resume = "Resume must be a PDF, DOC or DOCX file.";
  } else if (resume.size > MAX_RESUME_BYTES) {
    errors.resume = "Resume must be 5 MB or smaller.";
  }

  if (Object.keys(errors).length || !(resume instanceof File)) {
    return { status: "error", errors, values, n };
  }

  try {
    await mkdir(UPLOAD_DIR, { recursive: true });
    const storedName = `${randomUUID()}${ext}`;
    await writeFile(
      path.join(UPLOAD_DIR, storedName),
      Buffer.from(await resume.arrayBuffer()),
    );
    await db.insert(jobApplications).values({
      ...values,
      resumeFilename: resume.name.slice(0, 200),
      resumePath: `uploads/resumes/${storedName}`,
    });
  } catch (error) {
    console.error("Failed to save application", error);
    return {
      status: "error",
      message: "Something went wrong on our side. Please try again shortly.",
      values,
      n,
    };
  }

  return {
    status: "success",
    message: "Your application has been received. We'll review it and get back to you.",
    n,
  };
}
