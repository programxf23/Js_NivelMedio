//datos estructurados:
/*definicion, usos, sintaxis
serializacion y deserializacion
metodo parse()convierte un string con estuctura json a formato json(deserializar)
metodo stringify()convierte un dato de javascript en una cadena de texto json (serializar)
json polyfill
*/

 autos = {
    marca : "ford",
    modelo : "sedan"
}
console.log(autos.marca);

//deserializado:

autos = {"marca":"ford","modelo":"sedan"} //sin comillas
console.log(autos.marca);


//serializado:  

autos = '{"marca":"ford","modelo":"sedan"}' //con las comillas es una cadena de texto en formato json
console.log(autos.marca);
//para enviar el objeto lo tenemos que enviar serializado, como un string.


const deserializar = {"marca":"ford","modelo":"sedan"} 

const serializado = JSON.stringify(deserializar); //para serializar el objeto y poder enviarlo usamos json.stringify
console.log(autos.marca);

//para deserializar
const serializar = {"marca":"ford","modelo":"sedan"} 

const deserializado = JSON.parse(serializar); //lo convierte en un formato json
console.log(autos.marca);

//polify
/*funcion que simula json
u otras funciones de javascript */

