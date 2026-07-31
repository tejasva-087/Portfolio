import { ArrowRightIcon } from "@phosphor-icons/react";
import logo from "../../assets/Memorymap.svg";
import { SkillBox } from "../ui/SkillBox";

import reactImage from "../../assets/react.svg";
import tailwindcssImage from "../../assets/tailwindcss.svg";
import tsImage from "../../assets/ts.svg";
import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import nodeImage from "../../assets/node.svg";
import expressImage from "../../assets/express.svg";
import drizzleImage from "../../assets/drizzle.svg";
import gitImage from "../../assets/git.svg";
import zodImage from "../../assets/zod.webp";
import postgresqlImage from "../../assets/postgresql.svg";
import figmaImage from "../../assets/figma.svg";
import BlogCard from "../ui/BlogCard";

import memorymap1 from "../../assets/memorymap-1.png";
import memorymap2 from "../../assets/memorymap-2.png";
import memorymap3 from "../../assets/memorymap-3.jpeg";
import memorymap4 from "../../assets/memorymap-4.png";
import memorymap5 from "../../assets/memorymap-5.jpg";

function MemoryMap() {
  return (
    <>
      <main className="grid grid-cols-1 grid-rows-[auto_400px] lg:grid-rows-1 lg:grid-cols-2 gap-4 items-center mt-6 p-6">
        <div className="">
          <img src={logo} alt="Memorymap logo" className="w-32 sm:w-48" />
          <h1 className=" text-4xl sm:text-5xl md:text-6xl mb-4">
            A digital travel journal.
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary">
            Memory Map is a map-centric digital journal that allows users to
            record, organize, and visualize personal memories dynamically tied
            to geographic locations.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary mb-4">
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-primary-light) 60%)",
                padding: "0 2px",
              }}
            >
              Interactive,
            </span>
            ,{" "}
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-secondary) 60%)",
                padding: "0 2px",
              }}
            >
              Location-based
            </span>{" "}
            and{" "}
            <span
              style={{
                background:
                  "linear-gradient(transparent 60%, var(--color-tertiary) 60%)",
                padding: "0 2px",
              }}
            >
              Journaling
            </span>
          </p>
          <p className="rounded-md">
            <span>Check out the </span>
            <a
              className="text-memorymap border-b border-memorymap inline-flex items-center gap-0.5 cursor-pointer"
              href="https://memorymap.space"
              target="_black"
            >
              <span>Test version</span>
              <ArrowRightIcon />
            </a>
          </p>
        </div>
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "100%",
          }}
          src="https://embed.figma.com/design/qjDEcl5JmZWnj2dpMrfnzA/MemoryMap?node-id=0-1&embed-host=share"
          allowFullScreen
        />
      </main>

      <section className="mt-24">
        <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-memorymap text-center underline underline-offset-4 tracking-widest">
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <SkillBox
            title="Languages"
            color="var(--color-languages)"
            skills={[
              { name: "Javascript", icon: tsImage },
              { name: "HTML", icon: htmlImage },
              { name: "CSS", icon: cssImage },
            ]}
          />
          <SkillBox
            title="Frontend"
            color="var(--color-frontend)"
            skills={[
              { name: "React", icon: reactImage },
              { name: "Tailwindcss", icon: tailwindcssImage },
            ]}
          />
          <SkillBox
            title="Backend"
            color="var(--color-backend)"
            skills={[
              { name: "Node.js", icon: nodeImage },
              { name: "Express", icon: expressImage },
            ]}
          />
          <SkillBox
            title="Database"
            color="var(--color-database)"
            skills={[{ name: "postgreSQL", icon: postgresqlImage }]}
          />
          <SkillBox
            title="Libraries & Tools"
            color="var(--color-libraries)"
            skills={[
              { name: "Drizzle", icon: drizzleImage },
              { name: "Zod", icon: zodImage },
              { name: "git", icon: gitImage },
            ]}
          />
          <SkillBox
            title="Design & UI/UX"
            color="var(--color-design)"
            skills={[{ name: "Figma", icon: figmaImage }]}
          />
        </div>
      </section>

      <section className="mt-24 p-4">
        <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-memorymap text-center underline underline-offset-4 tracking-widest">
          Developer blog
        </h2>
        <div className="always-scroll flex gap-4 pb-4">
          <BlogCard
            title="Strategic Pause: Skill Growth, Internship Wrap-Up, and Launch Goals"
            description="Building complex applications often requires knowing when to write code and when to step back and expand your technical toolset. Active development on MemoryMap is temporarily paused to focus on deep-dive learning, ensuring the final implementation meets higher engineering and architectural standards."
            publishDate="2026-07-18"
            accentColor="var(--color-memorymap)"
            coverImageUrl={memorymap5}
          />
          <BlogCard
            title="Decoding Cloud Deployment & Refining React Architecture"
            description="Navigating deployment strategies can be one of the trickiest hurdles in full-stack development. Unblocking that complexity required stepping back from code to focus on cloud infrastructure fundamentals and advanced React architecture. To clear up confusion around cloud hosting and infrastructure, diving into the AWS Certified Cloud Practitioner curriculum provided crucial clarity on application deployment strategies."
            publishDate="2026-04-12"
            accentColor="var(--color-memorymap)"
            coverImageUrl={memorymap5}
          />
          <BlogCard
            title="Bringing It All Together: Backend Completion & UI Redesign"
            description="Building software rarely follows a linear path—academic commitments and unexpected pauses can easily disrupt momentum. However, maintaining steady iteration has brought MemoryMap to its biggest development milestone yet: a fully functional backend paired with a comprehensive UI overhaul."
            publishDate="2026-04-5"
            accentColor="var(--color-memorymap)"
            coverImageUrl={memorymap4}
          />
          <BlogCard
            title="Transitioning to the Server: MemoryMap Backend Architecture & Auth"
            description="With the client-side experience established, work shifted toward building a robust, production-grade backend for MemoryMap. This milestone focuses on user authentication, data integrity, and establishing a scalable system architecture."
            publishDate="2026-03-1"
            accentColor="var(--color-memorymap)"
            coverImageUrl={memorymap3}
          />
          <BlogCard
            title="Evolution of MemoryMap: Refining the Experience"
            description="Following this core philosophy, the focus shifted from proving the initial core concept to refining the overall user experience. After deploying the first iteration, a multi-week redesign focused on improving interface hierarchy, interaction flows, and visual polish."
            publishDate="2026-02-21"
            accentColor="var(--color-memorymap)"
            coverImageUrl={memorymap2}
          />
          <BlogCard
            title="Building MemoryMap: A Map-Centric Journal for Travel Memories"
            description="Travel memories often get buried in crowded photo galleries and forgotten drives. To solve this, I started working on MemoryMap—a web application designed to help users visually preserve and organize their travel stories on an interactive map."
            publishDate="2026-01-15"
            accentColor="var(--color-memorymap)"
            coverImageUrl={memorymap1}
          />
        </div>
      </section>
    </>
  );
}

export default MemoryMap;
