import { motion, useAnimation } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AnimatedLink = ({
  href,
  children,
  onClick,
  className = "",
}: AnimatedLinkProps) => {
  const controls = useAnimation();

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-block cursor-pointer no-underline ${className}`}
      onMouseEnter={async () => {
        await controls.set({ scaleX: 0, transformOrigin: "left center" });
        controls.start({
          scaleX: 1,
          transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        });
      }}
      onMouseLeave={async () => {
        await controls.set({ transformOrigin: "right center" });
        controls.start({
          scaleX: 0,
          transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        });
      }}
    >
      {children}
      <motion.span
        animate={controls}
        initial={{ scaleX: 0, transformOrigin: "left center" }}
        className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-current block"
      />
    </a>
  );
};
