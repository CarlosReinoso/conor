"use client";
import { INSTAGRAM_PROFILE, EMAIL_ADDRESS } from "@/config/constants";
import { MENU_ITEMS } from "./Navbar";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-auto">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between py-4 px-4">
          {/* Social Icons */}
          <SocialMediaIcons isScrolled={true} />

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start min-w-0">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-black transition-colors text-base whitespace-nowrap"
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
