import { Link } from "react-router-dom";
import type { Project } from "../types";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      aria-label={`Open project: ${project.title}`}
    >
      <img
        src={project.coverUrl}
        alt={project.title}
        className="h-72 w-full object-cover"
        loading="lazy"
      />

      {/* Hover overlay (grey) */}
      <div className="absolute inset-0 bg-gray-900/0 transition group-hover:bg-gray-900/45" />

      {/* Center plus */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-extralight text-white opacity-0 transition group-hover:opacity-100">
          +
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="text-white drop-shadow">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-white/85">
            {project.location} · {project.year}
          </p>
        </div>

        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/15 px-3 py-1 text-xs text-white"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
