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
    ["Juan", "Rodrigues"],
    ["Marcelo", "Garcia"],
    ["Jose", "Gonzalez"],
];
const personas = [];

for (let i = 0; i < datoPersonas.length; i++) {

    personas[i] = new Persona(datoPersonas[i][0], datoPersonas[i][1]);
}
console.log(personas);
console.log(personas[0]);
console.log(personas[1].nombre);

//ahora vamos a crear una funcion para obtener el nombre:
const obtenerPersona = (id, callback)=>{
    if(personas[id] == undefined){
        callback("Persona no encontrada");
    }else{
        callback(null, personas[id].nombre);
    }
}

obtenerPersona(2, (error, personas)=>{
if(error){
    console.log(error);

}else{
    console.log(personas);
}
})