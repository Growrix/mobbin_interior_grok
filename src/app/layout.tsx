import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
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
