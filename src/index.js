//Declarando los ID de los botones//
const btnSelectC = document.getElementById("botonC");
const btnSelectD = document.getElementById("botonD");
const salTexto = document.getElementById("resTexto");
const salTextoD = document.getElementById("resTextoD");
const btnEncode = document.getElementById("cifrar");
const btnDecode = document.getElementById("descifrar");
const btnReturn = document.getElementById("regresar");
const btnReturnD = document.getElementById("regresar1");
const btnClean = document.getElementById("limpiar");
const btnCleanD = document.getElementById("limpiarD");

//Mostrando Pantalla Cifrado//
btnSelectC.addEventListener("click",()=>{
   document.getElementById("Inicio").classList.add('ocultar');
   document.getElementById("pag-Cifrado").classList.remove('ocultar');
})

//Mostrando Pantalla Descifrado//
btnSelectD.addEventListener("click",()=>{
   document.getElementById("Inicio").classList.add('ocultar');
   document.getElementById("pag-Descifrado").classList.remove('ocultar');
})

//Regresando al Inicio desde Cifrado//
btnReturn.addEventListener("click",()=>{
   document.getElementById("Inicio").classList.remove('ocultar');
   document.getElementById("pag-Cifrado").classList.add('ocultar');
})

//Regresando al Inicio desde Descifrar//
btnReturnD.addEventListener("click",()=>{
   document.getElementById("Inicio").classList.remove('ocultar');
   document.getElementById("pag-Descifrado").classList.add('ocultar');
})

//Boton Cifrado//
btnEncode.addEventListener("click",()=>{
  let ingText = document.getElementById("ingTexto").value; 
  let clave1 = document.getElementById("keyHtml").value;
  salTexto.innerHTML = cipher.encode(parseInt(clave1),ingText);
})

//Boton Limpiar de Cifrado//
btnClean.addEventListener("click",()=>{
   salTexto.innerHTML = " ";
})

//Boton Descifrado//
btnDecode.addEventListener("click",()=>{
   let ingrTextD = document.getElementById("ingTextoD").value;
   let clave2 = document.getElementById("keyHtml2").value;
   salTextoD.innerHTML = cipher.decode(parseInt(clave2),ingrTextD);
})

//Boton Limpiar de Descifrado//
btnCleanD.addEventListener("click",()=>{
   salTextoD.innerHTML = " ";
})