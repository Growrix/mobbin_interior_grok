import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";

const services = [
  {
    title: "Residential interiors",
    meta: "Homes & apartments",
    copy:
      "Full interior direction for primary residences — spatial planning, finishes, lighting, and loose furniture curated to feel inevitable rather than styled.",
  },
  {
    title: "Commercial studios",
    meta: "Hospitality & workplace",
    copy:
      "Quiet, durable environments for client-facing studios and boutique hospitality. We prioritize wayfinding, acoustic comfort, and material honesty.",
  },
  {
    title: "Full-home transformations",
    meta: "Renovation liaison",
    copy:
      "When structure changes, we stay beside architects and builders — reviewing shop drawings, attending site meetings, and protecting design intent.",
  },
  {
    title: "Styling & art direction",
    meta: "Seasonal layers",
    copy:
      "For nearly-complete spaces, we compose art, objects, and textiles. Engagements are short and focused — ideal before photography or hosting.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description: "Editorial service sections for Atelier North Interiors (temporary copy).",
};

export default function ServicesPage() {
  return (
    <div className="an-page-shell">
      <div className="an-container">
        <PageIntro
          eyebrow="Services"
          title="Four ways we partner — never three identical cards."
          description="Each section is an editorial row with unequal weight. Copy is temporary placeholder text for layout and hierarchy review."
        />
        <div className="an-editorial-stack">
          {services.map((service, index) => (
            <section key={service.title} className="an-editorial-row">
              <div>
                <p className="an-editorial-row__meta">{service.meta}</p>
                <h2 className="an-editorial-row__title">{service.title}</h2>
              </div>
              <div>
                <p className="an-editorial-row__copy">{service.copy}</p>
                {index === 0 ? (
                  <p className="an-editorial-row__copy">
                    <Link href="/contact" className="an-link">
                      Start with a consultation
                    </Link>{" "}
                    to confirm scope and timeline.
                  </p>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
