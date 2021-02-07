//console.log("hola mundo");
//

// prueba del metodo en el cual se envia a una peticion a travez de una capa en php
//la capa de php espera la respuesta de un apartado de consultadas en php
//regresa los resultados de esa consulta a javascript por medio Asyn & await

async function mostrarServicios() {
  const datos = new FormData();
  datos.append("accion", "mostrar");

  try {
    const URL = "./inc/envio_json.php";
    const resultado = await fetch(URL, {
      method: "POST",
      body: datos,
    });
    const db = await resultado.json();

    // console.log(db);
    // console.log(db[1]["nombre"]);
    //db es el nombre de mi resultado, el [1] indica la posicion del arreglo, [nombre] el campo del arreglo
    // console.log("--------------------------------------------------------");

    // Generar el HTML cuando son muchos los resultados que quiero
    db.forEach((servicio) => {
      //console.log(servicio);
      //   console.log("aber");
      const { id, nombre, telefono, empresa, email } = servicio;

      const listado_clientes = document.querySelector("#lista_clientes");

      listado_clientes.innerHTML += ` <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
              <p class="text-sm leading-10 text-gray-700"> ${email} </p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700">${telefono}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
              <p class="text-gray-600">${empresa}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
              <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
              <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
          </td>
      </tr>
  `;
    });
  } catch (error) {
    console.log(error);
  }
}

const listadoClientes = document.querySelector("#lista_clientes");

document.addEventListener("DOMContentLoaded", () => {
  mostrarServicios();

  listadoClientes.addEventListener("click", eliminar_registro);
});

async function eliminar_registro(e) {
  let idEliminar = null;
  if (e.target.classList.contains("eliminar")) {
    idEliminar = Number(e.target.dataset.cliente);
    //const confirmar = confirm('Deseas eliminar este cliente?');
    try {
      console.log(idEliminar);
      const datos = new FormData();
      datos.append("id", idEliminar);
      datos.append("accion", "eliminar");

      const res = await fetch("./inc/envio_json.php", {
        method: "POST",
        body: datos,
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
