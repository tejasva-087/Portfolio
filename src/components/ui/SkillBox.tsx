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
      className="border-2 py-4 px-6 rounded-xl md:w-fit w-full"
      style={{ borderColor: color }}
    >
      <h4 className="text-lg font-bold mb-2" style={{ color }}>
        {title}
      </h4>
      <ul className="flex flex-wrap justify-center items-center gap-6">
        {skills.map((skill) => (
          <li className="basis-12 flex flex-col items-center min-w-0">
            <img src={skill.icon} alt="" className="w-12" />
            <p className="truncate text-sm">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
