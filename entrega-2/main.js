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

// Catálogo de revistas
const catalogoRevistas = [
  new Revista("Entra al mundo de la acción total", 1992, "enero", 1),
  new Revista("Entra al mundo de la acción total", 1992, "febrero", 2),
  new Revista("Entra al mundo de la acción total", 1992, "marzo", 3),
  new Revista("Entra al mundo de la acción total", 1992, "abril", 4),
  new Revista("Entra al mundo de la acción total", 1992, "mayo", 5),
  new Revista("Entra al mundo de la acción total", 1993, "enero", 13),
  new Revista("Entra al mundo de la acción total", 1993, "febrero", 14),
  new Revista("Entra al mundo de la acción total", 1993, "marzo", 15),
  new Revista("Entra al mundo de la acción total", 1993, "abril", 16),
  new Revista("Entra al mundo de la acción total", 1993, "mayo", 17),
  new Revista("Entra al mundo de la acción total", 1994, "enero", 25),
  new Revista("Entra al mundo de la acción total", 1994, "febrero",26),
  new Revista("Entra al mundo de la acción total", 1994, "marzo", 27),
  new Revista("Entra al mundo de la acción total", 1994, "abril", 28),
  new Revista("Entra al mundo de la acción total", 1994, "mayo", 29)
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
