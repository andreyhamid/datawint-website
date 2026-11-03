# Roadmap del portal y la API

> Estado: propuesta para aprobación · Fecha: 2026-11-03
> Regla: no se empieza ninguna etapa de código hasta aprobar este documento y las decisiones de §2.

## 1. Etapas

| # | Etapa | Entregable | Criterio de "hecho" |
|---|---|---|---|
| 0 | Web corporativa | Botón "Portal de clientes", `/portal` "Próximamente", páginas de producto | **Hecho** (repo `datawint-website`) |
| 1 | Decisiones | Aprobación de §2 de este documento | Decisiones registradas aquí |
| 2 | Esqueleto | Repos `datawint-portal` (Next.js) y `datawint-api` (FastAPI); PostgreSQL local con Docker; migraciones (Alembic); RLS activo; CI con build, lint y tests | Test que demuestra que la org A no ve datos de la org B |
| 3 | Login | Integración con el proveedor de identidad elegido; `GET /me`; organización activa; recuperación de contraseña | Login y logout de punta a punta en entorno de pruebas |
| 4 | Organizaciones y usuarios | Invitar, desactivar y cambiar rol (Admin cliente); `/admin` mínimo para Superadmin | Matriz de permisos cubierta por tests de la API |
| 5 | "Mis aplicaciones" | Lista de productos contratados y disponibles para ampliar; **sin habilitar funcionalidad de producto** | Muestra entitlements reales; productos no contratados solo informan y enlazan a contacto |
| 6 | Entornos | Staging y producción; subdominios `app.` y `api.`; backups; monitoreo de errores | Requiere tu autorización explícita (DNS y despliegue) |
| 7 | Activación | `NEXT_PUBLIC_PORTAL_ENABLED=true` en la web | Solo cuando la etapa 6 esté validada |
| 8+ | Productos | Primer módulo de producto (a definir cuál) detrás de su entitlement | Cada producto cambia a "Disponible" solo cuando lo esté de verdad |

Recomendación de ejecución: etapas 2, 3 y 5 en sesiones separadas, una por entregable, revisando y
aprobando cada una antes de la siguiente.

## 2. Decisiones que necesitan tu aprobación

| # | Decisión | Propuesta | Bloquea |
|---|---|---|---|
| D1 | Proveedor de autenticación | Clerk para empezar; Auth0 si se requiere SSO enterprise pronto (ver tabla en [arquitectura.md](arquitectura.md#5-autenticación-decisión-pendiente)) | Etapa 3 |
| D2 | Hosting del portal | Vercel (Next.js) | Etapa 6 |
| D3 | Hosting de API y PostgreSQL | Un PaaS gestionado (p. ej. Render, Railway, Fly.io) o cloud (Azure/AWS) con PostgreSQL gestionado y backups | Etapa 6 |
| D4 | Región de datos | Elegir región (p. ej. EE. UU. este o São Paulo) según latencia desde Perú y requisitos de clientes | Etapa 6 |
| D5 | Repositorios | Dos repos nuevos (`datawint-portal`, `datawint-api`), privados | Etapa 2 |
| D6 | Email transaccional | Proveedor para invitaciones y recuperación (p. ej. Resend, Postmark, SES) y remitente `@datawint.com` | Etapa 3 |
| D7 | Alta de organizaciones | Al inicio solo la crea un Superadmin (sin registro público) | Etapa 4 |
| D8 | Idioma del portal | Español primero; inglés después, igual que la web | Etapa 2 |
| D9 | Primer producto a construir | Elegir uno: Financial Intelligence, Data Platform o Business Copilot | Etapa 8 |
| D10 | Visibilidad del repo de la web | Hoy es **público**; valorar pasarlo a privado | Ninguna |

## 3. Riesgos

| Riesgo | Mitigación |
|---|---|
| Fuga de datos entre clientes | RLS forzado, rol de API sin `BYPASSRLS`, tests de aislamiento obligatorios en CI |
| Prometer productos que no existen | Estados "En desarrollo / Próximamente / Disponible" controlados desde `content/products.ts`; revisión de textos en cada cambio |
| Dependencia del proveedor de identidad | Roles y organizaciones en nuestra BD; el proveedor solo autentica |
| Coste creciente por usuario (Auth0/Clerk) | Revisar precios al superar el tramo gratuito; la arquitectura permite migrar |
| Superadmin con demasiado poder | Acceso solo por `/admin/*`, MFA obligatoria y auditoría de cada acción |
| Configurar DNS o despliegues por error | Ningún cambio de DNS, despliegue o secretos sin autorización explícita |

## 4. Fuera de alcance por ahora

Facturación y pasarela de pagos, SSO enterprise (SAML), API pública para terceros, apps móviles,
base de datos por cliente.
