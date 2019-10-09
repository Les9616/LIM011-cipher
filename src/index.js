//Declarando los ID de los botones//
const btnSelectC = document.getElementById("botonC");
const btnSelectD = document.getElementById("botonD");
let ingText = document.getElementById("ingTexto");
let salTexto = document.getElementById("resTexto");
let salTextoD = document.getElementById("resTextoD");
let btnEncode = document.getElementById("cifrar");
let btnDecode = document.getElementById("descifrar");
let btnReturn = document.getElementById("regresar");
let btnReturnD = document.getElementById("regresar1");

//Mostrando Pantalla Cifrado//
btnSelectC.addEventListener("click", Select);
function Select(){
   document.getElementById("Inicio").style.display = "none";
   document.getElementById("pag-Cifrado").style.display = "block";
}

//Mostrando Pantalla Descifrado//
btnSelectD.addEventListener("click", SelectD )
function SelectD(){
   document.getElementById("Inicio").style.display = "none";
   document.getElementById("pag-Descifrado").style.display = "block";
}

//Regresando al Inicio desde Cifrado//
btnReturn.addEventListener("click", ReturnC )
function ReturnC(){
   document.getElementById("Inicio").style.display = "block";
   document.getElementById("pag-Cifrado").style.display = "none";
}

//Regresando al Inicio desde Descifrar//
btnReturnD.addEventListener("click", ReturnD)
function ReturnD(){
   document.getElementById("Inicio").style.display = "block";
   document.getElementById("pag-Descifrado").style.display = "none";
}

//Boton Cifrado//

btnEncode.addEventListener("click",()=>{
  let ingText = document.getElementById("ingTexto").value; 
  let clave1 = document.getElementById("keyHtml").value;
  salTexto.innerHTML = cipher.encode(parseInt(clave1),ingText);
})

//Boton Descifrado//
btnDecode.addEventListener("click",()=>{
   let ingrTextD = document.getElementById("ingTextoD").value;
   let clave2 = document.getElementById("keyHtml2").value;
   salTextoD.innerHTML = cipher.decode(parseInt(clave2),ingrTextD);
})