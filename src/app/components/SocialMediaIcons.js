import { INSTAGRAM_PROFILE, EMAIL_ADDRESS } from "../../config/constants";

export default function SocialMediaIcons({ isScrolled }) {
  return (
    <div className="flex items-center gap-4">
      <a
        href={`${INSTAGRAM_PROFILE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group transition-colors duration-200"
      >
        <svg
          className="w-6 h-6 group-hover:stroke-primary group-hover:fill-primary/10"
          fill="none"
          stroke={isScrolled ? "black" : "white"}
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
        className="group transition-colors duration-200"
      >
        <svg
          className="w-6 h-6 group-hover:stroke-primary group-hover:fill-primary/10"
          fill="none"
          stroke={isScrolled ? "black" : "white"}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6 12 13 2 6" />
        </svg>
      </a>
    </div>
  );
}
