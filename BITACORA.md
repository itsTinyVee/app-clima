# Bitácora de programación con IA

## Prompt 1 – Estructura de archivos
**Fecha:** 17/oct
**Prompt (textual):**
> desde le inicio: Crea la estructura de archivos de este proyecto, sin escribir lógica todavía. Solo crea los archivos vacíos:
> index.html
> css/styles.css
> js/api.js
> js/ui.js
> js/app.js
> README.md
> BITACORA.md
> No modifiques .gitignore. No hagas commits todavía.

**Respuesta de la IA:** Creó los siete archivos vacíos, con las carpetas css/ y js/.
**¿Funcionó a la primera?** Sí.
**Qué corregí:** Nada.

## Prompt 2 – Función obtenerClima
**Fecha:** 17/oct
**Prompt (textual):**
> En js/api.js escribe una función async obtenerClima(ciudad) que:
> Llame a https://geocoding-api.open-meteo.com/v1/search con el parámetro name, count=1, language=es y format=json para obtener latitud y longitud.
> Llame a https://api.open-meteo.com/v1/forecast con esas coordenadas y current=temperature_2m,relative_humidity_2m.
> Devuelva un objeto con ciudad, temperatura y humedad.
> No agregues manejo de errores todavía. No toques otros archivos. Explica en comentarios qué hace cada paso.

**Respuesta de la IA:** Escribió obtenerClima con dos llamadas fetch y comentarios en cada paso, sin manejo de errores.
**¿Funcionó a la primera?** Sí. En la consola de Firefox devolvió los datos de Mérida.
**Qué corregí:** Nada en el código. Para probarla usé la consola (F12), porque F5 no ejecuta el script. Agregué un `<script>` temporal en index.html para cargar js/api.js.

## Prompt 3 – Manejo de errores
**Fecha:** 17/oct
**Prompt (textual):**
> En js/api.js agrega manejo de errores a obtenerClima(ciudad):
> Si no hay conexión (el fetch falla por red), lanza un Error con el mensaje "No hay conexión a internet. Revisa tu red."
> Si la geocodificación no devuelve results, lanza un Error con "No encontramos esa ciudad. Intenta con otro nombre."
> Si alguna respuesta tiene status 429, lanza un Error con "Demasiadas consultas. Espera unos minutos."
> Si cualquier otra respuesta no es ok, lanza un Error con "Error al consultar el clima. Intenta más tarde."
> Usa response.ok para revisar el status. No cambies otros archivos. Explica cada rama en comentarios.

**Respuesta de la IA:** Creó la función auxiliar consultar(url) con try/catch alrededor del fetch y las ramas de red, 429, respuesta no ok y ciudad sin resultados.
**¿Funcionó a la primera?** No del todo. Al probar en la consola del navegador apareció el error "Failed to fetch", pero el mensaje mostrado al usuario fue el de conexión que esperaba.
**Qué corregí:** No corregí código en ese paso. La corrección del error vino en el Prompt 4.

## Prompt 4 – Revisión de la versión ejecutada
**Fecha:** 17/oct
**Prompt (textual):**
> En js/api.js corrige dos problemas en obtenerClima y consultar:
> Revisa que datosGeo.results exista y tenga elementos ANTES de leer results[0]. Si no hay resultados, lanza el Error "No encontramos esa ciudad. Intenta con otro nombre.".
> El fetch debe estar dentro de un try/catch. Si el fetch falla por red, lanza el Error "No hay conexión a internet. Revisa tu red.". No envuelvas response.json() en ese catch.
> No cambies otros archivos. Explica qué causaba cada error.

**Respuesta de la IA:** No hizo cambios, porque el archivo ya tenía ambas correcciones. Explicó qué causaba cada error en la versión anterior.
**¿Funcionó a la primera?** No aplica como corrección de código. El problema era que el navegador seguía ejecutando una versión anterior de api.js (caché).
**Qué corregí:** No cambié código. Revisé el archivo, recargué la página con la caché desactivada y repetí las pruebas.

## Prompt 5 – Estructura HTML del formulario
**Fecha:** 18/oct
**Prompt (textual):**
> En index.html, reemplaza el contenido del body por lo siguiente:
> Un encabezado h1 con el texto "Clima".
> Un formulario con un input de texto con id "ciudad" y placeholder "Escribe una ciudad", y un botón de tipo submit con texto "Consultar".
> Un div con id "resultado".
> Un div con id "error".
> Al final del body deben estar estos tres scripts, en este orden: js/api.js, js/ui.js, js/app.js. Si no existen, agrégalos.
> No modifiques js/api.js. No escribas lógica en js/ui.js ni en js/app.js todavía.

**Respuesta de la IA:** Creó la estructura completa del documento, el formulario, los dos divs y los tres scripts en orden. Agregó un `<head>` y `id="formulario"` en el form, que no se pidieron.
**¿Funcionó a la primera?** Sí. `typeof obtenerClima` devolvió "function".
**Qué corregí:** Revisé el `<head>` y el id agregados. Los dejé porque app.js necesita el id.

