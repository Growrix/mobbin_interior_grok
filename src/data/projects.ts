export type ProjectCategory =
  | "residential"
  | "commercial"
  | "styling"
  | "full-home";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  heroImage: string;
  gallery: string[];
  materials: string[];
  placeholder: true;
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] =
  [
    { id: "all", label: "All work" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "full-home", label: "Full home" },
    { id: "styling", label: "Styling" },
  ];

export const projects: Project[] = [
  {
    slug: "cliffside-residence",
    title: "Cliffside residence",
    location: "Mornington Peninsula, VIC (placeholder)",
    year: "2025",
    category: "residential",
    summary:
      "Placeholder case study — a calm coastal home shaped by filtered light, limewash walls, and brass hardware accents.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Limewash plaster", "Oiled oak", "Hand-brushed brass"],
    placeholder: true,
  },
  {
    slug: "atelier-office",
    title: "Atelier office",
    location: "Surry Hills, NSW (placeholder)",
    year: "2024",
    category: "commercial",
    summary:
      "Placeholder case study — a quiet studio reception with olive-toned joinery and generous sight lines.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Smoked oak veneer", "Travertine", "Linen upholstery"],
    placeholder: true,
  },
  {
    slug: "harbour-apartment",
    title: "Harbour apartment",
    location: "Sydney, NSW (placeholder)",
    year: "2024",
    category: "full-home",
    summary:
      "Placeholder case study — full-home refresh balancing harbour views with layered, tactile interiors.",
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68c0c8a7?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Terrazzo", "Wool bouclé", "Patinated bronze"],
    placeholder: true,
  },
  {
    slug: "gallery-styling",
    title: "Gallery styling",
    location: "Fitzroy, VIC (placeholder)",
    year: "2023",
    category: "styling",
    summary:
      "Placeholder case study — seasonal styling for a private gallery apartment with sculptural ceramics.",
    heroImage:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Stoneware", "Raw silk", "Aged mirror glass"],
    placeholder: true,
  },
  {
    slug: "garden-pavilion",
    title: "Garden pavilion",
    location: "Adelaide Hills, SA (placeholder)",
    year: "2023",
    category: "residential",
    summary:
      "Placeholder case study — a pavilion extension framed by olive planting and clay-render walls.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Clay render", "Basalt", "Linen sheers"],
    placeholder: true,
  },
  {
    slug: "showroom-suite",
    title: "Showroom suite",
    location: "Brisbane, QLD (placeholder)",
    year: "2022",
    category: "commercial",
    summary:
      "Placeholder case study — a material library and client lounge with asymmetric display walls.",
    heroImage:
      "https://images.unsplash.com/photo-1600210492490-72be689e0b62?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Fluted glass", "Walnut", "Plaster relief"],
    placeholder: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
