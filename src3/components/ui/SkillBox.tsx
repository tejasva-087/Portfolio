interface Skill {
  name: string;
  icon: string; // URL or imported asset
}

interface SkillBoxProps {
  title: string;
  color: string; // e.g. "var(--color-primary)"
  skills: Skill[];
}

export function SkillBox({ title, color, skills }: SkillBoxProps) {
  return (
    <div
      className="rounded-xl w-fit sm:border-2 border-0 sm:py-4 sm:px-6 p-2"
      style={{ borderColor: color }}
    >
      <h4 className="text-lg font-bold mb-2 hidden sm:block" style={{ color }}>
        {title}
      </h4>
      <ul className="flex sm:flex-wrap justify-center items-center gap-6">
        {skills.map((skill) => (
          <li
            className="basis-12 flex flex-col items-center min-w-0"
            key={skill.name}
          >
            <img src={skill.icon} alt="" className="w-12" />
            <p className="truncate text-xs sm:text-sm">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
