"use strict"

function valida() {
    let NombreUs= document.getElementById("nombre").value;
if (NombreUs === ""){
        alert("Por favor Ingresar el Nombre de usuario");
    }

    let ApellieUs= document.getElementById("apellidos").value;
      if (ApellieUs === ""){
        alert("Por favor Ingresar el Apellido de usuario" );
    }
    let comenUs= document.getElementById("comentario").value;
      if (comenUs === ""){
        alert("Por favor Ingresar el comentario de usuario" );
}else{
    alert("La infromacion ha sido enviada con exito !!!")
}
}