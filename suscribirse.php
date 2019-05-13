<?php
    $destino= "yamilebunino@gmail.com";
    $nombre= $_POST["nombre"];
    $correo= $_POST["email"];
    $telefono= $_POST["telefono"];
    $mensaje= "Suscripción desde el home";
    $contenido= "Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
    mail($destino,"Contacto",$contenido);
    header("Location:index.html");
 ?>
