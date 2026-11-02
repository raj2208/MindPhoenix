import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { FormState } from "@/lib/form";

export function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
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
      {pending ? "Sending…" : children}
    </Button>
  );
}

export function FormStatus({ state }: { state: FormState }) {
  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-2xl bg-green-50 p-5 text-green-900 ring-1 ring-green-200"
      >
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
        <p className="font-medium">{state.message}</p>
      </div>
    );
  }
  if (state.status === "error" && state.message) {
    return (
      <div
        role="alert"
        className="rounded-2xl bg-red-50 p-5 font-medium text-red-900 ring-1 ring-red-200"
      >
        {state.message}
      </div>
    );
  }
  return null;
}

export const inputClass = "h-12 rounded-xl bg-white px-4 text-base";
