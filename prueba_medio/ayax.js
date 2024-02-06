/*ajax
introduccion e instalacion del servidor
objeto xmlhttprequest 
enviar peticiones get
trabajar el resultado de las peticiones
objeto activeobject(messirve)
nueva forma de trabajar el resultado
enviar peticiones post
objeto formdata
*/

//para trabajar con ajax tenemos que tener un servidor
//ajax es javascript asincrono

//instalacion de wammp

const peticion = new XMLHttpRequest(); //podemos enviar peticiones GET Y POST

peticion.addEventListener("readystatechange", ()=>{

    if(peticion.readystate == 4 && peticion.status == 200){
        console.log(peticion.status);
    }
})

peticion.open("GET", "/info.txt");
peticion.send();

//si la peticion es 4 y el estatus es 200 esta todo perfecto
// y de la forma anterior se trabajaba antes.