//tenesmo cuatro funciones de temporizador: set timout, interva, cleartimeout y clearinterval
/*
setTimeout(() => {
    console.log('hola fer');
}, 3000); //el tiempo esta expresado en milisegundos

*/

//tambien podemos hacer lo mismo pero a traves de una funcion:

/*
const saludar = ()=>{
    document.write('hola fer otra vez');
};

setTimeout(saludar, 2000);
*/
//ahora si quiero que no se ejecute:
/*
const temporizador = setTimeout(() => {
    console.log('hola fer');
}, 3000);

clearTimeout(temporizador);
*/

//ahora si yo quiero que se ejecute una y otra vez usamos el interval
/*
setInterval(() => {
    document.write('hola fer una y otra vez');
}, 3000);
*/

//y para eliminarlo le asigno un valor:
/*
const intervalo = setInterval(() => {
    document.write('hola fer una y otra vez');
}, 3000);

clearInterval(intervalo);
*/

//ahora si yo quiero que el intervalo se acabe despues de 5 seg:
const intervalo = setInterval(() => {
    document.write('hola fer una y otra vez');
}, 2000);

setInterval(() => {
    clearInterval(intervalo);
}, 6000);