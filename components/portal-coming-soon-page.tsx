"use client";

import Link from "next/link";
import { PortalIcon } from "@/components/portal-link";
import { useSiteLanguage } from "@/components/site-provider";
import { siteConfig } from "@/config/site";

export function PortalComingSoonPage() {
  const { language } = useSiteLanguage();
  const es = language === "es";

  return (
    <>
      <section className="inner-hero portal-hero">
        <div className="page-container inner-hero-content">
          <div className="breadcrumbs"><Link href="/">{es ? "Inicio" : "Home"}</Link><span>/</span><span>{es ? "Portal de clientes" : "Client portal"}</span></div>
          <span className="eyebrow">{es ? "PORTAL DE CLIENTES" : "CLIENT PORTAL"}</span>
          <span className="product-status product-status-soon">{es ? "Próximamente" : "Coming soon"}</span>
          <h1>{es ? "El portal de clientes estará disponible próximamente." : "The client portal will be available soon."}</h1>
          <p>{es
            ? "Estamos preparando un espacio privado para las organizaciones que trabajan con DataWint. Aún no está habilitado; mientras tanto, nuestro equipo te atiende directamente."
            : "We are preparing a private space for organizations that work with DataWint. It is not enabled yet; in the meantime, our team is available to help you directly."}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contacto">{es ? "Contactar a DataWint" : "Contact DataWint"} <span aria-hidden="true">↗</span></Link>
            <Link className="button button-outline" href="/productos">{es ? "Ver productos" : "View products"} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="inner-hero-orb" aria-hidden="true"><PortalIcon /></div>
        </div>
      </section>

      <section className="section content-list-section">
        <div className="page-container">
          <div className="content-closing portal-closing">
            <span className="eyebrow">{es ? "¿YA TRABAJAS CON NOSOTROS?" : "ALREADY WORKING WITH US?"}</span>
            <p>{es
              ? "Si necesitas información sobre tu proyecto o servicio, escríbenos y te responderemos por los canales habituales."
              : "If you need information about your project or service, write to us and we will respond through the usual channels."}</p>
            <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
