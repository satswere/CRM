const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const empresaInput = document.querySelector('#empresa');

const formulario = document.querySelector('#formulario');

document.addEventListener('DOMContentLoaded', () => {
    const parametrosURL = new URLSearchParams(window.location.search);
    idCliente = parametrosURL.get('id');
    if(idCliente){
        obtener_cliente(idCliente);
    }
});
eventListeners();

function eventListeners(){
  document.querySelector('#formulario').addEventListener('submit',actualizarCliente);
}

async function obtener_cliente(id){
    
    const datos = new FormData();

    datos.append('id',id);
    datos.append('accion',"buscar");

try {
    direccion = "./inc/envio_json.php";
    const peticion = await fetch(direccion,{
        method: 'POST',
        body: datos
    });
    const resultado = await peticion.json();
    console.log(resultado);
    llenar_formulario(resultado);


} catch (error) {
    console.log(error);
}
}

function llenar_formulario(cliente){

const { id_user, nombre, telefono, empresa, email } = cliente;

nombreInput.value = nombre;
empresaInput.value = empresa; //asignar los valores del id correspondiente
emailInput.value = email;
telefonoInput.value = telefono;

}

function actualizarCliente(e){
    e.preventDefault();
    console.log("desde actualizar cliente");
    const nombreInput = document.querySelector('#nombre').value;
    const emailInput = document.querySelector('#email').value;
    const telefonoInput = document.querySelector('#telefono').value;
    const empresaInput = document.querySelector('#empresa').value;

    
    const formulario = document.querySelector('#formulario');

    const datos = new FormData(); //encapsulamiento de los datos para envio
    datos.append('nombre',nombreInput);
    datos.append('email', emailInput);
    datos.append('telefono', telefonoInput);
    datos.append('empresa',empresaInput);
    datos.append('accion',"actualizar");
    datos.append('id', idCliente);

    enviar_nuevos_datos(datos); //enviar a una funcion

    
}

async function enviar_nuevos_datos(datos_cambio){
    try {
        const res = await fetch('./inc/envio_json.php',{ //envio del fetch con los datos a php
            method: 'POST',
            body: datos_cambio
        })
        const data = await res.json(); //esperando la respeta de res y guardarlo en una variable

        console.log("respuesta recibida desde enviar nuevos datos");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

