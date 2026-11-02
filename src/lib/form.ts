export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
  values?: Record<string, string>;
  /** Changes on every submission so forms can remount with fresh defaults. */
  n: number;
};

export const initialFormState: FormState = { status: "idle", n: 0 };

export function text(formData: FormData, key: string, max = 500) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
export const isPhone = (v: string) => /^[+\d][\d\s()-]{6,19}$/.test(v);
