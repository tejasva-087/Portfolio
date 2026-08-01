import {
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import HighlightedText from "../../ui/HighlightedText";
import FloatingParallaxLayer from "../../ui/FloatingParallaxLayer";

import vscodeLogo from "../../assets/stackIcons/vscode.svg";
import figmaLogo from "../../assets/stackIcons/figma.svg";
import dockerLogo from "../../assets/stackIcons/docker.svg";
import postgresqlLogo from "../../assets/stackIcons/postgresql.svg";
import postmanLogo from "../../assets/stackIcons/postman.svg";
import githubLogo from "../../assets/stackIcons/github.svg";
import godotLogo from "../../assets/stackIcons/godot.svg";
import blenderLogo from "../../assets/stackIcons/blender.svg";
import affinityLogo from "../../assets/stackIcons/affinity.svg";
import mongodbLogo from "../../assets/stackIcons/mongodb.svg";

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

function HeroSection() {
  return (
    <Section
      className="relative w-full min-h-0 md:min-h-[85vh] flex flex-col items-center justify-center gap-2 sm:gap-6 md:gap-8 px-4 py-12 md:py-16 text-center overflow-hidden"
      id="hero-section"
    >
      {/* Heading */}
      <Heading className="flex flex-col gap-1 z-10">
        <span>Hello, I am</span>
        <span className="font-elegant italic text-primary leading-tight">
          Tejasav Khandelwal
        </span>
      </Heading>

      {/* Work */}
      <Heading type="h3" className="z-10 text-black-primary text-center">
        <HighlightedText color="var(--color-secondary)">
          Full stack developer
        </HighlightedText>{" "}
        &{" "}
        <HighlightedText color="var(--color-primary-light)">
          UI/UX Designer
        </HighlightedText>
      </Heading>

      {/* Socials */}
      <ul className="flex items-center gap-3 mt-2">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              className="flex items-center justify-center border border-black-tertiary/20 text-black-tertiary hover:text-primary hover:border-primary transition-colors duration-200 cursor-pointer text-xl p-0.5 rounded-sm md:text-2xl lg:text-3xl md:rounded-lg"
            >
              <Icon weight="light" />
            </a>
          </li>
        ))}
      </ul>

      {/* Hovering icons */}
      <FloatingParallaxLayer
        items={ICONS}
        className="hidden md:block"
        renderItem={(icon) => {
          const responsiveSize = `clamp(28px, ${icon.size * 0.07}vw, ${icon.size}px)`;
          return (
            <img
              src={icon.src}
              alt={icon.alt}
              style={{ width: responsiveSize, height: responsiveSize }}
              className="opacity-80"
            />
          );
        }}
      />
    </Section>
  );
}

export default HeroSection;
