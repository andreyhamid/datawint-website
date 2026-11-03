"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { useSiteLanguage } from "@/components/site-provider";
import { useScrollReveal } from "@/components/use-scroll-reveal";
import { productStatusLabels, productsBySlug, type Copy, type ProductContent } from "@/content/products";

export function ProductDetailPage({ slug }: { slug: string }) {
  const { language } = useSiteLanguage();
  const es = language === "es";
  const product = productsBySlug[slug];
  useScrollReveal();
  if (!product) return null;
  const copy = (value: Copy) => value[language];
  const statusLabel = productStatusLabels[product.status][language];
  const isAvailable = product.status === "disponible";

  return (
    <>
      <section className="solution-hero product-hero">
        <div className="page-container solution-hero-inner">
          <div className="breadcrumbs"><Link href="/">{es ? "Inicio" : "Home"}</Link><span>/</span><Link href="/productos">{es ? "Productos" : "Products"}</Link><span>/</span><span>{product.name}</span></div>
          <div className="solution-hero-copy">
            <span className="eyebrow">{es ? "PRODUCTO SAAS" : "SAAS PRODUCT"}</span>
            <div><span className={`product-status${product.status === "proximamente" ? " product-status-soon" : ""}`}>{statusLabel}</span></div>
            <h1>{product.name}</h1>
            <p className="product-tagline">{copy(product.tagline)}</p>
            <p>{copy(product.summary)}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#solicitar-demostracion">{es ? "Solicitar demostración" : "Request a demo"}<span aria-hidden="true">↓</span></a>
              <Link className="button button-outline" href="/productos">{es ? "Ver el ecosistema" : "View the ecosystem"}<span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="solution-hero-art" aria-hidden="true"><span className="solution-art-ring ring-a"/><span className="solution-art-ring ring-b"/><span className="solution-art-grid"/><span className="solution-art-core">DW</span><span className="solution-art-label">{product.code} / DATAWINT</span></div>
        </div>
      </section>

      <section className="section solution-problems-section" data-scroll-reveal>
        <div className="page-container solution-two-column">
          <div className="solution-section-copy"><span className="eyebrow">{es ? "EL PROBLEMA" : "THE PROBLEM"}</span><h2>{es ? "¿Qué problema busca resolver?" : "What problem does it aim to solve?"}</h2><p>{es ? "Situaciones frecuentes que motivan el desarrollo de este producto." : "Common situations that motivate the development of this product."}</p></div>
          <ul className="solution-check-cards">{product.problems.map((item, i) => <li key={item.es}><span>0{i + 1}</span><p>{copy(item)}</p></li>)}</ul>
        </div>
      </section>

      <section className="section solution-services-section" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading"><span className="eyebrow">{es ? "MÓDULOS PREVISTOS" : "PLANNED MODULES"}</span><h2>{es ? "Componentes que forman parte del diseño del producto." : "Components included in the product design."}</h2><p className="product-section-note">{es ? "El alcance de cada módulo puede ajustarse durante el desarrollo." : "The scope of each module may change during development."}</p></div>
          <div className="service-grid product-module-grid">{product.modules.map((module, i) => <article className="service-card" key={module.name}><span className="service-card-index">0{i + 1}</span><h3>{module.name}</h3><p className="product-module-text">{copy(module.description)}</p><span className="service-card-line"/></article>)}</div>
        </div>
      </section>

      <section className="section product-preview-section" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading"><span className="eyebrow">{es ? "VISTA CONCEPTUAL" : "CONCEPT VIEW"}</span><h2>{es ? "Así imaginamos la experiencia." : "How we envision the experience."}</h2></div>
          <figure className="product-mockup-figure">
            <span className="product-mockup-badge">{es ? "Vista conceptual" : "Concept view"}</span>
            <ProductMockup product={product} es={es} />
            <figcaption>{es ? "Ilustración del concepto. No representa un producto operativo, pantallas finales ni datos reales." : "Concept illustration. It does not represent an operational product, final screens, or real data."}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section solution-benefits-section" data-scroll-reveal>
        <div className="page-container"><div className="section-heading"><span className="eyebrow">{es ? "BENEFICIOS ESPERADOS" : "EXPECTED BENEFITS"}</span><h2>{es ? "El valor que buscamos generar." : "The value we aim to create."}</h2></div><div className="benefit-grid">{product.benefits.map((item, i) => <article key={item.es}><span>0{i + 1}</span><p>{copy(item)}</p></article>)}</div></div>
      </section>

      <section className="solution-tech-section" data-scroll-reveal>
        <div className="page-container solution-tech-layout"><div><span className="eyebrow">{es ? "PÚBLICO OBJETIVO" : "TARGET AUDIENCE"}</span><h2>{es ? "¿Para quién está pensado?" : "Who is it designed for?"}</h2><p>{es ? "Perfiles y organizaciones a los que se orienta el diseño del producto." : "Roles and organizations the product design is aimed at."}</p></div><div className="solution-tech-tags">{product.audience.map((item) => <span key={item.es}>{copy(item)}</span>)}</div></div>
      </section>

      <section className="section solution-usecases-section" data-scroll-reveal>
        <div className="page-container solution-two-column">
          <div className="solution-section-copy"><span className="eyebrow">{es ? "CASOS DE USO" : "USE CASES"}</span><h2>{es ? "Escenarios que guían el desarrollo." : "Scenarios guiding development."}</h2><p>{es ? "Ejemplos ilustrativos; el alcance final se validará con organizaciones piloto." : "Illustrative examples; final scope will be validated with pilot organizations."}</p></div>
          <div className="use-case-list">{product.useCases.map((item, i) => <article key={item.es}><span>↗</span><div><small>{es ? `CASO 0${i + 1}` : `USE CASE 0${i + 1}`}</small><p>{copy(item)}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section contact-section" id="solicitar-demostracion">
        <div className="page-container contact-layout">
          <div className="contact-details">
            <span className="eyebrow">{es ? "SOLICITAR DEMOSTRACIÓN" : "REQUEST A DEMO"}</span>
            <h2>{es ? `Conoce ${product.name}.` : `Get to know ${product.name}.`}</h2>
            <p>{isAvailable
              ? (es ? "Cuéntanos sobre tu organización y coordinaremos una demostración." : "Tell us about your organization and we will schedule a demo.")
              : (es ? `El producto está ${statusLabel.toLowerCase()}. La demostración es una sesión para presentarte el concepto y su vista conceptual, conocer tus necesidades y avisarte sobre su avance.` : `This product is ${statusLabel.toLowerCase()}. The demo is a session to present the concept and its concept view, learn about your needs, and keep you posted on progress.`)}</p>
          </div>
          <ContactForm language={language} productName={product.name} />
        </div>
      </section>
    </>
  );
}

function MockupChrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mockup-window" aria-hidden="true">
      <div className="mockup-bar"><span /><span /><span /><small>{title}</small></div>
      <div className="mockup-body">
        <div className="mockup-sidebar"><b /><i /><i /><i /><i /></div>
        <div className="mockup-main">{children}</div>
      </div>
    </div>
  );
}

