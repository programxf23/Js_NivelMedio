//crear un formulario de inscripcion
/*el form debe contener nombre completo, mail y materias adeudadas,
se debe validad que el mail sea valido, que los nombres sean reales, 
y se debe enviar al servidor de manera pulida.*/

const nombre = document.getElementById('full-name');
const email = document.getElementById('mail');
const materia = document.getElementById('materia');
const boton = document.getElementById('btn-enviar');
const resultado = document.querySelector('.resultado');

boton.addEventListener('click', (e)=>{
   e.preventDefault();
    //creamos una funcion para la validacion
    let error = validarCampos();

    if(error[0]){
        resultado.innerHTML = error[1];
    }
        else{
            resultado.innerHTML = 'Formulario enviado';
            resultado.classList.add('green');
            resultado.classList.remove('red');
        }
});

const validarCampos = () => {
    //esta funcion flecha va a crear un elemento  valor que nos devuelve un error
    let error = [];

    //ahora validamos los campos:
    if(nombre.value.length < 5 || nombre.value.length > 50){
        error[0] = true;
        error[1] = 'El nombre debe tener entre 5 y 50 caracteres';
        return error;

    }
    else if(email.value.length < 5 || email.value.length > 50 || email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1) {

        error[0] = true;
        error[1] = "el mail es invalido";
        return error;
    } else if(materia.value,length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "Debe seleccionar al menos una materia";
        return error;
    }

    error[0] = false;
    return error;
    
   }

