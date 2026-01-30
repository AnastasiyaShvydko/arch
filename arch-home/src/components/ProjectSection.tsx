import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

type Props = {
  title?: string;
  items: Project[];
};

export function ProjectsSection({ title = "Projects", items }: Props) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-gray-500">Selected work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
