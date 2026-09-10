export function getDuration(start: string, end?: string): string {
  const parse = (s: string) =>
    s.toLowerCase() === "present" ? new Date() : new Date(s);
  const startDate = parse(start);
  const endDate = end ? parse(end) : new Date();

  const months = Math.max(
    0,
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()),
  );

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths) parts.push(`${remMonths} mos`);

  return parts.join(" ") || "1 mos";
}

export function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
