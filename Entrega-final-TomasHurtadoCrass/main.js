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
  
  // * Catálogo de revistas * //
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
    new Revista("Super Metroid, Tetris2, Lethal Enforces", 1993, "febrero", 27),
    new Revista("NBA JAM T.M.N.T Radical rescue", 1993, "marzo", 28),
    new Revista("El nuevo hit de las Arcadias : Street II Turbos", 1993, "abril", 29),
    new Revista("Super Gameboy", 1993, "mayo", 30)
  ];
  
  // Función para filtrar las revistas por el criterio seleccionado
  function filtrarRevistas(criterio, valor) {
    try {
      let resultados;
      // Uso de operador ternario para determinar el criterio y filtrar las revistas
      resultados = (criterio === 'año') 
          ? catalogoRevistas.filter(revista => revista.año === valor) 
          : (criterio === 'mes')
          ? catalogoRevistas.filter(revista => revista.mes.toLowerCase() === valor.toLowerCase()) 
          : (criterio === 'edicion')
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
  
        // Guardar el historial en localStorage (ahora incluye el nombre de la revista)
        const historial = JSON.parse(localStorage.getItem('historial')) || [];
        historial.push({
          criterio,
          valor,
          resultados: resultados.length,
          revistas: resultados.map(revista => revista.nombre)  // Guardamos los nombres de las revistas
        });
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
    } catch (error) {
      console.error("Error al filtrar revistas:", error);
      Swal.fire({
        title: 'Error',
        text: "Hubo un problema al filtrar las revistas. Inténtalo de nuevo.",
        icon: 'error'
      });
    }
  }
  
  // Función para mostrar el historial de búsquedas manipulando el DOM
  function actualizarHistorial() {
    try {
      const historialList = document.getElementById('historialList');
      const historial = JSON.parse(localStorage.getItem('historial')) || [];
      
      // Limpiar el historial mostrado
      historialList.innerHTML = '';
      // Si el historial tiene datos, mostrarlo
      if (historial.length > 0) {
        historial.forEach((busqueda, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `#${index + 1} - Criterio: ${busqueda.criterio}, Valor: ${busqueda.valor}, Resultados: ${busqueda.resultados} <br>Revistas: <br> ${busqueda.revistas.join('<br>')}`;
          historialList.appendChild(listItem);
        });
      } else {
        // Si no hay historial, mostrar un mensaje
        const listItem = document.createElement('li');
        listItem.textContent = 'No hay historial de búsquedas.';
        historialList.appendChild(listItem);
      }
    } catch (error) {
      console.error("Error al actualizar el historial:", error);
      Swal.fire({
        title: 'Error',
        text: "Hubo un problema al mostrar el historial. Inténtalo de nuevo.",
        icon: 'error'
      });
    }
  }
  
  // Función para limpiar el historial
  function limpiarHistorial() {
    try {
      // Limpiar el historial en localStorage
      localStorage.removeItem('historial'); // O puedes usar `localStorage.setItem('historial', JSON.stringify([]));`
  
      // Limpiar el historial en el DOM
      const historialList = document.getElementById('historialList');
      historialList.innerHTML = ''; // Elimina todos los elementos de la lista
  
      // Mostrar un mensaje al usuario
      Swal.fire({
        title: 'Historial Borrado',
        text: 'El historial de búsquedas ha sido Borrado.',
        icon: 'success'
      });
    } catch (error) {
      console.error("Error al limpiar el historial:", error);
      Swal.fire({
        title: 'Error',
        text: "Hubo un problema al limpiar el historial. Inténtalo de nuevo.",
        icon: 'error'
      });
    }
  }
  
  // Puedes agregar un botón en el HTML para activar esta función
  document.getElementById('limpiarBtn').addEventListener('click', limpiarHistorial);
  
  // Función para pedir el criterio de búsqueda con SweetAlert
  async function pedirCriterio() {
    try {
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
      }).then(result => result.value))) : (criterio === 'mes'
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
    } catch (error) {
      console.error("Error al pedir el criterio de búsqueda:", error);
      Swal.fire({
        title: 'Error',
        text: "Hubo un problema al pedir el criterio de búsqueda. Inténtalo de nuevo.",
        icon: 'error'
      });
    }
  }
  
  // Definir las coordenadas de Iquique
  const lat = -20.2130;
  const lon = -70.1469;
  
  // Función para obtener el clima
  async function obtenerClima() {
    try {
      // Hacemos la solicitud a la API
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=America/Santiago`);
      
      // Verificamos si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('No se pudo obtener el clima');
      }
  
      // Convertimos la respuesta en formato JSON
      const data = await response.json();
  
      // Verificamos si los datos contienen la información del clima
      if (data.current_weather) {
        const temp = data.current_weather.temperature;
        const weatherCode = data.current_weather.weathercode;
        const descripcion = obtenerDescripcionClima(weatherCode); // Obtenemos la descripción del clima
  
        // Mostrar la temperatura y descripción
        climaTexto.innerHTML = `Temperatura: ${temp}°C<br>Condición: ${descripcion}`;
        climaContenedor.style.display = "block"; // Muestra el contenedor
      } else {
        climaTexto.innerHTML = "No se pudo obtener el clima de Iquique.";
      }
    } catch (error) {
      console.error("Error al obtener el clima:", error);
      climaTexto.innerHTML = "No se pudo obtener el clima.";
    }
  }
  
  // Función para convertir el código de clima a texto
  function obtenerDescripcionClima(weatherCode) {
    const condicionesClima = {
      0: "Despejado",
      1: "Parcialmente nublado",
      2: "Nublado",
      3: "Lluvia ligera",
      4: "Lluvia moderada",
      5: "Lluvia intensa",
      6: "Tormenta",
      7: "Niebla",
      8: "Granizo",
      9: "Tormenta eléctrica"
    };
  
    return condicionesClima[weatherCode] || "Condición desconocida"; // Devuelve la descripción, o un valor por defecto si el código no está definido
  }
  
  // Llamamos a la función para obtener el clima al cargar la página
  obtenerClima();
  
  
  // Llamar a la función para pedir el criterio cuando se hace clic en el botón (manip del dom)
  document.getElementById('buscarBtn').addEventListener('click', pedirCriterio);
  
  // Mostrar el historial actualizado al cargar la página (manip del dom)
  window.onload = actualizarHistorial;
  
  document.getElementById('limpiarBtn').addEventListener('click', limpiarHistorial);
  
  
  