## Prompt 6 – Funciones de interfaz (ui.js)
**Fecha:** 18/oct
**Prompt (textual):**
> En js/ui.js escribe tres funciones globales (sin export):
> mostrarClima(datos): recibe un objeto con ciudad, temperatura y humedad. Escribe en el div con id "resultado" el texto: "Clima en {ciudad}: {temperatura} °C, humedad {humedad}%". Vacía el div con id "error".
> mostrarError(mensaje): escribe el mensaje en el div con id "error" y vacía el div con id "resultado".
> limpiar(): vacía los divs con id "resultado" y "error".
> Usa document.getElementById para obtener los elementos y textContent para escribir el texto, nunca innerHTML. Explica en comentarios por qué se usa textContent.
> No modifiques otros archivos. No agregues listeners de eventos ni llamadas a obtenerClima.

**Respuesta de la IA:** Escribió mostrarClima, mostrarError y limpiar con getElementById y textContent, con comentarios que explican por qué se usa textContent.
**¿Funcionó a la primera?** Sí. Probé mostrarClima con Mérida y se muestran la temperatura en °C y la humedad. Probé mostrarError y muestra el mensaje esperado.
**Qué corregí:** Nada.

## Prompt 7 – Preguntas sobre ui.js
**Fecha:** 18/oct
**Prompt (textual):**
> ¿Puedes explicarme estas líneas? ¿Usa textContent y no innerHTML? Si el nombre de la ciudad contuviera etiquetas HTML, innerHTML las ejecutaría. textContent las trata como texto normal. Es una protección básica contra inyección de HTML (XSS).
> ¿Las funciones no tienen export? Los scripts clásicos comparten el mismo ámbito global, así que app.js puede llamar a mostrarClima directamente. Si hubiera export, la página no lo entendería sin type="module".
> ¿No hay fetch en ui.js? Si aparece, pídele que lo quite. Ese código pertenece a api.js.

**Respuesta de la IA:** Explicó por qué textContent evita la inyección de HTML (XSS), por qué no se usa export en scripts clásicos y por qué fetch debe estar solo en api.js.
**¿Funcionó a la primera?** No aplica (es una pregunta de comprensión, no un cambio de código).
**Qué corregí:** Nada.

## Prompt 8 – Conexión del formulario (app.js)
**Fecha:** 18/oct
**Prompt (textual):**
> En js/app.js escribe el código que conecta el formulario con la consulta del clima:
> Obtén el formulario con document.getElementById("formulario") y el input con document.getElementById("ciudad").
> Agrega un listener al evento "submit" del formulario. Dentro, usa event.preventDefault() para evitar que la página se recargue.
> Toma el valor del input con .trim(). Si está vacío, llama a mostrarError("Escribe el nombre de una ciudad.") y termina.
> Llama a limpiar(), y después a obtenerClima(ciudad) con await dentro de un try/catch.
> Si obtenerClima responde, llama a mostrarClima(datos). Si lanza un error, llama a mostrarError(error.message).
> Explica en comentarios por qué se usa preventDefault y por qué se llama a limpiar antes de la consulta.
> No modifiques otros archivos.

**Respuesta de la IA:** Escribió el listener submit con preventDefault, validación con trim, limpiar antes de consultar y try/catch que llama a mostrarClima o mostrarError.
**¿Funcionó a la primera?** Sí. Probé en el navegador: Mérida, una ciudad inexistente y el modo Offline. Mérida muestra el clima, la ciudad inexistente muestra su mensaje y Offline muestra el mensaje de conexión.
**Qué corregí:** Nada. No verifiqué con git en ese paso.

## Error de la IA
La primera versión de obtenerClima (Prompt 2) no tenía manejo de errores, como se pidió. Al probar ciudades inexistentes y el modo sin conexión, el error era un TypeError técnico en lugar de un mensaje claro. El Prompt 3 agregó el manejo de errores. Al probar en la consola con F12 vi mensajes de error (obtenerClima is not defined y datos de una versión anterior de la función) que no correspondían al código final. Ocurrió mientras el archivo todavía no estaba completo. Se resolvió al terminar la corrección de api.js y cargar los scripts en index.html.

## Qué aprendí
- Probar cada función en la consola antes de hacer commit.
- Revisar qué versión del archivo se está ejecutando, porque la caché del navegador puede hacer que parezca que el código no cambió.
- Verificar lo que responde la IA con pruebas propias, porque la respuesta del agente no sustituye la comprobación.
- Hacer un commit por cambio y revisar `git status` antes de cada `git add`.

## Qué haría distinto
- Pedir tareas más pequeñas y pedir la explicación antes de aceptar los cambios.
- Probar cada archivo en el navegador antes de pasar al siguiente.
- Especificar en el prompt el orden de las validaciones (por ejemplo, revisar `results` antes de `results[0]`).
