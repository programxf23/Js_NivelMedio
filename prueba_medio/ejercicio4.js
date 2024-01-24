/*crear interfaz,
validar que no haya errores, 
promediar las notas del profesor con otras dos notas de trabajos, 
si el promedio es mayor a 7/10, aprobo la materia*/

const sendButton = document.getElementById('enviar-nota');

sendButton.addEventListener('click', () => {
    let resultado, mensaje;
    try {
       resultado = parseInt(document.getElementById('nota-alumno').value);
       if(isNaN(resultado)){
        throw "error de tipo de dato";
       }
       mensaje = 'hola';
    }catch (e) {
        resultado = 'te agarre';
        mensaje = 'quisiste hackear la página';

    }


    abrirModal(resultado, mensaje);

});

const abrirModal = (resultado, mensaje)=>{
console.log(resultado);
console.log(mensaje);


}