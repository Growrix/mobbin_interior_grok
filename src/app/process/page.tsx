import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

const phases = [
  {
    step: "01",
    title: "Discovery",
    detail:
      "On-site or virtual walkthrough, lifestyle interview, and budget framing. We document light, views, and existing architecture worth keeping.",
  },
  {
    step: "02",
    title: "Concept",
    detail:
      "Mood boards, sketch plans, and material palettes. You receive a clear direction before documentation intensifies.",
  },
  {
    step: "03",
    title: "Build liaison",
    detail:
      "Joinery drawings, finish schedules, and contractor coordination. We visit site at key milestones (placeholder cadence).",
  },
  {
    step: "04",
    title: "Style",
    detail:
      "Art, soft furnishings, and styling days. We photograph for your archive — not for public marketing unless agreed.",
  },
];

export const metadata: Metadata = {
  title: "Process",
  description: "Studio process from discovery through styling — placeholder copy.",
};

export default function ProcessPage() {
  return (
    <div className="an-page-shell">
      <div className="an-container">
        <PageIntro
          eyebrow="Process"
          title="A calm sequence with room for craft decisions."
          description="This page mirrors the Home process chapter with more detail. Timelines and fees are intentionally omitted until a real brand kit exists."
        />
        <ol className="an-process-page">
          {phases.map((phase) => (
            <li key={phase.step} className="an-process-page__item">
              <span className="an-process-page__step">{phase.step}</span>
              <div>
                <h2 className="an-process-page__title">{phase.title}</h2>
                <p className="an-process-page__detail">{phase.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
