"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useSiteLanguage } from "@/components/site-provider";
import { DataArchitecture, FinanceDashboard } from "@/components/experience-sections";
import { useScrollReveal } from "@/components/use-scroll-reveal";
import { SolutionCard } from "@/components/solution-card";

const solutionLinks = [
  {
    number: "01",
    title: "Data & Analytics",
    es: "Transforma datos dispersos en información confiable y estratégica.",
    en: "Turn scattered data into trusted, strategic information.",
    href: "/soluciones/data-analytics",
    icon: "data",
    services: [["Data Engineering", "Data Engineering"], ["BI · Power BI", "BI · Power BI"], ["Gobierno de datos", "Data Governance"]],
  },
  {
    number: "02",
    title: "ERP & Enterprise Systems",
    es: "Conecta y optimiza tus sistemas empresariales para alinear operaciones, finanzas e información.",
    en: "Connect and improve enterprise systems across operations, finance, and corporate information.",
    href: "/soluciones/erp-enterprise-systems",
    icon: "erp",
    services: [["SAP · ERP", "SAP · ERP"], ["Integraciones", "Integrations"], ["Automatización", "Automation"]],
  },
  {
    number: "03",
    title: "Financial Technology",
    es: "Conecta datos y procesos financieros para ganar visibilidad sobre presupuestos, caja y rentabilidad.",
    en: "Connect financial data and processes to gain visibility into budgets, cash flow, and profitability.",
    href: "/soluciones/financial-technology",
    icon: "finance",
    services: [["FP&A", "FP&A"], ["Flujo de caja", "Cash flow"], ["Rentabilidad", "Profitability"]],
  },
  {
    number: "04",
    title: "Software & AI",
    es: "Digitaliza flujos de trabajo con software empresarial, integraciones y automatización inteligente.",
    en: "Digitize workflows with enterprise software, integrations, and intelligent automation.",
    href: "/soluciones/software-ai",
    icon: "software",
    services: [["Aplicaciones", "Applications"], ["APIs", "APIs"], ["IA aplicada", "Applied AI"]],
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    es: "Diseña infraestructura escalable, automatizada y preparada para tus operaciones.",
    en: "Build scalable, automated infrastructure prepared for your operations.",
    href: "/soluciones/cloud-infrastructure",
    icon: "cloud",
    services: [["Azure · AWS", "Azure · AWS"], ["Infraestructura", "Infrastructure"], ["Monitoreo", "Monitoring"]],
  },
  {
    number: "06",
    title: "Cybersecurity & Compliance",
    es: "Protege sistemas e información con gestión de riesgos, identidades y controles.",
    en: "Protect systems and information through risk, identity, and control practices.",
    href: "/soluciones/cybersecurity-compliance",
    icon: "security",
    services: [["Seguridad cloud", "Cloud security"], ["Identidades · IAM", "Identity · IAM"], ["Gestión de riesgos", "Risk management"]],
  },
];

const problems = [
  {
    title: ["Información dispersa", "Scattered information"],
    text: ["Los datos viven en sistemas distintos y cuesta obtener una visión compartida.", "Data lives in disconnected systems, making a shared view difficult."],
  },
  {
    title: ["Tareas manuales", "Manual processes"],
    text: ["Los flujos repetitivos consumen tiempo y dificultan la consistencia operativa.", "Repetitive workflows consume time and make operational consistency harder."],
  },
  {
    title: ["Poca visibilidad", "Limited visibility"],
    text: ["Los indicadores llegan tarde o no responden a las preguntas del negocio.", "Metrics arrive late or fail to answer the questions the business is asking."],
  },
  {
    title: ["Tecnología desconectada", "Disconnected technology"],
    text: ["Las herramientas no siempre acompañan la evolución de la organización.", "Tools do not always keep pace with the organization’s evolution."],
  },
];

const industries = [
  ["01", "Agroindustria y manufactura", "Agribusiness & manufacturing"],
  ["02", "Retail y distribución", "Retail & distribution"],
  ["03", "Servicios financieros", "Financial services"],
  ["04", "Comercio y empresas corporativas", "Commerce & corporate business"],
  ["05", "Logística y operaciones", "Logistics & operations"],
  ["06", "Empresas de servicios", "Service organizations"],
];

