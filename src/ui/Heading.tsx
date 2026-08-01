import type { ReactElement, ReactNode } from "react";

type HeadingProps = {
  className?: string;
  children: string | ReactNode | ReactElement;
  type?: "h1" | "h2" | "h3" | "SectionHeading";
};

function Heading({ children, className = "", type = "h1" }: HeadingProps) {
  if (type === "h2")
    return (
      <h3
        className={`text-4xl sm:text-5xl md:text-6xl font-medium ${className}`}
      >
        {children}
      </h3>
    );

  if (type === "h3")
    return (
      <h3
        className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${className}`}
      >
        {children}
      </h3>
    );

  if (type === "SectionHeading")
    return (
      <h4
        className={`text-2xl md:text-3xl mb-10 md:mb-16 uppercase text-primary text-center underline underline-offset-4 tracking-widest ${className}`}
      >
        {children}
      </h4>
    );

  return (
    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${className}`}>
      {children}
    </h1>
  );
}

export default Heading;
