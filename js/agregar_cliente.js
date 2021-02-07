eventListeners();

function eventListeners() {
  document
    .querySelector("#formulario")
    .addEventListener("submit", obtener_datos);
}

function obtener_datos(e) {
  e.preventDefault(); //previene la accion del submit

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const telefono = document.querySelector("#telefono").value;
  const empresa = document.querySelector("#empresa").value;
  //recoleccion de los datos que quiero desde el html

  const datos = new FormData(); //encapsulamiento de los datos para envio
  datos.append("nombre", nombre);
  datos.append("email", email);
  datos.append("telefono", telefono);
  datos.append("empresa", empresa);
  datos.append("accion", "registrar");

  envar_async(datos); //enviar a una funcion

  console.log(datos);
}

function enviar_fetch(cliente) {
  //console.log(cliente);
  fetch("./inc/envio_json.php", {
    //envio de los datos a php
    method: "POST",
    body: cliente,
  })
    .then((res) => res.json()) //esperar una respuesta en json
    .then((data) => {
      //obtener los resultados del json
      console.log("respuesta del json");
      console.log(data);
    });
}

async function envar_async(cliente) {
  try {
    const res = await fetch("./inc/envio_json.php", {
      //envio del fetch con los datos a php
      method: "POST",
      body: cliente,
    });
    const data = await res.json(); //esperando la respeta de res y guardarlo en una variable

    console.log("respuesta eenviada con el metodo async");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//obtener_datos();
