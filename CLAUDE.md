# DATAWINT — reglas del proyecto

- Marca: DATAWINT · Enterprise Technology & Intelligence.
- Idioma de la UI: español. Nombres de módulos en inglés (ej. "Cash Flow Management").
- Seguir las convenciones existentes (router, estructura de carpetas, estilos, componentes).
- No romper funcionalidades existentes. No reconstruir la web.
- Nunca afirmar que un producto está disponible si no lo está. Estados válidos:
  "En desarrollo", "Próximamente", "Disponible".
- Las imágenes de productos no implementados se rotulan "Vista conceptual".
- No modificar DNS, despliegues ni secretos sin autorización.
- No exponer claves API en el frontend. URLs externas centralizadas en config.
- Verificación antes de terminar: `npm run build` y `npm run lint` sin errores.
