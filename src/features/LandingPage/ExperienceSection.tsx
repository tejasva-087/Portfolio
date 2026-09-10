import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import ExperienceCard from "../../ui/ExperienceCard";
import Carousel from "../../ui/Carousel";

const EXPERIENCE_DETAILS = [
  {
    company: "Triink MNS",
    title: "Freelance Full Stack Engineer",
    skills: ["MERN Stack", "Figma", "E-commerce"],
    startDate: "Aug 2026",
    color: "var(--color-primary)",
    textColor: "var(--color-white-primary)",
  },
  {
    company: "Kshetra consulting",
    title: "Full stack developer",
    skills: ["Next.js", "Typescript", "Figma"],
    startDate: "May 2026",
    endDate: "June 2026",
    color: "var(--color-primary-light)",
    textColor: "var(--color-black-secondary)",
  },

  {
    company: "Witwaves",
    title: "UI/UX Designer",
    skills: [
      "Figma",
      "User Research",
      "Design Systems",
      "Wireframe & Prototyping",
    ],
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    color: "var(--color-secondary)",
    textColor: "var(--color-black-secondary)",
  },
  {
    company: "Mozilla Firefox club",
    title: "Frontend Developer",
    skills: ["React.js", "Javascript", "Figma"],
    startDate: "Mar 2024",
    endDate: "Mar 2025",
    color: "var(--color-tertiary)",
    textColor: "var(--color-black-secondary)",
  },
];

function ExperienceSection() {
  return (
    <Section id="experience-section">
      <Heading type="sectionHeading">Experience</Heading>
      <Carousel gap={16}>
        {EXPERIENCE_DETAILS.map((detail, i) => {
          return (
            <ExperienceCard
              key={i}
              company={detail.company}
              title={detail.title}
              skills={detail.skills}
              startDate={detail.startDate}
              endDate={detail.endDate}
              color={detail.color}
              textColor={detail.textColor}
            />
          );
        })}
      </Carousel>
    </Section>
  );
}

export default ExperienceSection;
