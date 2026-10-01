import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="an-project-card">
      <Link href={`/work/${project.slug}`} className="an-project-card__link">
        <div className="an-project-card__media">
          <Image
            src={project.heroImage}
            alt={`${project.title} — placeholder interior photography`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="an-project-card__image"
            priority={priority}
          />
          {project.placeholder ? (
            <span className="an-project-card__badge">Placeholder project</span>
          ) : null}
        </div>
        <div className="an-project-card__body">
          <p className="an-eyebrow">
            {project.location} · {project.year}
          </p>
          <h3 className="an-project-card__title">{project.title}</h3>
          <p className="an-project-card__summary">{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
