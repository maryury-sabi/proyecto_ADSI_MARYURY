"use strict"
//para sumar el costo final
var costoSinIva = 32000;
var costoIva = 3200;
var domicilios = 3000;
var costoTotal = costoSinIva + costoIva + domicilios;
console.log ("El costo total es: $" + costoTotal);

console.log("el limite para usar un entero es: "  + Number.MAX_SAFE_INTEGER);
var numMaximo = number.MAX_SAFE_INTEGER;
//LA SIGUIENTE INFORMACION GENERA UN ERROR POR SOBREPASAR EL NUMERO MAXIMO DISPONIBLE
console.log(numMaximo + 1);