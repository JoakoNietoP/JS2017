// Nuestra Primera Linea en JS
//alert("Hola mundo");

//Variables
// para declarar una variable usamos la palabra reservada de var / let / vonst, le damos un nombre y lo igualamos a un valor
var numeroA = 15;
var numeroB = 20;
var resultado = numeroA + numeroB;

//para mostrar en la consola vamos a hacer uso del console.log()

//console.log(resultado);

// Vamos a concatenar texto
var textoA = "Harry";
var textoB = "Potter";
//consoleamos textoA + textoB y le agregamos un espacio
//console.log(textoA + " " + textoB);

//consoleamos textoA + numeroA y nos devuelve Harry15
//console.log(textoA + numeroA)

//* Tipos de datos en JS
/*
-Number = 1/35/155/49..
-String = 'Hola', "hola", `Hola` comilla invertida Alt + 96
-Booleanos = true, false
-undefined = algo no definido
-null = vacio
-funciones
-objetos
-arrays
*/
// Ejemplo con template stringss ``
//Vamos a usar la variables de textoA y textoB
//console.log('La pelicula es: ' + textoA + ' ' + textoB)
//console.log(`La pelicula es: ${textoA} ${textoB}`)

var nombre = "Nelson";
//console.log(nombre)
nombre = "Pepito";
//console.log(nombre)

// Var let const

//Lo podemos volver a declarar y asignar con el mismo nombre y asignar un nuevo valor
var tipoVar = "Hola soy var";
var tipoVar = "hola soy un var re declarado";
//console.log(tipoVar)

//let
let tipoLet = "hola soy let";
//*No puedo volver a declararla con el mismo nombre
//let tipoLet = 'Hola soy un let Redeclarado'

//* Lo que podemos hacer es reasignar su valor
tipoLet = "Hola soy let reasignado";

//console.log(tipoLet)

const tipoConst = "Hola soy una const";
//*No podemos declararla con el mismo nombre
//const tipoConst = 'Hola soy const redeclarado, no puedo
//*No podemos reasignar un valor
//tipoConst ='hola, no podemos reasignar su valor'

const nombreConst = "Nelson";
let edad = 27;
//console.log(`EL profe se llama ${nombreConst} y tiene ${edad} años`)

//* Operadores
/*
+ = sumar
- = resta 
* = multiplicacion
/ = divisiion
** = calcular la base ala potencia del exponente
% = modulo, nos da el resto
++ = incrementa en uno
-- = decrementa en uno
*/
let numeritoUno = 10;
let numeritoDos = 5;

//suma
//console.log(numeritoUno + numeritoDos)
//restar
//console.log(numeritoUno - numeritoDos)
//multiplicacion
// console.log(numeritoUno * numeritoDos)
//division
//console.log(numeritoUno / numeritoDos)
//modulo
//console.log(numeritoUno % numeritoDos)
//incrementar
//numeritoUno++;
// console.log(numeritoUno)
//decrementador
//numeritodos--
// console.log(numeritoDos)

// * Operadores de comparacion
/*
== => compara valores
=== => compara los valores y el tipo de dato
!= => diferentes valores
!== => difentes valores y diferente tipo de dato
> => mayor que
< => menor que
>= => mayor o igual
<= => menor o igual

&& = y - and
|| = o - or
*/

// console.log(5 == 5); devuelve true
// console.log(5 == '5'); devuelve true
// console.log(5 === '5'); devuelve false

// Como sabemos que tipo de dato estamos manejando?
// Podemos usar typeof
// console.log(typeof 5);
// console.log(typeof '5');
// console.log(typeof true);
// console.log(typeof 5.3);

// Prompt
// prompt('Hola, como te llamas?') // Abre el cuadro de dialogo que nos pide un dato
// Nosotros queremos guardar ese dato para consolearlo, entonces lo guardamos en una variable
// let dato = prompt('Hola, como te llamas?');
// Al guardar en una variable dato va a valor lo que le escribamos en el prompt
// consoleamos el dato
// console.log(dato);
// clg Atajo para el console.log()
