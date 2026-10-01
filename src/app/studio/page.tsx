import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";

const team = [
  {
    name: "Amelia North (placeholder)",
    role: "Principal interior designer",
    bio: "Temporary bio — leads concept and material direction across residential and commercial work.",
  },
  {
    name: "Jonah Hale (placeholder)",
    role: "Design director",
    bio: "Temporary bio — coordinates documentation, builders, and joinery reviews on site.",
  },
  {
    name: "Mara Ellis (placeholder)",
    role: "Studio stylist",
    bio: "Temporary bio — art, objects, and photography styling for handover.",
  },
];

export const metadata: Metadata = {
  title: "Studio",
  description: "About Atelier North Interiors — placeholder people and approach.",
};

export default function StudioPage() {
  return (
    <div className="an-page-shell">
      <div className="an-container">
        <PageIntro
          eyebrow="Studio"
          title="Small by choice — deep on materials and build quality."
          description="People, portraits, and credentials here are placeholders. Replace with licensed photography and verified bios before launch."
        />

        <div className="an-studio-grid">
          <div className="an-studio-grid__media">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Placeholder studio workspace"
              width={900}
              height={1100}
              className="an-studio-grid__image"
            />
          </div>
          <div className="an-prose">
            <p>
              Atelier North Interiors is a temporary name for this marketing build.
              The studio voice stays calm and tactile — rooms first, rhetoric second.
            </p>
            <p>
              We work between Melbourne and Sydney with select remote collaborations.
              Press mentions and awards are intentionally omitted until verified.
            </p>
          </div>
        </div>

        <section aria-labelledby="team-heading" className="an-team">
          <h2 id="team-heading" className="an-display an-team__title">
            People (placeholder)
          </h2>
          <ul className="an-team__list">
            {team.map((person) => (
              <li key={person.name} className="an-team__card">
                <h3>{person.name}</h3>
                <p className="an-team__role">{person.role}</p>
                <p className="an-team__bio">{person.bio}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