function ProductMockup({ product, es }: { product: ProductContent; es: boolean }) {
  const title = product.name;
  if (product.mockup === "finance") {
    return (
      <MockupChrome title={title}>
        <div className="mockup-kpis">{product.modules.slice(0, 3).map((m) => <div key={m.name}><small>{m.name}</small><b /><em /></div>)}</div>
        <div className="mockup-panels">
          <div className="mockup-chart"><small>{es ? "Flujo de caja proyectado" : "Projected cash flow"}</small><div className="mockup-bars">{[42, 58, 50, 66, 61, 74, 70, 82].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div></div>
          <div className="mockup-table"><small>{es ? "Presupuesto vs. real" : "Budget vs. actual"}</small>{[0, 1, 2, 3, 4].map((r) => <div key={r}><i /><i /><i /></div>)}</div>
        </div>
      </MockupChrome>
    );
  }
  if (product.mockup === "data") {
    const steps = es ? ["Fuentes", "Ingesta", "Calidad", "Modelo"] : ["Sources", "Ingestion", "Quality", "Model"];
    return (
      <MockupChrome title={title}>
        <div className="mockup-pipeline">{steps.map((s, i) => <div key={s} className="mockup-node"><span className={`mockup-dot${i === 2 ? " is-warn" : ""}`} /><small>{s}</small></div>)}</div>
        <div className="mockup-panels">
          <div className="mockup-table"><small>{es ? "Ejecuciones recientes" : "Recent runs"}</small>{[0, 1, 2, 3, 4].map((r) => <div key={r}><span className={`mockup-dot${r === 1 ? " is-warn" : ""}`} /><i /><i /></div>)}</div>
          <div className="mockup-chart"><small>{es ? "Reglas de calidad" : "Quality rules"}</small><div className="mockup-bars mockup-bars-h">{[88, 72, 95, 64].map((w, i) => <span key={i} style={{ width: `${w}%` }} />)}</div></div>
        </div>
      </MockupChrome>
    );
  }
  return (
    <MockupChrome title={title}>
      <div className="mockup-chat">
        <div className="mockup-msg mockup-msg-user">{es ? "¿Cómo evolucionaron las ventas por región en el último trimestre?" : "How did sales by region evolve last quarter?"}</div>
        <div className="mockup-msg mockup-msg-ai"><i /><i /><i className="short" /><div className="mockup-bars mockup-bars-mini">{[55, 70, 40, 82, 63].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div></div>
        <div className="mockup-input"><span>{es ? "Escribe una pregunta…" : "Ask a question…"}</span></div>
      </div>
    </MockupChrome>
  );
}
