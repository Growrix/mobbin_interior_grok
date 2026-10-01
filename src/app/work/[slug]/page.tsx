import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <article className="an-page-shell">
      <div className="an-container">
        <Link href="/work" className="an-link">
          ← Back to work
        </Link>
        <header className="an-case-hero">
          <p className="an-eyebrow">
            {project.location} · {project.year} · Placeholder case study
          </p>
          <h1 className="an-display an-case-hero__title">{project.title}</h1>
          <p className="an-prose">{project.summary}</p>
        </header>

        <div className="an-case-hero__image-wrap">
          <Image
            src={project.heroImage}
            alt={`${project.title} hero — placeholder photography`}
            width={1600}
            height={1000}
            priority
            className="an-case-hero__image"
          />
        </div>

        <div className="an-case-body">
          <section aria-labelledby="case-overview">
            <h2 id="case-overview" className="an-case-body__heading">
              Overview
            </h2>
            <p className="an-prose">
              This case study template reserves space for narrative copy, builder
              credits, and photography captions. No awards or client names are
              invented beyond placeholder labels.
            </p>
          </section>
          <section aria-labelledby="case-materials">
            <h2 id="case-materials" className="an-case-body__heading">
              Materials (sample list)
            </h2>
            <ul className="an-case-materials">
              {project.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="an-case-gallery">
          {project.gallery.map((image, index) => (
            <figure key={image} className="an-case-gallery__item">
              <Image
                src={image}
                alt={`${project.title} detail ${index + 1} — placeholder`}
                width={1200}
                height={900}
                className="an-case-gallery__image"
              />
              <figcaption className="an-case-gallery__caption">
                Placeholder detail {index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}
