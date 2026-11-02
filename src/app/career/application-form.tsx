"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
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
      className="relative flex flex-col gap-5"
    >
      <FormStatus state={state} />
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="firstName" label="First name" required error={e?.firstName}>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            defaultValue={v?.firstName}
            aria-invalid={!!e?.firstName}
            aria-describedby={e?.firstName ? "firstName-error" : undefined}
            className={inputClass}
          />
        </FormField>
        <FormField id="lastName" label="Last name" required error={e?.lastName}>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            defaultValue={v?.lastName}
            aria-invalid={!!e?.lastName}
            aria-describedby={e?.lastName ? "lastName-error" : undefined}
            className={inputClass}
          />
        </FormField>
      </div>
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
        <FormField id="phone" label="Phone" required error={e?.phone}>
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
      <FormField id="position" label="Applying for" required error={e?.position}>
        <Select name="position" defaultValue={v?.position ?? null}>
          <SelectTrigger
            id="position"
            aria-invalid={!!e?.position}
            aria-describedby={e?.position ? "position-error" : undefined}
            className="h-12 w-full rounded-xl bg-white px-4 text-base"
          >
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent className="max-w-[calc(100vw-2rem)]">
            {positions.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="resume" label="Resume" hint=" (PDF, DOC or DOCX, up to 5 MB)" required error={e?.resume}>
        <Input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          aria-invalid={!!e?.resume}
          aria-describedby={e?.resume ? "resume-error" : undefined}
          className="h-12 rounded-xl bg-white px-3 py-2.5 text-base file:mr-3 file:rounded-full file:bg-accent file:px-4 file:py-1 file:text-sm file:font-semibold file:text-accent-foreground"
        />
      </FormField>
      <SubmitButton pending={pending}>Submit application</SubmitButton>
    </form>
  );
}
