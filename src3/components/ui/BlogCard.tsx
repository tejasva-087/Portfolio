import { CalendarBlankIcon } from "@phosphor-icons/react";

interface BlogCardProps {
  title: string;
  description: string;
  publishDate: string;
  accentColor: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({
  title,
  description,
  publishDate,
  accentColor,
  coverImageUrl,
  coverImageAlt,
}: BlogCardProps) {
  return (
    <article
      className="max-w-120 min-w-120 border-2 rounded-2xl overflow-hidden"
      style={{ borderColor: accentColor }}
    >
      <header className="mb-4">
        <img
          src={coverImageUrl}
          alt={coverImageAlt}
          className="h-80 w-full object-cover"
        />
      </header>
      <main className="p-4 pt-0">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base sm:text-lg leading-relaxed text-black-secondary mb-4">
          {description}
        </p>
        <p className="text-base text-black-tertiary flex items-center gap-1">
          <span>
            <CalendarBlankIcon />
          </span>
          <span>{formatDate(publishDate)}</span>
        </p>
      </main>
    </article>
  );
}

export default BlogCard;
