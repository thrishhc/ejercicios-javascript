let proyectos = [
  { id: 1, titulo: "Diseño Web", tipo: "Web", anio: 2024 },
  { id: 2, titulo: "Modelado 3D", tipo: "3D", anio: 2025 },
  { id: 3, titulo: "Animación 2D", tipo: "Animación", anio: 2026 }
];

proyectos.push({ id: 4, titulo: "Rigging de Personaje", tipo: "3D", anio: 2026 });
console.log("1. Arreglo con nuevo proyecto:", proyectos);

const proyectos3D = proyectos.filter(proyecto => proyecto.tipo === "3D");
console.log("2. Proyectos filtrados (Tipo 3D):", proyectos3D);

const titulosProyectos = proyectos.map(proyecto => proyecto.titulo);
console.log("3. Lista de títulos:", titulosProyectos);

const proyectoEncontrado = proyectos.find(proyecto => proyecto.titulo === "Modelado 3D");
console.log("4. Proyecto buscado por título exacto:", proyectoEncontrado);