"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { useHomeChapterMotion } from "@/components/home/useHomeChapterMotion";

const processSteps = [
  {
    title: "Discovery",
    copy: "We listen to how you move through rooms, light, and daily rituals before any palette is chosen.",
  },
  {
    title: "Concept",
    copy: "Material boards, sketches, and spatial studies translate intent into tactile direction.",
  },
  {
    title: "Build liaison",
    copy: "We coordinate trades and joinery so detailing survives from drawing to handover.",
  },
  {
    title: "Style",
    copy: "Final layers — art, textiles, and objects — are placed with the same restraint as structure.",
  },
];

export function HomeExperience() {
  const rootRef = useRef<HTMLElement>(null);
  useHomeChapterMotion(rootRef);

  const featured = projects.slice(0, 3);

  return (
    <main ref={rootRef} id="main">
      <section
        className="an-chapter an-chapter--hero"
        data-chapter
        data-pin="false"
        aria-labelledby="home-arrive"
      >
        <div className="an-container an-chapter__hero-grid">
          <div className="an-chapter__copy">
            <p className="an-eyebrow">Temporary studio brand · Melbourne & Sydney</p>
            <h1 id="home-arrive" className="an-display an-chapter__headline" data-chapter-headline>
              Rooms shaped by light, material, and quiet confidence.
            </h1>
            <p className="an-prose" data-reveal>
              Atelier North Interiors is a placeholder studio name for this editorial
              marketing build. Photography and project names are sample content only.
            </p>
            <div className="an-chapter__actions" data-reveal>
              <Link href="/work" className="an-btn an-btn--primary an-btn--lg">
                View selected work
              </Link>
              <Link href="/contact" className="an-btn an-btn--secondary an-btn--lg">
                Book a consultation
              </Link>
            </div>
          </div>
          <div className="an-chapter__hero-media" data-chapter-media>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Placeholder interior — warm living space with natural light"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
              className="an-chapter__hero-image"
            />
          </div>
        </div>
      </section>

      <section
        className="an-chapter an-chapter--philosophy"
        data-chapter
        data-pin="true"
        aria-labelledby="home-philosophy"
      >
        <div className="an-container an-chapter__split">
          <div>
            <p className="an-eyebrow">Philosophy</p>
            <h2 id="home-philosophy" className="an-display an-chapter__title" data-chapter-headline>
              We design for how rooms feel at dusk, not how they photograph at noon.
            </h2>
          </div>
          <div className="an-prose an-chapter__philosophy-copy" data-reveal>
            <p>
              Our method favours honest materials — limewash, oiled timber, brushed
              brass — and compositions with breathing room. Every line on this site
              is temporary copy awaiting a real client voice.
            </p>
            <p>
              Square&apos;s marketing discipline informed our token workflow; the
              palette and typography are remapped for interior craft, not fintech blue.
            </p>
          </div>
        </div>
      </section>

      <section
        className="an-chapter"
        aria-labelledby="home-selected-work"
        data-chapter
      >
        <div className="an-container">
          <div className="an-section-heading">
            <div>
              <p className="an-eyebrow">Selected work</p>
              <h2 id="home-selected-work" className="an-display an-chapter__title" data-chapter-headline>
                Placeholder projects, real editorial pacing.
              </h2>
            </div>
            <Link href="/work" className="an-link" data-reveal>
              Browse all projects
            </Link>
          </div>
          <div className="an-home-work-grid">
            {featured.map((project, index) => (
              <div key={project.slug} data-reveal>
                <ProjectCard project={project} priority={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="an-chapter an-chapter--process"
        aria-labelledby="home-process"
        data-chapter
        data-pin="true"
      >
        <div className="an-container">
          <p className="an-eyebrow">Process</p>
          <h2 id="home-process" className="an-display an-chapter__title" data-chapter-headline>
            Discovery to styling — one continuous thread.
          </h2>
          <ol className="an-process-strip">
            {processSteps.map((step, index) => (
              <li key={step.title} className="an-process-strip__item" data-reveal>
                <span className="an-process-strip__index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="an-chapter" aria-labelledby="home-studio" data-chapter>
        <div className="an-container an-chapter__studio-grid">
          <div className="an-chapter__studio-media" data-chapter-media>
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="Placeholder studio interior with material samples"
              width={900}
              height={1100}
              className="an-chapter__studio-image"
            />
          </div>
          <div>
            <p className="an-eyebrow">Studio</p>
            <h2 id="home-studio" className="an-display an-chapter__title" data-chapter-headline>
              A small team obsessed with joinery details and morning light.
            </h2>
            <p className="an-prose" data-reveal>
              Names, portraits, and credentials on the Studio page are placeholders.
              The layout reserves space for principals, collaborators, and press notes
              without inventing awards or client logos.
            </p>
            <Link href="/studio" className="an-link" data-reveal>
              Meet the studio
            </Link>
          </div>
        </div>
      </section>

      <section
        className="an-chapter an-chapter--cta"
        aria-labelledby="home-consult"
        data-chapter
      >
        <div className="an-container an-chapter__cta-panel" data-reveal>
          <div>
            <p className="an-eyebrow">Consult</p>
            <h2 id="home-consult" className="an-display an-chapter__title">
              Share your room, timeline, and what calm feels like to you.
            </h2>
            <p className="an-prose an-chapter__cta-copy">
              We reply within two business days (placeholder SLA). No mailing list,
              no payment — just a conversation about scope.
            </p>
          </div>
          <Link href="/contact" className="an-btn an-btn--primary an-btn--lg">
            Book a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
