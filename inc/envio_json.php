<?php
//echo 'desde servicios';
$accion = $_POST['accion']; //recibir la accion

require 'funciones.php'; //cargo las funciones

switch ($accion) { //llamo la funcion que necesito
    case "mostrar":
        $resultado = obtener_usuarios();
        break;
    case "registrar":
        $resultado = registrar_usuarios();
        break;
    case "buscar":
        $resultado = buscar_usuario();
        break;
    case "actualizar":
        $resultado = actualizar_usuario();
        break;
    case "eliminar":
        $resultado = eliminar_usuario();
        break;
}

echo json_encode(($resultado));// envio el retorno del array a donde se me pide