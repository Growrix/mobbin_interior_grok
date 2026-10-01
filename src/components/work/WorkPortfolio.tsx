"use client";

import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";

export function WorkPortfolio() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div>
      <div
        className="an-filter-bar"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`an-filter-chip ${selected ? "is-active" : ""}`}
              onClick={() => setActive(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="an-empty-state" role="status">
          No projects in this category yet. Try another filter.
        </p>
      ) : (
        <div className="an-work-grid" aria-live="polite">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      )}
    </div>
  );
}
