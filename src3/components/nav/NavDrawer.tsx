import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLink } from "../ui/AnimatedLink";
import type { NavLink } from "./nav.types";

interface NavDrawerProps {
  open: boolean;
  links: NavLink[];
  onClose: () => void;
}

export const NavDrawer = ({ open, links, onClose }: NavDrawerProps) => (
  <AnimatePresence>
    {open && (
      <>
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black-primary/10 backdrop-blur-sm"
        />

        {/* Drawer */}
        <motion.nav
          key="drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 right-0 bottom-0 z-50 flex flex-col justify-center px-10 gap-8"
          style={{
            width: "65vw",
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(255,255,255,0.7)",
          }}
        >
          {/* Top accent */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

          {/* Links */}
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{
                delay: i * 0.07 + 0.15,
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <AnimatedLink
                href={link.href}
                onClick={onClose}
                className="text-black-primary text-2xl tracking-wide uppercase"
              >
                {link.label}
              </AnimatedLink>
            </motion.div>
          ))}

          {/* Bottom accent */}
          <div className="absolute bottom-8 left-10 right-10 h-px opacity-20 bg-linear-to-r from-primary to-transparent" />
        </motion.nav>
      </>
    )}
  </AnimatePresence>
);
