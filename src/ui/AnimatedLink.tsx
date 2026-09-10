import type { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "../types/props";

type AnimatedLinkProps = LinkProps & {
  children: string | ReactNode | ReactElement;
  className?: string;
  color?: string;
  onClick?: () => void;
};

const mainStyles = `relative inline-block text-black-primary`;

const afterStyles = `after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-350 after:ease-[cubic-bezier(0.65,0,0.35,1)]`;
const afterHoverStyles = `hover:after:scale-x-100 hover:after:origin-left`;

const focusStyles = `focus-visible:outline focus-visible:outline-black-primary focus-visible:outline-offset-4 focus-visible:rounded-xl`;
const afterFocusStyles = `focus-visible:after:scale-x-100 focus-visible:after:origin-left`;

function AnimatedLink({
  children,
  to,
  target = "_black",
  label = "",
  className = "",
  onClick,
}: AnimatedLinkProps) {
  const styles = `${mainStyles} ${afterStyles} ${afterHoverStyles} ${afterFocusStyles} ${focusStyles} ${afterFocusStyles} ${className}`;

  const isLink =
    to.startsWith("http") ||
    to.startsWith("#") ||
    to.startsWith("mailto:") ||
    to.startsWith("/assets") ||
    /\.[a-z0-9]+$/i.test(to);

  return isLink ? (
    <a
      href={to}
      target={target}
      className={styles}
      id={label}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link to={to} className={styles} onClick={onClick}>
      {children}
    </Link>
  );
}

export default AnimatedLink;
