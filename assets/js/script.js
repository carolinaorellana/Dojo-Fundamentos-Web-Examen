/* la primera funcion agrega otra texto al boton leer más y elimina el boton mismo*/
var textoHero= document.querySelector(".infoHero p");
console.log(textoHero);
function leerMas(element){
    console.log(element);
    textoHero.innerHTML= "<p>A computer is a vital tool for anyone living in this day and age. This is why we aim to donate every 1 in 10 compuers we collect to charitabe and worthy causes.<br> We offer a free collection service across the UK for the removal of your old IT systems. We safely reuse this equipment by ensuring any sensitive or personal information that was on these machine.</p>";
    element.remove();
}

/*OnMouseOver cambiara estilo css de la tarjeta  */
function cambiarColor(tarjeta){
    if( tarjeta.style.backgroundColor == "white"){
        tarjeta.style.backgroundColor = "seagreen";
    }
    else {
        tarjeta.style.backgroundColor = "white";
    }
}

/*Boton submit despliega alerta de que se envio el formulario */
function enviarFormulario(){
    alert("Formulario se ha enviado con éxito, pronto nos prondemos en contacto");
}
