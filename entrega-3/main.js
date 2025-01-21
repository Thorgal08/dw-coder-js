//* CATALOGO DE REVISTAS CLUB NINTENDO *//

// Mensaje de bienvenida con SweetAlert2
Swal.fire({
    title: 'Bienvenido al catálogo de Revista Club Nintendo',
    text: 'Explora el catálogo y encuentra tu edición favorita.',
    icon: 'info'
  });
  
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
    new Revista("Especial sobre los simpsons", 1991, "abril", 4),
    new Revista("Megaman 4 smash tv d-force", 1991, "mayo", 5),
    new Revista("Batman Return, The legend Of Zelda Super Mario Kart", 1992, "enero", 14),
    new Revista("Tiny Toons, Punch out, Robocop III", 1992, "febrero", 15),
    new Revista("Super FX : Reportaje gigante", 1992, "marzo", 16),
    new Revista("Starfox, Taz-Mania", 1992, "abril", 17),
    new Revista("Bubsy, Batman Returns, Cybernator, Alien", 1992, "mayo", 18),
    new Revista("Mega Man X :Conoce a Mega Man", 1993, "enero", 26),
    new Revista("Super Metroid, Tetris2, Lethal Enforces", 1993, "febrero",27),
    new Revista("NBA JAM T.M.N.T Radical rescue", 1993, "marzo", 28),
    new Revista("El nuevo hit de las Arcadias : Street II Turbos", 1993, "abril", 29),
    new Revista("Super Gameboy", 1993, "mayo", 30)
  ];
  
  // Función para filtrar las revistas por el criterio seleccionado
  function filtrarRevistas(criterio, valor) {
    let resultados;
  
    // Uso de operador ternario para determinar el criterio y filtrar las revistas
    resultados = (criterio === 'año') 
      ? catalogoRevistas.filter(revista => revista.año === valor) : (criterio === 'mes')
      ? catalogoRevistas.filter(revista => revista.mes.toLowerCase() === valor.toLowerCase()) : (criterio === 'edicion')
      ? catalogoRevistas.filter(revista => revista.edicion === valor)
      : Swal.fire({
          title: 'Error',
          text: "Criterio no válido. Usa 'año', 'mes' o 'edicion'.",
          icon: 'error'
        });
  
    if (resultados && resultados.length > 0) {
      let mensaje = `Se encontraron ${resultados.length} revistas para el criterio '${criterio}':<br>`;
      resultados.forEach(revista => {
        mensaje += `- ${revista.nombre}, ${revista.mes} ${revista.año} (Edición ${revista.edicion})<br>`;
      });
  
      Swal.fire({
        title: 'Resultados encontrados',
        html: mensaje,
        icon: 'success'
      });
  
      // Guardar el historial en localStorage (usando operador ternario)
      const historial = JSON.parse(localStorage.getItem('historial')) || [];
      historial.push({ criterio, valor, resultados: resultados.length });
      localStorage.setItem('historial', JSON.stringify(historial));
  
      // Mostrar el historial actualizado en el DOM
      actualizarHistorial();
    } else {
      Swal.fire({
        title: 'No se encontraron resultados',
        text: `No se encontraron revistas para el criterio '${criterio}' con el valor '${valor}'.`,
        icon: 'info'
      });
    }
  }
  
  // Función para mostrar el historial de búsquedas manipulando el DOM
  function actualizarHistorial() {
    const historialList = document.getElementById('historialList');
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    
    // Limpiar el historial mostrado
    historialList.innerHTML = '';
  
    // Si el historial tiene datos, mostrarlo
    historial.length > 0 
    ? historial.forEach((busqueda, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `#${index + 1} - Criterio: ${busqueda.criterio}, Valor: ${busqueda.valor}, Resultados: ${busqueda.resultados}`;
          historialList.appendChild(listItem);
        })
      : // Si no hay historial, mostrar un mensaje
        (() => {
          const listItem = document.createElement('li');
          listItem.textContent = 'No hay historial de búsquedas.';
          historialList.appendChild(listItem);
        })();
  }
  
  // Función para pedir el criterio de búsqueda con SweetAlert
  async function pedirCriterio() {
    const { value: criterio } = await Swal.fire({
      title: '¿Por qué criterio deseas buscar?',
      input: 'select',
      inputOptions: {
        'año': 'Año',
        'mes': 'Mes',
        'edicion': 'Edición'
      },
      inputPlaceholder: 'Selecciona un criterio',
      showCancelButton: true
    });
  
    if (!criterio) return;
  
    let valor;
    // Uso de ternario para determinar el valor según el criterio seleccionado
    criterio === 'año' || criterio === 'edicion' ? (valor = parseInt(await Swal.fire({
          title: `Ingresa el valor para ${criterio}`,
          input: 'number',
          inputPlaceholder: `Ingresa el valor para ${criterio}`
        }).then(result => result.value)))
      : (criterio === 'mes'
          ? (valor = await Swal.fire({
              title: 'Ingresa el mes para buscar (ej. enero, febrero, marzo, etc.):',
              input: 'text',
              inputPlaceholder: 'Mes'
            }).then(result => result.value.toLowerCase()))
          : null);
  
    if (valor) {
      filtrarRevistas(criterio, valor);
    } else {
      Swal.fire({
        title: 'Error',
        text: "No se ha ingresado un valor válido.",
        icon: 'error'
      });
    }
  }
  
  // Llamar a la función para pedir el criterio cuando se hace clic en el botón
  document.getElementById('buscarBtn').addEventListener('click', pedirCriterio);
  
  // Mostrar el historial actualizado al cargar la página
  window.onload = actualizarHistorial;
  