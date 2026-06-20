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
            description: "A digital travel journal. (BETA VERSION)",
            href: "https://memorymap.space",
            status: "live",
            color: "var(--color-memorymap)",
          },
          {
            title: "Trackify",
            description: "Manage your money efficiently. (WORK IN PROGRESS)",
            href: "/",
            status: "wip",
            color: "var(--color-trackify)",
          },
          {
            title: "Tiny siege",
            description:
              "A strategy based tower defense game. (WORK IN PROGRESS)",
            href: "/",
            status: "wip",
            color: "var(--color-tinysiege)",
          },
          {
            title: "rozgardhundo.com",
            description: "Connecting people to local jobs. (WORK IN PROGRESS)",
            href: "/",
            status: "wip",
            color: "var(--color-rozgardhundo)",
          },
        ]}
      />
    </section>
  );
}

export default ProjectSection;
