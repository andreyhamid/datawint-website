"use client";

import { useState } from "react";

type Language = "es" | "en";

const pipeline = [
  { id: "erp", es: "ERP", en: "ERP", detailEs: "Operación · finanzas", detailEn: "Operations · finance" },
  { id: "engineering", es: "Data Engineering", en: "Data Engineering", detailEs: "Integración · calidad", detailEn: "Integration · quality" },
  { id: "warehouse", es: "Data Warehouse", en: "Data Warehouse", detailEs: "Datos gobernados", detailEn: "Governed data" },
  { id: "bi", es: "Business Intelligence", en: "Business Intelligence", detailEs: "Indicadores · reportes", detailEn: "Metrics · reporting" },
  { id: "finance", es: "Financial Intelligence", en: "Financial Intelligence", detailEs: "Caja · rentabilidad", detailEn: "Cash · profitability" },
  { id: "ai", es: "Inteligencia Artificial", en: "Artificial Intelligence", detailEs: "Modelos · asistentes", detailEn: "Models · assistants" },
];

export function DataArchitecture({ language }: { language: Language }) {
  const es = language === "es";

  return (
    <section className="section architecture-section" aria-labelledby="architecture-title" data-scroll-reveal>
      <div className="page-container">
        <div className="section-heading architecture-heading">
          <span className="eyebrow">{es ? "ARQUITECTURA CONECTADA" : "CONNECTED ARCHITECTURE"}</span>
          <h2 id="architecture-title">{es ? "De tus sistemas a decisiones más claras." : "From your systems to clearer decisions."}</h2>
          <p>{es ? "Una ruta de datos pensada para integrar, gobernar y activar la información de tu empresa." : "A data path designed to integrate, govern, and activate your business information."}</p>
        </div>

        <div className="architecture-map" role="group" aria-label={es ? "Flujo de integración empresarial" : "Enterprise data integration flow"}>
          <div className="architecture-map-top"><span className="architecture-live-dot" />{es ? "FLUJO DE INFORMACIÓN" : "INFORMATION FLOW"}<span>DATAWINT / 01</span></div>
          <ol className="pipeline-list">
            {pipeline.map((stage, index) => (
              <li className={`pipeline-stage pipeline-${stage.id}`} key={stage.id}>
                {index > 0 && <span className="pipeline-connector" aria-hidden="true"><i /></span>}
                <div className="pipeline-node">
                  <span className="pipeline-index">0{index + 1}</span>
                  <span className="pipeline-node-icon" aria-hidden="true">{["▦", "↗", "◈", "▤", "∑", "✳"][index]}</span>
                  <strong>{es ? stage.es : stage.en}</strong>
                  <small>{es ? stage.detailEs : stage.detailEn}</small>
                </div>
              </li>
            ))}
          </ol>
          <div className="architecture-map-foot"><span>{es ? "CAPTURAR" : "INGEST"}</span><span>{es ? "ORGANIZAR" : "ORGANIZE"}</span><span>{es ? "ACTIVAR" : "ACTIVATE"}</span></div>
        </div>
      </div>
    </section>
  );
}

const metrics = {
  revenue: {
    es: { label: "Ingresos", value: "S/ 842 mil", change: "+8.4%", points: "0,126 52,112 104,119 156,82 208,91 260,61 312,75 364,43 416,52 468,18" },
    en: { label: "Revenue", value: "S/ 842K", change: "+8.4%", points: "0,126 52,112 104,119 156,82 208,91 260,61 312,75 364,43 416,52 468,18" },
  },
  cash: {
    es: { label: "Flujo de caja", value: "S/ 316 mil", change: "+5.2%", points: "0,114 52,119 104,96 156,104 208,70 260,83 312,52 364,64 416,36 468,28" },
    en: { label: "Cash flow", value: "S/ 316K", change: "+5.2%", points: "0,114 52,119 104,96 156,104 208,70 260,83 312,52 364,64 416,36 468,28" },
  },
  margin: {
    es: { label: "Margen operativo", value: "24.8%", change: "+2.1 pts", points: "0,123 52,105 104,109 156,90 208,98 260,63 312,70 364,47 416,39 468,22" },
    en: { label: "Operating margin", value: "24.8%", change: "+2.1 pts", points: "0,123 52,105 104,109 156,90 208,98 260,63 312,70 364,47 416,39 468,22" },
  },
};

