import type { ReactElement, ReactNode } from "react";

type TextProps = {
  children: string | ReactNode | ReactElement;
  className?: string;
};

function Text({ children, className = "" }: TextProps) {
  return (
    <p
      className={`text-base sm:text-lg md:text-xl leading-relaxed text-black-secondary ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
