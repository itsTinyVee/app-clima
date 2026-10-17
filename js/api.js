// Obtiene el clima actual de una ciudad usando la API de Open-Meteo.
async function obtenerClima(ciudad) {
  // Paso 1: geocodificación. Convertimos el nombre de la ciudad en
  // coordenadas (latitud y longitud). count=1 pide solo el mejor resultado.
  const urlGeo =
    "https://geocoding-api.open-meteo.com/v1/search" +
    `?name=${encodeURIComponent(ciudad)}&count=1&language=es&format=json`;
  const respuestaGeo = await fetch(urlGeo);
  const datosGeo = await respuestaGeo.json();

  // Tomamos el primer (y único) resultado con las coordenadas y el nombre oficial.
  const lugar = datosGeo.results[0];
  const { latitude, longitude, name } = lugar;

  // Paso 2: pronóstico. Con las coordenadas pedimos las condiciones actuales:
  // temperatura a 2 m del suelo y humedad relativa.
  const urlClima =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${latitude}&longitude=${longitude}` +
    "&current=temperature_2m,relative_humidity_2m";
  const respuestaClima = await fetch(urlClima);
  const datosClima = await respuestaClima.json();

  // Paso 3: devolvemos solo los datos que necesita la interfaz.
  return {
    ciudad: name,
    temperatura: datosClima.current.temperature_2m,
    humedad: datosClima.current.relative_humidity_2m,
  };
}
