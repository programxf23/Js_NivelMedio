//los eventos tienen que estar asociados a un código.
//para asociarlos a un código se utilizan los manejadores de eventos como Handlers e events

const button = document.querySelector(".button");

/*button.onclick = () => {
    alert('saludar fer');
}
*/

//hoy se usan los eventListeners

/*button.addEventListener('click', () => {
    alert('saludar fer ahora');
});

//tambien funcion con una funcion comun

function saludar(){
    alert('saludar');
}*/

//el objeto event 
button.addEventListener('click', (e) => {
    console.log(e);
});
//sino coloco como parametro de la funcion una e de event, el this solo, solamente me muestra en la consola que llamo a window
