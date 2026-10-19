# App del clima

## Descripción
Una página web responsive que consulta el clima actual de una ciudad usando la API de Open-Meteo. Escribe una ciudad, presiona "Consultar" y muestra la temperatura en °C y la humedad relativa.

## API usada
- Open-Meteo Geocoding API: https://geocoding-api.open-meteo.com (convierte el nombre de la ciudad en latitud y longitud).
- Open-Meteo Forecast API: https://api.open-meteo.com (devuelve el clima actual).
- No requiere clave de API ni registro.

## Cómo ejecutarla
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/itsTinyVee/app-clima.git
   ```
2. Entrar a la carpeta `app-clima`.
3. Abrir `index.html` en el navegador.
4. Opcional: usar un servidor local, por ejemplo la extensión Live Server de VS Code.

> **Aviso:** se necesita conexión a internet para consultar el clima.

## Estructura del proyecto

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura de la página, formulario y contenedores. |
| `css/styles.css` | Estilos y diseño responsive. |
| `js/api.js` | Consulta las APIs de Open-Meteo y maneja los errores. |
| `js/ui.js` | Muestra el clima o los mensajes de error en pantalla. |
| `js/app.js` | Conecta el formulario con la consulta y la interfaz. |
| `.gitignore` | Evita subir archivos sensibles como `.env`. |
| `BITACORA.md` | Registro de prompts y uso de IA. |

## Manejo de errores
- **Sin conexión:** "No hay conexión a internet. Revisa tu red."
- **Ciudad no encontrada:** "No encontramos esa ciudad. Intenta con otro nombre."
- **Límite de peticiones (429):** "Demasiadas consultas. Espera unos minutos."
- **Error del servidor:** "Error al consultar el clima. Intenta más tarde."

## Herramientas de IA usadas
- Claude Code: Use code para el codigo.
- Claude (chat): Use el chat para los prompts de el code.

Ver BITACORA.md para los prompts y las correcciones.

## Partes hechas sin IA
Creación de los archivos y la estructura, tambien el revisar los errores.
