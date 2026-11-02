"use client";

import { useActionState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Field,
  FormStatus,
  Honeypot,
  SubmitButton,
  inputClass,
} from "@/components/site/form-parts";
import { initialFormState } from "@/lib/form";
import { submitApplication } from "./actions";

export function ApplicationForm({ positions }: { positions: string[] }) {
  const [state, action, pending] = useActionState(
    submitApplication,
    initialFormState,
  );
  const v = state.values;
  const e = state.errors;

  return (
    <form
      key={state.n}
      action={action}
      noValidate
      className="relative space-y-5"
    >
      <FormStatus state={state} />
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" required error={e?.firstName}>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            defaultValue={v?.firstName}
            aria-invalid={!!e?.firstName}
            aria-describedby={e?.firstName ? "firstName-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="lastName" label="Last name" required error={e?.lastName}>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            defaultValue={v?.lastName}
            aria-invalid={!!e?.lastName}
            aria-describedby={e?.lastName ? "lastName-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" required error={e?.email}>
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
        </Field>
        <Field id="phone" label="Phone" required error={e?.phone}>
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
        </Field>
      </div>
      <Field id="position" label="Applying for" required error={e?.position}>
        <div className="relative">
          <select
            id="position"
            name="position"
            defaultValue={v?.position ?? ""}
            aria-invalid={!!e?.position}
            aria-describedby={e?.position ? "position-error" : undefined}
            className="h-12 w-full appearance-none rounded-xl border border-input bg-white px-4 pr-10 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive"
          >
            <option value="" disabled>
              Select a position
            </option>
            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
        </div>
      </Field>
      <Field id="resume" label="Resume (PDF, DOC or DOCX, up to 5 MB)" required error={e?.resume}>
        <Input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          aria-invalid={!!e?.resume}
          aria-describedby={e?.resume ? "resume-error" : undefined}
          className="h-12 rounded-xl bg-white px-3 py-2.5 text-base file:mr-3 file:rounded-full file:bg-accent file:px-4 file:py-1 file:text-sm file:font-semibold file:text-accent-foreground"
        />
      </Field>
      <SubmitButton pending={pending}>Submit application</SubmitButton>
    </form>
  );
}
