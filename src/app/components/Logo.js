const Logo = ({ isScrolled, onClick }) => {
  return (
    <a
      href="/"
      onClick={onClick}
      className="transition-opacity duration-300 hover:opacity-80 flex items-center gap-3"
    >
      <img
        src="/logo.png"
        alt="Conor O'Sullivan"
        className={`h-12 w-auto transition-all duration-300 ${
          isScrolled ? "brightness-0" : "brightness-0 invert"
        }`}
      />
      <div className="flex flex-col items-start">
        <span
          className={`text-lg font-medium transition-colors duration-300  ${
            isScrolled ? "!text-black" : "!text-white"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Supple
        </span>
        <div
          className={`w-full h-px transition-colors duration-300 ${
            isScrolled ? "!bg-black" : "!bg-white"
          }`}
        ></div>
        <span
          className={`text-sm font-medium transition-colors duration-300 font-playfair ${
            isScrolled ? "!text-black" : "!text-white"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Space
        </span>
      </div>
    </a>
  );
};

export default Logo;
