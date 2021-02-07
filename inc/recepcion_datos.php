<?php
$email = $_POST['email'];
$empresa = $_POST['empresa'];
$nombre = $_POST['nombre'];
$telefono = (int) $_POST['telefono'];

require 'conexion.php';


$sql =  "INSERT INTO usuarios (telefono, email, nombre, empresa) VALUES('$telefono','$email','$nombre','$empresa')";
$consulta = mysqli_query($db,$sql);


$respuesta = array(
  'respuesta' => 'correcto',
  'id' => mysqli_insert_id($db),
  'email' => $email,
'empresa' => $empresa,
'nombre' => $nombre,
'telefono' => $telefono
);


$db->close();
echo json_encode($respuesta);