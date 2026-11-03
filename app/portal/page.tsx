import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PortalComingSoonPage } from "@/components/portal-coming-soon-page";
import { siteConfig } from "@/config/site";

const title = "Portal de clientes | DataWint";
const description = "El portal de clientes de DataWint estará disponible próximamente. Mientras tanto, nuestro equipo te atiende directamente.";

export const metadata: Metadata = {
  title: "Portal de clientes",
  description,
  robots: { index: false, follow: true },
  openGraph: { title, description, type: "website", locale: "es_PE" },
};

export default function Page() {
  // Cuando el portal esté publicado, esta ruta deja de ser un aviso y lleva al portal real.
  if (siteConfig.portalEnabled) redirect(siteConfig.portalUrl);
  return <PortalComingSoonPage />;
}
