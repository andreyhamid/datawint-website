"use client";

import Link from "next/link";
import { useSiteLanguage } from "@/components/site-provider";
import { solutions } from "@/components/solution-content";
import { useScrollReveal } from "@/components/use-scroll-reveal";

export function SolutionDetailPage({ solutionKey }: { solutionKey: string }) {
  const { language } = useSiteLanguage();
  const es = language === "es";
  const solution = solutions[solutionKey];
  if (!solution) return null;
  const copy = (value: { es: string; en: string }) => value[language];

  useScrollReveal();

  return (
    <>
      <section className="solution-hero">
        <div className="page-container solution-hero-inner">
          <div className="breadcrumbs"><Link href="/">{es ? "Inicio" : "Home"}</Link><span>/</span><Link href="/soluciones">{es ? "Soluciones" : "Solutions"}</Link><span>/</span><span>{solution.name}</span></div>
          <div className="solution-hero-copy">
            <span className="eyebrow">{copy(solution.eyebrow)}</span>
            <h1>{solution.name}</h1>
            <p>{copy(solution.summary)}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto">{es ? "Conversemos del proyecto" : "Discuss your project"}<span aria-hidden="true">↗</span></Link>
              <Link className="button button-outline" href="/soluciones">{es ? "Ver todas las divisiones" : "Explore all divisions"}<span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="solution-hero-art" aria-hidden="true"><span className="solution-art-ring ring-a"/><span className="solution-art-ring ring-b"/><span className="solution-art-grid"/><span className="solution-art-core">DW</span><span className="solution-art-label">{solutionKey.toUpperCase()} / DATAWINT</span></div>
        </div>
      </section>

      <section className="section solution-problems-section" data-scroll-reveal>
        <div className="page-container solution-two-column">
          <div className="solution-section-copy"><span className="eyebrow">{es ? "EL CONTEXTO" : "THE CONTEXT"}</span><h2>{es ? "¿Qué desafíos ayuda a resolver?" : "Which challenges can it address?"}</h2><p>{es ? "Comenzamos por entender el proceso y su impacto antes de proponer herramientas." : "We start by understanding the workflow and its impact before proposing tools."}</p></div>
          <ul className="solution-check-cards">{solution.problems.map((item, i) => <li key={item.es}><span>0{i + 1}</span><p>{copy(item)}</p></li>)}</ul>
        </div>
      </section>

      <section className="section solution-services-section" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading"><span className="eyebrow">{es ? "SERVICIOS ESPECIALIZADOS" : "SPECIALIZED SERVICES"}</span><h2>{es ? "Capacidades para pasar de la necesidad a la solución." : "Capabilities to move from need to solution."}</h2></div>
          <div className="service-grid">{solution.services.map((service, i) => <article className="service-card" key={service.es}><span className="service-card-index">0{i + 1}</span><h3>{copy(service)}</h3><span className="service-card-line"/></article>)}</div>
        </div>
      </section>

      <section className="solution-tech-section" data-scroll-reveal>
        <div className="page-container solution-tech-layout"><div><span className="eyebrow">{es ? "TECNOLOGÍAS" : "TECHNOLOGY"}</span><h2>{es ? "Herramientas según el entorno y los objetivos." : "Tools selected for your environment and goals."}</h2><p>{es ? "La selección se define en cada proyecto. No implica certificaciones ni alianzas comerciales." : "Selection is made per project and does not imply certifications or commercial partnerships."}</p></div><div className="solution-tech-tags">{solution.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
      </section>

      <section className="section solution-usecases-section" data-scroll-reveal>
        <div className="page-container solution-two-column">
          <div className="solution-section-copy"><span className="eyebrow">{es ? "APLICACIONES EMPRESARIALES" : "BUSINESS APPLICATIONS"}</span><h2>{es ? "Casos de uso que parten de tu operación." : "Use cases grounded in your operations."}</h2><p>{es ? "Estos escenarios ilustran posibilidades; el alcance se valida con cada organización." : "These scenarios illustrate possibilities; scope is validated with each organization."}</p></div>
          <div className="use-case-list">{solution.useCases.map((item, i) => <article key={item.es}><span>↗</span><div><small>{es ? `CASO 0${i + 1}` : `USE CASE 0${i + 1}`}</small><p>{copy(item)}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section solution-benefits-section" data-scroll-reveal>
        <div className="page-container"><div className="section-heading"><span className="eyebrow">{es ? "VALOR ESPERADO" : "EXPECTED VALUE"}</span><h2>{es ? "Una base más clara para avanzar." : "A clearer foundation to move forward."}</h2></div><div className="benefit-grid">{solution.benefits.map((item, i) => <article key={item.es}><span>0{i + 1}</span><p>{copy(item)}</p></article>)}</div></div>
      </section>

      <section className="section solution-process-section" data-scroll-reveal>
        <div className="page-container"><div className="section-heading"><span className="eyebrow">{es ? "METODOLOGÍA" : "APPROACH"}</span><h2>{es ? "Avances claros en cada etapa." : "Clear progress at every stage."}</h2></div><ol className="solution-process">{solution.steps.map((step, i) => <li key={step.es}><span>0{i + 1}</span><p>{copy(step)}</p></li>)}</ol></div>
      </section>

      <section className="section solution-faq-section" data-scroll-reveal>
        <div className="page-container solution-faq-layout"><div className="solution-section-copy"><span className="eyebrow">FAQ</span><h2>{es ? "Preguntas frecuentes." : "Frequently asked questions."}</h2><p>{es ? "Si tu situación requiere otro enfoque, podemos revisarla contigo." : "If your situation calls for a different approach, we can review it with you."}</p></div><div className="solution-faq-list">{solution.faqs.map((faq) => <details key={faq.question.es}><summary>{copy(faq.question)}<span aria-hidden="true">+</span></summary><p>{copy(faq.answer)}</p></details>)}</div></div>
      </section>

      <section className="solution-cta-section"><div className="page-container solution-cta-inner"><div><span className="eyebrow">{es ? "SIGUIENTE PASO" : "NEXT STEP"}</span><h2>{es ? "Conversemos sobre el reto de tu empresa." : "Let’s discuss your business challenge."}</h2></div><Link className="button button-primary" href="/contacto">{es ? "Contactar a DataWint" : "Contact DataWint"}<span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
