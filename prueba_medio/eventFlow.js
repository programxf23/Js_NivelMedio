/*el event flow nos controla el orden de flujo de los eventos, estan los event bubbling y los capture, 
el que viene por defecto es el bubbling.
*/

const button = document.querySelector('.button');
const contenedor = document.querySelector('.contenedor');



button.addEventListener('click', (e) => {
    alert("di click en el buton");
},true);

contenedor.addEventListener('click', (e) => {
    alert("di click en el contenedor");
});
 
//true nos permite priorizar que evento se ejecutara primero