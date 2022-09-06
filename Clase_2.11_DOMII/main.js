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

const h3Alert = document.getElementById("h3Alert");
// console.log(h3Alert)
// h3Alert.addEventListener('click', () => {
//   alert ('Escuchando un evento click desde JS')
// })

//!Las funciones flechas tienen que declararse antes
const mostrarAlerta = () => {
  alert("Escuchando un evento click desde JS, pero pasandole una funcion");
};

// h3Alert.addEventListener('click' , mostrarAlerta)
// h3Alert.onclick = mostrarAlerta

//!Las funciones delcaradas con function no se alteran el orden como con las var porque desde un incio se las lleva

//?Hoisting? Globo que se llevaba la declaracion (function y var) al principio
// function mostrarAlerta() {
//   alert('Éscuchando con un function')
// }

// <------------------------------------------------------------------->

//Focus/Blur
//* Focus: Seleccionar un elemento
//* Blur: Deseleccionar un elemento

const inputBlur = document.querySelector("#inputBlur");
// console.log(inputBlur)

//Events Listener. Hacemos ahora los dos para repasarlos, no siempre son requeridos
inputBlur.addEventListener("focus", focusFunction);
inputBlur.addEventListener("blur", blurFunction);

// Si queremos usar funciones flechas deberiamos hacer los addEventListener despues de la creacion de las funciones
// function focusFunction() {
//   console.log("Hiciste foco en el input");
// }

//* Cambiar Estilos Con Js

// Cuando hacemos focus en el input hace tal cosa

function focusFunction() {
  //Vamos a cambiarle el background-color (backgroundColor) a amarillo
  inputBlur.style.backgroundColor = "yellow";
  // console.log("Hiciste foco en el input");
}

//Cuando deseleccionemos es input hace tal cosa
function blurFunction() {
  //Vamos a sacarle el background-color al input
  inputBlur.style.backgroundColor = "";
}

// <------------------------------------------------------------------->
//* Change

const inputChange = document.getElementById("inputChange");
// console.log(inputChange)
inputChange.addEventListener("change", mostrarAlertaChange);

function mostrarAlertaChange() {
  alert("Cambio mi value");
}

// <------------------------------------------------------------------->

//* Cambiar Clases a los elementos con JS
// Asignando una nueva clase

//* Cambiar atributos con JS

//Mostrar y ocultar una imagen con style

const image = document.getElementById("img");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

//Agregar los escuchadores de evento

hide.addEventListener("click", () => {
  image.style.display = "none";
});

show.addEventListener("click", () => {
  image.style.display = "block";
});

// <------------------------------------------------------------------->

//*Mostrar y ocultar la imagen con un solo boton

const imgToggle = document.getElementById("imgToggle");
const btnToggle = document.getElementById("toggle");

//? Toggle basicamente lo que hace es si tiene la clase se la saca, sino, se la agrega

btnToggle.addEventListener("click", () => {
  imgToggle.classList.toggle("ocultar");
});

//El show y el ocultar de las class estan armados en el css previamente
//! ESTA FORMA ES MAS SIMPLE Y PROLIJA

// <------------------------------------------------------------------->

//* Keys

// Eventos Keyboard
const keyboard = document.getElementById("keyboard");

//* KeyDown
//Si mantengo apretada la tecla se imprime
// keyboard.addEventListener("keydown", (e) => {
//   console.log(e);
// });

//* KeyUp
//Se imprime en el momento que suelto la tecla.
// keyboard.addEventListener("keyup", (e) => {
//   console.log(e);
// });

//? Con el keyCode podemos prevenir el uso de ciertas letras y caracteres, en este caso el keyCode es 68 que representa la letra D
keyboard.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 68) {
    alert("No podes usar esa tecla");
    e.preventDefault();
  }
});
//preventDefault evita un evento por defecto

// <------------------------------------------------------------------->

//* Contador
const resultado = document.getElementById("resultado");
const btnAumentar = document.querySelector(".btn-aumentar");
const btnDisminuir = document.querySelector(".btn-disminuir");
const btnReset = document.querySelector('.btn-reset')

//Iniciar una variable de nombre contador que arranque en 0
let contador = 0;


btnAumentar.addEventListener('click', () =>{
  contador++;
  // resultado.innerHTML = contador
  updateResultado()

})
btnDisminuir.addEventListener('click', () => {
  contador--;
  // resultado.innerHTML = contador
  updateResultado()

});


btnReset.addEventListener('click', () => {
  contador = 0;
  // resultado.innerHTML = contador
  updateResultado()
})

function updateResultado() {
  resultado.innerHTML = contador
}
updateResultado()