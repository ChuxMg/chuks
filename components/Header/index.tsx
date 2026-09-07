import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Button from "../Button";
import data from "../../data/portfolio.json";

type HeaderProps = {
  handleWorkScroll: () => void;
  handleAboutScroll: () => void;
  handleContactScroll: () => void;
  handleSkillsScroll?: () => void;
  handleServicesScroll?: () => void;
  isBlog?: boolean;
};

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
  handleSkillsScroll,
  handleServicesScroll,
  isBlog = false,
}: HeaderProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    {
      label: "Work",
      action: handleWorkScroll,
    },
    {
      label: "About",
      action: handleAboutScroll,
    },
    {
      label: "Services",
      action: handleServicesScroll,
    },
    {
      label: "Skills",
      action: handleSkillsScroll,
    },
    {
      label: "Contact",
      action: handleContactScroll,
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Mobile Header */}
      <Popover className="relative z-30 block mt-5 tablet:hidden">
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between px-3 py-3">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="font-medium tracking-tight"
              >
                {name}
              </button>

              <div className="flex items-center gap-2">
                {mounted && data.darkMode && (
                  <Button
                    type="button"
                    onClick={toggleTheme}
                    classes={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                      theme === "dark"
                        ? "border-white/15 bg-white/[0.05] hover:bg-white/[0.1]"
                        : "border-black/15 bg-black/[0.05] hover:bg-black/[0.1]"
                    }`}
                  >
                    <Image
                      className="h-5 w-5"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Toggle theme"
                      width={20}
                      height={20}
                    />
                  </Button>
                )}

                <Popover.Button
                  aria-label={open ? "Close menu" : "Open menu"}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                    theme === "light"
                      ? "border-black/15 bg-black/[0.04] hover:bg-black/[0.08]"
                      : "border-white/15 bg-white/[0.05] hover:bg-white/[0.1]"
                  }`}
                >
                  <span className="flex w-5 flex-col gap-1.5">
                    <span
                      className={`h-px w-full transition-transform duration-300 ${
                        theme === "light" ? "bg-black" : "bg-white"
                      } ${open ? "translate-y-1 rotate-45" : ""}`}
                    />

                    <span
                      className={`h-px w-full transition-opacity duration-300 ${
                        theme === "light" ? "bg-black" : "bg-white"
                      } ${open ? "opacity-0" : "opacity-100"}`}
                    />

                    <span
                      className={`h-px w-full transition-transform duration-300 ${
                        theme === "light" ? "bg-black" : "bg-white"
                      } ${open ? "-translate-y-1 -rotate-45" : ""}`}
                    />
                  </span>
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel
              className={`absolute right-0 z-20 mt-4 w-full rounded-2xl border p-5 shadow-2xl backdrop-blur-xl ${
                theme === "light"
                  ? "border-black/10 bg-white/95 text-black"
                  : "border-white/10 bg-[#121217]/95 text-white"
              }`}
            >
              {!isBlog ? (
                <nav className="flex flex-col">
                  {navigationItems.map(
                    (item) =>
                      item.action && (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            item.action?.();
                            close();
                          }}
                          className={`border-b py-4 text-left text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-60 last:border-b-0 ${
                            theme === "light"
                              ? "border-black/10"
                              : "border-white/10"
                          }`}
                        >
                          {item.label}
                        </button>
                      ),
                  )}

                  {showBlog && (
                    <button
                      type="button"
                      onClick={() => {
                        router.push("/blog");
                        close();
                      }}
                      className={`border-b py-4 text-left text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-60 ${
                        theme === "light"
                          ? "border-black/10"
                          : "border-white/10"
                      }`}
                    >
                      Blog
                    </button>
                  )}

                  {showResume && (
                    <button
                      type="button"
                      onClick={() => {
                        router.push("/resume");
                        close();
                      }}
                      className="py-4 text-left text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                    >
                      Resume
                    </button>
                  )}
                </nav>
              ) : (
                <nav className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/");
                      close();
                    }}
                    className={`border-b py-4 text-left text-sm uppercase tracking-[0.2em] ${
                      theme === "light" ? "border-black/10" : "border-white/10"
                    }`}
                  >
                    Home
                  </button>

                  {showBlog && (
                    <button
                      type="button"
                      onClick={() => {
                        router.push("/blog");
                        close();
                      }}
                      className={`border-b py-4 text-left text-sm uppercase tracking-[0.2em] ${
                        theme === "light"
                          ? "border-black/10"
                          : "border-white/10"
                      }`}
                    >
                      Blog
                    </button>
                  )}

                  {showResume && (
                    <button
                      type="button"
                      onClick={() => {
                        router.push("/resume");
                        close();
                      }}
                      className={`border-b py-4 text-left text-sm uppercase tracking-[0.2em] ${
                        theme === "light"
                          ? "border-black/10"
                          : "border-white/10"
                      }`}
                    >
                      Resume
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      handleContactScroll();
                      close();
                    }}
                    className="py-4 text-left text-sm uppercase tracking-[0.2em]"
                  >
                    Contact
                  </button>
                </nav>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop Header */}
      <header
        className={`sticky top-0 z-20 mt-8 hidden tablet:flex items-center justify-between py-5 transition-transform duration-500 ease-out ${
          showHeader ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        <button
          type="button"
          onClick={() => router.push("/")}
          className="font-medium tracking-tight transition-opacity hover:opacity-60"
        >
          {name}
        </button>

        {!isBlog ? (
          <nav className="flex items-center gap-2">
            {navigationItems.map(
              (item) =>
                item.action && (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.action}
                    className="px-3 py-2 text-[11px] uppercase tracking-[0.2em] opacity-50 transition-opacity duration-300 hover:opacity-100"
                  >
                    {item.label}
                  </button>
                ),
            )}

            {showBlog && (
              <button
                type="button"
                onClick={() => router.push("/blog")}
                className="px-3 py-2 text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
              >
                Blog
              </button>
            )}

            {showResume && (
              <button
                type="button"
                onClick={() => router.push("/resume")}
                className="px-3 py-2 text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
              >
                Resume
              </button>
            )}

            {mounted && data.darkMode && (
              <Button type="button" onClick={toggleTheme} classes="ml-2 p-2">
                <Image
                  className="h-5 w-auto"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Toggle theme"
                  width={20}
                  height={20}
                />
              </Button>
            )}
          </nav>
        ) : (
          <nav className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="px-3 py-2 text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
            >
              Home
            </button>

            {showBlog && (
              <button
                type="button"
                onClick={() => router.push("/blog")}
                className="px-3 py-2 text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
              >
                Blog
              </button>
            )}

            {showResume && (
              <button
                type="button"
                onClick={() => router.push("/resume")}
                className="px-3 py-2 text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
              >
                Resume
              </button>
            )}

            <button
              type="button"
              onClick={handleContactScroll}
              className="px-3 py-2 text-xs uppercase tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
            >
              Contact
            </button>

            {mounted && data.darkMode && (
              <Button type="button" onClick={toggleTheme} classes="ml-2 p-2">
                <Image
                  className="h-5 w-auto"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Toggle theme"
                  width={20}
                  height={20}
                />
              </Button>
            )}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
