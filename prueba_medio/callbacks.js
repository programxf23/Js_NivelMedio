//callback: es una funcion que pasamos como parametro a otra funcion

function prueba(callback) {
callback("pedro");

}

function decirNombre(nombre) {
console.log(nombre);

}

prueba(decirNombre);



//esto seria lo mismo reducido:
prueba(function decirNombre(nombre) {
console.log(nombre);
});


//tambien podemos codificarlo de esta manera:
prueba(function (nombre) {
console.log(nombre);
});


//y tambien como una funcion flecha
prueba((nombre) => {
console.log(nombre);
});

//y dejando solo una linia de codigo teniendo solo un parametro:
prueba(nombre => console.log(nombre));