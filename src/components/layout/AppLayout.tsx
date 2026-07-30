import { Outlet } from "react-router-dom";

import type { NavLink } from "../nav/nav.types";
import { Nav } from "../nav/Nav";
import Logo from "../ui/Logo";
import resumepdf from "../../assets/Tejasav Khandelwal_Resume.pdf";
import { ScrollToHash } from "../ui/ScrollToHash";

const links: NavLink[] = [
  { label: "About me", href: "/#about-me" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact me", href: "mailto:tejasva.khandelwal2009@gmail.com" },
  { label: "Resume", href: resumepdf },
];

function AppLayout() {
  return (
    <div className="max-w-350 m-auto">
      <ScrollToHash />
      <header className="p-6 flex items-center justify-between">
        <Logo />
        <Nav links={links} />
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
