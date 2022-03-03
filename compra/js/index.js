"use strict"

let valorUnico = 45000;

valorIndividual();
infoCantidades();
calcularSubtotal();


// este es el texto que aparese dentro de los parentesis
    let subtotal= 0;
    function calcularSubtotal() {
        document.getElementById("valorUnitario").innerHTML;
        let cantidadElementos = document.getElementById("unidad").innerHTML;
        let totalSubtotal = valorUnico * Number(cantidadElementos);
        let subtotalFormt = new Intl.NumberFormat('es-ES').format(totalSubtotal);
        document.getElementById("Subtotal").innerHTML = subtotalFormt;
    }

    function infoCantidades() {
        let cantidadProductos = document.getElementById("unidad").innerHTML;

        if (cantidadProductos == 1){ 
            document.getElementById("numeroProductos").innerHTML = cantidadProductos.toString() + " producto)"; 
        }else{
            document.getElementById("numeroProductos").innerHTML = cantidadProductos.toString() + " productos)";
        }
    }

    function valorIndividual() {
    let valorProducto = new Intl.NumberFormat('es-ES').format(valorUnico);
    document.getElementById("valorUnitario").innerHTML = valorProducto;
    } 
//esta es la funcion de los botones de aumento 

    function aumentarPedido() {
        let cantidadActual = document.getElementById("unidad").innerHTML;
        let cantidadActualInt = parseInt(cantidadActual);
            if (cantidadActual <10) {
                document.getElementById("unidad").innerHTML = cantidadActualInt + 1;
            }else{
                document.getElementById("unidad").innerHTML = cantidadActualInt;
            }
        calcularSubtotal();
        infoCantidades();
    }
    function disminuirPedido() {
            let disminuir =document.getElementById('unidad').innerHTML;
            let disminuirInt = parseInt(1);
        if (disminuir > 0) {
             document.getElementById("unidad").innerHTML = disminuir - disminuirInt;
        }else{
            document.getElementById("unidad").innerHTML = disminuir;  
        }
        calcularSubtotal();
        infoCantidades();
    }



     













