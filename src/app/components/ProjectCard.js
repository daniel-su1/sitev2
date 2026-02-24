import { Github, SquareArrowOutUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  href,
  technologies,
  github,
  demo,
}) {
  return (
    <div className="group rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 hover:shadow-sm">
      <div className="p-4">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 dark:text-stone-200 font-medium text-[15px] hover:text-stone-600 dark:hover:text-stone-400 transition-colors duration-200"
            >
              {title}
            </a>
            <p className="text-stone-500 dark:text-stone-400 mt-1 text-[13px] leading-relaxed">
              {description}
            </p>
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2.5">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-1.5 py-0.5 rounded-full bg-stone-200/70 dark:bg-stone-800/70 text-stone-600 dark:text-stone-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-1 shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              >
                <SquareArrowOutUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
