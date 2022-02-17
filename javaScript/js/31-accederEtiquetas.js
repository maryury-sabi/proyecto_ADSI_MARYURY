"use stritc"
 let parrafo = document.getElementsByTagName("p");


 function cambiarparrafo() {
     parrafo[3].innerHTML = "Este texto es modificacion desde javascriprt ";
     parrafo[3].style.color="red";
     parrafo[3].style.fontSize ="1.6em";
 }
  function retomarParrafo() {
    parrafo[3].innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio itaque debitis possimus adipisci. Corrupti distinctio sequi iure pariatur, perferendis placeat delectus voluptas! Atque ducimus libero suscipit possimus dignissimos maxime!</p>";
    parrafo[3].style.color="black";
    parrafo[3].style.fontSize ="1em";

  }
