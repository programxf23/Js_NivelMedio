// se necesita recuperar todas las notas para saber si el alumno aprobo el semestre
//crear un sistema que almacene toda la informacion de las materias y las muestre por pantalla

const materiasHTML = document.querySelector(".materias");

//creamos el objeto materias:

const materias = [
  {
    nombre: "Matematicas",
    nota: 7,
  },
  {
    nombre: "Fisica",
    nota: 5,
  },
  {
    nombre: "Quimica",
    nota: 2,
  },
  {
    nombre: "Geografia",
    nota: 9,
  },
  {
    nombre: "Historia",
    nota: 8,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
  materia = materias[id];

  if(materia == undefined) reject("La materia no existe"); 
  else setTimeout(()=>{resolve(materia)}, Math.random() * 400);

});

};

//ahora trabajamos con operaciones asincronas:

const devolverMaterias = async () => {
    let materia = [];
for(let i = 0; i <materias.length; i++){
    materia[i] = await obtenerMateria(i); 
    let newHtmlCode = `
    <div class="materias">
      <div class="nombre">${materia[i].nombre}</div>
      <div class="nota">${materia[i].nota}</div>
    </div>    
    `
 materiasHTML.innerHTML += newHtmlCode;

}

}

devolverMaterias();