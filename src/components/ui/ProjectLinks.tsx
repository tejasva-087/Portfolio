import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  href: string;
  status?: "live" | "wip";
  color: string;
}

interface ProjectLinksProps {
  projects: Project[];
}

function ProjectLinks({ projects }: ProjectLinksProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    i: number,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHovered(i);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="w-full">
      {projects.map((project, i) => (
        <a
          key={project.title}
          href={project.href}
          target={project.status === "wip" ? "" : "_black"}
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleMouseEnter(i, e)}
          onMouseLeave={() => setHovered(null)}
          onMouseMove={handleMouseMove}
          className="relative block border-t border-black-tertiary last:border-b py-4 px-1.5 sm:px-6 sm:py-4"
        >
          <div className="flex items-center justify-between relative z-10">
            <div className="flex flex-col items-baseline gap-2">
              <span
                className="text-3xl md:text-5xl font-bold tracking-tight"
                style={{ color: project.color }}
              >
                {project.title}
              </span>

              <span className="text-base md:text-xl text-black-tertiary tracking-wide">
                {project.description}
              </span>
            </div>

            <div
              className="shrink-0 relative w-12 h-12 rounded-full border md:flex items-center justify-center overflow-hidden hidden"
              style={{ borderColor: project.color }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: project.color }}
              />

              <motion.div className="relative z-10">
                <ArrowIcon active={hovered === i} color={project.color} />
              </motion.div>
            </div>
          </div>

          <AnimatePresence>
            {hovered === i && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.4,
                  x: cursor.x - 36,
                  y: cursor.y - 36,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: cursor.x - 36,
                  y: cursor.y - 36,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.4,
                  transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
                }}
                transition={{
                  x: { type: "spring", stiffness: 40, damping: 16, mass: 0.9 },
                  y: { type: "spring", stiffness: 40, damping: 16, mass: 0.9 },
                  opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }}
                className="pointer-events-none absolute top-0 left-0 z-20 w-18 h-18 rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  backgroundColor: project.color,
                }}
              >
                {project.status === "wip" ? (
                  <span className="text-[10px] font-bold uppercase tracking-wide text-black-primary leading-tight">
                    Work in
                    <br />
                    progress
                  </span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white-primary leading-tight px-1 wrap-break-word">
                    visit
                    <br /> site
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      ))}
    </div>
  );
}

function ArrowIcon({ color, active }: { color: string; active: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "var(--color-white-primary)" : color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "stroke 0.5s ease" }}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default ProjectLinks;
