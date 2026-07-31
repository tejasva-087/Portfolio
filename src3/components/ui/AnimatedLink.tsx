import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const isExternalHref = (href: string) =>
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  /\.[a-z0-9]+$/i.test(href);

export const AnimatedLink = ({
  href,
  children,
  onClick,
  className = "",
}: AnimatedLinkProps) => {
  const controls = useAnimation();
  const location = useLocation();

  const handleMouseEnter = async () => {
    await controls.set({ scaleX: 0, transformOrigin: "left center" });
    controls.start({
      scaleX: 1,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const handleMouseLeave = async () => {
    await controls.set({ transformOrigin: "right center" });
    controls.start({
      scaleX: 0,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    });
  };

  // Handles the case where the target hash is IDENTICAL to the current
  // URL's hash. In that scenario react-router won't fire a navigation
  // (no location change = no effect re-run), so we scroll manually.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (isExternalHref(href)) return;

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const id = href.slice(hashIndex + 1);
    const targetPath = href.slice(0, hashIndex) || "/";

    const samePath = location.pathname === targetPath;
    const sameHash = location.hash === `#${id}`;

    if (samePath && sameHash) {
      e.preventDefault();
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const underline = (
    <motion.span
      animate={controls}
      initial={{ scaleX: 0, transformOrigin: "left center" }}
      className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-current block"
    />
  );

  const sharedClassName = `relative inline-block cursor-pointer no-underline ${className}`;

  if (isExternalHref(href)) {
    const isDownloadOrExternal =
      href.startsWith("http") || /\.[a-z0-9]+$/i.test(href);

    return (
      <a
        href={href}
        onClick={onClick}
        className={sharedClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(isDownloadOrExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={sharedClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {underline}
    </Link>
  );
};
