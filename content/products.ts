/**
 * Contenido de los productos SaaS de DATAWINT.
 *
 * Reglas (ver CLAUDE.md):
 * - Estados válidos: "en-desarrollo" | "proximamente" | "disponible".
 * - Ningún texto debe afirmar disponibilidad ni funcionalidad operativa mientras el estado no sea "disponible".
 * - Nombres de módulos en inglés; resto del contenido bilingüe (es/en).
 *
 * TEXTOS PROVISIONALES: redactados a partir de los resúmenes existentes del sitio.
 * Reemplazar por las descripciones y módulos definitivos cuando estén aprobados.
 */

export type Copy = { es: string; en: string };

export type ProductStatus = "en-desarrollo" | "proximamente" | "disponible";

export const productStatusLabels: Record<ProductStatus, Copy> = {
  "en-desarrollo": { es: "En desarrollo", en: "In development" },
  proximamente: { es: "Próximamente", en: "Coming soon" },
  disponible: { es: "Disponible", en: "Available" },
};

export type ProductMockupKind = "finance" | "data" | "copilot";

export type ProductContent = {
  key: string;
  slug: string;
  name: string;
  code: string;
  status: ProductStatus;
  tagline: Copy;
  summary: Copy;
  seo: { title: string; description: string };
  problems: Copy[];
  modules: { name: string; description: Copy }[];
  benefits: Copy[];
  audience: Copy[];
  useCases: Copy[];
  mockup: ProductMockupKind;
};

