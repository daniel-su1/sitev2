"use client";

import Link from "./Link";

export default function HorizontalNav({ links }) {
  return (
    <nav className="flex items-center gap-2 sm:gap-3.5">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          isActive={link.isActive}
          isNextLink={link.isNextLink}
          className={`text-[13px] ${
            link.isActive
              ? "text-stone-900 dark:text-stone-100"
              : "text-stone-500 dark:text-stone-400"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
