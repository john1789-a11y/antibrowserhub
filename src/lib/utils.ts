export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getRatingLabel(rating: number): string {
  if (rating >= 4.5) return "Excellent";
  if (rating >= 4.0) return "Very Good";
  if (rating >= 3.5) return "Good";
  if (rating >= 3.0) return "Average";
  return "Below Average";
}

export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "var(--color-emerald)";
  if (rating >= 4.0) return "var(--color-cyan)";
  if (rating >= 3.5) return "var(--color-amber)";
  return "var(--color-rose)";
}
