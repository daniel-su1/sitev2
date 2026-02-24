import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    {
      name: "github",
      href: "https://github.com/daniel-su1",
      icon: Github,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/daniel-su1",
      icon: Linkedin,
    },
    {
      name: "email",
      href: "mailto:daniel.su@uwaterloo.ca",
      icon: Mail,
    },
  ];

  return (
    <footer className="flex flex-col gap-3 text-sm text-stone-500 dark:text-stone-400 mt-6">
      <hr className="border-b border-stone-200 dark:border-stone-800" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-3.5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <link.icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>
        <p className="text-xs text-stone-400 dark:text-stone-500">
          {new Date().getFullYear()} &copy; Daniel Su
        </p>
      </div>
    </footer>
  );
}
