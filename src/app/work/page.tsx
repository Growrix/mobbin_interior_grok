import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { WorkPortfolio } from "@/components/work/WorkPortfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Filterable placeholder portfolio for Atelier North Interiors.",
};

export default function WorkPage() {
  return (
    <div className="an-page-shell">
      <div className="an-container">
        <PageIntro
          eyebrow="Work"
          title="Projects told through material, light, and proportion."
          description="Every project below is labeled as placeholder content. Filters demonstrate category states without claiming real client work."
        />
        <WorkPortfolio />
      </div>
    </div>
  );
}
