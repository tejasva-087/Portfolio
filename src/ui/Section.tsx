import type { ReactElement, ReactNode } from "react";

type SectionProps = {
  children: ReactNode | ReactElement;
  className?: string;
  id?: string;
};

function Section({ children, className = "", id = "" }: SectionProps) {
  return (
    <section id={id} className={`px-8 py-8 md:px-12 md:py-12 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
