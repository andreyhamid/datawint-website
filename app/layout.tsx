import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFrame } from "@/components/site-frame";
import { SiteProvider } from "@/components/site-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DataWint | Enterprise Technology & Intelligence",
    template: "%s | DataWint",
  },
  description:
    "DataWint conecta sistemas empresariales, datos, finanzas, software, cloud e inteligencia para transformar operaciones.",
  keywords: ["Data Engineering", "SAP Perú", "integración ERP", "automatización financiera", "software empresarial", "consultoría cloud", "ciberseguridad empresarial", "inteligencia artificial"],
  applicationName: "DataWint",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["en_US"],
    siteName: "DataWint",
    title: "DataWint | Enterprise Technology & Intelligence",
    description:
      "Tecnología, datos e inteligencia para transformar empresas.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DataWint",
          url: siteConfig.url,
          logo: `${siteConfig.url}/datawint-logo.png`,
          description: "Tecnología, datos e inteligencia para transformar empresas.",
          email: siteConfig.contactEmail,
          telephone: siteConfig.phoneDisplay,
          areaServed: "Peru",
          knowsAbout: ["Data Engineering", "Enterprise Systems", "Financial Technology", "Software Development", "Cloud Infrastructure", "Cybersecurity"],
        }).replace(/</g, "\\u003c") }} />
        <SiteProvider>
          <SiteFrame>{children}</SiteFrame>
        </SiteProvider>
      </body>
    </html>
  );
}
