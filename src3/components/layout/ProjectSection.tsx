import ProjectLinks from "../ui/ProjectLinks";

function ProjectSection() {
  return (
    <section
      id="projects"
      className="px-6 py-4 md:px-12 md:py-18 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-primary text-center underline underline-offset-4 tracking-widest">
        Projects
      </h2>
      <ProjectLinks
        projects={[
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
        ]}
      />
    </section>
  );
}

export default ProjectSection;
