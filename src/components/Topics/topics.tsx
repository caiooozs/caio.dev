import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { CodeXmlIcon } from "@/src/components/ui/code-xml-icon";
import { GithubIcon } from "@/src/components/ui/github-icon";
import { ProjectCardProps } from "@/src/types/types";
import { Spinner } from "../ui/spinner";

const projects: ProjectCardProps[] = [
  {
    title: "GoMovies",
    description: "Project to pratice API requests and components in React.js",
    github: "https://github.com/caiooozs/GoMovies",
    stacks: ["NextJS", "TypeScript", "Tailwind", "TMDB API", "Shadcn UI"],
    building: false,
  },
  {
    title: "Countries App",
    description:
      "Project to apply the MVVM architecture and clean architecture.",
    github: "https://github.com/caiooozs/countries-app",
    website: "https://countries-app-delta-orpin.vercel.app/",
    stacks: [
      "React",
      "TypeScript",
      "REST Countries API",
      "MVVM Architecture",
      "Clean Code",
      "Shadcn UI",
      "Tailwind",
      "Tanstack Query",
      "Axios",
    ],
    building: false,
  },
  {
    title: "Hyphen Community Hub",
    description:
      "A system under development to keep students updated on news, events, activities, projects, and much more.",
    github: "https://github.com/caiooozs/hyphen-community",
    website: "https://hyphen-community.vercel.app/",
    stacks: [
      "NextJS",
      "TypeScript",
      "Shadcn UI",
      "Tailwind",
      "Supabase",
            "Tanstack Query",
    ],
    building: false,
  },
  {
    title: "CTRL+Match",
    description: "A system that help beginners IT students to get jobs easily by matching them with companies ",
    github:"https://github.com/juninhos-comunidade/ctrl-match",
    website: "",
    stacks: ["NextJS", "TypeScript", "Tailwind", "Shadcn UI", "NodeJS", "Tanstack Query", "AI", "PostgreSQL"],
    building: true
  },
  {
    title: "Pharmacy Management System",
    description: "Pharmacy management system for monitoring and controlling sales and stock of medications. Made to help my neighborhood pharmacy",
    github:"https://github.com/caiooozs/pharmacy-controll",
    website: "",
    stacks: ["NextJS", "TypeScript", "Tailwind", "Shadcn UI", "Supabase", "AI", "Tanstack Query", "MVVM Architecture"],
    building: true
  }
];

const Topics = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <div className="flex items-center justify-center pb-12">
        <h1 className="text-2xl ">Projects & Repositories</h1>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            className={`border border-border/70 bg-white/75 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
              project.building ? "ring-amber-300/60" : "ring-emerald-300/60"
            }`}
          >
            <CardHeader className="gap-3 pb-0">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-2xl text-slate-900">
                  {project.title}
                </CardTitle>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                    aria-label={`Abrir repositório do projeto ${project.title}`}
                  >
                    <GithubIcon size={16} />
                  </a>

                  {!project.building && project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                      aria-label={`Abrir site do projeto ${project.title}`}
                    >
                      <CodeXmlIcon size={16} />
                    </a>
                  ) : (
                    <div
                      className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-700"
                      aria-label={`Projeto ${project.title} em construção`}
                    >
                      <CodeXmlIcon size={16} />
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-5">
              <p className="text-base text-slate-600">{project.description}</p>

              <div className="flex flex-wrap items-center gap-2">
                {project.stacks.map((stack) => (
                  <Badge
                    key={`${project.title}-${stack}`}
                    variant="secondary"
                    className="[font-family:var(--font-code)]"
                  >
                    {stack}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-end">
                {project.building ? (
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                    <Spinner />
                    Building
                  </Badge>
                ) : (
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                    Done
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Topics;
