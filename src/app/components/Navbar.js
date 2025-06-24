"use client";
import { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Logo from "./Logo";
import { EVENTBRITE_URL } from "@/config/constants";

export const MENU_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: EVENTBRITE_URL, label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
      style={{ pointerEvents: "auto" }}
    >
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between px-4 py-2 md:py-3 transition-colors duration-300 ${
          isScrolled ? "text-primary" : "!text-white"
        }`}
      >
        {/* Left: Social Media Icons */}
        <div className="flex-1 flex items-center">
          <SocialMediaIcons isScrolled={isScrolled} />
        </div>
        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <Logo isScrolled={isScrolled} />
        </div>
        {/* Right: Hamburger (mobile) or menu (desktop) */}
        <div className="flex-1 flex justify-end items-center">
          {/* Desktop menu */}
          <div
            className={`hidden md:flex gap-8 text-base font-medium font-figtree transition-colors duration-300 ${
              isScrolled ? "text-primary" : "!text-white"
            }`}
          >
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`!text-sm relative group hover:text-primary ${
                  isScrolled ? "!text-black" : "!text-white"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 ease-out group-hover:w-full origin-left transform scale-x-0 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-4 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke={isScrolled ? "currentColor" : "white"}
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full sm:w-80 bg-primary h-full flex flex-col p-8 relative animate-slide-in-right">
            <button
              className="absolute top-4 right-4 !text-white !text-4xl focus:outline-none hover:opacity-80 transition-opacity"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              <div className="flex flex-col items-center md:items-start mb-8">
                <Logo onClick={() => setOpen(false)} />
              </div>

              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:opacity-80 transition-opacity duration-300 font-figtree !text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-auto mb-4">
              <SocialMediaIcons isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
