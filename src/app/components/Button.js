import React from "react";
import Link from "next/link";

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  type = "button",
  arrowDirection = "right",
  showArrow = true,
  ...props
}) => {
  // Default showArrow to false for primary, true otherwise
  const computedShowArrow =
    showArrow !== undefined ? showArrow : variant !== "primary";

  const baseStyles =
    "group px-8 py-3 text-lg rounded-lg transition-colors duration-300 inline-flex items-center gap-2 font-normal";

  const variants = {
    primary: "bg-[#9B6522] !text-white hover:bg-[#7a4f1a]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  const arrow = computedShowArrow ? (
    <span className="!text-white inline-block transition-transform duration-300 group-hover:translate-x-1">
      {arrowDirection === "right" ? "→" : "←"}
    </span>
  ) : null;

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {arrowDirection === "left" && arrow}
        {children}
        {arrowDirection === "right" && arrow}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...props}>
      {arrowDirection === "left" && arrow}
      {children}
      {arrowDirection === "right" && arrow}
    </button>
  );
};

export default Button;
