import type { ReactElement, ReactNode } from "react";

type BlockquoteProps = {
  children: string | ReactNode | ReactElement;
  className?: string;
};

function Blockquote({ children, className = "" }: BlockquoteProps) {
  return (
    <blockquote
      className={`italic border-l-8 border-primary px-6 py-5 text-base sm:text-lg md:text-xl bg-black-tertiary/15 rounded-r-xl leading-relaxed ${className}`}
    >
      "{children}"
    </blockquote>
  );
}

export default Blockquote;
