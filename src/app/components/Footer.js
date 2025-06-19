"use client";
import { INSTAGRAM_PROFILE, EMAIL_ADDRESS } from "@/config/constants";
import { MENU_ITEMS } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-auto">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between py-4 px-4">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label="Email"
              className="hover:opacity-70 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6 12 13 2 6" />
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-black transition-colors text-base"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Website Credit */}
        <div className="py-4 px-4 text-right">
          <div className="text-sm text-gray-600">
            Website by{" "}
            <a
              href="https://carlosreinoso.co.uk/web-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors !text-sm"
            >
              Carlos Reinoso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
