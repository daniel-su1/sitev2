"use client";

import Link from "../components/Link";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "EyeSpeak",
      href: "https://github.com/daniel-su1/EyeSpeak",
      description:
        "Accessible communication app for ALS/LIS patients using real-time gaze detection and Llama 3.2 90B. Winner at Meta Llama Impact Hackathon 2024.",
      technologies: ["React", "Python", "FastAPI", "Llama 3.2", "WebGazer.js"],
      github: "https://github.com/daniel-su1/EyeSpeak",
    },
    {
      title: "Sistema",
      href: "https://github.com/uwblueprint/sistema",
      description:
        "Class management platform for Sistema Toronto, a non-profit providing music education to underserved youth. Teachers can mark absences, upload lesson plans, claim classes, and receive email notifications.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      github: "https://github.com/uwblueprint/sistema",
    },
    {
      title: "Ledger",
      href: "https://github.com/daniel-su1/ledger",
      description:
        "Cross-platform expense tracking and debt management app for friends and groups. Split bills, settle debts, and keep everyone on the same page.",
      technologies: ["Kotlin", "Compose Multiplatform", "Supabase", "Ktor"],
      github: "https://github.com/daniel-su1/ledger",
    },
    {
      title: "A Better Tent City",
      href: "https://github.com/uwblueprint/abtc",
      description:
        "Full-stack volunteer management platform supporting 200+ monthly active users who provide essential services to 700+ homeless residents.",
      technologies: ["TypeScript", "Express.js", "Node.js", "MongoDB", "React"],
      github: "https://github.com/uwblueprint/abtc",
    },
    {
      title: "WaterlooDontWork",
      href: "https://github.com/daniel-su1/waterloodontwork",
      description:
        "A better employer-student matching platform with an intuitive swipe interface and a matching algorithm.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Flask",
        "MongoDB",
        "Chakra UI",
      ],
      github: "https://github.com/daniel-su1/waterloodontwork",
    },
    {
      title: "HackRMatch",
      href: "https://github.com/daniel-su1/HackRMatch",
      description:
        "A web app that streamlines hackathon team formation by connecting participants using AI.",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Passport.js",
      ],
      github: "https://github.com/daniel-su1/HackRMatch",
    },
    {
      title: "CoverWriter",
      href: "https://github.com/daniel-su1/cover-writer",
      description:
        "Parses resume and job listing info to generate tailored cover letters using OpenAI's API.",
      technologies: ["Node.js", "Express", "OpenAI API", "Bootstrap"],
      github: "https://github.com/daniel-su1/cover-writer",
    },
    {
      title: "YouOMe",
      href: "https://github.com/daniel-su1/YouOMe",
      description:
        "RESTful CRUD application to track money owed between friends.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/daniel-su1/YouOMe",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-5 text-stone-400" />
        <input
          type="text"
          placeholder="search projects, technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-300 dark:border-stone-700 rounded-lg bg-transparent focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 pl-10 text-sm text-stone-700 dark:text-stone-300 placeholder:text-stone-400 dark:placeholder:text-stone-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-stone-400 dark:text-stone-500 text-sm py-8">
          No projects match your search.
        </p>
      )}
    </>
  );
}
