<?php

//se obtienen todos los usuarios
function obtener_usuarios(): array
{
    try {
        require 'conexion.php';

        $sql = "select * from usuarios;";
        $consulta = mysqli_query($db, $sql);

        $usuarios = [];

        $i = 0;

        while ($row = mysqli_fetch_assoc($consulta)) { //usar cuando se espera varios resultadosS
            $usuarios[$i]['id'] = $row['id_user'];
            $usuarios[$i]['nombre'] = $row['nombre'];
            $usuarios[$i]['telefono'] = $row['telefono'];
            $usuarios[$i]['email'] = $row['telefono'];
            $usuarios[$i]['empresa'] = $row['empresa'];
            $i++;
        }

        //var_dump($usuarios);
        return $usuarios;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

//se registran los usuarios
function registrar_usuarios(): array
{
    try {
        require 'conexion.php';

        //datos que se reciben
        $email = $_POST['email'];
        $empresa = $_POST['empresa'];
        $nombre = $_POST['nombre'];
        $telefono = (int) $_POST['telefono'];

        //creacion de la sentencia
        $sql =  "INSERT INTO usuarios (telefono, email, nombre, empresa) VALUES('$telefono','$email','$nombre','$empresa')";
        $consulta = mysqli_query($db, $sql);

        $respuesta = array(
            'respuesta' => 'correcto',
            'id' => mysqli_insert_id($db),
            'email' => $email,
            'empresa' => $empresa,
            'nombre' => $nombre,
            'telefono' => $telefono
        );

        return $respuesta;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function buscar_usuario(): array
{
    try {
        require 'conexion.php';

        $id = $_POST['id'];
        $sql = " select * from usuarios where id_user=$id;";
        $consulta = mysqli_query($db, $sql);

        $row = mysqli_fetch_assoc($consulta); //recibir el resultado de la consulta cuando solo es 1

        return $row;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}


function actualizar_usuario(): array
{
    try {
        require 'conexion.php';

        $email = $_POST['email'];
        $empresa = $_POST['empresa'];
        $nombre = $_POST['nombre'];
        $telefono = (int) $_POST['telefono'];
        $id = $_POST['id'];

        $sql = "UPDATE `usuarios` SET `telefono` = '$telefono', `email` = '$email', `nombre` = '$nombre', `empresa` = '$empresa' WHERE `usuarios`.`id_user` = $id;";
        $consulta = mysqli_query($db, $sql);

        $respuesta = array(
            'respuesta' => 'correcto',
            'email' => $email,
            'empresa' => $empresa,
            'nombre' => $nombre,
            'telefono' => $telefono
        );

        return $respuesta;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function eliminar_usuario(): array
{
    try {
        require 'conexion.php';

        $id = $_POST['id'];
        $sql = " DELETE FROM `usuarios` WHERE `usuarios`.`id_user`= $id";
        $consulta = mysqli_query($db, $sql);

        $respuesta = array(
            'respuesta' => 'eliminado',
            'id' => $id
        );

        return $respuesta;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
