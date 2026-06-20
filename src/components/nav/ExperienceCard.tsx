interface ExperienceCardProps {
  company: string;
  title: string;
  skills: string[];
  startDate: string;
  endDate?: string;
  color: string;
  textColor: string;
}

function getDuration(start: string, end?: string): string {
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

export function ExperienceCard({
  company,
  title,
  skills,
  startDate,
  endDate = "Present",
  color,
  textColor,
}: ExperienceCardProps) {
  return (
    <div
      className="rounded-2xl p-6 shrink-0 flex flex-col h-full min-h-[340px]"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className="font-bold text-base md:text-lg tracking-tight"
          style={{ color: textColor }}
        >
          {company}
        </span>
        <span
          className="text-xs md:text-sm px-2 py-0.5 rounded-full border"
          style={{ color: textColor, borderColor: textColor }}
        >
          {getDuration(startDate, endDate)}
        </span>
      </div>

      <p
        className="font-bold text-3xl md:text-4xl mb-5 tracking-tight"
        style={{ color: textColor }}
      >
        {title}
      </p>

      <ul className="list-none p-0 m-0 flex flex-col gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-base md:text-xl flex items-center gap-2"
            style={{ color: textColor, opacity: 0.85 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: textColor }}
            />
            {skill}
          </li>
        ))}
      </ul>

      <p
        className="text-xs md:text-sm pt-3 mt-auto border-t"
        style={{ color: textColor, borderColor: textColor, opacity: 0.7 }}
      >
        {startDate} — {endDate}
      </p>
    </div>
  );
}

export default ExperienceCard;
