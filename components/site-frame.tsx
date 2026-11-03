"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useSiteLanguage } from "@/components/site-provider";
import { SolutionsMegaMenu } from "@/components/solutions-mega-menu";

const whatsappUrl =
  "https://wa.me/51953494818?text=Hola%2C%20quiero%20conocer%20las%20soluciones%20de%20DataWint.";

export function SiteFrame({ children }: { children: ReactNode }) {
  const { language, toggleLanguage } = useSiteLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isEs = language === "es";

  useEffect(() => {
    if (!menuOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    function closeOnOutsideClick(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  const nav = [
    [isEs ? "Industrias" : "Industries", "/industrias"],
    [isEs ? "Productos" : "Products", "/productos"],
    [isEs ? "Nosotros" : "About", "/nosotros"],
    [isEs ? "Recursos" : "Insights", "/recursos"],
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        {isEs ? "Saltar al contenido" : "Skip to content"}
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href="/" aria-label="DataWint, inicio" onClick={() => setMenuOpen(false)}>
            <img className="brand-image" src="/datawint-logo.png" alt="" width="160" height="55" />
          </Link>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? (isEs ? "Cerrar menú" : "Close menu") : (isEs ? "Abrir menú" : "Open menu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{isEs ? "Abrir menú" : "Open menu"}</span>
            <span />
            <span />
          </button>

          <nav
            ref={navRef}
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label={isEs ? "Navegación principal" : "Main navigation"}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>{isEs ? "Inicio" : "Home"}</Link>
            <SolutionsMegaMenu language={language} onNavigate={() => setMenuOpen(false)} />
            {nav.map(([label, href]) => (
              <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
            <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={isEs ? "Switch to English" : "Cambiar a español"}>
              {isEs ? "EN" : "ES"}
            </button>
            <Link className="button button-small nav-cta" href="/contacto" onClick={() => setMenuOpen(false)}>
              {isEs ? "Hablemos" : "Let’s talk"} <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={isEs ? "Escríbenos por WhatsApp" : "Message us on WhatsApp"}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.3-4.9A8.4 8.4 0 1 1 20.5 11.8Z" />
          <path d="M8.2 7.7c-.2-.5-.5-.5-.8-.5h-.7c-.2 0-.6.1-.9.5s-1.1 1.1-1.1 2.6 1.1 3 1.2 3.2c.2.2 2.1 3.3 5.1 4.5 2.5 1 3 .8 3.6.8s1.8-.7 2.1-1.4.3-1.3.2-1.4-.3-.2-.7-.4l-2.1-1c-.3-.1-.5-.2-.7.2s-.8 1-1 1.2-.4.2-.7.1a8.4 8.4 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3Z" />
        </svg>
        <span>{isEs ? "¿Hablamos?" : "Let’s talk"}</span>
      </a>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link className="brand brand-footer" href="/" aria-label="DataWint, inicio">
              <img className="brand-image" src="/datawint-logo.png" alt="" width="160" height="55" />
            </Link>
            <p>{isEs
              ? "Integramos datos, tecnología y conocimiento financiero para impulsar mejores decisiones empresariales."
              : "We bring data, technology, and financial insight together to enable better business decisions."}</p>
            <span className="footer-tagline">Enterprise Technology &amp; Intelligence</span>
          </div>
          <div className="footer-column">
            <h2>{isEs ? "Explora" : "Explore"}</h2>
            <Link href="/soluciones">{isEs ? "Soluciones" : "Solutions"}</Link>
            <Link href="/industrias">{isEs ? "Industrias" : "Industries"}</Link>
            <Link href="/productos">{isEs ? "Productos" : "Products"}</Link>
          </div>
          <div className="footer-column">
            <h2>{isEs ? "DataWint" : "DataWint"}</h2>
            <Link href="/nosotros">{isEs ? "Nosotros" : "About us"}</Link>
            <Link href="/recursos">{isEs ? "Recursos" : "Insights"}</Link>
            <Link href="/contacto">{isEs ? "Contacto" : "Contact"}</Link>
          </div>
          <div className="footer-contact">
            <span className="eyebrow">{isEs ? "¿Hablamos de tu próximo reto?" : "Ready to discuss your next challenge?"}</span>
            <a href="mailto:asilva@datawint.com">asilva@datawint.com</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">+51 953 494 818 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DataWint. {isEs ? "Todos los derechos reservados." : "All rights reserved."}</span>
          <span>{isEs ? "Construido para crecer contigo." : "Built to grow with you."}</span>
        </div>
      </footer>
    </>
  );
}
