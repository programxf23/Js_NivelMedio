//window es un objeto de js del que depende el dom y tiene muchas propiedades
//hace referencia a la ventana

//vemos solo algunas propiedades

//open - me abre una ventana
let miyoutube = "https://www.youtube.com"

let ventana = window.open(miyoutube);

//close me cierra la ventana
ventana.close();

//closed - me confirma si la ventana se encuentra cerrada o no

ventana.closed;

//stop - freno la ejecucion a traves del boton cruz de la ventana, el opuesto a actualizar