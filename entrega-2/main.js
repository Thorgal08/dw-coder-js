// CATALOGO DE REVISTAS CLUB NINTENDO

alert("Bienvenido al catálogo de Revista Club Nintendo");

// Definición de la clase Revista
class Revista {
  constructor(nombre, año, mes, edicion) {
    this.nombre = nombre;
    this.año = año;
    this.mes = mes;
    this.edicion = edicion;
  }
}

//* Catálogo de revistas *//
const catalogoRevistas = [
  new Revista("Edición numero 1 de la revista", 1991, "enero", 1),
  new Revista("Especial de super mario world", 1991, "febrero", 2),
  new Revista("Tiny toons, los picapiedras, ghost & ghoblins", 1991, "marzo", 3),
  new Revista("Especial sobre los simpsons ", 1991, "abril", 4),
  new Revista("Megaman 4 smash tv d-force", 1991, "mayo", 5),
  new Revista("Batman Return, The legend Of Zelda Super Mario Kart", 1992, "enero", 14),
  new Revista("Tiny Toons, Punch out, Robocop III", 1992, "febrero", 15),
  new Revista("Super FX : Reportaje gigante", 1992, "marzo", 16),
  new Revista("Starfox, Taz-Mania", 1992, "abril", 17),
  new Revista("Bubsy, Batman Returns, Cybernator, Alien", 1992, "mayo", 18),
  new Revista("Mega Man X :Conoce a Mega Man", 1993, "enero", 26),
  new Revista("Super Metroid, Tetris2, Lethal Enforces", 1993, "febrero",27),
  new Revista("NBA JAM T.M.N.T Radical rescue", 1993, "marzo", 28),
  new Revista("El nuevo hit de las Arcadias : Street II Turbos ", 1993, "abril", 29),
  new Revista("Super Gameboy ", 1993, "mayo", 30)
];

// Función para filtrar las revistas por el criterio seleccionado
function filtrarRevistas(criterio, valor) {
  let resultados;

  switch (criterio) {
    case 'año':
      // Filtra por año, asegurándose de que 'valor' sea un número entero
      resultados = catalogoRevistas.filter(revista => revista.año === valor);
      break;
    case 'mes':
      // Filtra por mes (compara el mes en minúsculas)
      resultados = catalogoRevistas.filter(revista => revista.mes.toLowerCase() === valor.toLowerCase());
      break;
    case 'edicion':
      // Filtra por número de edición
      resultados = catalogoRevistas.filter(revista => revista.edicion === valor);
      break;
    default:
      console.log("Criterio no válido");
      return;
  }

  // Mostrar los resultados
  if (resultados.length > 0) {
    let mensaje = `Revistas encontradas para el criterio '${criterio}':\n`;
    resultados.forEach(revista => {
      mensaje += `- ${revista.nombre}, ${revista.mes} ${revista.año} (Edición ${revista.edicion})\n`;
    });
    console.log(mensaje);
    alert(mensaje);
  } else {
    console.log(`No se encontraron revistas para el criterio '${criterio}' con el valor '${valor}'.`);
    alert(`No se encontraron revistas para el criterio '${criterio}' con el valor '${valor}'.`);
  }
}

// Interacción con el usuario
const criterio = prompt("¿Por qué criterio deseas buscar? (año, mes, edicion)").toLowerCase();
let valor;

if (criterio === 'año' || criterio === 'edicion') {
  valor = parseInt(prompt(`Ingresa el valor para ${criterio}:`));
} else if (criterio === 'mes') {
  valor = prompt("Ingresa el mes para buscar (ej. enero, febrero, marzo, etc.):").toLowerCase();
} else {
  alert("Criterio no válido.");
}

// Verifica que el valor ingresado sea válido antes de llamar a la función
if (valor !== undefined && valor !== null) {
  filtrarRevistas(criterio, valor);
} else {
  alert("No se ha ingresado un valor válido.");
}
