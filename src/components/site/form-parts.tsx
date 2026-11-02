import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import type { FormState } from "@/lib/form";

export function FormField({
  id,
  label,
  error,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <Field data-invalid={error ? true : undefined} className="gap-2">
      <FieldLabel htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required && (
          <span className="text-brand" aria-hidden>
            *
          </span>
        )}
        {hint && (
          <span className="font-normal text-muted-foreground">{hint}</span>
        )}
      </FieldLabel>
      {children}
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </Field>
  );
}

/** Hidden from people, tempting to bots. Anything typed here is treated as spam. */
export function Honeypot() {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function SubmitButton({
  pending,
  children,
}: {
  pending: boolean;
  children: ReactNode;
}) {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="h-12 w-full rounded-full bg-brand px-8 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark sm:w-auto"
    >
      {pending && <Spinner />}
      {pending ? "Sending…" : children}
    </Button>
  );
}

export function FormStatus({ state }: { state: FormState }) {
  if (state.status === "success") {
    return (
      <Alert
        role="status"
        className="rounded-2xl border-green-200 bg-green-50 text-green-900 *:[svg]:text-green-600"
      >
        <CheckCircle2 />
        <AlertTitle>Thank you!</AlertTitle>
        <AlertDescription className="text-green-800">
          {state.message}
        </AlertDescription>
      </Alert>
    );
  }
  if (state.status === "error" && state.message) {
    return (
      <Alert variant="destructive" className="rounded-2xl">
        <AlertCircle />
        <AlertTitle>Couldn&apos;t send</AlertTitle>
        <AlertDescription>{state.message}</AlertDescription>
      </Alert>
    );
  }
  return null;
}

export const inputClass = "h-12 rounded-xl bg-white px-4 text-base md:text-base";
