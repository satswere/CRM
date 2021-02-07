 
 
 <?php
 echo 'desde prueba';

 require 'conexion.php';

 $email = "correo@gmail.com";
 $empresa = "empresa fansatamas";
 $nombre = "gaimito";
 $telefono = (int) "101010101010101";


 $id = 23;
 $sql = "UPDATE `usuarios` SET `telefono` = '$telefono', `email` = '$email', `nombre` = '$nombre', `empresa` = '$empresa' WHERE `usuarios`.`id_user` = $id;";

 $consulta = mysqli_query($db,$sql);
 $row = mysqli_fetch_assoc($consulta);

 var_dump($row);
 return $email;

        var_dump($usuario);