// //*Callbacks

// const saludar = (nombre) => {
//   alert(`hola ${nombre}`);
// };

// const procesarEntradaUsuario = (callback) => {
//   const nombre = prompt("Por favor ingresa tu nombre");
//   callback(nombre);
// };

// procesarEntradaUsuario(saludar)

//* repeat(n)
//El metodo repeat es un metodo de los strings que permite repetirlo n veces sin necesidad de escribir todo el codigo manualmente
//Repite la cantidad de veces que le especifiquemos

// const nombre = "Nelson ";
// console.log(nombre.repeat(2));

// chartAt()

//Devuelve el caracter en el index(indice) que le pasemos (a partir de 0,1,2 y contando los " " espacios)
// console.log(nombre.charAt(3))

//* concat(string)

//Nos permite concatenar dos o mas arrays/strings
// console.log(nombre.concat("holis"));

//* includes(value)
//Es un metodo de lois strings y arrays que nos permite

//* slice(start, end?)

//* map(callback)
//El map recibe un callback, es un metodo que recibe por parametro una funcion. El resultado de este metodo es un nuevo array, pero cuyos valoes se corresponjden con el valor retornado por el callback. La funcion de callback

// const numeros = [1, 2, 3, 4, 5, 6];

// for(let i = 0; i < numeros.length; i++){
// numeros[i] = numeros[i] * 2
// console.log(numeros[i])
// }

// const numerosDobles = numeros.map((numero) => {
//   return numero * 2;
// });

// console.log(numerosDobles)

//* filter()
//Es un metodo de los arrays que debe retornar un booleano. El resultado de este es uyn nuevo array, con los valores del array original que hayan retornado un valor truthy.

// const array = [1, 2, 3, 4, 5, 6];
// const arrayFiltrado = array.filter((item) => item > 3);

// console.log(arrayFiltrado)

// Ejemplo filter con array de strings
const arrayPalabras = [
  "Argentina",
  "Brasil",
  "Bariloche",
  "Uruguay",
  "Paraguay",
];

// const arrayFiltradoPalabras = arrayPalabras.filter((item) => item.includes('guay'))
// console.log(arrayFiltradoPalabras)

//* find()

// es un metodo de los arrays que recibe por parametro una funcion que debe retornar un booleano. El resultado es el PRIMER elemento del array con el cual el callback retorna truthy

const array = [1, 2, 3, 4, 5, 6];
const find = array.find((item) => item > 2);

// console.log(find)

//* forEach()

//El metodo forEach ejecuta la funcion indicada por cada elemento del array
// const arrayNumeros = [1, 2, 3, 4, 5, 6]
// // arrayNumeros.forEach((item) => console.log(item))
// arrayNumeros.forEach((item) => {
//   console.log(`Estamos recorriendo el numero ${item}`)
// })

//* reduce()

// Es un metodo de los arrays que recibe por parametro una funcion. Este metodo se encarga de ejecutar la funcion de callback por cada iteraccion y devuelve
//callback(acumulador, valor)

const arrayNumeros = [10, 20, 30];
// console.log(arrayNumeros.reduce((a, b) => a + b))

//* sort()

//Es un metodo de los arrays que recibe por parametro una funcion y que se encarga de ordenarlo por segun corresponda. Esta funcion es opcional, ya que sino se pasa el parametro, se oprdenara segun la posicion del valor unicode de cada caracter
//ToDo googlear UNICODE

// console.log(arr.sort())
// console.log(
//   arr.sort(function (a,b){
//   return a-b
// })
// )

//* every

const arr = [1, 3, 7, 9, 24, 12];
// console.log(arr.every((item) => item > 1));

//* some()

//Recibe una funcion de callback cuyo return será interpretado como un valor booleano. Siu el menos un elemento del array retorna true, el metodo retornara true. En cambio, si todos retornan false, retornará false.

const arrNum = [1, 2, 3, 4, 5, 6];
// console.log(arrNum.some((item) => item > 2));

//* indexOf()
//Este metodo retorna el primer indice en el que se puede encontrar un elemento dado enm el array, devuelve -1 si no esta
// console.log(arrNum.indexOf(3))

// Spread Operator
const numeros = [1, 2, 3];
const otrosNumeros = [4, 5, 6];
// console.log(numeros.concat(otrosNumeros))
//Con ES6 ecmascript6
// console.log([...numeros, ...otrosNumeros])

// const user = {
//   id:1,
//   nombre: 'Nelson',
// };

// let userCopy ={...user};
// userCopy.web = 'nelson.com';
// console.log(userCopy)
// console.log(user)

const productos = [
  { id: 1, nombre: "remera", precio: 500 },
  { id: 2, nombre: "Pantalon", precio: 2500 },
  { id: 3, nombre: "Zapatillas", precio: 1500 },
];
// const productosConDescuentos = productos.map((producto) => {
//   if (producto.precio < 1000) {
//     return producto;
//   }
//   return {
//     ...producto,
//     precio: producto.precio * 0.9,
//   };
// });

// console.log(productos);
// console.log(productosConDescuentos);

// const idProductos = productos.map((producto) => producto.id)
// console.log(idProductos)

const idProductos = productos.map(({ nombre }) => nombre);
// console.log(idProductos)

const peliculas = [
  {
    id: 1,
    title: "Volver al futuro",
    tags: ["ficcion", "aventura"],
    img: "asd/asd.jpg",
  },
  {
    id: 2,
    title: "Shreck",
    tags: ["animada", "aventura"],
    img: "asd/asd.jpg",
  },
  {
    id: 3,
    title: "Star Wars",
    tags: ["ficcion", "accion"],
    img: "asd/asd.jpg",
  },
  {
    id: 4,
    title: "Memento",
    tags: ["suspenso"],
    img: "asd/asd.jpg",
  },
  {
    id: 5,
    nombre: "Spiderman",
    tags: ["accion"],
    img: "asd/asd.jpg",
  },
];

//find
// console.log(peliculas.find((pelicula) => pelicula.id === 1))

//some & includes
// console.log(peliculas.some((peliculas) => peliculas.tags.includes("aventura")));

//every 
// console.log(peliculas.every((peliculas) => peliculas.tags.includes('accion')))

// map
// console.log(peliculas.map((pelicula) => pelicula.title));

// const imprimirPelis = () => {
//   peliculas.map((pelicula) => {
//     return `
//         <h1>${pelicula.title}</h1>
//         <p>${pelicula.tags}</p>
//         <img src=${pelicula.img} />
//         `;
//   });
// };

//  filter
// console.log(peliculas.filter((pelicula) => pelicula.tags.includes('aventura')));

console.log(peliculas.filter((peliculas) => peliculas.img !== undefined));
