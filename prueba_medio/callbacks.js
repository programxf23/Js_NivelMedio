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

//vamos a crear una clase:
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(new Persona("Fernando", "Herrera"));

//ahora queremos crear a muchas personas:
const datoPersonas = [
    ["Juan", "Rodriguid"],
    ["Marcelo", "Garcia"],
    ["Jose", "Gonzalez"],
];
const personas = [];

for (var i = 0; i < datoPersonas.length; i++) {

    personas[i] = new Persona(datoPersonas[i][0], datoPersonas[i][1]);
}
console.log(personas);