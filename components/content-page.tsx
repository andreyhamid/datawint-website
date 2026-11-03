"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useSiteLanguage } from "@/components/site-provider";
import { siteConfig } from "@/config/site";

type PageKey = "solutions" | "data" | "finance" | "software" | "cloud" | "industries" | "products" | "about" | "insights" | "contact";

const pages: Record<PageKey, {
  eyebrow: [string, string];
  title: [string, string];
  intro: [string, string];
  items: { title: [string, string]; text: [string, string] }[];
  closing: [string, string];
}> = {
  solutions: {
    eyebrow: ["SOLUCIONES", "SOLUTIONS"],
    title: ["Tecnología alineada con los retos de tu negocio.", "Technology aligned with your business challenges."],
    intro: ["Unimos datos, finanzas, software e infraestructura para ayudar a las organizaciones a operar y decidir mejor.", "We connect data, finance, software, and infrastructure to help organizations operate and make decisions better."],
    items: [
      { title: ["Data & Analytics", "Data & Analytics"], text: ["Arquitectura, integración y analítica para convertir información en una ventaja práctica.", "Architecture, integration, and analytics that turn information into a practical advantage."] },
      { title: ["ERP & Enterprise Systems", "ERP & Enterprise Systems"], text: ["Integramos ERP, operaciones y datos empresariales con atención a cada entorno.", "We integrate ERP, operations, and enterprise data around each environment."] },
      { title: ["Financial Technology", "Financial Technology"], text: ["Automatización y analítica financiera para una visión más clara del desempeño.", "Financial automation and analytics for a clearer view of performance."] },
      { title: ["Software & AI", "Software & AI"], text: ["Aplicaciones, integraciones y automatización diseñadas alrededor de tus procesos.", "Applications, integrations, and automation designed around your workflows."] },
      { title: ["Cloud & Infrastructure", "Cloud & Infrastructure"], text: ["Infraestructura cloud escalable, automatizada y observable.", "Scalable, automated, observable cloud infrastructure."] },
      { title: ["Cybersecurity & Compliance", "Cybersecurity & Compliance"], text: ["Gestión de riesgos, identidades y controles tecnológicos.", "Technology risk, identity, and control practices."] },
    ],
    closing: ["Explora las capacidades de cada división y conversemos sobre lo que tu equipo necesita.", "Explore each division’s capabilities and let’s discuss what your team needs."],
  },
  data: {
    eyebrow: ["DIVISIÓN / 01", "DIVISION / 01"],
    title: ["Data & Analytics", "Data & Analytics"],
    intro: ["Integramos, organizamos y analizamos la información de tu empresa para que puedas tomar decisiones con mayor claridad y confianza.", "We integrate, organize, and analyze your company’s information so you can make decisions with greater clarity and confidence."],
    items: [
      { title: ["Data Engineering & ETL", "Data Engineering & ETL"], text: ["Conectamos fuentes y diseñamos flujos de datos mantenibles.", "We connect sources and design maintainable data pipelines."] },
      { title: ["Data Warehouse & Lakehouse", "Data Warehouse & Lakehouse"], text: ["Centralizamos información con modelos que responden a las preguntas del negocio.", "We centralize information in models that answer business questions."] },
      { title: ["Business Intelligence", "Business Intelligence"], text: ["Creamos reportes y tableros que facilitan el seguimiento de indicadores.", "We build reports and dashboards that make metrics easier to monitor."] },
      { title: ["Data Quality & Governance", "Data Quality & Governance"], text: ["Establecemos criterios para mejorar la consistencia, calidad y uso de los datos.", "We establish practices that improve data consistency, quality, and use."] },
      { title: ["Forecasting & Analytics", "Forecasting & Analytics"], text: ["Exploramos tendencias y escenarios que aporten a la planificación.", "We explore trends and scenarios that support planning."] },
    ],
    closing: ["Diseñamos la arquitectura según tus fuentes, procesos, capacidades y objetivos.", "We shape the architecture around your sources, processes, capabilities, and goals."],
  },
  finance: {
    eyebrow: ["DIVISIÓN / 02", "DIVISION / 02"],
    title: ["Financial Technology", "Financial Technology"],
    intro: ["Conectamos conocimiento financiero y tecnología para mejorar la planificación, el control y la visibilidad del desempeño empresarial.", "We combine financial expertise and technology to improve planning, control, and visibility into business performance."],
    items: [
      { title: ["FP&A y planificación", "FP&A and planning"], text: ["Presupuestos, escenarios y forecast más conectados con la operación.", "Budgets, scenarios, and forecasts better connected to operations."] },
      { title: ["Automatización financiera", "Financial automation"], text: ["Reducimos tareas manuales en reportes, cierres y procesos recurrentes.", "We reduce manual effort in reporting, close, and recurring processes."] },
      { title: ["Cash flow y costos", "Cash flow and cost management"], text: ["Mejoramos la lectura de caja, costos y estructura financiera.", "We improve visibility into cash flow, costs, and financial structure."] },
      { title: ["Rentabilidad y reporting", "Profitability and reporting"], text: ["Organizamos información para analizar resultados y comunicar hallazgos.", "We organize information to analyze results and communicate insights."] },
      { title: ["Integración ERP y datos", "ERP and data integration"], text: ["Conectamos sistemas financieros con herramientas analíticas.", "We connect financial systems with analytics tools."] },
    ],
    closing: ["El enfoque se adapta a tus sistemas actuales y a la madurez de tus procesos financieros.", "The approach adapts to your current systems and the maturity of your financial processes."],
  },
  software: {
    eyebrow: ["DIVISIÓN / 03", "DIVISION / 03"],
    title: ["Software & AI", "Software & AI"],
    intro: ["Desarrollamos soluciones digitales y automatizaciones que simplifican procesos, conectan herramientas y amplían las capacidades de los equipos.", "We build digital solutions and automations that simplify workflows, connect tools, and extend team capabilities."],
    items: [
      { title: ["Aplicaciones empresariales", "Enterprise applications"], text: ["Software web enfocado en las necesidades concretas de tu organización.", "Web software focused on your organization’s specific needs."] },
      { title: ["APIs e integraciones", "APIs and integrations"], text: ["Conectamos servicios y sistemas para reducir fricción operativa.", "We connect services and systems to reduce operational friction."] },
      { title: ["Automatización inteligente", "Intelligent automation"], text: ["Automatizamos tareas y procesos con reglas claras y supervisión adecuada.", "We automate tasks and workflows with clear rules and appropriate oversight."] },
      { title: ["IA aplicada al negocio", "Applied AI"], text: ["Evaluamos oportunidades de IA con foco en utilidad, seguridad y contexto.", "We evaluate AI opportunities with a focus on usefulness, safety, and context."] },
      { title: ["Productos digitales", "Digital products"], text: ["Acompañamos el diseño y desarrollo de plataformas y experiencias digitales.", "We support the design and development of digital platforms and experiences."] },
    ],
    closing: ["La tecnología adecuada empieza por un proceso que vale la pena mejorar.", "The right technology starts with a process worth improving."],
  },
  cloud: {
    eyebrow: ["DIVISIÓN / 04", "DIVISION / 04"],
    title: ["Cloud & Security", "Cloud & Security"],
    intro: ["Preparamos la base tecnológica para que tus servicios sean confiables, escalables y gestionados con atención a la seguridad.", "We prepare the technology foundation so your services can be reliable, scalable, and managed with security in mind."],
    items: [
      { title: ["Arquitectura cloud", "Cloud architecture"], text: ["Diseñamos entornos alineados con necesidades técnicas y operativas.", "We design environments aligned with technical and operational needs."] },
      { title: ["Migración y modernización", "Migration and modernization"], text: ["Planificamos la evolución de aplicaciones e infraestructura con cuidado.", "We plan the evolution of applications and infrastructure thoughtfully."] },
      { title: ["Integración de plataformas", "Platform integration"], text: ["Conectamos servicios cloud y sistemas empresariales.", "We connect cloud services and enterprise systems."] },
      { title: ["Prácticas de seguridad", "Security practices"], text: ["Incorporamos controles y criterios de seguridad desde el diseño.", "We incorporate security controls and practices from the design stage."] },
      { title: ["Observabilidad y operación", "Observability and operations"], text: ["Facilitamos el seguimiento y operación continua de los servicios.", "We support ongoing service monitoring and operations."] },
    ],
    closing: ["Cada recomendación considera capacidades internas, riesgos y prioridades de negocio.", "Every recommendation considers internal capabilities, risks, and business priorities."],
  },
  industries: {
    eyebrow: ["INDUSTRIAS", "INDUSTRIES"],
    title: ["Soluciones con contexto para cada operación.", "Context-aware solutions for every operation."],
    intro: ["Las prioridades, regulaciones y procesos cambian entre industrias. Empezamos por comprender cómo funciona tu negocio antes de proponer tecnología.", "Priorities, regulations, and workflows vary across industries. We start by understanding how your business works before proposing technology."],
    items: [
      { title: ["Agroindustria y manufactura", "Agribusiness & manufacturing"], text: ["Trazabilidad operativa, calidad de datos y visibilidad de costos y producción.", "Operational traceability, data quality, and visibility into costs and production."] },
      { title: ["Retail y distribución", "Retail & distribution"], text: ["Integración de información comercial, inventarios y desempeño operativo.", "Connected commercial, inventory, and operational performance data."] },
      { title: ["Servicios financieros", "Financial services"], text: ["Planificación, reporting y análisis financiero conectado.", "Connected planning, reporting, and financial analysis."] },
      { title: ["Comercio y empresas corporativas", "Commerce & corporate business"], text: ["Información integrada para coordinar áreas y seguir indicadores de negocio.", "Integrated information to align teams and monitor business metrics."] },
      { title: ["Logística y operaciones", "Logistics & operations"], text: ["Integración de información, seguimiento de indicadores y automatización de tareas recurrentes.", "Integrated information, performance monitoring, and automation of recurring tasks."] },
      { title: ["Empresas de servicios", "Service organizations"], text: ["Automatización de flujos, gestión financiera y análisis de utilización de recursos.", "Workflow automation, financial management, and resource utilization analysis."] },
    ],
    closing: ["Trabajamos a partir de tus retos concretos; cada proyecto se define junto a tu equipo.", "We work from your specific challenges; every engagement is shaped with your team."],
  },
  products: {
    eyebrow: ["PRODUCTOS", "PRODUCTS"],
    title: ["Construyendo soluciones para necesidades reales.", "Building solutions for real needs."],
    intro: ["DataWint está explorando herramientas y plataformas que respondan a desafíos empresariales recurrentes. Compartiremos novedades cuando haya productos listos para presentar.", "DataWint is exploring tools and platforms for recurring business challenges. We will share updates when products are ready to introduce."],
    items: [
      { title: ["DataWint Financial Intelligence", "DataWint Financial Intelligence"], text: ["Concepto en exploración para reunir presupuestos, flujo de caja, rentabilidad y reporting gerencial.", "Concept in discovery to bring together budgets, cash flow, profitability, and management reporting."] },
      { title: ["DataWint Data Platform", "DataWint Data Platform"], text: ["Concepto en exploración para integrar fuentes, monitorear procesos ETL y mejorar la calidad de datos.", "Concept in discovery to integrate sources, monitor ETL processes, and improve data quality."] },
      { title: ["DataWint Business Copilot", "DataWint Business Copilot"], text: ["Concepto en exploración para consultar indicadores y analizar información empresarial con IA.", "Concept in discovery to query business metrics and analyze company information with AI."] },
    ],
    closing: ["¿Tienes un desafío recurrente que podría resolverse con una herramienta digital? Conversemos.", "Have a recurring challenge that could be solved with a digital tool? Let’s talk."],
  },
  about: {
    eyebrow: ["NOSOTROS", "ABOUT US"],
    title: ["Un socio tecnológico con visión de negocio.", "A technology partner with a business perspective."],
    intro: ["DataWint integra tecnología, datos y conocimiento financiero para ayudar a las empresas a optimizar operaciones y tomar mejores decisiones.", "DataWint brings together technology, data, and financial insight to help businesses optimize operations and make better decisions."],
    items: [
      { title: ["Nuestra visión", "Our vision"], text: ["Contribuir a organizaciones más informadas, conectadas y preparadas para evolucionar.", "Contribute to organizations that are more informed, connected, and ready to evolve."] },
      { title: ["Nuestro enfoque", "Our approach"], text: ["Entender el negocio antes de elegir herramientas; construir soluciones prácticas, escalables y medibles.", "Understand the business before choosing tools; build practical, scalable, and measurable solutions."] },
      { title: ["Cómo colaboramos", "How we collaborate"], text: ["Trabajamos de forma cercana y transparente, con objetivos claros y avances iterativos.", "We work closely and transparently, with clear goals and iterative progress."] },
      { title: ["Lo que nos guía", "What guides us"], text: ["Integridad, curiosidad, responsabilidad y foco en resultados sostenibles.", "Integrity, curiosity, responsibility, and a focus on sustainable outcomes."] },
    ],
    closing: ["Transformamos datos en soluciones inteligentes para impulsar el crecimiento empresarial.", "We turn data into intelligent solutions that support business growth."],
  },
  insights: {
    eyebrow: ["RECURSOS", "INSIGHTS"],
    title: ["Ideas para tomar mejores decisiones tecnológicas.", "Ideas for better technology decisions."],
    intro: ["Un espacio para compartir marcos de trabajo, preguntas útiles y perspectivas sobre datos, finanzas y transformación digital.", "A space to share frameworks, useful questions, and perspectives on data, finance, and digital transformation."],
    items: [
      { title: ["Cómo empezar un proyecto de datos", "How to start a data project"], text: ["Define una decisión concreta, identifica las fuentes necesarias y valida la calidad antes de escalar.", "Define a specific decision, identify the necessary sources, and validate data quality before scaling."] },
      { title: ["Automatizar con propósito", "Automating with purpose"], text: ["Mapea el proceso, entiende sus excepciones y acuerda cómo medir una mejora útil.", "Map the process, understand its exceptions, and agree on how to measure meaningful improvement."] },
      { title: ["Planificación financiera conectada", "Connected financial planning"], text: ["Relaciona supuestos, responsables e indicadores para hacer la planificación más accionable.", "Connect assumptions, owners, and metrics to make planning more actionable."] },
      { title: ["Adoptar IA responsablemente", "Adopting AI responsibly"], text: ["Evalúa privacidad, revisión humana y límites de uso desde el diseño de la solución.", "Consider privacy, human review, and usage boundaries from the solution design stage."] },
    ],
    closing: ["Publicaremos nuevos recursos a medida que estén disponibles. ¿Qué tema te gustaría que abordemos?", "We will publish new resources as they become available. What topic would you like us to cover?"],
  },
  contact: {
    eyebrow: ["CONTACTO", "CONTACT"],
    title: ["Conversemos sobre lo que tu empresa quiere lograr.", "Let’s discuss what your business wants to achieve."],
    intro: ["Cuéntanos sobre tu reto, tus procesos o la oportunidad que quieres explorar. Te responderemos para coordinar una primera conversación.", "Tell us about your challenge, workflows, or an opportunity you want to explore. We will get back to arrange an initial conversation."],
    items: [],
    closing: ["También puedes escribirnos directamente por correo o WhatsApp.", "You can also contact us directly by email or WhatsApp."],
  },
};

