//las promesas son objetos que tienen tres callback, uno llamado reject y el otro resolve y otro que llama a los otros dos
////uno de los callback representan la terminacion de una operacion asincrona y el otro
//representa el fracaso de una operacion asincrona.
//las promesas aparecieron con ecma script 6
/*
let nombre = "pesdro";

const promesa = new Promise((resolve, reject) => {
    if(nombre !== "pedro") reject("error, lo siento")
    else resolve(nombre);

});
//console.log(promesa);

//para acceder al valor que tiene la promesa usamos: 
promesa.then((resultado)=>{//then es un metodo que recibe un callback
    console.log(resultado);

}).catch((error)=>{ //si no nos tira el resolve manejamos el error con catch
console.log(error);
})
*/

//*********************************************************************************************** */

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
prueba((nombre) => console.log(nombre));

//vamos a crear una clase:
class Persona {
  constructor(nombre, apellido) {
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
const obtenerPersona = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id] == undefined) reject("no se ha encontrado la persona");
    else {
      resolve(personas[id]);
    }
  });
};
const obtenerApellido = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id].apellido == undefined)
      reject("no se ha encontrado el apellido");
    else {
      resolve(personas[id].apellido);
    }
  });
};

let id = 1;
obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerApellido(id);
  }).then((apellido) => {
    console.log(apellido);
  }).catch((error) => {
    console.log(error);
  });

  //los then nos ahorra de tener muchos if , else, if, else...etc.


  //las promesas son asincronas, osea, trabajan en tiempo real
  const objetos = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
  };

  /*const obtenerInformacion = ()=>{
    return objetos;
  }
  console.log(obtenerInformacion());
*/
  //en tiempo real tardaria en devolvernos la informacion, entonces colocamos un setTimeout


  const obtenerInformacion = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve (objetos)}, 2000);
    })
    
  }
 // obtenerInformacion().then(resultado => console.log(resultado));

  //las promesas funcionan en async, osea en tiempo real, despues de 2 seg lo muestra, esperan a recibir la info y
  //cuando la reciben ejecutan la operacion

  //*********************************************************************************    */

  //ahora para trabajar con await:

const mostrarResultado = async ()=>{

    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();


//las funcionas asincronas nos sirven para mostrar los resultados de manera cronologica y no de manera aleatoria
// el await no me permite ejecutar una operacion si la anterior no fue ejecutada
