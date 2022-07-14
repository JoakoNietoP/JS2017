///* Metodos de arrays, metodos de strings

//Length: Nos permite ver el largo de caracteres de un String
//* Trukini para acordarnos escribir bien length, Gallina Tiene Huevo
let miString = "Hola Mundo";
// console.log(miString);
// console.log(miString.length);

//MATYUSCULAS y minusculas:
// .toLocaleUpperCase() // .toLocaleLowerCase()
// let miAuto = "FiAt";
// console.log(miAuto.toLocaleUpperCase()); //imprime FIAT
// console.log(miAuto.toLocaleLowerCase()); //Imprime fiat

// //*Todo a mayuscula
// console.log(miString.toLocaleUpperCase());

// //*Todo a miniscula
// console.log(miString.toLocaleLowerCase())

//*Reemplazar
// .replace()
// Nos devuelve un nuevo string con la cadena reemplazada
// let nuevoString = 'Hola soy un string';
// console.log(nuevoString.replace('soy', 'somos'))

//Cambiemos el hola por chau de la variable miString
// let resultado = miString.replace('hola', 'chau')
// console.log(resultado)
//Esto no nos modifica nada porque la variable miString tiene un Hola y yo quiero reemplazar hola

//*Solucion
let resultado = miString.toLocaleLowerCase().replace("hola", "chau");
console.log(resultado);

//Quitar Espacios
//trim()
//se encarga de borrar espacios al principio y al final de un string

let stringTrim = "          Hola        ";
// console.log(stringTrim)
// console.log(stringTrim.trim())

//* Dividir
//.split()

//Divide el string en un array a partir de un parametro que le pasemos

let stringSplit = "Hola.soy.una.variable";
// console.log(stringSplit);
// console.log(stringSplit.split('.'))

//*Detectar tipos de datos
//! typeof

//Nos devuelve el tipo de dato qque le estamos pasando
let color = "rojo";
let colores = ["rojo", "azul", "verde"];
let numero = 6;
// console.log(typeof color)
// console.log(typeof colores)
// console.log(typeof numero)

// .includes()
// Este metodo determinja si un string puede ser encontrada en otro string, devuelve true o false

let stringIncludes = "Hola soy un string";

// console.log(stringIncludes.includes("asdf"));
// console.log(stringIncludes.includes("Hola"));

//*Ejercicio

/*
1. Crear una funcion que reciba dos parametros
2. El primer parametro es un string
3. El segundo parametro es un string a buscar dentro del string anterior
4. Si se encunetra, que nos imprima en consola se encontro
5. Si no, que no lo encontro
*/

// const miFuncion = (stringUno, stringDos) => {
//   let isInString =  stringUno.includes(stringDos);
//     if(isInString){
//         console.log(`Se encontro ${stringDos} en el string ${stringUno}`)
//     }else {
//         console.log(`No se encontro ${stringDos}, proba con otra palabra`)
//     }
// }
// miFuncion('Aguante Messi', 'Messi')
//Esto tiene el problema que si lo busco en minuscula no lo va a encontrar

const miFuncion = (stringUno, stringDos) => {
  let stringUnoMinus = stringUno.toLocaleLowerCase();
  let stringDosMinus = stringDos.toLocaleLowerCase();

  let isInString = stringUnoMinus.includes(stringDosMinus);

  if (isInString) {
    console.log(`Se encontro ${stringDos} en el string ${stringUno}`);
  } else {
    console.log(`No se encontro ${stringDos}, proba con otra palabra`);
  }
};
// miFuncion('Aguante Messi', 'messi')

//*ARRAY

//Metodos de arrays
//Length
const array = [1, 2, 3, "hola"];
// console.log(array.length)

// .indexOf()
//Este metodo nos devuelve el elemento que estamos buscando, si devuelve -1 es porque no esta en la variable
const arrayIndexOf = [1, 2, 3, 4, 5, 6];
// console.log(arrayIndexOf.indexOf(2));

//*POP
// .pop()

//Elimina (y retorna)el ultimo elemnto de un array. OJO que este cambia la longitud del array

const plantas = ["rosa", "jazmin", "arbol", "girasol"];
// console.log(plantas)
// console.log(plantas.pop())
// console.log(plantas)

//*SHIFT
//.shift()
//En lugar de eliminar el ultimo elimina el primer elemnto y cambia la longitud del array

// console.log(plantas.shift())
// console.log(plantas)

//*Unshift
//.unshift()
//Agrega al inicio del array
// console.log(plantas.unshift('nogal'))
// console.log(plantas)

//* Reverse
//.reverse()

//Nos da vuelta el array

const plantasReverse = plantas.reverse();
// console.log(plantasReverse)

//*Replaceall
// .replaceAll(reemplazar, reemplazarPor)

let stringUno = "Hola Juan";
// console.log(stringUno.replaceAll('Juan', 'Pepito'))

//* toString()
//.toString()
//Convierte un array a un string
const arrayString = [1, 2, 3, 4, 5, "hola"];
// console.log(arrayString.toString())

//* .join()
//Este metodo junta los elemntos de un array en un string con un separador

// console.log(arrayString.join("/asdasdasd/"));

//* .map()
//Crea un array nuevo con los resultados del map

const arrayNumeros = [1, 2, 3, 4, 5];
const arrayMapeado = arrayNumeros.map((valor) => valor + 1);
// console.log(arrayMapeado)

//* .push()

//Agrega uno o mas elementos al final del array y modifica su longitud

const animales = ["gatos", "perro", "loro"];
const contador = animales.push("vaca", "serpiente", 8, true);
// console.log(contador);
// console.log(animales);

//*Concat 
//.concat()
//Lo usamos para unir dos o mas arrays

const arrayConcat =[1, 2, 3, 'hola']
// console.log(arrayConcat.concat([animales]))

//*Slice
//.slice()

//Este metodo devuelve una copia de una parte del array en otro array, empezando por el inicio (primer parametro) y el final (final no incluido). El array original no se modifica

const nombres = ['pepe', 'pepito', 'maxi', 'coky'];
// console.log(nombres.slice(1, 2))

//*Los que vamos a usar:
/*
length
every
filter
find
some
foreach
join
map
*/

//* Filter
// filter()

//Nos filtra un array y nos devuelve lo que le pedimos
const peliculas = [
  {
    id: 1,
    title: 'Volver al futuro',
    tags: ['ficcion', 'aventura']
  },
  {
    id: 2,
    title: 'Harry potter',
    tags: ['magia', 'aventura']
  },
  {
    id: 3,
    title: 'Spiderman',
    tags: ['accion']
  }
]
//* Find
//busca un elemento que tenga lo que estamos buscando
console.log(
  peliculas.find((item) => item.id === 2)
)
