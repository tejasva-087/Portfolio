import Heading from "../../ui/Heading";
import ProjectLinks from "../../ui/ProjectLinks";
import Section from "../../ui/Section";

const PROJECT_DETAILS = [
  {
    title: "Memory map",
    description: "A digital travel journal.",
    to: "/memory-map",

    color: "var(--color-memorymap)",
  },
  {
    title: "Trackify",
    description: "Manage your time efficiently.",
    to: "/trackify",

    color: "var(--color-trackify)",
  },
  {
    title: "E-commerce store",
    description: "A clothing brand.",
    to: "/tri-ink",

    color: "var(--color-triink)",
  },
  {
    title: "rozgardhundo.com",
    description: "Connecting people to local jobs.",
    to: "/rozgar-dhundo",

    color: "var(--color-rozgardhundo)",
  },
  {
    title: "Tiny siege",
    description: "A strategy based strategy game.",
    to: "/tri-ink",
    color: "var(--color-tinysiege)",
  },
];

function ProjectSection() {
  return (
    <Section id="projects-section">
      <Heading type="SectionHeading">Projects</Heading>

      <ProjectLinks projects={PROJECT_DETAILS} />
    </Section>
  );
}

export default ProjectSection;
