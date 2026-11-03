"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { portalHref, siteConfig } from "@/config/site";

/**
 * Enlace al portal de clientes. Si el portal está habilitado apunta a la URL externa;
 * si no, a la página interna /portal (sin enlaces rotos).
 */
export function PortalLink({ className, children, onClick, ariaLabel }: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  if (siteConfig.portalEnabled) {
    return <a className={className} href={portalHref} onClick={onClick} aria-label={ariaLabel}>{children}</a>;
  }
  return <Link className={className} href={portalHref} onClick={onClick} aria-label={ariaLabel}>{children}</Link>;
}

export function PortalIcon() {
  return (
    <svg className="portal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
