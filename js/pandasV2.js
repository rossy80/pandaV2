var botonOrigen = document.getElementsByTagName("button")[0];
var textoOrigen = document.getElementsByTagName("p")[0]

botonOrigen.addEventListener("click", aparecerTexto)

function aparecerTexto (){

  if (  textoOrigen.style.visibility == "visible") {
      textoOrigen.style.visibility = "hidden";
  } else{
      textoOrigen.style.visibility = "visible";
  }
}