const solutionHref = ["/soluciones/data-analytics", "/soluciones/erp-enterprise-systems", "/soluciones/financial-technology", "/soluciones/software-ai", "/soluciones/cloud-infrastructure", "/soluciones/cybersecurity-compliance"];

function ContactForm({ language }: { language: "es" | "en" }) {
  const [sent, setSent] = useState(false);
  const es = language === "es";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${es ? "Consulta desde DataWint" : "Inquiry from DataWint"} — ${formData.get("name")}`);
    const body = encodeURIComponent([
      `${es ? "Nombre" : "Name"}: ${formData.get("name")}`,
      `${es ? "Correo" : "Email"}: ${formData.get("email")}`,
      `${es ? "Empresa" : "Company"}: ${formData.get("company")}`,
      `${es ? "Teléfono" : "Phone"}: ${formData.get("phone")}`,
      `${es ? "Industria" : "Industry"}: ${formData.get("industry")}`,
      `${es ? "División de interés" : "Division of interest"}: ${formData.get("division")}`,
      "",
      `${es ? "Mensaje" : "Message"}:`,
      `${formData.get("message")}`,
    ].join("\n"));
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>{es ? "Nombre" : "Name"}<input name="name" autoComplete="name" required /></label>
        <label>{es ? "Empresa" : "Company"}<input name="company" autoComplete="organization" required /></label>
      </div>
      <div className="form-row">
        <label>{es ? "Correo electrónico" : "Email address"}<input name="email" type="email" autoComplete="email" required /></label>
        <label>{es ? "Teléfono" : "Phone"}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+() -]{7,20}" title={es ? "Ingresa un teléfono válido." : "Enter a valid phone number."} required /></label>
      </div>
      <div className="form-row">
        <label>{es ? "Industria" : "Industry"}<select name="industry" required defaultValue=""><option value="" disabled>{es ? "Selecciona una industria" : "Select an industry"}</option>{(es ? ["Agroindustria y manufactura", "Retail y distribución", "Servicios financieros", "Comercio y empresas corporativas", "Logística y operaciones", "Empresas de servicios"] : ["Agribusiness & manufacturing", "Retail & distribution", "Financial services", "Commerce & corporate business", "Logistics & operations", "Service organizations"]).map((industry) => <option key={industry}>{industry}</option>)}</select></label>
        <label>{es ? "División de interés" : "Division of interest"}<select name="division" required defaultValue=""><option value="" disabled>{es ? "Selecciona una división" : "Select a division"}</option>{["Data & Analytics", "ERP & Enterprise Systems", "Financial Technology", "Software & AI", "Cloud & Infrastructure", "Cybersecurity & Compliance"].map((division) => <option key={division}>{division}</option>)}</select></label>
      </div>
      <label>{es ? "Descripción del proyecto" : "Project description"}<textarea name="message" rows={5} required /></label>
      <button className="button button-dark" type="submit">{es ? "Abrir correo para enviar" : "Open email to send"} <span aria-hidden="true">↗</span></button>
      <p className="form-note">{sent
        ? (es ? "Se abrió tu aplicación de correo para que puedas enviar el mensaje." : "Your email app opened so you can send your message.")
        : (es ? "El formulario prepara un correo en tu aplicación predeterminada; no almacena tus datos en este sitio." : "This form prepares an email in your default email app; it does not store your data on this site.")}</p>
    </form>
  );
}

export function ContentPage({ pageKey }: { pageKey: string }) {
  const { language } = useSiteLanguage();
  const content = pages[pageKey as PageKey];
  const es = language === "es";
  if (!content) return null;

  return (
    <>
      <section className="inner-hero">
        <div className="page-container inner-hero-content">
          <div className="breadcrumbs"><Link href="/">{es ? "Inicio" : "Home"}</Link><span>/</span><span>{content.eyebrow[es ? 0 : 1]}</span></div>
          <span className="eyebrow">{content.eyebrow[es ? 0 : 1]}</span>
          <h1>{content.title[es ? 0 : 1]}</h1>
          <p>{content.intro[es ? 0 : 1]}</p>
          {pageKey !== "contact" && <Link className="button button-primary" href="/contacto">{es ? "Conversemos" : "Let’s talk"} <span aria-hidden="true">↗</span></Link>}
          <div className="inner-hero-orb" aria-hidden="true"><span>DW</span></div>
        </div>
      </section>

      {pageKey === "contact" ? (
        <section className="section contact-section">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <span className="eyebrow">{es ? "CUÉNTANOS MÁS" : "TELL US MORE"}</span>
              <h2>{es ? "Una conversación puede ser el primer paso." : "A conversation can be the first step."}</h2>
              <p>{content.closing[es ? 0 : 1]}</p>
              <a className="contact-detail" href={`mailto:${siteConfig.contactEmail}`}><span className="contact-detail-icon">✳</span><span><small>EMAIL</small><strong>{siteConfig.contactEmail}</strong></span></a>
              <a className="contact-detail" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-detail-icon">↗</span><span><small>WHATSAPP</small><strong>{siteConfig.phoneDisplay}</strong></span></a>
            </div>
            <ContactForm language={language} />
          </div>
        </section>
      ) : (
        <section className="section content-list-section">
          <div className="page-container">
            <div className="content-grid">
              {content.items.map((item, index) => {
                const href = pageKey === "solutions" ? solutionHref[index] : undefined;
                const cardContent = (
                  <>
                    <span className="content-card-number">0{index + 1}</span>
                    <h2>{item.title[es ? 0 : 1]}</h2>
                    {pageKey === "products" && <span className="content-card-status">{es ? "EN EXPLORACIÓN" : "IN DISCOVERY"}</span>}
                    <p>{item.text[es ? 0 : 1]}</p>
                    {href && <span className="card-link">{es ? "Explorar división" : "Explore division"} <span aria-hidden="true">→</span></span>}
                  </>
                );
                return (
                  href
                    ? <Link className="content-card" href={href} key={item.title[0]}>{cardContent}</Link>
                    : <article className="content-card" key={item.title[0]}>{cardContent}</article>
                );
              })}
            </div>
            {["data", "finance", "software", "cloud"].includes(pageKey) ? (
              <div className="tech-callout">
                <span className="eyebrow">{es ? "STACK TECNOLÓGICO" : "TECHNOLOGY STACK"}</span>
                <p>{pageKey === "data"
                  ? "Python · SQL · Power BI · Microsoft Fabric · Azure · AWS · dbt · Databricks"
                  : pageKey === "finance"
                    ? "Python · SQL · Power BI · Excel · Microsoft Fabric · APIs · bases de datos empresariales"
                    : pageKey === "software"
                      ? "Python · FastAPI · React · Next.js · TypeScript · PostgreSQL · OpenAI API · n8n"
                      : "Azure · AWS · Microsoft 365 · cloud-native services · security by design"}</p>
                <small>{es ? "Las herramientas se seleccionan según los requisitos y el entorno de cada proyecto." : "Tools are selected to fit each project’s requirements and environment."}</small>
              </div>
            ) : null}
            <div className="content-closing">
              <span className="eyebrow">{es ? "SIGUIENTE PASO" : "NEXT STEP"}</span>
              <p>{content.closing[es ? 0 : 1]}</p>
              <Link className="text-link" href={pageKey === "insights" ? "/contacto" : "/contacto"}>{es ? "Hablemos" : "Get in touch"} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
