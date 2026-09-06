import React, { ReactNode } from "react";
import data from "../../data/portfolio.json";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | "primary";
  onClick?: () => void;
  classes?: string;
}

const Button = ({
  children,
  type = "button",
  onClick,
  classes = "",
}: ButtonProps) => {
  const cursorClass = data.showCursor ? "cursor-none" : "";

  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`
          text-sm
          tablet:text-base
          p-1
          laptop:p-2
          m-1
          laptop:m-2
          rounded-lg
          bg-[var(--button-primary-bg)]
          text-[var(--button-primary-text)]
          border
          border-[var(--button-primary-border)]
          transition-all
          duration-300
          ease-out
          first:ml-0
          hover:bg-[var(--button-primary-hover-bg)]
          hover:border-[var(--button-primary-hover-border)]
          hover:scale-105
          active:scale-100
          link
          ${cursorClass}
          ${classes}
        `}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        text-sm
        tablet:text-base
        p-1
        laptop:p-2
        m-1
        laptop:m-2
        rounded-lg
        flex
        items-center
        text-[var(--text-primary)]
        transition-all
        ease-out
        duration-300
        hover:bg-[var(--surface-soft)]
        hover:text-[var(--text-primary)]
        hover:scale-105
        active:scale-100
        tablet:first:ml-0
        ${cursorClass}
        ${classes}
        link
      `}
    >
      {children}
    </button>
  );
};

export default Button;
