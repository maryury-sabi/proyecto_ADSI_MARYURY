"use strict"

function expandirTexto(){
    let textoCompleto ="En medio de habitaciones semivacías, amuebladas pobremente con un colchón y unos cuantos trastos viejos, los agentes se encuentran con cuatro jóvenes rumanas en ropa interior, que se defienden apenas con monosílabos en un inglés precario.<br>"+

    "Juguetes sexuales, artículos de belleza, cigarrillos, drogas y condones pueden verse desperdigados por cada uno de los ambientes.<br>"+
    
    "Aunque ellas lo niegan, la policía sospecha que son víctimas de tráfico sexual de menores.<br>"+

   " Dado que el trabajo sexual es legal en Reino Unido, después de llevárselas para interrogarlas en un entorno seguro, a las fuerzas de seguridad no les queda más remedio que devolverlas al sitio en el que las encontraron."+
   "<a href='javascript:void(0)' onclick=' acortarTexto();'><br> Click aqui para continuar...</a>"


   document.getElementById("long-text").innerHTML =textoCompleto;
   
}

function acortarTexto(){
    let textoCorto = "<p id='long-text'>" +
   "Por fuera, con su chimenea y ladrillos rojos, parece una casa como cualquier otra. Pero cuando la policía entra por la fuerza a esta residencia en la ciudad de Birmingham, en el centro-oeste de Inglaterra, nada en ella se asemeja a una típica vivienda familia " +
  " <a href='javascript:void(0)'onclick='expandirTexto();'><br>click aqui para continuar...</a>" +
   "</p>"

    document.getElementById("long-text").innerHTML = textoCorto;
}
