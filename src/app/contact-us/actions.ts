"use server";

import { db } from "@/lib/db";
import { enquiries } from "@/db/schema";
import { isEmail, isPhone, text, type FormState } from "@/lib/form";

export async function submitEnquiry(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const n = prev.n + 1;

  // Honeypot: real visitors never see or fill this field.
  if (text(formData, "website")) {
    return { status: "success", message: "We'll be in touch soon.", n };
  }

  const values = {
    name: text(formData, "name", 100),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 20),
    message: text(formData, "message", 2000),
  };

  const errors: Record<string, string> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !isPhone(values.phone))
    errors.phone = "Please enter a valid phone number.";
  if (values.message.length < 10)
    errors.message = "Please write a message of at least 10 characters.";

  if (Object.keys(errors).length) {
    return { status: "error", errors, values, n };
  }

  try {
    await db.insert(enquiries).values({
      name: values.name,
      email: values.email,
      phone: values.phone || null,
      message: values.message,
    });
  } catch (error) {
    console.error("Failed to save enquiry", error);
    return {
      status: "error",
      message: "Something went wrong on our side. Please try again shortly.",
      values,
      n,
    };
  }

  return {
    status: "success",
    message: "Your message has been received and we'll be in touch soon.",
    n,
  };
}
