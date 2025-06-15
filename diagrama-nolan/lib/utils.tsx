import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes do Tailwind CSS de forma segura e condicional.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}