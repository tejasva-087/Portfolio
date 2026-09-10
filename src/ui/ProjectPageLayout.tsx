import Heading from "./Heading";
import Text from "./Text";
import HighlightedText from "./HighlightedText";
import { ArrowRightIcon } from "@phosphor-icons/react";

type Tag = {
  tag: string;
  color: string;
};

type ProjectPageLayout = {
  logo: string;
  logoStyle?: string;
  title: string;
  tagline: string;
  description: string;
  tags: Tag[];
  color: string;
  link?: string;
  linkLabel?: string;
  img: string;
};

function ProjectPageLayout({
  logo,
  logoStyle,
  title,
  tagline,
  description,
  tags,
  color,
  link,
  linkLabel,
  img,
}: ProjectPageLayout) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6">
      {/* Text */}
      <div className="">
        {/* IMAGE */}
        <img
          src={logo}
          alt={`${title} logo`}
          className={`w-32 sm:w-48 mb-2 ${logoStyle}`}
        />

        {/* Heading */}
        <Heading type="h2" className="mb-4">
          {tagline}
        </Heading>

        {/* Description */}
        <Text>{description}</Text>

        {/* Tags */}
        <Text className="space-x-2 mt-2">
          {tags.map((tagDetails, i) => (
            <HighlightedText color={tagDetails.color} key={i}>
              {tagDetails.tag}
            </HighlightedText>
          ))}
        </Text>

        {/* Link */}
        {link && (
          <Text className="mt-4">
            <a
              href={link}
              className="inline-flex items-center gap-2 border-b"
              style={{ color }}
            >
              {linkLabel}
              <ArrowRightIcon />
            </a>
          </Text>
        )}
      </div>

      {/* Image / Iframe */}
      <img
        src={img}
        alt=""
        className="h-full w-full object-cover rounded-2xl border border-white-tertiary"
      />
    </main>
  );
}

export default ProjectPageLayout;