const method = [
  ["01", "Entender", "Understand", "Alineamos el reto, el contexto y los objetivos de negocio.", "We align on the challenge, context, and business objectives."],
  ["02", "Diseñar", "Design", "Definimos una solución viable, conectada con tus sistemas y equipo.", "We define a practical solution connected to your systems and team."],
  ["03", "Construir", "Build", "Implementamos de forma iterativa, priorizando valor y calidad.", "We deliver iteratively, prioritizing value and quality."],
  ["04", "Integrar", "Integrate", "Conectamos sistemas, datos y equipos.", "We connect systems, data, and teams."],
  ["05", "Optimizar", "Optimize", "Revisamos el desempeño y priorizamos mejoras.", "We review performance and prioritize improvements."],
  ["06", "Acompañar", "Support", "Damos continuidad y evolucionamos la solución.", "We provide continuity and evolve the solution."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function MiniIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    data: <><path d="M4 5.5h16M4 12h16M4 18.5h16" /><circle cx="8" cy="5.5" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="10" cy="18.5" r="2" /></>,
    finance: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /><path d="M16 6h4v4" /></>,
    software: <><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="m8 10-2 2 2 2m4 0 2-2-2-2m4 4 2-2-2-2" /></>,
    cloud: <><path d="M7.5 18.5h9a4 4 0 0 0 .4-8 6 6 0 0 0-11.7 1.4 3.4 3.4 0 0 0 2.3 6.6Z" /><path d="m10 14 2 2 3-4" /></>,
    erp: <><rect x="3" y="4" width="8" height="7" rx="1.5"/><rect x="13" y="4" width="8" height="7" rx="1.5"/><rect x="8" y="14" width="8" height="7" rx="1.5"/><path d="M7 11v1.5h5m5-1.5v1.5h-5"/></>,
    security: <><path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-4"/></>,
  };
  return <svg className="line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function HomePage() {
  const { language } = useSiteLanguage();
  const es = language === "es";

  useScrollReveal();

  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner page-container">
          <div className="hero-copy">
            <div className="status-label"><span /> {es ? "Enterprise Technology & Intelligence" : "Enterprise Technology & Intelligence"}</div>
            <h1>{es ? <>Tecnología. Datos. <em>Inteligencia.</em></> : <>Technology. Data. <em>Intelligence.</em></>}</h1>
            <p className="hero-lead">{es
              ? "Transformamos datos, sistemas y procesos en soluciones inteligentes para impulsar el crecimiento empresarial."
              : "We turn data, systems, and processes into intelligent solutions that support business growth."}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/soluciones">{es ? "Explorar soluciones" : "Explore solutions"} <Arrow /></Link>
              <Link className="button button-outline" href="/contacto">{es ? "Hablemos de tu proyecto" : "Let’s discuss your project"} <Arrow diagonal /></Link>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>{es ? "Estrategia, tecnología y ejecución en un solo equipo." : "Strategy, technology, and delivery in one team."}</span>
            </div>
          </div>

          <div className="hero-visual" aria-label={es ? "Visualización de un ecosistema de soluciones conectadas" : "Visualization of a connected solutions ecosystem"}>
            <div className="visual-orbit orbit-outer" />
            <div className="visual-orbit orbit-inner" />
            <div className="visual-line line-one" />
            <div className="visual-line line-two" />
            <div className="visual-line line-three" />
            <div className="visual-line line-four" />
            <div className="visual-core">
              <span className="core-symbol"><i /><i /><i /><i /></span>
              <strong>DATA<span>WINT</span></strong>
              <small>INTELLIGENCE CORE</small>
            </div>
            <div className="visual-node node-data"><span className="node-glyph"><MiniIcon name="data" /></span><small>DATA</small></div>
            <div className="visual-node node-finance"><span className="node-glyph"><MiniIcon name="finance" /></span><small>FINANCE</small></div>
            <div className="visual-node node-ai"><span className="node-glyph"><MiniIcon name="software" /></span><small>SOFTWARE &amp; AI</small></div>
            <div className="visual-node node-cloud"><span className="node-glyph"><MiniIcon name="cloud" /></span><small>CLOUD</small></div>
            <div className="visual-metric metric-top"><strong>Data <span>→</span> Insight</strong><small>{es ? "DECISIONES CONECTADAS" : "CONNECTED DECISIONS"}</small></div>
            <div className="visual-metric metric-bottom"><strong>Technology <span>×</span> Business</strong><small>{es ? "SOLUCIONES A TU MEDIDA" : "SOLUTIONS BUILT AROUND YOU"}</small></div>
          </div>
          <div className="hero-index"><span>01</span><span className="hero-index-line" /><span>04</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label={es ? "Enfoque DataWint" : "The DataWint approach"}>
        <div className="page-container trust-inner">
          <span>{es ? "UNA VISIÓN INTEGRADA" : "AN INTEGRATED VIEW"}</span>
          <b>DATA</b><i /> <b>FINANCE</b><i /> <b>SOFTWARE</b><i /> <b>CLOUD</b>
        </div>
      </section>

      <section className="section section-problems" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading heading-split">
            <div><span className="eyebrow">{es ? "EL RETO" : "THE CHALLENGE"}</span><h2>{es ? "Los desafíos empresariales requieren soluciones integradas." : "Business challenges call for connected solutions."}</h2></div>
            <p>{es ? "Ayudamos a conectar lo que hoy está disperso: sistemas, información y procesos, con los objetivos de tu organización." : "We help connect what is disconnected today: systems, information, and processes with your organization’s goals."}</p>
          </div>
          <div className="problem-grid">
            {problems.map(({ title, text }, index) => (
              <article className="problem-item" key={title[0]}>
                <span className="problem-number">0{index + 1}</span>
                <h3>{title[es ? 0 : 1]}</h3>
                <p>{text[es ? 0 : 1]}</p>
              </article>
            ))}
          </div>
          <div className="answer-bar"><span className="answer-mark">D</span><p>{es ? "DataWint conecta estrategia y tecnología para convertir retos operativos en oportunidades de mejora." : "DataWint connects strategy and technology to turn operational challenges into opportunities for improvement."}</p><Link href="/nosotros" aria-label={es ? "Conoce nuestro enfoque" : "Learn about our approach"}><Arrow diagonal /></Link></div>
        </div>
      </section>

      <section className="section section-solutions" id="soluciones" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">{es ? "QUÉ HACEMOS" : "WHAT WE DO"}</span>
            <h2>{es ? "Soluciones tecnológicas para cada desafío empresarial." : "Technology solutions for every business challenge."}</h2>
            <p>{es ? "Seis divisiones conectadas para integrar sistemas, información y estrategia." : "Six connected divisions to bring systems, information, and strategy together."}</p>
          </div>
          <div className="solution-grid">
            {solutionLinks.map((solution) => (
              <SolutionCard
                key={solution.number}
                number={solution.number}
                title={solution.title}
                description={solution[es ? "es" : "en"]}
                href={solution.href}
                icon={<MiniIcon name={solution.icon} />}
                services={solution.services.map((service) => service[es ? 0 : 1])}
                language={language}
              />
            ))}
          </div>
          <div className="center-link"><Link className="text-link" href="/soluciones">{es ? "Descubre nuestras capacidades" : "Discover our capabilities"} <Arrow /></Link></div>
        </div>
      </section>

      <DataArchitecture language={language} />

      <section className="section section-value" data-scroll-reveal>
        <div className="page-container value-layout">
          <div className="value-visual">
            <div className="value-visual-grid" aria-hidden="true" />
            <div className="value-visual-label">{es ? "DEL DATO A LA DECISIÓN" : "FROM DATA TO DECISION"}</div>
            <div className="value-flow">
              <span className="flow-item"><MiniIcon name="data" /><small>{es ? "DATOS" : "DATA"}</small></span><span className="flow-connector" />
              <span className="flow-item"><MiniIcon name="software" /><small>{es ? "TECNOLOGÍA" : "TECH"}</small></span><span className="flow-connector" />
              <span className="flow-item flow-final"><MiniIcon name="finance" /><small>{es ? "IMPACTO" : "IMPACT"}</small></span>
            </div>
            <div className="value-visual-foot"><span>DATAWINT</span><span>01 / 04</span></div>
          </div>
          <div className="value-copy">
            <span className="eyebrow">{es ? "NUESTRA PROPUESTA DE VALOR" : "OUR VALUE PROPOSITION"}</span>
            <h2>{es ? "Tecnología con contexto. Datos con propósito." : "Technology with context. Data with purpose."}</h2>
            <p>{es ? "Las herramientas por sí solas no transforman un negocio. Combinamos entendimiento empresarial, criterio técnico y ejecución práctica para crear soluciones útiles y escalables." : "Tools alone do not transform a business. We combine business understanding, technical judgment, and practical delivery to create useful, scalable solutions."}</p>
            <ul className="check-list">
              <li>{es ? "Diseñadas alrededor de tus objetivos y procesos." : "Designed around your goals and workflows."}</li>
              <li>{es ? "Integradas con las herramientas que ya utilizas." : "Integrated with the tools you already use."}</li>
              <li>{es ? "Preparadas para crecer con tu organización." : "Built to evolve with your organization."}</li>
            </ul>
            <Link className="text-link" href="/nosotros">{es ? "Conoce cómo trabajamos" : "Learn how we work"} <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section section-industries" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading heading-split">
            <div><span className="eyebrow">{es ? "DÓNDE APORTAMOS" : "WHERE WE HELP"}</span><h2>{es ? "Entendemos que cada industria opera de forma distinta." : "Every industry has its own way of working."}</h2></div>
            <Link className="text-link" href="/industrias">{es ? "Ver industrias" : "Explore industries"} <Arrow /></Link>
          </div>
          <div className="industry-list">
            {industries.map(([number, titleEs, titleEn]) => (
              <Link href="/industrias" className="industry-row" key={number}>
                <span>{number}</span><strong>{es ? titleEs : titleEn}</strong><Arrow diagonal />
              </Link>
            ))}
          </div>
          <p className="industry-note">{es ? "El punto de partida siempre es comprender tu contexto, tus procesos y tus prioridades." : "Every engagement starts with understanding your context, workflows, and priorities."}</p>
        </div>
      </section>

      <section className="section section-products" data-scroll-reveal>
        <div className="page-container products-layout">
          <div>
            <span className="eyebrow">{es ? "PRODUCTOS Y PLATAFORMAS" : "PRODUCTS & PLATFORMS"}</span>
            <h2>{es ? "Tecnología para necesidades empresariales recurrentes." : "Technology for recurring business needs."}</h2>
            <p>{es ? "Exploramos conceptos de producto alrededor de desafíos de gestión, datos e inteligencia de negocio." : "We are exploring product concepts for challenges in management, data, and business intelligence."}</p>
            <Link className="button button-dark" href="/productos">{es ? "Explorar productos" : "Explore products"} <Arrow /></Link>
          </div>
          <div className="product-panel">
            <div className="product-panel-head"><span className="panel-dot" /><span>{es ? "CONCEPTOS DE PRODUCTO DATAWINT" : "DATAWINT PRODUCT CONCEPTS"}</span></div>
            <div className="product-concept-list">
              {[
                ["DataWint Financial Intelligence", es ? "Gestión financiera y reporting" : "Financial management and reporting"],
                ["DataWint Data Platform", es ? "Integración y calidad de datos" : "Data integration and quality"],
                ["DataWint Business Copilot", es ? "Consultas empresariales con IA" : "AI-powered business queries"],
              ].map(([name, description]) => <div className="product-concept" key={name}><span className="product-concept-mark">↗</span><span><strong>{name}</strong><small>{description}</small></span><span className="product-status">{es ? "EN EXPLORACIÓN" : "IN DISCOVERY"}</span></div>)}
            </div>
            <p className="product-concept-note">{es ? "Conceptos en exploración; no disponibles comercialmente." : "Concepts in discovery; not commercially available."}</p>
          </div>
        </div>
      </section>

      <FinanceDashboard language={language} />

      <section className="section section-method" data-scroll-reveal>
        <div className="page-container">
          <div className="section-heading">
            <span className="eyebrow">{es ? "CÓMO TRABAJAMOS" : "HOW WE WORK"}</span>
            <h2>{es ? "De la oportunidad a la mejora continua." : "From opportunity to continuous improvement."}</h2>
          </div>
          <div className="method-grid">
            {method.map(([number, titleEs, titleEn, textEs, textEn]) => (
              <article className="method-item" key={number}>
                <span className="method-number">{number}</span>
                <div className="method-rule" />
                <h3>{es ? titleEs : titleEn}</h3>
                <p>{es ? textEs : textEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-strip">
        <div className="page-container tech-inner">
          <div><span className="eyebrow">{es ? "TECNOLOGÍAS Y ECOSISTEMAS" : "TECHNOLOGIES & ECOSYSTEMS"}</span><p>{es ? "Elegimos herramientas según el contexto, no por tendencia." : "We choose tools to fit the context, not the trend."}</p></div>
          <div className="tech-tags"><span>Microsoft</span><span>Azure</span><span>Power BI</span><span>Python</span><span>SQL</span><span>React</span><span>PostgreSQL</span></div>
        </div>
      </section>

      <section className="final-cta" data-scroll-reveal>
        <div className="page-container final-cta-inner">
          <div><span className="eyebrow">{es ? "EMPECEMOS POR EL RETO" : "START WITH THE CHALLENGE"}</span><h2>{es ? "Prepara tu empresa para la siguiente etapa tecnológica." : "Prepare your business for the next stage of technology."}</h2><p>{es ? "Conversemos sobre las prioridades y oportunidades de tu organización." : "Let’s talk about your organization’s priorities and opportunities."}</p></div>
          <Link className="button button-primary" href="/contacto">{es ? "Conversemos sobre tu proyecto" : "Let’s discuss your project"} <Arrow diagonal /></Link>
          <span className="cta-watermark" aria-hidden="true">D</span>
        </div>
      </section>
    </>
  );
}
