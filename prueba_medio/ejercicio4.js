/*crear interfaz,
validar que no haya errores, 
promediar las notas del profesor con otras dos notas de trabajos, 
si el promedio es mayor a 7/10, aprobo la materia*/

const sendButton = document.getElementById("enviar-nota");

sendButton.addEventListener("click", () => {
  let resultado, mensaje;
  try {
    resultadoPrevio = parseInt(document.getElementById("nota-alumno").value);
    if (isNaN(resultadoPrevio)) {
      throw "error de tipo de dato";
    }
    mensaje = definirMensaje(resultadoPrevio);
    resultado = verificarAprobacion(8, 9, resultadoPrevio);
  } catch (e) {
    resultado = "te agarre";
    mensaje = "quisiste hackear la página";
  }

  abrirModal(resultado, mensaje);
});
//rp:resultadoPrevio
const definirMensaje = (rp) => {
  let resultado;
  switch (rp) {
    case 1:
      resultado = "no sabes nada";
      break;

    case 2:
      resultado = "sequi participando";
      break;

    case 3:
      resultado = "muy mal";
      break;

    case 4:
      resultado = "safaste";
      break;

    case 5:
      resultado = "digamos que bien";
      break;

    case 6:
      resultado = "bien";
      break;

    case 7:
      resultado = "muy bien";
      break;

    case 8:
      resultado = "muy satisfactorio";
      break;

    case 9:
      resultado = "excelente";
      break;

    case 10:
      resultado = "sobresaliente";
      break;

    default:
      resultado = "null";
  }
  return resultado;
};

const verificarAprobacion = (nota1, nota2, resultadoPrevio) => {
  promedio = (nota1 + nota2) / 3;
  if (promedio >= 7) {
    return "<span class = 'green'> APROBADO</span>";
  } else {
    return "<span class = 'red'> DESAPROBADO</span>";
  }
};

const abrirModal = (resultado, mensaje) => {
  document.querySelector(".resultado").innerHTML = resultado;
  document.querySelector(".mensaje").innerHTML = "tu prueba" + " " + mensaje;
  document.querySelector(".modal.background");
};
