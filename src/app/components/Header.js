"use client";

import HorizontalNav from "./HorizontalNav";
import { usePathname } from "next/navigation";
import Link from "./Link";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  const links = [
    {
      name: "about",
      href: "/",
      isActive: pathname === "/",
      isNextLink: true,
    },
    {
      name: "projects",
      href: "/projects",
      isActive: pathname === "/projects",
      isNextLink: true,
    },
  ];

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-stone-700 dark:text-stone-300 font-semibold tracking-[-0.02em]">
        <Link href="/" isNextLink={true}>
          daniel su
        </Link>
      </h1>
      <div className="flex items-center gap-3 sm:gap-5">
        <HorizontalNav links={links} />
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
          aria-label="Toggle theme"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="h-[15px] w-[15px]" />
            ) : (
              <Moon className="h-[15px] w-[15px]" />
            )
          ) : (
            <div className="h-[15px] w-[15px]" />
          )}
        </button>
      </div>
    </div>
  );
}
