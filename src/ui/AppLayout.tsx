import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const navLinks = [
  { label: "About me", to: "/#about-me" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Contact me", to: "mailto:tejasva.khandelwal2009@gmail.com" },
  // { label: "Resume", to: resumepdf },
];

function AppLayout() {
  return (
    <div className="max-w-350 m-auto">
      <Navigation navLinks={navLinks} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
