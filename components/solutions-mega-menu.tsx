"use client";

import Link from "next/link";
import type { ReactNode } from "react";

const divisions = [
  { number: "01", href: "/soluciones/data-analytics", icon: "data", es: ["Data & Analytics", "Integra y convierte tus datos en información útil."], en: ["Data & Analytics", "Bring your data together and turn it into insight."] },
  { number: "02", href: "/soluciones/erp-enterprise-systems", icon: "erp", es: ["ERP & Enterprise Systems", "Conecta ERP, procesos y sistemas empresariales."], en: ["ERP & Enterprise Systems", "Connect ERP, processes, and enterprise systems."] },
  { number: "03", href: "/soluciones/financial-technology", icon: "finance", es: ["Financial Technology", "Más visibilidad y control para tu gestión financiera."], en: ["Financial Technology", "More visibility and control for financial operations."] },
  { number: "04", href: "/soluciones/software-ai", icon: "software", es: ["Software & AI", "Software a medida, automatización e inteligencia artificial."], en: ["Software & AI", "Custom software, automation, and artificial intelligence."] },
  { number: "05", href: "/soluciones/cloud-infrastructure", icon: "cloud", es: ["Cloud & Infrastructure", "Infraestructura escalable, automatizada y observable."], en: ["Cloud & Infrastructure", "Scalable, automated, observable infrastructure."] },
  { number: "06", href: "/soluciones/cybersecurity-compliance", icon: "security", es: ["Cybersecurity & Compliance", "Gestiona riesgos, identidades y controles."], en: ["Cybersecurity & Compliance", "Manage risks, identities, and controls."] },
];

function MegaIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    data: <><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2"/><circle cx="15" cy="12" r="2"/></>,
    erp: <><rect x="4" y="4" width="7" height="6" rx="1"/><rect x="13" y="4" width="7" height="6" rx="1"/><rect x="8" y="14" width="8" height="6" rx="1"/><path d="M7 10v2h5m5-2v2h-5"/></>,
    finance: <><path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-7"/></>,
    software: <><rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="m8 10-2 2 2 2m4 0 2-2-2-2"/></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z"/><path d="M12 12v6m-2-2 2 2 2-2"/></>,
    security: <><path d="m12 3 8 3v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></>,
  };
  return <svg className="mega-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function SolutionsMegaMenu({ language, onNavigate }: { language: "es" | "en"; onNavigate: () => void }) {
  const es = language === "es";
  return (
    <details className="solutions-menu">
      <summary>{es ? "Soluciones" : "Solutions"}<span className="chevron" aria-hidden="true" /></summary>
      <div className="mega-menu">
        <div className="mega-intro">
          <span className="eyebrow">{es ? "Nuestras capacidades" : "Our capabilities"}</span>
          <strong>{es ? "Tecnología conectada a tus objetivos." : "Technology connected to your goals."}</strong>
          <Link href="/soluciones" onClick={onNavigate}>{es ? "Ver todas las soluciones" : "Explore all solutions"}<span aria-hidden="true"> →</span></Link>
        </div>
        <div className="mega-links">
          {divisions.map((division) => (
            <Link href={division.href} key={division.href} onClick={onNavigate}>
              <span className="mega-service-leading"><MegaIcon name={division.icon}/><small>{division.number}</small></span>
              <span className="mega-service-copy"><span className="mega-link-title">{division[es ? "es" : "en"][0]}</span><span>{division[es ? "es" : "en"][1]}</span></span>
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
