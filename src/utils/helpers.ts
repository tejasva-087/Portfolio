export function getDuration(start: string, end?: string): string {
  const parseDate = (s: string) => {
    if (s.toLowerCase() === "present") return new Date();
    return new Date(s);
  };
  const startDate = parseDate(start);
  const endDate = end ? parseDate(end) : new Date();

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths > 0) parts.push(`${remMonths} mo${remMonths > 1 ? "s" : ""}`);

  return parts.join(" ") || "1 mo";
}
