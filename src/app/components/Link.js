"use client";

import NextLink from "next/link";
import { useCallback, useRef } from "react";

export default function Link({
  className = "",
  href,
  isActive,
  isNextLink,
  children,
}) {
  const ref = useRef(null);

  const handleMouseEnter = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    el.style.setProperty("--origin", `${x}%`);
  }, []);

  const baseStyles = `
    link-underline
    ${isActive ? "is-active" : ""}
    relative
    inline-flex items-center
    transition-colors duration-300 ease-out
    ${
      isActive
        ? "text-stone-900 dark:text-stone-100"
        : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100"
    }
    ${className}
  `.trim();

  return isNextLink ? (
    <NextLink
      href={href}
      className={baseStyles}
      ref={ref}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </NextLink>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
      ref={ref}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  );
}
