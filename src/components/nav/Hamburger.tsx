import { motion } from "framer-motion";

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

export const Hamburger = ({ open, onClick }: HamburgerProps) => (
  <button
    onClick={onClick}
    aria-label="Toggle menu"
    className="relative z-60 flex flex-col justify-center items-end gap-1.25 w-7 h-7 bg-transparent border-none cursor-pointer p-1 shrink-0"
  >
    {(
      [
        {
          animate: open
            ? { rotate: 45, y: 7, width: "100%" }
            : { rotate: 0, y: 0, width: "100%" },
          initialWidth: "100%",
        },
        {
          animate: open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 },
          initialWidth: "66%",
        },
        {
          animate: open
            ? { rotate: -45, y: -7, width: "100%" }
            : { rotate: 0, y: 0, width: "66%" },
          initialWidth: "66%",
        },
      ] as const
    ).map((bar, i) => (
      <motion.span
        key={i}
        animate={bar.animate}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="block h-[1.5px] bg-black-primary origin-center"
        style={{ width: bar.initialWidth }}
      />
    ))}
  </button>
);
