import ExperienceCard from "../nav/ExperienceCard";

function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-4 md:px-12 md:py-18 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-primary text-center underline underline-offset-4 tracking-widest">
        Experience
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ExperienceCard
          company="Kshetra consulting"
          title="Full stack developer"
          skills={["Next.js", "Typescript", "Figma"]}
          startDate="May 2026"
          color="#704ee7"
          textColor="#faf7f2"
        />
        <ExperienceCard
          company="Witwaves"
          title="UI/UX Designer"
          skills={[
            "Figma",
            "User Research",
            "Design Systems",
            "Wireframing & Prototyping",
          ]}
          startDate="Oct 2024"
          endDate="Mar 2025"
          color="#ffd35f"
          textColor="#2e2e2e"
        />
        <ExperienceCard
          company="Mozilla Firefox club"
          title="Frontend Developer"
          skills={["React.js", "Javascript", "Figma"]}
          startDate="Mar 2024"
          endDate="Mar 2025"
          color="#95d5b2"
          textColor="#2e2e2e"
        />
      </div>
    </section>
  );
}

export default Experience;
