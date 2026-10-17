## Prompt 1 – Consulta de clima con Open-Meteo
**Fecha:** 17/oct
**Prompt (textual):**
> En js/api.js escribe una función async obtenerClima(ciudad) que:
> 1. Llame a https://geocoding-api.open-meteo.com/v1/search con el parámetro name, count=1, language=es y format=json para obtener latitud y longitud.
> 2. Llame a https://api.open-meteo.com/v1/forecast con esas coordenadas y current=temperature_2m,relative_humidity_2m.
> 3. Devuelva un objeto con ciudad, temperatura y humedad.
>
> No agregues manejo de errores todavía. No toques otros archivos. Explica en comentarios qué hace cada paso.

**Respuesta de la IA:** Creó `obtenerClima` con dos llamadas fetch y comentarios en cada paso.
**¿Funcionó a la primera?** Sí, en la consola devolvió los datos de Mérida.
**Qué corregí:** Nada en el código. Usé la consola del navegador (F12) para probarla, porque F5 no ejecuta el script.
**Lo que sigue:** Sin manejo de errores todavía. Una ciudad inexistente lanza un TypeError al leer `results[0]`, y lo atenderé en el siguiente prompt.