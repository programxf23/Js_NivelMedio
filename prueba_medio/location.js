//location.href y la informacion que nos devuelve es la direccion del archivo location
//osea la url de la pagina actual

const href = window.location.href;

document.write(href);

  
//location.hostname me devuelve el dominio

const hostname = window.location.hostname;

document.write(hostname);


//pathname nos devuelve solo lo que viene despues del dominio

const pathname = window.location.pathname;

document.write(pathname);

//protocol, osea http://

const protocol = window.location.protocol;

document.write(protocol);

//assign carga un nuevo documento

window.location.assign('https://www.google.com');



//ejemplo de todo lo anteior:
/*https://github.com/fernandoxf23/ejemplo

window.location.href = 'https://github.com/fernandoxf23/ejemplo';

window.location.hostname = 'github.com';

window.location.pathname = '/fernandoxf23/ejemplo';*/
