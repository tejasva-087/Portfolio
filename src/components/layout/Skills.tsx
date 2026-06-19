import { SkillBox } from "../ui/SkillBox";
import reactImage from "../../assets/react.svg";
import reduxImage from "../../assets/redux.svg";
import nextImage from "../../assets/next.svg";
import tailwindcssImage from "../../assets/tailwindcss.svg";
import scssImage from "../../assets/scss.svg";
import jsImage from "../../assets/js.svg";
import tsImage from "../../assets/ts.svg";
import pyImage from "../../assets/python.svg";
import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import nodeImage from "../../assets/node.svg";
import expressImage from "../../assets/express.svg";
import drizzleImage from "../../assets/drizzle.svg";
import zodImage from "../../assets/zod.webp";
import mongodbImage from "../../assets/mongodb.png";
import postgresqlImage from "../../assets/postgresql.svg";
import mysqlImage from "../../assets/mysq.svg";
import figmaImage from "../../assets/figma.svg";
import affinityImage from "../../assets/affinity.svg";
import blenderImage from "../../assets/blender.svg";
import godotImage from "../../assets/godot.svg";
import librespriteImage from "../../assets/libresprite.png";

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-4 md:px-12 md:py-18 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-primary text-center underline underline-offset-4 tracking-widest">
        My Expertise
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        <SkillBox
          title="Languages"
          color="var(--color-primary)"
          skills={[
            { name: "Javascript", icon: jsImage },
            { name: "Typescript", icon: tsImage },
            { name: "Python", icon: pyImage },
            { name: "HTML", icon: htmlImage },
            { name: "CSS", icon: cssImage },
          ]}
        />
        <SkillBox
          title="Frontend"
          color="var(--color-primary)"
          skills={[
            { name: "React", icon: reactImage },
            { name: "Next", icon: nextImage },
            { name: "Redux", icon: reduxImage },
            { name: "Tailwind", icon: tailwindcssImage },
            { name: "Sass", icon: scssImage },
          ]}
        />
        <SkillBox
          title="Backend"
          color="var(--color-primary)"
          skills={[
            { name: "Node.js", icon: nodeImage },
            { name: "Express", icon: expressImage },
          ]}
        />
        <SkillBox
          title="Database"
          color="var(--color-primary)"
          skills={[
            { name: "MongoDB", icon: mongodbImage },
            { name: "postgreSQL", icon: postgresqlImage },
            { name: "mySQL", icon: mysqlImage },
          ]}
        />
        <SkillBox
          title="Libraries & Tools"
          color="var(--color-primary)"
          skills={[
            { name: "Drizzle", icon: drizzleImage },
            { name: "Zod", icon: zodImage },
          ]}
        />
        <SkillBox
          title="Design & UI/UX"
          color="var(--color-primary)"
          skills={[
            { name: "Figma", icon: figmaImage },
            { name: "Affinity", icon: affinityImage },
            { name: "Blender", icon: blenderImage },
          ]}
        />
        <SkillBox
          title="Game development"
          color="var(--color-primary)"
          skills={[
            { name: "Godot", icon: godotImage },
            { name: "Libresprite", icon: librespriteImage },
          ]}
        />
      </div>
    </section>
  );
}

export default Skills;
