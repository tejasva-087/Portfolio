import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";

import type { LinkProps } from "../types/props";

import Logo from "./Logo";
import AnimatedLink from "./AnimatedLink";
import { useState } from "react";

type NavigationProps = {
  navLinks: LinkProps[];
};

function Navigation({ navLinks }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 md:p-6 flex items-center justify-between relative">
      <Logo />

      <nav className="">
        <ul
          className={`fixed top-0 right-0 w-3/4 h-screen
            ${isOpen ? "translate-x-0" : "translate-x-full"} bg-white-primary/60 backdrop-blur-[20px] border-l border-white-primary/70 transition-transform duration-500 ease-in-out flex items-start justify-center flex-col gap-6 p-6 md:static md:translate-x-0 md:transform-none md:flex-row md:items-center md:justify-start md:w-fit md:h-full md:gap-8 md:p-0 md:bg-transparent md:backdrop-blur-none md:border-none`}
        >
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <AnimatedLink
                  to={link.to}
                  label={link.label}
                  target=""
                  className="text-2xl md:text-base tracking-widest uppercase"
                  color="black-primary"
                >
                  {link.label}
                </AnimatedLink>
              </li>
            );
          })}
        </ul>

        <button
          className="text-2xl relative z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
