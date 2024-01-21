/*los datos de fer y otros alumnos ya fueron recibidos y estan almacenados, 
ahora hay que crear un sistema que muestre esa informacion y se pueda
asignar cuando se rinde*/

/* la interfaz debe ser atractiva
debe contener todos los datos de materia estrucurada
el profesor puede seleccionar en cual de las dos semanas rinde el usuario
y si el profesor confirma los datos se debe actualizar y reemplazar el espacio 
de seleccion de semana por la semana seleccionada*/



//hacemos un array con diferentes objetos
alumnos = [{
    nombre : 'Fernando Herrera',
    email: 'fj1273509@gmail.com',
    materia: 'Sociologia'
   }, 
   {
    nombre : 'Marcelo Garcia',
    email: 'garcia@gmail.com',
    materia: 'Matematicas'
   },
   {
    nombre : 'Arturo Perez',
    email: 'perez@gmail.com',
    materia: 'Lengua'
   },
   {
    nombre : 'Maria Lopez',
    email: 'lopez@gmail.com',
    materia: 'Quimica'
   },
   {
    nombre : 'Laura Gonzalez',
    email: 'gonzalez@gmail.com',
    materia: 'Fisica'
   },

];

//boton confirmar:
const boton = document.querySelector('.btn-confirmar');
const contenedor = document.querySelector('.grid-container');

//hacemos un for que nor recorra los objetos:
/*
for (alumno in alumnos) {
    for (datos in alumnos[alumno]) {
    console.log(alumnos[alumno][datos]);
}
}*/

//pero vamos a buscar dato por dato:

for (alumno in alumnos) {
   let datos = alumnos[alumno];
   let nombre = datos["nombre"];
   let email = datos["email"];
   let materia = datos["materia"];
   let htmlCode = `
   <div class="nombre">${nombre}</div>
   <div class="email">${email}</div>
   <div class="materia">${materia}</div>
   <div class="semana">
     <select class="Semana elegida">
       <option value="Semana 1">Semana 1</option>
       <option value="Semana 2">Semana 2</option>
     </select>
   </div>
   `

   //document.querySelector('.grid-container').innerHTML += htmlCode;
   contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click", () => {
    let confirmar = confirm("Realmente quiere confirmar");
    if (confirmar) {
        document.body.removeChild(boton);
let elementos = document.querySelectorAll(".semana");
let semanasElegidas = document.querySelectorAll(".semana-elegida");
for (elemento in elementos) {
    semana = elementos[elemento];
    semana.innerHTML = semanasElegidas[elemento].Value;
}
    }
});