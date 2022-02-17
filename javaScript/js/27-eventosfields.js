"use strict"

function validarInfo(numeroDocumento){
    let num = document.getElementById(numeroDocumento).value;



    if (num  === ""){
        alert("El numero de documento es un dato Obligatorio");
    }
    else {
        alert("La informacion ha sido enviada con exito!")
    }
}
