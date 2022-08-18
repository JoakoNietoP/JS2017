//Manipulacion del DOM Eventos
//?ESCUCHADORES DE EVENTOS
//!Eventos:

//? Controlan Accionmes
//? Definen Comportamientos
//?Ejemplo: Click


//!Funcionamiento
//?Js asigna una funcion a cada evento
//? Se les denomiuna "event Handlers"
//?Los eventos se asocian a cada elemento que se quiera escuchar

//* addEventListener (la que escucha)

//! Sintaxis 
//?Atributo en el elemento
//? Seguido de la accion asociada al evento
//? Podemos asignarlo desde JS
//? Buscando al elemento y asignandoselo


//* AddEventListener desde JS
// 1.Llamar al elemento
// 2. A ese elemento pasarler un escuchador de evento

const h3Alert = document.getElementById('h3Alert')
// console.log(h3Alert)
// h3Alert.addEventListener('click', () => {
//   alert ('Escuchando un evento click desde JS')
// })


//!Las funciones flechas tienen que declararse antes 
const mostrarAlerta = () => {
  alert('Escuchando un evento click desde JS, pero pasandole una funcion')
}

h3Alert.addEventListener('click' , mostrarAlerta)

//!Las funciones delcaradas con function no se alteran el orden como con las var porque desde un incio se las lleva

//?Hoisting? Globo que se llevaba la declaracion (function y var) al principio
// function mostrarAlerta() {
//   alert('Éscuchando con un function')
// }



// ToDo 25:00
//Focus/Blur

const inputBlur = documente.querySelector("#inputBlur");
// console.log(inputBlur)

inputBlur.addEventListener("focus", focusFunction);
inputBlur.addEventListener("blur", blurFunction);

// Si queremos usar funciones flechas deberiamos hacer los addEventListener despues de la creacion de las funciones
function focusFunction() {
  console.log("Hiciste foco en el input");
}

//* Cambiar Estilos Con Js

// Cuando hacemos focus en el input hace tal cosa

function focusFunction() {
  //Vamos a cambiarle el background-color (backgroundColor) al input
  inputBlur.style.backgroundColor = "yellow";
}

function blurFunction() {
  //Vamos a sacarle el background-color al input
  inputBlur.style.backgroundColor = "";
}

const inputChange = documente.getElementById("inputChange");
// console.log(inputChange)
inputChange.addEventListener("change", mostrarAlertaChange);

function mostrarAlertaChange() {
  alert("Cambio mi value");
}

//* Cambiar Clases a los elementos con JS
// Asignando una nueva clase

//* Cambiar atributos con JS

//Mostrar y ocultar una imagen con style

const image = document.getElementById("img");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

//Agregar los escuchadores de evento

hide.addEventListener("click", () => {
  image.style.gisplay = "none";
});

show.addEventListener("click", () => {
  image.style.display = "block";
});

//*Mostrar y ocultar la imagen con un solo boton

const imgToggle = document.getElementById("imgToggle");
const btnToggle = document.getElementById("toggle");


btnToggle.addEventListener('click', () =>{
    imgToggle.classList.toggle('ocultar')
})
