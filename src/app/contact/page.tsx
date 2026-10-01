import type { Metadata } from "next";
import { ConsultForm } from "@/components/contact/ConsultForm";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation — demo form with full interaction states.",
};

export default function ContactPage() {
  return (
    <div className="an-page-shell">
      <div className="an-container an-contact-layout">
        <div>
          <PageIntro
            eyebrow="Contact"
            title="Book a consultation"
            description="Share your space, location, and timeline. This form simulates idle, submitting, success, and error states — no data is sent to a server."
          />
          <ul className="an-contact-details">
            <li>
              Email:{" "}
              <a className="an-link" href="mailto:hello@ateliernorth.placeholder">
                hello@ateliernorth.placeholder
              </a>
            </li>
            <li>
              Phone:{" "}
              <a className="an-link" href="tel:+61400000000">
                +61 400 000 000
              </a>
            </li>
            <li>Studio hours: Mon–Thu, 9:00–17:00 AEST (placeholder)</li>
          </ul>
        </div>
        <ConsultForm />
      </div>
    </div>
  );
}
