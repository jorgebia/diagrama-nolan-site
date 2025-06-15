// componente de UI placeholder
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}