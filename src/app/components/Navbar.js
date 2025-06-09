export default function Navbar() {
  return (
    <nav className="bg-[#335c5a] text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-serif text-lg font-semibold">Conor Peña</span>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Pricing Plans
          </a>
          <a href="#" className="hover:underline">
            Podcast
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Login
          </a>
        </div>
        <button className="bg-[#b97a2b] text-white px-4 py-2 rounded ml-4 text-sm">
          Book Online
        </button>
      </div>
    </nav>
  );
}
