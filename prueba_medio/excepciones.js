//de esta manera evitamos que al navegador nos muestre el error para poder manejarlo nosotros
/*
try{
gdfgdgd
}
catch(e){
    //console.log(typeof e); //los errores son objetos
    console.log("lo siento ocurrio un error de referencia"); //controlamos el error
}

//el catch anteriro es un catch incondicional


//esto es un catch condicional:
/*
try{
gdfgdgd
}
catch(e){
   if(3 > 5 ){ //
    console.log("ha ocurrido un error");

   }else{
    console.log("no ha ocurrido un error");
   }
}
*/

//el finally se ejecuta a tosa costa
/*
try{
console.log("no hay errores");
}
catch(e){
   if(3 > 5 ){ //
    console.log("ha ocurrido un error");

   }else{
    console.log("no ha ocurrido un error");

   }
    finally{
    console.log("el finally se ejecuta a tosa costa");    
   
   }
}*/

//el finally se ejecuta siempre
/*
const pruebaTry = () => {
try {
    return 1;

}
catch (e) {
    return 2;
}
finally {
    return 3;
}
}

console.log(pruebaTry());
*/


//aqui, el throw tiene prioridad
    try {
        throw "Error"       
    
    }
    catch (e) {
       console.log(e);
    }
    finally {       
    }
    
    