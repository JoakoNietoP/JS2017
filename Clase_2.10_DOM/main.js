//! DOM
/*
Que es el dom?
Como funciona?
Estructura-Nodos
Métodos basicos del DOM
Selectores window, document, element
Funcionalidades del browser (Timers, Networkin, Location, History, User Agent)
*/
//* Objetivos:
//Introduccion al mundo del DOM

//!Que es el DOM?
//Modelo de Objetos del Documento: Es lo que permite interactuar con JS con los diferentes elementos de HTML de una web, como tambien poder operar sobre ellos y modificarlos. Es decir que, por ejemlo, desde JS podemos modificar el contenido de una etqueta <h1></h1> en un archivo HTMl.

//* Como funciona?
//Funciona mediante una transformacion del codigo html que contiene la estructura de una web, a una representacion estructural del documento, en forma de arbol, mediante la cual podemos acceder usando JS, y operar sobre los elemntos.
//Esta transformacion es realizada automaticamente por los navegadores, por lo que no es necesario realizar nada desde el codigo, simplemente basya con operar mediante JS sobre el DOM

//* Estructura DOM
//Cada etiqueta de HTML se transforma en un nodo de tipo "Elemento".La conversion de etiquetas en nodos se realiza de forma jerarquica. De esta forma, el nodo raiz solamente puede derivar en los nodos HEAD y BODY

//A partir de esta derivacion inicial, cada etiqueta HTML se transforma en un nodo que deriva del correspon diente a su "etiqueta padre". La trnasformacion de las etiquetas htmnl habituales genera dos nodos: El primero es el nodo de tipo "Elemento" (Correspondiente a la propia etiqueta XHTML) y el segundo nodo de tipo "Texto" que contiene texto encerrado por esa etiqueta XHTML.

//* NODOS
//La esoecificacion completa de DOM define 12 tipos de nodos, aunque lo mas usados son:
/*
-Document: Nodo raiz del que derivan los demas nodos del arbol.
-Element: Representa cada una de las etiquetas XHTML. Se trata del unico nodo que puede contener atributos y el unico del que pueden derivar otros nodos.
-ATTR: Se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas html, es decir, uno por cada par atributo=valor
-Text: nodo que contiene el texto encerrado por una etiqueta html. 
-Comment: Representa los comentarios incluidos en la pagina HTML.
*/

//* Metodos basicos del DOM
//Las dos formas mas comodas y populares de acceder a un nodo mediante JS son:
/*
getElementById()
getElementByClassName()
getElementByTagName() 
*/

//*getElementById()
//La funcion getElementById sirve para acceder desde JS a un elemento de la estructura HTML, Utilizando su atributo ID como identificacion

// console.log(document.getElementById('logo'));
//Che js del documento traeme el elemento que tenga el id logo

const logo = document.getElementById("logo");

// console.log(logo.textContent);
// console.log(logo)
// console.dir(logo)

//ToDo Min 19:28

//* getElementByClassName()

//La funcion sirve para acceder desde JS a un elemento de la estructura HTML, utilizando su atributo class como identificacion. Esto devuelve un html collection, con el .innerHTML podemos pasarlo a solo texto
//!Con el innerHtml nos devuelve el contenido del parrafo
// const parrafos = document.getElementsByClassName('parrafo')
// console.log(parrafos[0].innerHTML)

//* getElementByTagName()

//Sirve para acceder desde JS a un elemento de ls estructura HTML utilizando su nombre de etiqueta como identificacion (P/Ddiv/button)
// Es la menos especifica de todas

// const pTag = document.getElementsByTagName('p')
// console.log(pTag)
// console.log(pTag[0].innerHTML)

//Para recorrerlo podemos usar un for

// for (let i = 0; i < pTag.length; i++){
//     console.log(pTag[i].innerHTML)
// }

//Y si queremos usar un forEach tenemos que convertir el HTMLCollection a un array, podemos hacerlo con un spread operator (...)

// let pTagArr = [...pTag]
// console.log(pTagArr)

// pTagArr.forEach(item => {
//     console.log(item.innerHTML)
// })

//* querySelector
//Devuelve la primera coincidencia del elemento, sino encuentra ninguno devuelve null

const header = document.querySelector(".header");
//Para todo el codigo html:
// console.log(header.innerHTML)
//Para solo el texto html
// console.log(header.textContent)
// const p = document.querySelector('.parrafo')
// console.log(header.innerHTML)
// console.log(p)

const p = document.querySelectorAll(".parrafo");
//? Nos devuelve un nodelist
// console.log(p);
// p.forEach((item) => console.log(item));

// console.log(p[0].innerHTML)

//Agregamos texto dentro de un parrafo

const addText = document.getElementById("agregar-texto");
// console.log(addText)
addText.innerHTML = "<b>Hola Estamos</b> agregando texto";
//! con textContenct nos agregaga las etiquetas literal <b></b>, no las transforma en archivo

//* FUNCIONALIDADES DEL BROWSER

// ? setTimeout (function, miuliseconds)
// Ejecuta una funcion despues de esperar un numero especifico de milisegundos

// ? setInterval (function, miliseconds)
// igual que setTimeout() pero repite la ejecucion de la funcion continuamente

//* Set Time Out

// setTimeout(() => {
//     console.log('hola')
// }, 2000)

//* set Interval

// const repetirCadaSegundo = () => {
//   setInterval(mandarLog, 2000)
// };
// const mandarLog = () => {
//     console.log('pasaron 2 segundos')
// }

// repetirCadaSegundo()

//* Interface Location
//Representa la unicacion (URL) del objeto al que está vinculado
//La interface location no hereda ninguna propiedad, pero las implementa desde URLUtils

//*Location

// let url = document.createElement('a');

// url.href = 'https://www.google.com'
// console.log(url)

//?Nos muestra el protocolo de la dirreccion
// console.log(url.protocol)
//?Nos muestra el host(nombre)
// console.log(url.host)

//Nos muestra la direccion de la web
// console.log(window.location.href)

// window.location = 'https://www.google.com'

//! Browser III
//* Network Information API
//Es una tecnologia experimental que nos permite obtener informacion sobre la conexion de red del sistema.

//Esto es util en situiaciones como cuando se decide la calidad de los recursos (imagen, audio, video) en funcion de la conexion de red

//La informacion de la red esta disponible en la connection propiedad del navigation objeto //? (navigator.connection):

//* 1. Creemos un elemento desde js
//!Transformar los elementos traidos de html en variables de js ayuda a hacer un codigo mas limpio y dinamico ademas de poder reutilizarlo sin tener que llamarlo tanto.
/*
1. Traernos el contenedor( o donde querramois agregar la etiqueta) y guardarlo en una variable
2. Crear el elementon en este caso un h2
4. A ese eñe,emtp agregarle el contenido
4. Agregarlo al div contenedor
 */
const contenedor = document.getElementById("contenedor");
// console.log(contenedor)

//* 2. Creamos el elemento

const h2 = document.createElement("h2");

//* 3. creamos el contenido para esta etiqueta

h2.textContent = "Hola Abuela estoy escribiendo HTML desde JS, te extraño";

//* 4. Tenemos que agregar este h2 en algun lado del html

contenedor.appendChild(h2);
