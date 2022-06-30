//var nombre
//console.log(nombre)
//nombre = 'Nelson';
//console.log(nombre)
// function variables() {
//     var variableLocal = 'esto es local'
// }

// console.log(variableLocal)

//* Ejemplos scope
var a = "Estoy Global";

function holi() {
  var b = "estoy en una funcion";
}

{
  var c = "estoy en bloque";
}
{
  let d = "estoy en bloque";
  const e = "estoy en bloque";
}

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

//* Operadores
/* 
| == / Es igual / a == b
console.log(18 == '18')//true

| === /es estricctamente igual
console.log(18 === '18')//false

| != /es distinto/ a != b
console.log(18 != 18)//false

| !== /extrictamente distinto / a !== b
console.log(18 !== '18')//true

| < /es menor / a < b
console.log(9 < 10);//true

| <= / es menor o igual / a <= b
console.log(9 <= 9);//true

| > | >= / se hace igual que el de menor o igual

|| && / operador de and (y)
console.log(18 > 7 && 9 < 9);//false

| || / operador or (o)
console.log(18 > 7 || 9 < 9);//ture

| ! /operador not (negar)
console.log(!true);//false

*/

// * Condicionales
// Sintaxis
// if (condicion){
//     //codigo a ejecutar si se cumple, osea si es true
//     console.log()
// }

// if (condicion) {
//     //si es verdadera ejecuta lo de aca
//     console.log()
// } else {
//     //si es falsa ejecuta lo de aca
// }

//* Ejemplo de if

// let llueve = true;
//  if(llueve) {
//     console.log('esta lloviendo, no olvides el paraguas')
//  } else {
//     console.log('sali tranqui, no llueve')
//  }

//podemos comprobar si es true basicamente usando solo llueve, js asume que es true
//y si lo queremos negar le decimos !llueve

// * otro ejemplo if

// let edad = 18;
// let nombre = 'Nelson'

// if (edad > 18 && nombre === 'Nelson'){
//     console.log('se puede tomar una birrita')
// }else {
//     console.log('que tome juguito')
// }

//* Switch
// Vamor a ver el ejemplo con el if else y despues pasado a switch
// const mascota = 'perro';

// if (mascota === 'lagarto') {
//     console.log('tengo un lagarto')
// }else if (mascota === 'perro') {
//     console.log('tengo un perro')
// }else if(mascota=== 'gato'){
//     console.log('tengo un gato')
// }else if(mascota === 'loro'){
//     console.log('tengo un loro')
// }else {
//     console.log('no tengo mascota')
// }

//pasemos esto a switch

// const mascota = "perro";

// switch (mascota) {
//   case "lagarto":
//     console.log("tengo un lagarto");
//     break;

//   case "perro":
//     console.log("tengo un perro");
//     break;
//   case "gato":
//     console.log("tengo un gato");
//     break;
//   case "loro":
//     console.log("tengo un loro");
//     break;
//   case "conejo":
//     console.log("tengo un conejo");
//     break;
//   default:
//     console.log("tengo otra mascota");
//     break
// }


//* Sintaxis
// switch(expresion){
//     case 1:
//         //codigo a ejecutar si es true
//         break;
//         case 1:
//         //codigo a ejecutar si es true
//         break;
//     default:
//         //si nada coincide que imprima lo de aca
// }

//* Ejemplo switch y scope
const mandado = 'ir de compras'

switch(mandado){
    case 'Ir al dentista':{
        let mensaje = 'no me gusta ir al dentista'
        console.log(mensaje)
        break
    }
    case 'ir de compras':{
        let mensaje = 'Me encanta ir de compras'
        console.log(mensaje)
        break
    }
    default:
        console.log('sin mandados')
        break;
}

//No podemos declarar la misma variable let mensaje porque ya esta en ese bloque, la consola nos dice que ya esta declarada
//para solucionar eso cerramos bloques con {} despues de case
