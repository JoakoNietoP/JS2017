/* 
Declarar funcion:
function nombre_funcion(){
    ...
}
nombre_funcion()
*/

// //* Funciones
// //Como declaramos una funcion?
// function identificador() {
//     //va el codigo de la funcion
// }

// //Como la ejecutamos?
// identificador()

// function saludar() {
//     console.log('Hola, soy una funcion')
// }
// saludar()

//* Otro ejemplo con parametros
//Sintaxis de funcion con parqametro
// function nombreDeLaFuncion(parametro){
//     aca va el codigo
// }
//Declarar la funcion
function saludoPersonal(nombre) {
  console.log(`Hola ${nombre}`);
}
//Ejecutamos la funcion
saludoPersonal("Nelson");
saludoPersonal("Pepito");

//Funcion con multiples parametros
//Parametros: Variable que va a existir dentro de una funcion
// function descripcionPersonal(nombre, edad) {
//   console.log(`Hola ${nombre} tengo ${edad} años`);
// }
//Ejecutamos
// descripcionPersonal('Pepito')
// descripcionPersonal('Pepito', 19)

//funcion con parametro por defecto

function descripcionPersonal(nombre, edad, carrera = "nada") {
  console.log(`Hola ${nombre} tenes ${edad} años y estudias ${carrera}`);
}

// descripcionPersonal("Pepito", 28, "frontend");
// descripcionPersonal("Pepito2", 19);

//* Return
function sumar(a, b) {
  return a + b; //Devolvemos la suma de a y b al exterior de la funcion
}
// let resultado = sumar(5, 5);


function sumarNumeros(a, b){
    if (a === 4){
        return;
    }
    return a + b;
}
// console.log(sumarNumeros(5, 5))

//Estructura FOR min 34:41
