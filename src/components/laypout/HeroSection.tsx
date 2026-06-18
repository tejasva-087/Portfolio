import { useEffect, useRef } from "react";

import vscodeLogo from "../../assets/vscode.svg";
import figmaLogo from "../../assets/figma.svg";
import dockerLogo from "../../assets/docker.png";
import postgresqlLogo from "../../assets/postgresql.svg";
import postmanLogo from "../../assets/postman.svg";
import githubLogo from "../../assets/github.svg";
import godotLogo from "../../assets/godot.svg";
import blenderLogo from "../../assets/blender.svg";
import affinityLogo from "../../assets/affinity.svg";
import mongodbLogo from "../../assets/mongodb.png";
import {
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

const ICONS = [
  // Left ⚡
  { left: "14%", top: "8%", size: 60, src: vscodeLogo, alt: "VSCode" },
  { left: "6%", top: "28%", size: 56, src: figmaLogo, alt: "Figma" },
  { left: "10%", top: "50%", size: 62, src: mongodbLogo, alt: "MongoDB" },
  { left: "4%", top: "70%", size: 58, src: godotLogo, alt: "Godot" },
  { left: "16%", top: "88%", size: 54, src: githubLogo, alt: "GitHub" },
  // Right ⚡
  { left: "86%", top: "8%", size: 58, src: dockerLogo, alt: "Docker" },
  { left: "94%", top: "28%", size: 62, src: postmanLogo, alt: "Postman" },
  { left: "90%", top: "50%", size: 56, src: postgresqlLogo, alt: "PostgreSQL" },
  { left: "96%", top: "70%", size: 60, src: affinityLogo, alt: "affinity" },
  { left: "84%", top: "88%", size: 54, src: blenderLogo, alt: "VSCode" },
] as const;

const SOCIALS = [
  {
    icon: LinkedinLogoIcon,
    href: "https://www.linkedin.com/in/tejasavkhandelwal/",
    label: "LinkedIn",
  },
  {
    icon: InstagramLogoIcon,
    href: "https://www.instagram.com/tejuss.official/",
    label: "Instagram",
  },
  {
    icon: EnvelopeIcon,
    href: "mailto:tejasva.khandelwal2009@gmail.com",
    label: "Email",
  },
  {
    icon: PhoneIcon,
    href: "tel:+919479827658",
    label: "Phone",
  },
] as const;

const STIFFNESS = 0.06;
const DAMPING = 0.82;
const MAX_DIST = 18;

function HeroSection() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const springs = useRef(ICONS.map(() => ({ cx: 0, cy: 0, vx: 0, vy: 0 })));
  const rafRef = useRef<number>(0);

  // Spring animation loop
  useEffect(() => {
    const tick = () => {
      springs.current.forEach((s, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        const depth = 0.012 + (i % 3) * 0.006;
        const tx = Math.max(
          -MAX_DIST,
          Math.min(MAX_DIST, target.current.x * depth),
        );
        const ty = Math.max(
          -MAX_DIST,
          Math.min(MAX_DIST, target.current.y * depth),
        );

        const ax = (tx - s.cx) * STIFFNESS;
        const ay = (ty - s.cy) * STIFFNESS;
        s.vx = s.vx * DAMPING + ax;
        s.vy = s.vy * DAMPING + ay;
        s.cx += s.vx;
        s.cy += s.vy;

        el.style.transform = `translate(${s.cx.toFixed(2)}px, ${s.cy.toFixed(2)}px)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX - window.innerWidth / 2;
      target.current.y = e.clientY - window.innerHeight / 2;
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative w-full min-h-0 md:min-h-[75vh] flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 py-12 md:py-16 text-center overflow-hidden">
      {/* Hero text */}
      <h1
        className="flex flex-col gap-1 z-10
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        <span>Hello, I am</span>
        <span className="font-elegant italic text-primary leading-tight">
          Tejasav Khandelwal
        </span>
      </h1>

      <h3
        className="z-10 text-black-primary text-center
                     text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        <span
          style={{
            background:
              "linear-gradient(transparent 60%, var(--color-secondary) 60%)",
            padding: "0 2px",
          }}
        >
          Full stack developer
        </span>
        {" & "}
        <span
          style={{
            background:
              "linear-gradient(transparent 60%, var(--color-primary-light) 60%)",
            padding: "0 2px",
          }}
        >
          UI/UX Designer
        </span>
      </h3>

      {/* Floating icons — hidden below md to avoid crowding on small screens */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <ul className="w-full h-full relative">
          {ICONS.map((icon, i) => {
            // Scale icon size responsively using vw-based sizing
            const responsiveSize = `clamp(28px, ${icon.size * 0.07}vw, ${icon.size}px)`;
            return (
              <li
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="absolute"
                style={{ left: icon.left, top: icon.top }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{ width: responsiveSize, height: responsiveSize }}
                  className="opacity-80"
                />
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="flex items-center gap-3">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-black-tertiary/20 text-black-tertiary hover:text-primary hover:border-primary transition-colors duration-200 cursor-pointer text-3xl"
            >
              <Icon weight="light" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HeroSection;
