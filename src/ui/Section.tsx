import type { ReactElement, ReactNode } from "react";

type SectionProps = {
  children: ReactNode | ReactElement;
  className?: string;
  id?: string;
};

function Section({ children, className = "", id = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-4 md:px-12 md:py-18 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
