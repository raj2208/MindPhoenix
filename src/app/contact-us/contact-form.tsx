"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormStatus,
  Honeypot,
  SubmitButton,
  inputClass,
} from "@/components/site/form-parts";
import { initialFormState } from "@/lib/form";
import { submitEnquiry } from "./actions";

export function ContactForm() {
  const [state, action, pending] = useActionState(
    submitEnquiry,
    initialFormState,
  );
  const v = state.values;
  const e = state.errors;

  return (
    <form
      key={state.n}
      action={action}
      noValidate
      className="relative flex flex-col gap-5"
    >
      <FormStatus state={state} />
      <Honeypot />
      <FormField id="name" label="Name" required error={e?.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          defaultValue={v?.name}
          aria-invalid={!!e?.name}
          aria-describedby={e?.name ? "name-error" : undefined}
          className={inputClass}
        />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="email" label="Email" required error={e?.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v?.email}
            aria-invalid={!!e?.email}
            aria-describedby={e?.email ? "email-error" : undefined}
            className={inputClass}
          />
        </FormField>
        <FormField id="phone" label="Phone" error={e?.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v?.phone}
            aria-invalid={!!e?.phone}
            aria-describedby={e?.phone ? "phone-error" : undefined}
            className={inputClass}
          />
        </FormField>
      </div>
      <FormField id="message" label="Message" required error={e?.message}>
        <Textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={v?.message}
          aria-invalid={!!e?.message}
          aria-describedby={e?.message ? "message-error" : undefined}
          className="rounded-xl bg-white px-4 py-3 text-base"
        />
      </FormField>
      <SubmitButton pending={pending}>Send message</SubmitButton>
    </form>
  );
}
