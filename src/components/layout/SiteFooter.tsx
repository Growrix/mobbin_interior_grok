import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="an-footer">
      <div className="an-container an-footer__grid">
        <div>
          <p className="an-footer__brand an-display">Atelier North Interiors</p>
          <p className="an-prose">
            Temporary studio placeholder. Melbourne & Sydney — serving Australia
            and select international projects.
          </p>
        </div>
        <div>
          <p className="an-eyebrow">Studio</p>
          <ul className="an-footer__list">
            <li>
              <Link href="/studio" className="an-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/process" className="an-link">
                Process
              </Link>
            </li>
            <li>
              <Link href="/work" className="an-link">
                Work
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="an-eyebrow">Contact (placeholder)</p>
          <ul className="an-footer__list">
            <li>
              <a className="an-link" href="mailto:hello@ateliernorth.placeholder">
                hello@ateliernorth.placeholder
              </a>
            </li>
            <li>
              <a className="an-link" href="tel:+61400000000">
                +61 400 000 000
              </a>
            </li>
            <li>ABN 00 000 000 000 (placeholder)</li>
          </ul>
        </div>
      </div>
      <div className="an-container an-footer__meta">
        <p>© {new Date().getFullYear()} Atelier North Interiors (temporary brand)</p>
        <p>Imagery: Unsplash placeholders — not client work.</p>
      </div>
    </footer>
  );
}
