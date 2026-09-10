import ProjectPageLayout from "../ui/ProjectPageLayout";
import SkillBox from "../ui/SkillBox";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

import logo from "../assets/projectLogos/trackify.svg";
import projectHeroImage from "../assets/projectImages/trackify/projectHeroImage.png";
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

function TrackifyPage() {
  return (
    <>
      <ProjectPageLayout
        logo={logo}
        logoStyle="w-fit! h-16"
        title="trackify"
        tagline="AI-Powered Smart Scheduler"
        description="Trackify is an AI-powered smart scheduler that turns plain-language task descriptions into an organized calendar. It detects conflicts and uses AI reasoning to suggest smart resolutions, making planning effortless."
        tags={[
          { tag: "#WebDev", color: "var(--color-primary)" },
          { tag: "#WebDesign", color: "var(--color-secondary)" },
          { tag: "#AI", color: "var(--color-primary-light)" },
          { tag: "#TaskManagement", color: "var(--color-tertiary)" },
        ]}
        color="var(--color-trackify)"
        // link="https://github.com/tejasva-087/trackify"
        // linkLabel="View repo"
        img={projectHeroImage}
      />
      {/* Tech stack */}
      <Section className="">
        <Heading
          type="sectionHeading"
          className="text-trackify! mb-6! md:mb-12!"
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
      {/* Iframe
      <Section>
        <Heading
          type="sectionHeading"
          className="text-trackify! mb-6! md:mb-12!"
        >
          Figma Design
        </Heading>
        <iframe
          style={{ border: "1px solid var(--color-white-tertiary)" }}
          width="100%"
          height="600px"
          src="https://embed.figma.com/design/AUoXR74KMcrL2TEfbrHaM6/Trackify?node-id=1-10&embed-host=share"
          allowFullScreen
        />
      </Section> */}
    </>
  );
}

export default TrackifyPage;
