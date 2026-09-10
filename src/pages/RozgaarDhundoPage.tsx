import Heading from "../ui/Heading";
import Section from "../ui/Section";

import logo from "../assets/projectLogos/rozgardhundo.svg";
import projectHeroImage from "../assets/projectImages/rozgardhundo/projectHeroImage.png";
import nextIcon from "../assets/stackIcons/next.svg";
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
import ProjectPageLayout from "../ui/ProjectPageLayout";
import SkillBox from "../ui/SkillBox";

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
      { name: "Next", icon: nextIcon },
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

function RozgaarDhundoPage() {
  return (
    <>
      <ProjectPageLayout
        logo={logo}
        logoStyle="w-fit! h-16"
        title="trackify"
        tagline="Connecting Local Talent with Everyday Opportunities"
        description="RozgarDhundo.com is a dynamic job-matching platform designed to bridge the gap between job seekers and local employers. Built with a focus on simplicity and accessibility, the platform streamlines the search for blue-collar, freelance, and entry-level roles, enabling quick connections, seamless skill mapping, and transparent hiring for everyday work."
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
      {/* Iframe */}
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
      </Section>
    </>
  );
}

export default RozgaarDhundoPage;
