# Landing de registro del evento

Archivos: `index.html` (la página), `apps-script.gs` (envía los registros a Excel/Google Sheets).

## Conectar con el Excel (Google Sheets, se puede descargar como .xlsx)
1. Crea una hoja en Google Sheets.
2. Extensiones > Apps Script, pega el contenido de `apps-script.gs`.
3. Implementar > Nueva implementación > Aplicación web. Ejecutar como: **Yo**; Acceso: **Cualquier persona**.
4. Copia la URL y pégala en `SCRIPT_URL` dentro de `index.html`.
5. Cada registro agrega una fila: Fecha, Nombre, Apellido, Vehículo.

## Logo y colores
- Colores: variables al inicio del `<style>` en `index.html`.
- Logo: guarda `assets/logo.png` y sigue el comentario en el HTML.

## Publicar
Sube la carpeta a GitHub Pages, Netlify o Vercel.