export const products: ProductContent[] = [
  {
    key: "financial-intelligence",
    slug: "financial-intelligence",
    name: "DataWint Financial Intelligence",
    code: "FIN",
    status: "en-desarrollo",
    tagline: { es: "Planificación, control y visibilidad financiera en un solo lugar.", en: "Financial planning, control, and visibility in one place." },
    summary: {
      es: "Plataforma en desarrollo pensada para reunir presupuestos, flujo de caja, rentabilidad y reporting gerencial sobre una base de datos financiera común.",
      en: "A platform in development designed to bring budgets, cash flow, profitability, and management reporting together on a shared financial data foundation.",
    },
    seo: {
      title: "DataWint Financial Intelligence (en desarrollo)",
      description: "Producto SaaS en desarrollo para planificación presupuestaria, gestión de flujo de caja, rentabilidad y reporting gerencial.",
    },
    problems: [
      { es: "Presupuestos y forecasts que viven en hojas de cálculo desconectadas.", en: "Budgets and forecasts that live in disconnected spreadsheets." },
      { es: "Poca anticipación sobre la posición de caja de las próximas semanas.", en: "Limited foresight into the cash position for the coming weeks." },
      { es: "Cierres y reportes gerenciales que exigen consolidaciones manuales.", en: "Closings and management reports that require manual consolidation." },
    ],
    modules: [
      { name: "Budget Planning", description: { es: "Elaboración y seguimiento de presupuestos por área, centro de costo y escenario.", en: "Budget preparation and tracking by area, cost center, and scenario." } },
      { name: "Cash Flow Management", description: { es: "Proyección de ingresos y egresos para anticipar necesidades de liquidez.", en: "Projected inflows and outflows to anticipate liquidity needs." } },
      { name: "Profitability Analytics", description: { es: "Análisis de márgenes por producto, cliente, canal y línea de negocio.", en: "Margin analysis by product, customer, channel, and business line." } },
      { name: "Management Reporting", description: { es: "Reportes gerenciales consistentes a partir de definiciones de indicadores compartidas.", en: "Consistent management reports based on shared metric definitions." } },
    ],
    benefits: [
      { es: "Una sola versión de las cifras financieras para todas las áreas.", en: "A single version of the financial figures for every team." },
      { es: "Menos tiempo en consolidación y más tiempo en análisis.", en: "Less time consolidating and more time analyzing." },
      { es: "Decisiones de liquidez y rentabilidad con mayor anticipación.", en: "Earlier, better-informed liquidity and profitability decisions." },
    ],
    audience: [
      { es: "Gerencias de finanzas (CFO)", en: "Finance leadership (CFO)" },
      { es: "Controllers y FP&A", en: "Controllers and FP&A" },
      { es: "Tesorería", en: "Treasury" },
      { es: "Gerencia general", en: "Executive management" },
      { es: "Medianas y grandes empresas", en: "Mid-size and large companies" },
    ],
    useCases: [
      { es: "Comparar mensualmente el presupuesto contra lo real por centro de costo.", en: "Compare budget versus actuals by cost center every month." },
      { es: "Proyectar el flujo de caja de las próximas 13 semanas.", en: "Project cash flow for the next 13 weeks." },
      { es: "Identificar las líneas de negocio con menor margen y sus causas.", en: "Identify the lowest-margin business lines and their drivers." },
    ],
    mockup: "finance",
  },
  {
    key: "data-platform",
    slug: "data-platform",
    name: "DataWint Data Platform",
    code: "DATA",
    status: "en-desarrollo",
    tagline: { es: "Integración, monitoreo y calidad de datos para toda la organización.", en: "Data integration, monitoring, and quality across the organization." },
    summary: {
      es: "Plataforma en desarrollo orientada a integrar fuentes, monitorear procesos ETL y mejorar la calidad y trazabilidad de los datos empresariales.",
      en: "A platform in development aimed at integrating sources, monitoring ETL processes, and improving the quality and traceability of business data.",
    },
    seo: {
      title: "DataWint Data Platform (en desarrollo)",
      description: "Producto SaaS en desarrollo para integración de fuentes, monitoreo de procesos ETL, calidad de datos y catálogo.",
    },
    problems: [
      { es: "Procesos de carga que fallan sin que nadie lo note a tiempo.", en: "Load processes that fail without anyone noticing in time." },
      { es: "Datos duplicados, incompletos o inconsistentes entre sistemas.", en: "Duplicated, incomplete, or inconsistent data across systems." },
      { es: "Poca claridad sobre el origen, el responsable y el significado de cada dato.", en: "Little clarity about each data point’s origin, owner, and meaning." },
    ],
    modules: [
      { name: "Data Integration", description: { es: "Conexión con ERP, bases de datos, archivos y APIs en un flujo ordenado.", en: "Connections to ERPs, databases, files, and APIs in an orderly flow." } },
      { name: "Pipeline Monitoring", description: { es: "Seguimiento de ejecuciones, tiempos y errores de los procesos ETL / ELT.", en: "Tracking of ETL / ELT runs, durations, and errors." } },
      { name: "Data Quality", description: { es: "Reglas de validación para detectar datos incompletos o inconsistentes.", en: "Validation rules to detect incomplete or inconsistent data." } },
      { name: "Data Catalog", description: { es: "Catálogo con definiciones, responsables y linaje de los datos.", en: "A catalog with data definitions, ownership, and lineage." } },
    ],
    benefits: [
      { es: "Mayor confianza en la información que llega a reportes y análisis.", en: "Greater trust in the information that reaches reports and analysis." },
      { es: "Detección temprana de fallas en los procesos de datos.", en: "Early detection of data process failures." },
      { es: "Responsabilidades y definiciones claras sobre los datos.", en: "Clear data ownership and definitions." },
    ],
    audience: [
      { es: "Equipos de datos y BI", en: "Data and BI teams" },
      { es: "Áreas de TI", en: "IT departments" },
      { es: "Data owners de negocio", en: "Business data owners" },
      { es: "Empresas con múltiples sistemas", en: "Companies with multiple systems" },
    ],
    useCases: [
      { es: "Centralizar la información de ventas, inventario y finanzas de varios sistemas.", en: "Centralize sales, inventory, and finance data from several systems." },
      { es: "Recibir alertas cuando una carga nocturna falla o llega incompleta.", en: "Get alerts when a nightly load fails or arrives incomplete." },
      { es: "Documentar el origen de los indicadores que usa la gerencia.", en: "Document where management’s metrics come from." },
    ],
    mockup: "data",
  },
  {
    key: "business-copilot",
    slug: "business-copilot",
    name: "DataWint Business Copilot",
    code: "AI",
    status: "en-desarrollo",
    tagline: { es: "Consulta indicadores y analiza información empresarial en lenguaje natural.", en: "Query metrics and analyze business information in natural language." },
    summary: {
      es: "Asistente en desarrollo que busca permitir consultar indicadores y analizar información empresarial con inteligencia artificial, sobre datos gobernados de la propia organización.",
      en: "An assistant in development that aims to let teams query metrics and analyze business information with artificial intelligence, on the organization’s own governed data.",
    },
    seo: {
      title: "DataWint Business Copilot (en desarrollo)",
      description: "Producto SaaS en desarrollo para consultar indicadores y analizar información empresarial con inteligencia artificial.",
    },
    problems: [
      { es: "Preguntas de negocio que dependen de que alguien prepare un reporte.", en: "Business questions that depend on someone preparing a report." },
      { es: "Dashboards con mucha información y pocas respuestas concretas.", en: "Dashboards with plenty of information and few concrete answers." },
      { es: "Dudas sobre la seguridad y el control al usar IA con datos de la empresa.", en: "Concerns about security and control when using AI with company data." },
    ],
    modules: [
      { name: "Natural Language Query", description: { es: "Preguntas en lenguaje natural sobre indicadores y datos autorizados.", en: "Natural-language questions about authorized metrics and data." } },
      { name: "KPI Insights", description: { es: "Explicaciones sobre variaciones y tendencias de los indicadores clave.", en: "Explanations of variations and trends in key metrics." } },
      { name: "Executive Summaries", description: { es: "Resúmenes periódicos del desempeño para la gerencia.", en: "Periodic performance summaries for leadership." } },
      { name: "Access Governance", description: { es: "Respuestas limitadas a los datos que cada usuario tiene permiso de ver.", en: "Answers limited to the data each user is allowed to see." } },
    ],
    benefits: [
      { es: "Respuestas más rápidas a preguntas de negocio frecuentes.", en: "Faster answers to frequent business questions." },
      { es: "Menor dependencia de reportes preparados a mano.", en: "Less reliance on hand-built reports." },
      { es: "Uso de IA con control de acceso y trazabilidad.", en: "AI usage with access control and traceability." },
    ],
    audience: [
      { es: "Gerencia general y comités", en: "Executive teams and committees" },
      { es: "Líderes comerciales y de operaciones", en: "Sales and operations leaders" },
      { es: "Analistas de negocio", en: "Business analysts" },
      { es: "Organizaciones con datos ya centralizados", en: "Organizations with centralized data" },
    ],
    useCases: [
      { es: "Preguntar cómo evolucionaron las ventas por región en el último trimestre.", en: "Ask how sales by region evolved last quarter." },
      { es: "Pedir una explicación de por qué cayó el margen de una línea de producto.", en: "Ask why a product line’s margin dropped." },
      { es: "Preparar un resumen ejecutivo antes de un comité de gerencia.", en: "Prepare an executive summary ahead of a leadership meeting." },
    ],
    mockup: "copilot",
  },
];

export const productsBySlug: Record<string, ProductContent> = Object.fromEntries(products.map((p) => [p.slug, p]));

export const productHref = (product: ProductContent) => `/productos/${product.slug}`;
