import { Nav, type NavLink } from "./components/nav/Nav";
import Logo from "./components/ui/Logo";

const links: NavLink[] = [
  { label: "About me", href: "/" },
  { label: "Skills", href: "/work" },
  { label: "Projects", href: "/about" },
  { label: "Experience", href: "/contact" },
  { label: "Contact me", href: "/contact" },
];

function App() {
  return (
    <div className="max-w-350 m-auto">
      <header className="p-6 flex items-center justify-between">
        <Logo />
        <Nav links={links} />
      </header>
    </div>
  );
}

export default App;
