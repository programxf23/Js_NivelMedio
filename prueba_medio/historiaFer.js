/*let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es ${alto} y el ancho es ${ancho}`);

if (comprar){
    window.alert("Compra confirmada");

}else {
    window.alert("Compra cancelada");
}*/

//crear un sistema que nos muestre los suficientes datos de un sitio web, como el protocolo, la url etc..

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b></b><br>`;

html += `Hostname: <b>${hostname}</b></b><br>`;

html += `Pathname: <b>${pathname}</b></b><br>`;

html += `La url completa es: <b>${href}</b></b><br>`;

document.write(html);
