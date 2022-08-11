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