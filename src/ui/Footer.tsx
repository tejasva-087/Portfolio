interface FooterProps {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  location: string;
}

export function Footer({
  email,
  github,
  linkedin,
  instagram,
  location,
}: FooterProps) {
  return (
    <footer className="px-6 py-6 sm:py-8 md:px-6 md:py-10 max-w-6xl mx-auto border-t border-black-tertiary mt-12">
      <a
        href={`mailto:${email}`}
        className="block text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight break-all sm:break-normal text-primary transition-colors duration-200 mb-6 sm:mb-8 md:mb-10"
      >
        {email}
      </a>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm uppercase tracking-widest border border-black-tertiary rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:text-primary hover:border-primary transition-colors duration-200"
        >
          Instagram
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm uppercase tracking-widest border border-black-tertiary rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:text-primary hover:border-primary transition-colors duration-200"
        >
          GitHub
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm uppercase tracking-widest border border-black-tertiary rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:text-primary hover:border-primary transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex items-center sm:items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm tracking-wide text-center sm:text-left">
        <span>{location}</span>

        <p className="hover:text-primary transition-colors duration-200">
          &copy; All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
