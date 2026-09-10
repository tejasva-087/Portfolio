import ProjectPageLayout from "../ui/ProjectPageLayout";
import SkillBox from "../ui/SkillBox";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import logo from "../assets/projectLogos/memorymap.svg";
import projectHeroImage from "../assets/projectImages/memorymap/projectHeroImage.png";
import reactImage from "../assets/stackIcons/react.svg";
import tailwindcssImage from "../assets/stackIcons/tailwindcss.svg";
import tsImage from "../assets/stackIcons/ts.svg";
import htmlImage from "../assets/stackIcons/html.svg";
import cssImage from "../assets/stackIcons/css.svg";
import nodeImage from "../assets/stackIcons/node.svg";
import expressImage from "../assets/stackIcons/express.svg";
import drizzleImage from "../assets/stackIcons/drizzle.svg";
import gitImage from "../assets/stackIcons/git.svg";
import zodImage from "../assets/stackIcons/zod.svg";
import postgresqlImage from "../assets/stackIcons/postgresql.svg";
import figmaImage from "../assets/stackIcons/figma.svg";

const STACK_DETAIL = [
  {
    title: "Language",
    color: "var(--color-languages)",
    skills: [
      { name: "Typescript", icon: tsImage },
      { name: "HTML", icon: htmlImage },
      { name: "CSS", icon: cssImage },
    ],
  },
  {
    title: "Frontend",
    color: "var(--color-frontend)",
    skills: [
      { name: "React", icon: reactImage },
      { name: "Tailwind", icon: tailwindcssImage },
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
    skills: [{ name: "postgreSQL", icon: postgresqlImage }],
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
    skills: [{ name: "Figma", icon: figmaImage }],
  },
];

function MemoryMapPage() {
  return (
    <>
      <ProjectPageLayout
        logo={logo}
        title="memorymap"
        tagline="A digital travel journal."
        description="Memory Map is a digital journal that lets you save and visualize your memories directly on an interactive map. Instead of listing moments by date alone, it anchors your photos, notes, and experiences to the exact places they happened—creating a visual, map-based story of your life and travels."
        tags={[
          { tag: "#WebDev", color: "var(--color-primary)" },
          { tag: "#WebDesign", color: "var(--color-secondary)" },
          { tag: "#TravelJournal", color: "var(--color-tertiary)" },
        ]}
        color="var(--color-memorymap)"
        link="https://memorymap.space"
        linkLabel="View prototype"
        img={projectHeroImage}
      />

      {/* Tech stack */}
      <Section className="">
        <Heading
          type="sectionHeading"
          className="text-memorymap! mb-6! md:mb-12!"
        >
          TackStack used
        </Heading>
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

      {/* Iframe */}
      <Section>
        <Heading
          type="sectionHeading"
          className="text-memorymap! mb-6! md:mb-12!"
        >
          Figma Design
        </Heading>
        <iframe
          style={{ border: "1px solid var(--color-white-tertiary)" }}
          width="100%"
          height="600px"
          src="https://embed.figma.com/design/qjDEcl5JmZWnj2dpMrfnzA/MemoryMap?node-id=0-1&embed-host=share"
          allowFullScreen
        />
      </Section>
    </>
  );
}

export default MemoryMapPage;
