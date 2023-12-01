//alert("Hola este es mi Javascript");
//const nombre = "Luis";
//console.log(nombre)

//selecionar elementos
//let contenidotitulo = "Nombre"

//let titulo = document.querySelector("h2");
//console.log(titulo);
//titulo.innerHTML= contenidotitulo;

//Condicionales
//let textotitulo = titulo.innerHTML
//console.log(textotitulo)
//if(textotitulo == "Nombre"){
//    titulo.innerHTML= "Otro";
//}
//else{
//    titulo.innerHTML= "No Cumple"
//    console.log("no se cumple");
//}

 //funciones

//let nombre = "Lolo";
//let pais = "Co Sp"

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, pais) {
//    let contenido = `Hola, mi nombre es ${nombre} Hernan Torres Machado. Soy de ${pais}, tengo 22 años y me gradué de ingeniería agropecuaria. Estoy explorando este nuevo mundo de la programación.`
//    return contenido;
//};

//parrafo.innerText = cambiarTexto(nombre,pais)
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});