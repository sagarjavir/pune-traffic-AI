import { twMerge } from "tailwind-merge";

type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | Record<string, boolean | undefined>;

function flatten(inputs: ClassValue[]): string[] {
  const result: string[] = [];

  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      result.push(String(input));
      continue;
    }
    if (Array.isArray(input)) {
      result.push(...flatten(input));
      continue;
    }
    for (const [key, value] of Object.entries(input)) {
      if (value) result.push(key);
    }
  }

  return result;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(flatten(inputs).join(" "));
}
