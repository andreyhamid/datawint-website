export type Copy = { es: string; en: string };
export type SolutionContent = {
  slug: string;
  name: string;
  eyebrow: Copy;
  summary: Copy;
  problems: Copy[];
  services: Copy[];
  technologies: string[];
  useCases: Copy[];
  benefits: Copy[];
  steps: Copy[];
  faqs: { question: Copy; answer: Copy }[];
};

export const solutions: Record<string, SolutionContent> = {
  data: {
    slug: "data-analytics", name: "Data & Analytics",
    eyebrow: { es: "DIVISIÓN 01 / DATOS E INTELIGENCIA", en: "DIVISION 01 / DATA & INTELLIGENCE" },
    summary: { es: "Transformamos datos dispersos en información confiable y estratégica para mejorar la toma de decisiones empresariales.", en: "We turn scattered data into trusted, strategic information that supports better business decisions." },
    problems: [
      { es: "Reportes que dependen de consolidaciones manuales.", en: "Reports that depend on manual consolidation." },
      { es: "Fuentes desconectadas y definiciones de indicadores inconsistentes.", en: "Disconnected sources and inconsistent metric definitions." },
      { es: "Baja visibilidad de calidad, linaje y responsabilidades de los datos.", en: "Limited visibility into data quality, lineage, and ownership." },
    ],
    services: [
      { es: "Data Engineering y automatización ETL / ELT", en: "Data engineering and ETL / ELT automation" },
      { es: "Data Warehouse, Lakehouse y modelado", en: "Data warehouse, lakehouse, and modeling" },
      { es: "Business Intelligence y Power BI", en: "Business intelligence and Power BI" },
      { es: "Calidad, catálogo, metadatos y linaje", en: "Data quality, catalog, metadata, and lineage" },
      { es: "Gobierno de datos y datos maestros", en: "Data governance and master data" },
      { es: "Arquitectura e integración de datos", en: "Data architecture and integration" },
    ],
    technologies: ["Python", "SQL", "Power BI", "Microsoft Fabric", "Azure", "Databricks", "dbt", "Apache Airflow", "PostgreSQL", "SQL Server"],
    useCases: [
      { es: "Consolidación de indicadores comerciales, financieros y operativos.", en: "Consolidating commercial, financial, and operational metrics." },
      { es: "Pipelines de datos automatizados con monitoreo y reglas de calidad.", en: "Automated data pipelines with monitoring and quality rules." },
      { es: "Modelos analíticos para planificación, segmentación y pronósticos.", en: "Analytical models for planning, segmentation, and forecasting." },
    ],
    benefits: [
      { es: "Una definición compartida de métricas y datos clave.", en: "Shared definitions for key data and metrics." },
      { es: "Menos tareas repetitivas de preparación de información.", en: "Less repetitive data preparation work." },
      { es: "Trazabilidad para comprender el origen y uso de la información.", en: "Traceability to understand where information comes from and how it is used." },
    ],
    steps: [
      { es: "Identificamos decisiones, fuentes y responsables.", en: "We identify decisions, sources, and owners." },
      { es: "Diseñamos modelos, arquitectura y reglas de gobierno.", en: "We design models, architecture, and governance rules." },
      { es: "Construimos e integramos flujos de forma iterativa.", en: "We build and integrate data flows iteratively." },
      { es: "Validamos calidad, adopción y evolución de la solución.", en: "We validate quality, adoption, and the solution’s evolution." },
    ],
    faqs: [
      { question: { es: "¿Pueden trabajar con las fuentes que ya tenemos?", en: "Can you work with our existing data sources?" }, answer: { es: "Sí. El diagnóstico identifica sistemas, formatos, permisos y calidad para definir una integración adecuada.", en: "Yes. Discovery reviews systems, formats, permissions, and quality to shape a suitable integration." } },
      { question: { es: "¿Data Governance es solo una herramienta?", en: "Is data governance only a tool?" }, answer: { es: "No. Incluye roles, políticas, procesos, catálogo, metadatos, linaje, calidad y gestión de datos maestros; las herramientas se eligen según el contexto.", en: "No. It includes roles, policies, processes, catalog, metadata, lineage, quality, and master data management; tools are selected for the context." } },
    ],
  },
  erp: {
    slug: "erp-enterprise-systems", name: "ERP & Enterprise Systems",
    eyebrow: { es: "DIVISIÓN 02 / SISTEMAS EMPRESARIALES", en: "DIVISION 02 / ENTERPRISE SYSTEMS" },
    summary: { es: "Integramos y optimizamos sistemas empresariales para conectar operaciones, finanzas e información corporativa.", en: "We integrate and improve enterprise systems to connect operations, finance, and corporate information." },
    problems: [
      { es: "Procesos ERP que requieren pasos manuales y conciliaciones frecuentes.", en: "ERP processes that require manual steps and frequent reconciliation." },
      { es: "Información duplicada entre ERP, aplicaciones y bases de datos.", en: "Duplicated information across ERP, applications, and databases." },
      { es: "Cambios al ERP difíciles de evaluar o coordinar entre áreas.", en: "ERP changes that are difficult to assess or coordinate across teams." },
    ],
    services: [
      { es: "Consultoría funcional y técnica SAP", en: "SAP functional and technical consulting" },
      { es: "SAP Business One y SAP HANA", en: "SAP Business One and SAP HANA" },
      { es: "Integración ERP con sistemas y datos", en: "ERP integration with systems and data" },
      { es: "Automatización de procesos contables y operativos", en: "Accounting and operational process automation" },
      { es: "APIs e intercambio de información", en: "APIs and information exchange" },
      { es: "Arquitectura empresarial y optimización ERP", en: "Enterprise architecture and ERP optimization" },
    ],
    technologies: ["SAP Business One", "SAP HANA", "SQL Server", "Python", "REST APIs", "PostgreSQL"],
    useCases: [
      { es: "Integración entre ERP, comercio electrónico, CRM y plataformas analíticas.", en: "Integration between ERP, ecommerce, CRM, and analytics platforms." },
      { es: "Automatización de movimientos, validaciones y conciliaciones.", en: "Automation of transactions, validations, and reconciliations." },
      { es: "Extracción de información del ERP para reportes y modelos de datos.", en: "ERP data extraction for reporting and data models." },
    ],
    benefits: [
      { es: "Menos reprocesos al conectar sistemas y procesos.", en: "Less rework through connected systems and processes." },
      { es: "Mayor consistencia entre los registros corporativos.", en: "More consistent corporate records." },
      { es: "Cambios técnicos definidos con contexto operativo.", en: "Technical changes shaped by operational context." },
    ],
    steps: [
      { es: "Mapeamos procesos, sistemas y dependencias.", en: "We map processes, systems, and dependencies." },
      { es: "Definimos alcance, arquitectura e interfaces.", en: "We define scope, architecture, and interfaces." },
      { es: "Configuramos, integramos y validamos los flujos.", en: "We configure, integrate, and validate workflows." },
      { es: "Documentamos y acompañamos la evolución.", en: "We document and support ongoing improvements." },
    ],
    faqs: [
      { question: { es: "¿DataWint es partner oficial de SAP?", en: "Is DataWint an official SAP partner?" }, answer: { es: "No afirmamos una alianza oficial. El alcance de consultoría e integración se define según el proyecto y las capacidades requeridas.", en: "We do not claim an official partnership. Consulting and integration scope is defined by project needs and required capabilities." } },
      { question: { es: "¿Pueden conectar SAP con Power BI u otras plataformas?", en: "Can you connect SAP with Power BI or other platforms?" }, answer: { es: "La integración se evalúa según la versión, arquitectura, permisos y mecanismos disponibles en cada entorno.", en: "Integration is assessed based on each environment’s version, architecture, permissions, and available methods." } },
    ],
  },
  finance: {
    slug: "financial-technology", name: "Financial Technology",
    eyebrow: { es: "DIVISIÓN 03 / TECNOLOGÍA FINANCIERA", en: "DIVISION 03 / FINANCIAL TECHNOLOGY" },
    summary: { es: "Desarrollamos soluciones tecnológicas para automatizar la gestión financiera, optimizar recursos y mejorar el control económico.", en: "We build technology solutions to automate financial management, optimize resources, and improve financial control." },
    problems: [
      { es: "Presupuestos y proyecciones en archivos desconectados.", en: "Budgets and forecasts in disconnected files." },
      { es: "Reportes financieros que consumen tiempo en cada cierre.", en: "Financial reports that take time to prepare at each close." },
      { es: "Poca visibilidad de caja, costos y rentabilidad por unidad de negocio.", en: "Limited visibility into cash, costs, and profitability by business unit." },
    ],
    services: [
      { es: "FP&A, modelamiento y planificación financiera", en: "FP&A, financial modeling, and planning" },
      { es: "Presupuestos y forecast", en: "Budgeting and forecasting" },
      { es: "Gestión de caja y tesorería", en: "Cash flow and treasury management" },
      { es: "Automatización de reportes y estados financieros", en: "Financial reporting and statement automation" },
      { es: "Gestión de costos y rentabilidad", en: "Cost and profitability management" },
      { es: "KPIs financieros y evaluación de proyectos", en: "Financial KPIs and project evaluation" },
    ],
    technologies: ["Python", "SQL", "Power BI", "Excel", "APIs", "ERP", "PostgreSQL"],
    useCases: [
      { es: "Consolidación de presupuesto y escenarios por área.", en: "Budget and scenario consolidation by department." },
      { es: "Seguimiento de caja, desviaciones y necesidades de liquidez.", en: "Monitoring cash, variances, and liquidity needs." },
      { es: "Análisis de márgenes por producto, cliente o canal.", en: "Margin analysis by product, customer, or channel." },
    ],
    benefits: [
      { es: "Ciclos de planificación conectados con la operación.", en: "Planning cycles connected to operations." },
      { es: "Información financiera más consistente y oportuna.", en: "More consistent and timely financial information." },
      { es: "Análisis de desempeño con definiciones compartidas.", en: "Performance analysis based on shared definitions." },
    ],
    steps: [
      { es: "Alineamos objetivos financieros y calendario.", en: "We align on financial goals and timelines." },
      { es: "Mapeamos fuentes, supuestos y responsables.", en: "We map data sources, assumptions, and owners." },
      { es: "Automatizamos modelos, reportes y controles.", en: "We automate models, reporting, and controls." },
      { es: "Revisamos resultados y ajustamos el modelo.", en: "We review outcomes and refine the model." },
    ],
    faqs: [
      { question: { es: "¿Reemplaza el ERP o el sistema contable?", en: "Does it replace our ERP or accounting system?" }, answer: { es: "No necesariamente. El trabajo suele integrar y complementar los sistemas existentes según las necesidades del proceso.", en: "Not necessarily. The work often integrates and complements existing systems based on process needs." } },
      { question: { es: "¿Se puede adaptar a nuestro plan de cuentas?", en: "Can it fit our chart of accounts?" }, answer: { es: "Sí. La estructura contable, centros de costo y dimensiones de análisis forman parte del levantamiento inicial.", en: "Yes. The chart of accounts, cost centers, and analysis dimensions are reviewed during discovery." } },
    ],
  },
  software: {
    slug: "software-ai", name: "Software & AI",
    eyebrow: { es: "DIVISIÓN 04 / SOFTWARE E INTELIGENCIA ARTIFICIAL", en: "DIVISION 04 / SOFTWARE & ARTIFICIAL INTELLIGENCE" },
    summary: { es: "Diseñamos aplicaciones inteligentes que automatizan procesos, conectan sistemas y crean nuevas oportunidades de negocio.", en: "We design intelligent applications that automate processes, connect systems, and create new business opportunities." },
    problems: [
      { es: "Procesos críticos resueltos con hojas de cálculo y tareas manuales.", en: "Critical workflows handled through spreadsheets and manual tasks." },
      { es: "Herramientas que no se comunican entre sí.", en: "Tools that do not communicate with one another." },
      { es: "Iniciativas de IA sin un caso de uso claro ni evaluación de riesgos.", en: "AI initiatives without a clear use case or risk review." },
    ],
    services: [
      { es: "Aplicaciones empresariales y plataformas web", en: "Enterprise applications and web platforms" },
      { es: "Desarrollo de SaaS y aplicaciones a medida", en: "SaaS and custom application development" },
      { es: "APIs e integración de sistemas", en: "APIs and systems integration" },
      { es: "Agentes de IA y asistentes empresariales", en: "AI agents and business assistants" },
      { es: "RAG, búsqueda y procesamiento documental", en: "RAG, search, and document processing" },
      { es: "Automatización inteligente de procesos", en: "Intelligent process automation" },
    ],
    technologies: ["Python", "FastAPI", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "OpenAI API"],
    useCases: [
      { es: "Portales internos para operaciones y gestión de solicitudes.", en: "Internal portals for operations and service requests." },
      { es: "Asistentes que consultan documentación empresarial autorizada.", en: "Assistants that query approved business documentation." },
      { es: "Automatización de clasificación y extracción documental.", en: "Document classification and data extraction automation." },
    ],
    benefits: [
      { es: "Experiencias digitales alineadas con los procesos del equipo.", en: "Digital experiences aligned with team workflows." },
      { es: "Integraciones que reducen tareas duplicadas.", en: "Integrations that reduce duplicate work." },
      { es: "IA evaluada con límites, permisos y supervisión humana.", en: "AI designed with boundaries, permissions, and human oversight." },
    ],
    steps: [
      { es: "Elegimos un problema y criterio de éxito claros.", en: "We define a clear problem and success criteria." },
      { es: "Diseñamos experiencia, datos y arquitectura.", en: "We design the experience, data, and architecture." },
      { es: "Construimos un alcance inicial y validamos con usuarios.", en: "We build an initial scope and validate it with users." },
      { es: "Desplegamos, medimos y evolucionamos.", en: "We deploy, measure, and iterate." },
    ],
    faqs: [
      { question: { es: "¿Cómo evalúan si un proceso necesita IA?", en: "How do you assess whether a process needs AI?" }, answer: { es: "Revisamos el problema, los datos, el costo de error y las alternativas. Si reglas o software tradicional resuelven mejor el caso, se prioriza esa opción.", en: "We review the problem, data, error cost, and alternatives. If rules or conventional software fit better, we recommend that path." } },
      { question: { es: "¿La IA puede trabajar con documentos internos?", en: "Can AI work with internal documents?" }, answer: { es: "Se puede diseñar búsqueda con permisos y fuentes controladas; cada caso requiere revisar privacidad, accesos y retención.", en: "Permission-aware search over controlled sources can be designed; each case requires privacy, access, and retention review." } },
    ],
  },
  cloud: {
    slug: "cloud-infrastructure", name: "Cloud & Infrastructure",
    eyebrow: { es: "DIVISIÓN 05 / CLOUD E INFRAESTRUCTURA", en: "DIVISION 05 / CLOUD & INFRASTRUCTURE" },
    summary: { es: "Diseñamos infraestructuras tecnológicas escalables, seguras y eficientes para acompañar las operaciones empresariales.", en: "We design scalable, secure, and efficient technology infrastructure for enterprise operations." },
    problems: [
      { es: "Entornos cloud con costos, accesos y recursos poco visibles.", en: "Cloud environments with limited cost, access, and resource visibility." },
      { es: "Despliegues manuales difíciles de repetir y auditar.", en: "Manual deployments that are difficult to repeat and review." },
      { es: "Aplicaciones e infraestructura que no escalan con la demanda.", en: "Applications and infrastructure that do not scale with demand." },
    ],
    services: [
      { es: "Arquitectura y migración cloud", en: "Cloud architecture and migration" },
      { es: "Microsoft Azure y Amazon Web Services", en: "Microsoft Azure and Amazon Web Services" },
      { es: "Gestión y optimización de infraestructura", en: "Infrastructure management and optimization" },
      { es: "DevOps y automatización CI/CD", en: "DevOps and CI/CD automation" },
      { es: "Docker, Kubernetes e infraestructura como código", en: "Docker, Kubernetes, and infrastructure as code" },
      { es: "Bases de datos, monitoreo y observabilidad", en: "Databases, monitoring, and observability" },
    ],
    technologies: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux", "PostgreSQL"],
    useCases: [
      { es: "Migración planificada de aplicaciones y bases de datos.", en: "Planned migration of applications and databases." },
      { es: "Pipelines de despliegue con validaciones automatizadas.", en: "Deployment pipelines with automated checks." },
      { es: "Observabilidad de servicios, infraestructura y costos.", en: "Service, infrastructure, and cost observability." },
    ],
    benefits: [
      { es: "Entornos documentados y más repetibles.", en: "Documented and more repeatable environments." },
      { es: "Mayor visibilidad operativa y de consumo.", en: "Better operational and usage visibility." },
      { es: "Arquitectura que considera continuidad y crecimiento.", en: "Architecture that accounts for continuity and growth." },
    ],
    steps: [
      { es: "Revisamos arquitectura, cargas y restricciones.", en: "We review architecture, workloads, and constraints." },
      { es: "Diseñamos una ruta de transición y operación.", en: "We design a transition and operations plan." },
      { es: "Implementamos infraestructura y automatización.", en: "We implement infrastructure and automation." },
      { es: "Monitoreamos y ajustamos capacidad y costos.", en: "We monitor and adjust capacity and cost." },
    ],
    faqs: [
      { question: { es: "¿Trabajan con Azure y AWS?", en: "Do you work with Azure and AWS?" }, answer: { es: "La arquitectura se plantea según requisitos, capacidades internas y servicios disponibles en el entorno del cliente.", en: "Architecture is shaped around requirements, internal capabilities, and services available in the customer environment." } },
      { question: { es: "¿Pueden migrar sin interrumpir la operación?", en: "Can you migrate without disrupting operations?" }, answer: { es: "La estrategia depende de cada carga. Se identifican ventanas, dependencias, respaldo y criterios de reversión durante la planificación.", en: "The strategy depends on each workload. Maintenance windows, dependencies, backups, and rollback criteria are planned." } },
    ],
  },
  security: {
    slug: "cybersecurity-compliance", name: "Cybersecurity & Compliance",
    eyebrow: { es: "DIVISIÓN 06 / CIBERSEGURIDAD Y GOBIERNO", en: "DIVISION 06 / CYBERSECURITY & GOVERNANCE" },
    summary: { es: "Ayudamos a proteger activos digitales y sistemas mediante prácticas de seguridad, gestión de riesgos y controles tecnológicos.", en: "We help protect digital assets and systems through security practices, risk management, and technology controls." },
    problems: [
      { es: "Accesos y privilegios que no se revisan de forma periódica.", en: "Access and privileges that are not reviewed regularly." },
      { es: "Vulnerabilidades sin un proceso claro de priorización.", en: "Vulnerabilities without a clear prioritization process." },
      { es: "Controles y evidencias distribuidos entre equipos y plataformas.", en: "Controls and evidence spread across teams and platforms." },
    ],
    services: [
      { es: "Consultoría de ciberseguridad y evaluación de riesgos", en: "Cybersecurity consulting and risk assessment" },
      { es: "Seguridad cloud, aplicaciones y bases de datos", en: "Cloud, application, and database security" },
      { es: "Gestión de identidades y accesos (IAM)", en: "Identity and access management (IAM)" },
      { es: "Gestión y priorización de vulnerabilidades", en: "Vulnerability management and prioritization" },
      { es: "Protección de datos y gobierno de seguridad", en: "Data protection and security governance" },
      { es: "Asesoría sobre marcos ISO 27001 y NIST CSF", en: "ISO 27001 and NIST CSF framework advisory" },
    ],
    technologies: ["Microsoft Entra", "Azure Security", "AWS Security", "Linux", "OWASP", "NIST CSF", "ISO 27001"],
    useCases: [
      { es: "Revisión de roles, permisos y ciclo de vida de usuarios.", en: "Review of roles, permissions, and user lifecycle." },
      { es: "Priorización de vulnerabilidades por contexto y exposición.", en: "Prioritizing vulnerabilities by context and exposure." },
      { es: "Inventario de controles y preparación de evidencias internas.", en: "Control inventory and preparation of internal evidence." },
    ],
    benefits: [
      { es: "Riesgos y controles más visibles para los responsables.", en: "Risks and controls made clearer to owners." },
      { es: "Accesos evaluados según función y necesidad.", en: "Access evaluated according to role and need." },
      { es: "Una hoja de ruta priorizada para mejorar prácticas.", en: "A prioritized roadmap for improving practices." },
    ],
    steps: [
      { es: "Definimos alcance, activos y contexto de riesgo.", en: "We define scope, assets, and risk context." },
      { es: "Revisamos controles, identidades y exposición.", en: "We review controls, identities, and exposure." },
      { es: "Priorizamos acciones con responsables y plazos.", en: "We prioritize actions with owners and timelines." },
      { es: "Acompañamos la mejora y seguimiento de controles.", en: "We support improvement and control follow-up." },
    ],
    faqs: [
      { question: { es: "¿DataWint certifica ISO 27001 o realiza auditorías acreditadas?", en: "Does DataWint certify ISO 27001 or perform accredited audits?" }, answer: { es: "No. Podemos brindar asesoría sobre marcos y controles, pero no afirmamos emitir certificaciones ni auditorías acreditadas.", en: "No. We can advise on frameworks and controls, but do not claim to issue certifications or accredited audits." } },
      { question: { es: "¿Ofrecen monitoreo SOC 24/7?", en: "Do you provide 24/7 SOC monitoring?" }, answer: { es: "No anunciamos un SOC administrado. El alcance de monitoreo se define según herramientas, equipo y operación del cliente.", en: "We do not advertise a managed SOC. Monitoring scope is defined around the customer’s tools, team, and operations." } },
    ],
  },
};
