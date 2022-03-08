export function allHeaders(headers) {
  return [
    { name: "name" },
    { name: "rotation_period", type: "number" },
    { name: "orbital_period", type: "number" },
    { name: "diameter", type: "number" },
    { name: "climate" },
    { name: "gravity" },
    { name: "terrain" },
    { name: "surface_water", type: "number" },
    ...headers,
  ];
}
