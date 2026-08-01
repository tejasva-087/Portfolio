import Heading from "../../ui/Heading";
import HighlightedText from "../../ui/HighlightedText";
import Section from "../../ui/Section";

import heroImage from "../../assets/heroImage.png";
import Blockquote from "../../ui/Blockquote";

function AboutMeSection() {
  return (
    <Section id="about-me-section">
      <Heading type="SectionHeading">About Me</Heading>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12">
        {/* Text */}
        <div className="flex-1">
          {/* TITLE */}
          <Heading
            type="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-medium flex flex-col mb-8 leading-tight"
          >
            <span>I build things &</span>
            <span>
              I make them look <span className="text-primary">good</span>
            </span>
          </Heading>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary">
            <HighlightedText color="var(--color-secondary)">
              Fullstack dev
            </HighlightedText>
            ,{" "}
            <HighlightedText color="var(--color-primary-light)">
              UI/UX designer
            </HighlightedText>
            , and{" "}
            <HighlightedText color="var(--color-tertiary)">
              aspiring game dev
            </HighlightedText>{" "}
            — I spend my days turning ideas into interfaces and my evenings
            trying to figure out why my game's physics are broken. When I'm not
            staring at a screen, I'm out exploring nature and wildlife — because
            sometimes the best debugging happens away from the keyboard.
            Energetic by default, caffeinated by necessity.
          </p>
        </div>

        {/* Image */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* Quote */}
      <Blockquote>
        Whether it's writing code, designing flows, or architecting my next side
        project — I approach everything like a strategy game. Think first,
        execute hard, iterate until it's clean.
      </Blockquote>
    </Section>
  );
}

export default AboutMeSection;
