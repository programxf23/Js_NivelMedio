//const img = document.querySelector('.img-prueba');
const input = document.querySelector('.input-prueba');
const contenedor = document.querySelector('.contenedor');


/*
//salta un error al cargarse archivos multimedia
img.addEventListener('error', ()=>{
    console.log('ha sucedido un error');
});

*/

// load:
/*
window.addEventListener('load', ()=>{
    console.log('cargado');
});

*/

//before unload

/*
window.addEventListener('beforeunload', ()=>{
    console.log('te estas por ir del sitio');
});
*/

//resize
/*
window.addEventListener('resize', ()=>{
    console.log('estas en una nueva resolucion');
});
*/

//scroll
/*
window.addEventListener('scroll', ()=>{
    console.log('estas en scroll');
});

*/

//select1
/*
window.addEventListener('select', ()=>{
    console.log('se ha seleccionado');
});
*/

//select2
input.addEventListener('select', (e)=>{
    let start = e.target.selection.start;
    let end = e.target.selection.end;
    let textoCompleto = input.value;
    contenedor.innerHTML = textoCompleto.substring(start, end);

    
});

