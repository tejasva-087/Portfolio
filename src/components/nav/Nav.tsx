import { useState, useEffect } from "react";
import { AnimatedLink } from "../ui/AnimatedLink";
import { Hamburger } from "./Hamburger";
import { NavDrawer } from "./NavDrawer";
import type { NavLink } from "./nav.types";

export type { NavLink };

// ─── bump breakpoint to lg (1024px) to give 5 links enough room ───────────────
const MOBILE_BREAKPOINT = 1024;

export const Nav = ({ links }: { links: NavLink[] }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false,
  );

  useEffect(() => {
    const handler = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop — shown above lg breakpoint */}
      {!isMobile && (
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <AnimatedLink
              key={link.href}
              href={link.href}
              className="text-black-secondary hover:text-black-primary tracking-widest uppercase transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </AnimatedLink>
          ))}
        </nav>
      )}

      {/* Mobile — shown below lg breakpoint */}
      {isMobile && (
        <>
          <Hamburger open={open} onClick={() => setOpen((v) => !v)} />
          <NavDrawer open={open} links={links} onClose={() => setOpen(false)} />
        </>
      )}
    </>
  );
};
