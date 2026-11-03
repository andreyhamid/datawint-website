/**
 * Configuración central del sitio DATAWINT.
 * Todas las URLs externas y datos de contacto se definen aquí.
 *
 * Variables de entorno (ver .env.example). Las NEXT_PUBLIC_* se incrustan
 * en el bundle durante `next build`: nunca colocar secretos en ellas.
 */

const DEFAULT_PORTAL_URL = "https://app.datawint.com";

export const siteConfig = {
  name: "DataWint",
  url: "https://datawint.com",
  contactEmail: "asilva@datawint.com",
  phoneDisplay: "+51 953 494 818",
  phoneE164: "+51953494818",
  whatsappUrl: "https://wa.me/51953494818?text=Hola%2C%20quiero%20conocer%20las%20soluciones%20de%20DataWint.",
  /** URL del portal de clientes (app.datawint.com). */
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL || DEFAULT_PORTAL_URL,
  /** Solo es true si NEXT_PUBLIC_PORTAL_ENABLED === "true". Por defecto el portal no está publicado. */
  portalEnabled: process.env.NEXT_PUBLIC_PORTAL_ENABLED === "true",
} as const;

/** Página interna que informa que el portal estará disponible próximamente. */
export const portalComingSoonPath = "/portal";

/** Destino del botón "Portal de clientes": el portal real si está habilitado; si no, la página interna. */
export const portalHref = siteConfig.portalEnabled ? siteConfig.portalUrl : portalComingSoonPath;