type MetricKey = keyof typeof metrics;

export function FinanceDashboard({ language }: { language: Language }) {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("revenue");
  const es = language === "es";
  const metric = metrics[activeMetric][language];

  const tabs: { key: MetricKey; label: string }[] = [
    { key: "revenue", label: es ? "Ingresos" : "Revenue" },
    { key: "cash", label: es ? "Flujo de caja" : "Cash flow" },
    { key: "margin", label: es ? "Margen" : "Margin" },
  ];

  return (
    <section className="section finance-demo-section" aria-labelledby="finance-demo-title" data-scroll-reveal>
      <div className="page-container finance-demo-layout">
        <div className="finance-demo-copy">
          <span className="eyebrow">{es ? "DATAWINT FINANCIAL INTELLIGENCE" : "DATAWINT FINANCIAL INTELLIGENCE"}</span>
          <h2 id="finance-demo-title">{es ? "Una lectura conectada del negocio." : "A connected view of your business."}</h2>
          <p>{es ? "Explora una demostración de cómo presupuestos, caja y rentabilidad pueden convivir en una sola vista gerencial." : "Explore a demo of how budgets, cash flow, and profitability can come together in one management view."}</p>
          <span className="demo-disclaimer">{es ? "Datos referenciales para fines demostrativos." : "Illustrative data for demonstration purposes."}</span>
        </div>

        <div className="finance-dashboard">
          <div className="dashboard-topbar">
            <div className="dashboard-brand"><span className="dashboard-brand-mark">D</span><span>FINANCIAL INTELLIGENCE<small>{es ? "VISTA GERENCIAL" : "MANAGEMENT VIEW"}</small></span></div>
            <span className="dashboard-period"><span />{es ? "ÚLTIMOS 10 MESES" : "LAST 10 MONTHS"}</span>
          </div>
          <div className="dashboard-content">
            <div className="dashboard-tabs" role="group" aria-label={es ? "Indicador financiero" : "Financial metric"}>
              {tabs.map((tab) => <button key={tab.key} type="button" aria-pressed={activeMetric === tab.key} className={activeMetric === tab.key ? "is-active" : ""} onClick={() => setActiveMetric(tab.key)}>{tab.label}</button>)}
            </div>
            <div className="dashboard-metric" aria-live="polite">
              <div><span>{metric.label}</span><strong>{metric.value}</strong></div>
              <span className="metric-change">↗ {metric.change}</span>
            </div>
            <div className="dashboard-chart-wrap">
              <svg className="dashboard-chart" viewBox="0 0 468 150" role="img" aria-label={`${metric.label}: ${metric.value}`} preserveAspectRatio="none">
                <defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#42c5d2" stopOpacity=".24"/><stop offset="100%" stopColor="#42c5d2" stopOpacity="0"/></linearGradient></defs>
                {[28, 65, 102, 139].map((y) => <line key={y} x1="0" y1={y} x2="468" y2={y} className="chart-gridline" />)}
                <polygon points={`0,150 ${metric.points} 468,150`} fill="url(#chart-fill)" />
                <polyline points={metric.points} className="chart-line" />
              </svg>
              <div className="chart-months"><span>{es ? "ENE" : "JAN"}</span><span>{es ? "MAR" : "MAR"}</span><span>{es ? "MAY" : "MAY"}</span><span>{es ? "JUL" : "JUL"}</span><span>{es ? "SEP" : "SEP"}</span><span>{es ? "OCT" : "OCT"}</span></div>
            </div>
            <div className="dashboard-foot"><span><i className="dashboard-legend-dot" />{metric.label}</span><span>{es ? "ACTUALIZACIÓN DEMOSTRATIVA" : "DEMO UPDATE"}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
