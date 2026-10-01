import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";
import "@/components/ui/button.css";
import "@/components/ui/fields.css";
import "@/components/layout/site-chrome.css";
import "@/components/layout/page-intro.css";
import "@/components/work/project-card.css";
import "@/components/work/work-page.css";
import "@/components/home/home.css";
import "@/components/contact/consult-form.css";

export const metadata: Metadata = {
  title: {
    default: "Atelier North Interiors",
    template: "%s · Atelier North Interiors",
  },
  description:
    "Temporary editorial marketing site for an interior design studio — placeholder brand and photography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="an-skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
