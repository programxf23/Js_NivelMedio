//screen - es un objeto con propiedades
const screen = window.screen;
console.log(screen);

document.write(screen);
//me muestra todas las propiedades de screen


//screen left mide la distancia entre el borde izq de la pantalla con el borde izq del objeto

const screenleft = window.screenLeft;
const screenTop = window.screenTop;

document.write(`Left: <b>${screenleft}</b><br>
                top: <b>${screenTop}</b><br>`);


//scroll x e y muestra el numero de pixeles que el documento se desplaza verticalmente u horizontalmente

const scrollX = window.scrollX;
const scrollY = window.scrollY;

                alert(scrollY, scrollX);