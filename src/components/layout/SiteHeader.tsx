"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="an-header">
      <div className="an-container an-header__inner">
        <Link href="/" className="an-header__brand">
          <span className="an-header__mark" aria-hidden="true" />
          <span>
            Atelier North
            <span className="an-header__sub">Interiors</span>
          </span>
        </Link>

        <nav className="an-header__nav" aria-label="Primary">
          <ul className="an-header__list">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`an-header__link ${active ? "is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="an-header__actions">
          <Link href="/contact" className="an-header__cta-desktop an-btn an-btn--secondary an-btn--md">
            Book a consultation
          </Link>
          <button
            type="button"
            className="an-header__menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close menu" : "Open menu"}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`an-header__mobile ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile primary">
          <ul className="an-header__mobile-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="an-header__mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="an-header__mobile-link"
                onClick={() => setOpen(false)}
              >
                Book a consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
