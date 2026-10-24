/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let torneos = [];

/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function ocultarSecciones() {
  let secciones = document.querySelectorAll("section");

  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }
}

function mostrarSeccion(id) {
  ocultarSecciones();
  document.getElementById(id).style.display = "block";
}

function registrarTorneo() {

  let nombre = recuperaraTexto("nombreTorneo");
  let categoria = recuperaraTexto("categoriaTorneo");
  let participantes = recuperarFloat("participantesTorneo");
  let valorInscripcion = recuperarFloat("valorInscripcion");
  let email = recuperaraTexto("emailOrganizador");

  mostrarTexto("errorNombre", "");
  mostrarTexto("errorCategoria", "");
  mostrarTexto("errorParticipantes", "");
  mostrarTexto("errorValor", "");
  mostrarTexto("errorEmail", "");
  mostrarTexto("mensajeExito", "");

  let hayError = false;

  /* VALIDAR NOMBRE */

  if (nombre.length < 4) {
    mostrarTexto("errorNombre", "El nombre debe tener al menos 4 caracteres");
    hayError = true;
  }

  /* VALIDAR CATEGORIA */
  if (categoria == "") {
    mostrarTexto("errorCategoria", "Debe seleccionar una categoría");
    hayError = true;
  }

  /* VALIDAR PARTICIPANTES */

  if (Number.isInteger(participantes) == false || participantes < 1 || participantes > 100) {
    mostrarTexto("errorParticipantes", "Los participantes deben ser un entero entre 1 y 100");
    hayError = true;
  }

  /* VALIDAR VALOR INSCRIPCION */

  if (valorInscripcion <= 0 || isNaN(valorInscripcion)) {
    mostrarTexto("errorValor","El valor de inscripción debe ser mayor que 0");
    hayError = true;
  }

  /* VALIDAR EMAIL */

  if (email == "") {
    mostrarTexto("errorEmail", "Debe ingresar el email");
    hayError = true;
  }

  /* SI EXISTE ERROR DETENER */

  if (hayError == true) {
    return;
  }

  /* CALCULAR RECAUDACION */
  let recaudacion =
    participantes * valorInscripcion;

  /* CREAR OBJETO TORNEO */
  let torneo = {
    nombre: nombre,
    categoria: categoria,
    participantes: participantes,
    valorInscripcion: valorInscripcion,
    email: email,
    recaudacion: recaudacion
  };

  /* AGREGAR AL ARREGLO */
  torneos.push(torneo);
  /* ACTUALIZAR TABLA */
  mostrarTorneos();
  /* LIMPIAR FORMULARIO */
  limpiarFormulario();
  /* MENSAJE */
  mostrarTexto("mensajeExito", "Torneo registrado correctamente"
  );

}

function mostrarTorneos() {

  let contenido = "";

  for (let i = 0; i < torneos.length; i++) {
    contenido += "<tr>";
    contenido += "<td>" + torneos[i].nombre + "</td>";
    contenido += "<td>" + torneos[i].categoria + "</td>";
    contenido += "<td>" + torneos[i].participantes + "</td>";
    contenido += "<td>" + torneos[i].valorInscripcion + "</td>";
    contenido += "<td>" + torneos[i].email + "</td>";
    contenido += "<td>" + torneos[i].recaudacion + "</td>";
    contenido += "</tr>";
  }

  document.getElementById("tablaTorneos").innerHTML = contenido;
}
