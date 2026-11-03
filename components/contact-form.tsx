"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";

const industries = {
  es: ["Agroindustria y manufactura", "Retail y distribución", "Servicios financieros", "Comercio y empresas corporativas", "Logística y operaciones", "Empresas de servicios"],
  en: ["Agribusiness & manufacturing", "Retail & distribution", "Financial services", "Commerce & corporate business", "Logistics & operations", "Service organizations"],
};
const divisions = ["Data & Analytics", "ERP & Enterprise Systems", "Financial Technology", "Software & AI", "Cloud & Infrastructure", "Cybersecurity & Compliance"];

/**
 * Formulario de contacto. Prepara un correo (mailto) y no almacena datos en el sitio.
 * Con `productName`, funciona como solicitud de demostración de ese producto.
 */
export function ContactForm({ language, productName }: { language: "es" | "en"; productName?: string }) {
  const [sent, setSent] = useState(false);
  const es = language === "es";
  const isDemo = Boolean(productName);
  const interestLabel = isDemo ? (es ? "Producto de interés" : "Product of interest") : (es ? "División de interés" : "Division of interest");
  const interestOptions = isDemo ? products.map((product) => product.name) : divisions;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const prefix = isDemo
      ? `${es ? "Solicitud de demostración" : "Demo request"} — ${formData.get("division")}`
      : (es ? "Consulta desde DataWint" : "Inquiry from DataWint");
    const subject = encodeURIComponent(`${prefix} — ${formData.get("name")}`);
    const body = encodeURIComponent([
      `${es ? "Nombre" : "Name"}: ${formData.get("name")}`,
      `${es ? "Correo" : "Email"}: ${formData.get("email")}`,
      `${es ? "Empresa" : "Company"}: ${formData.get("company")}`,
      `${es ? "Teléfono" : "Phone"}: ${formData.get("phone")}`,
      `${es ? "Industria" : "Industry"}: ${formData.get("industry")}`,
      `${interestLabel}: ${formData.get("division")}`,
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
        <label>{es ? "Industria" : "Industry"}<select name="industry" required defaultValue=""><option value="" disabled>{es ? "Selecciona una industria" : "Select an industry"}</option>{industries[language].map((industry) => <option key={industry}>{industry}</option>)}</select></label>
        <label>{interestLabel}<select name="division" required defaultValue={productName ?? ""}><option value="" disabled>{isDemo ? (es ? "Selecciona un producto" : "Select a product") : (es ? "Selecciona una división" : "Select a division")}</option>{interestOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <label>{isDemo ? (es ? "¿Qué te gustaría resolver?" : "What would you like to solve?") : (es ? "Descripción del proyecto" : "Project description")}<textarea name="message" rows={5} required /></label>
      <button className="button button-dark" type="submit">{isDemo ? (es ? "Solicitar demostración" : "Request a demo") : (es ? "Abrir correo para enviar" : "Open email to send")} <span aria-hidden="true">↗</span></button>
      <p className="form-note">{sent
        ? (es ? "Se abrió tu aplicación de correo para que puedas enviar el mensaje." : "Your email app opened so you can send your message.")
        : (es ? "El formulario prepara un correo en tu aplicación predeterminada; no almacena tus datos en este sitio." : "This form prepares an email in your default email app; it does not store your data on this site.")}</p>
    </form>
  );
}
