import { getDuration } from "../utils/helpers";

interface ExperienceCardProps {
  company: string;
  title: string;
  skills: string[];
  startDate: string;
  endDate?: string;
  color: string;
  textColor: string;
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
      className="rounded-2xl sm:p-6 shrink-0 flex flex-col h-full min-h-85 w-70 sm:w-90 p-4"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className="font-bold text-sm md:text-lg tracking-tight"
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
              className="w-1.5 h-1.5 rounded-full shrink-0"
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
