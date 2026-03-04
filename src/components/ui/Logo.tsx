import logo from "../../assets/logo.svg";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={logo} alt="Logo for tejuss.in" className="h-8" />
      <h3 className="text-primary sm:text-lg md:text-xl font-semibold uppercase">
        Tejasva Khandelwal
      </h3>
    </a>
  );
}

export default Logo;
