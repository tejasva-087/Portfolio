import type { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "../types/props";

type AnimatedLinkProps = LinkProps & {
  children: string | ReactNode | ReactElement;
  className?: string;
  color?: string;
};

function AnimatedLink({
  children,
  to,
  target = "_black",
  label = "",
  className = "",
}: AnimatedLinkProps) {
  const mainStyles = `relative inline-block text-black-primary ${className}`;
  const afterStyles = `after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-350 after:ease-[cubic-bezier(0.65,0,0.35,1)]`;
  const afterHoverStyles = `hover:after:scale-x-100 hover:after:origin-left`;
  const focusStyles = `focus-visible:outline focus-visible:outline-black-primary focus-visible:outline-offset-4 focus-visible:rounded-xl`;
  const afterFocusStyles = `focus-visible:after:scale-x-100 focus-visible:after:origin-left`;

  const styles = `${mainStyles} ${afterStyles} ${afterHoverStyles} ${afterFocusStyles} ${focusStyles} ${afterFocusStyles}`;

  const isLink = to.startsWith("http") || to.startsWith("#");

  return isLink ? (
    <a href={to} target={target} className={styles} id={label}>
      {children}
    </a>
  ) : (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}

export default AnimatedLink;
