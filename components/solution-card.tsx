import Link from "next/link";
import type { ReactNode } from "react";

export function SolutionCard({
  number,
  title,
  description,
  href,
  icon,
  services,
  language,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  services: string[];
  language: "es" | "en";
}) {
  return (
    <Link className="solution-card" href={href}>
      <div className="solution-card-top"><span className="solution-icon">{icon}</span><span className="solution-number">{number}</span></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="solution-service-list">{services.map((service) => <li key={service}>{service}</li>)}</ul>
      <span className="card-link">{language === "es" ? "Explora esta división" : "Explore this division"}<span aria-hidden="true">→</span></span>
    </Link>
  );
}
