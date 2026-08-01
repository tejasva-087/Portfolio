import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import SkillBox from "../../ui/SkillBox";

import reactImage from "../../assets/stackIcons/react.svg";
import reduxImage from "../../assets/stackIcons/redux.svg";
import nextImage from "../../assets/stackIcons/next.svg";
import tailwindcssImage from "../../assets/stackIcons/tailwindcss.svg";
import scssImage from "../../assets/stackIcons/scss.svg";
import jsImage from "../../assets/stackIcons/js.svg";
import tsImage from "../../assets/stackIcons/ts.svg";
import pyImage from "../../assets/stackIcons/python.svg";
import htmlImage from "../../assets/stackIcons/html.svg";
import cssImage from "../../assets/stackIcons/css.svg";
import nodeImage from "../../assets/stackIcons/node.svg";
import expressImage from "../../assets/stackIcons/express.svg";
import drizzleImage from "../../assets/stackIcons/drizzle.svg";
import gitImage from "../../assets/stackIcons/git.svg";
import zodImage from "../../assets/stackIcons/zod.svg";
import mongodbImage from "../../assets/stackIcons/mongodb.svg";
import postgresqlImage from "../../assets/stackIcons/postgresql.svg";
import mysqlImage from "../../assets/stackIcons/mysql.svg";
import figmaImage from "../../assets/stackIcons/figma.svg";
import affinityImage from "../../assets/stackIcons/affinity.svg";
import blenderImage from "../../assets/stackIcons/blender.svg";
import godotImage from "../../assets/stackIcons/godot.svg";
import librespriteImage from "../../assets/stackIcons/libresprite.svg";

const STACK_DETAIL = [
  {
    title: "Language",
    color: "var(--color-languages)",
    skills: [
      { name: "Javascript", icon: jsImage },
      { name: "Typescript", icon: tsImage },
      { name: "Python", icon: pyImage },
      { name: "HTML", icon: htmlImage },
      { name: "CSS", icon: cssImage },
    ],
  },
  {
    title: "Frontend",
    color: "var(--color-frontend)",
    skills: [
      { name: "React", icon: reactImage },
      { name: "Next", icon: nextImage },
      { name: "Redux", icon: reduxImage },
      { name: "Tailwind", icon: tailwindcssImage },
      { name: "Sass", icon: scssImage },
    ],
  },
  {
    title: "Backend",
    color: "var(--color-backend)",
    skills: [
      { name: "Node.js", icon: nodeImage },
      { name: "Express", icon: expressImage },
    ],
  },
  {
    title: "Database",
    color: "var(--color-database)",
    skills: [
      { name: "MongoDB", icon: mongodbImage },
      { name: "postgreSQL", icon: postgresqlImage },
      { name: "mySQL", icon: mysqlImage },
    ],
  },
  {
    title: "Libraries & Tools",
    color: "var(--color-libraries)",
    skills: [
      { name: "Drizzle", icon: drizzleImage },
      { name: "Zod", icon: zodImage },
      { name: "git", icon: gitImage },
    ],
  },
  {
    title: "Design & UI/UX",
    color: "var(--color-design)",
    skills: [
      { name: "Figma", icon: figmaImage },
      { name: "Affinity", icon: affinityImage },
      { name: "Blender", icon: blenderImage },
    ],
  },
  {
    title: "Game development",
    color: "var(--color-game)",
    skills: [
      { name: "Godot", icon: godotImage },
      { name: "Libresprite", icon: librespriteImage },
    ],
  },
];

function SkillsSection() {
  return (
    <Section id="skills-section">
      <Heading type="SectionHeading"> My Expertise</Heading>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {STACK_DETAIL.map((details, i) => {
          return (
            <SkillBox
              key={i}
              title={details.title}
              color={details.color}
              skills={details.skills}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default SkillsSection;
