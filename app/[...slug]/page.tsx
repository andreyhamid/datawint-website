import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { ProductDetailPage } from "@/components/product-detail-page";
import { productsBySlug } from "@/content/products";
import { pageSlugs } from "@/components/page-slugs";
import { SolutionDetailPage } from "@/components/solution-detail-page";
import { solutions } from "@/components/solution-content";

const solutionKeys = new Set(Object.keys(solutions));
const productPrefix = "product:";
const productFromKey = (pageKey?: string) => pageKey?.startsWith(productPrefix) ? productsBySlug[pageKey.slice(productPrefix.length)] : undefined;
const pageMetadata: Record<string, { title: string; description: string }> = {
  solutions: { title: "Soluciones tecnológicas", description: "Seis divisiones DataWint para integrar sistemas, datos, finanzas, software, cloud y ciberseguridad." },
  industries: { title: "Industrias", description: "Soluciones tecnológicas para agroindustria, retail, finanzas, logística y empresas de servicios." },
  products: { title: "Productos SaaS en desarrollo", description: "Ecosistema de productos DataWint en desarrollo: Financial Intelligence, Data Platform y Business Copilot." },
  about: { title: "Nosotros", description: "DataWint integra tecnología, información e inteligencia para acompañar la evolución empresarial." },
  insights: { title: "Recursos", description: "Ideas y perspectivas sobre datos, finanzas, sistemas empresariales e inteligencia artificial." },
  contact: { title: "Contacto", description: "Conversemos sobre el reto tecnológico de tu empresa con DataWint." },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageKey = pageSlugs[slug.join("/")];
  const product = productFromKey(pageKey);
  if (product) {
    const title = `${product.seo.title} | DataWint`;
    return {
      title: product.seo.title,
      description: product.seo.description,
      alternates: { canonical: `/productos/${product.slug}` },
      openGraph: { title, description: product.seo.description, type: "website", locale: "es_PE", url: `/productos/${product.slug}` },
    };
  }
  const solution = pageKey ? solutions[pageKey] : undefined;
  if (!solution) {
    const page = pageKey ? pageMetadata[pageKey] : undefined;
    return page ? { title: page.title, description: page.description, openGraph: { title: `${page.title} | DataWint`, description: page.description, type: "website", locale: "es_PE" } } : {};
  }
  const description = solution.summary.es;
  return {
    title: solution.name,
    description,
    alternates: { canonical: `/soluciones/${solution.slug}` },
    openGraph: { title: `${solution.name} | DataWint`, description, type: "website", locale: "es_PE" },
  };
}

export function generateStaticParams() {
  return Object.keys(pageSlugs).map((slug) => ({ slug: slug.split("/") }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join("/");
  const pageKey = pageSlugs[path];

  if (!pageKey) notFound();

  const product = productFromKey(pageKey);
  if (product) return <ProductDetailPage slug={product.slug} />;
  if (solutionKeys.has(pageKey)) return <SolutionDetailPage solutionKey={pageKey} />;
  return <ContentPage pageKey={pageKey} />;
}
