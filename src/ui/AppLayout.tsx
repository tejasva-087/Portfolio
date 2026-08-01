import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";

import resumePdf from "../assets/resume.pdf";

const navLinks = [
  { label: "About me", to: "/#about-me" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Contact me", to: "mailto:tejasva.khandelwal2009@gmail.com" },
  { label: "Resume", to: resumePdf },
];

function AppLayout() {
  return (
    <div className="max-w-350 m-auto">
      <Navigation navLinks={navLinks} />
      <Outlet />
      <Footer
        email="khandelwaltejasva@gmail.com"
        github="https://github.com/tejasva-087"
        linkedin="https://www.linkedin.com/in/tejasavkhandelwal/"
        instagram="https://www.instagram.com/tejuss.official/"
        location="Indore, IN"
      />
    </div>
  );
}

export default AppLayout;
