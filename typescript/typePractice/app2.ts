// let avenger = {
//   nombre: "Steve",
//   clave: "Capitan America",
//   poder: "Droga"
// }
//
//
//
// let { nombre, clave, poder} = avenger;
// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;
//
// console.log(nombre, clave, poder)


// let avengers:string[] = ["Thor", "Steve", "Tony"];
//
// let [ thor, capi, ironman] = avengers;
//
// console.log(thor, capi, ironman)




//promesas

// let promo1 = new Promise( function( resolve, reject){
//   setTimeout(() => {
//     console.log("Promesa terminada")
//     resolve();
//   }, 1500)
// })
//
// console.log("paso 1")
//
//
// promo1.then(function(){
//   console.log("Ejecutarme cuando termine bien")
// },
//  function(){
//   console.log("Error")
// })
//
// console.log("paso 2")




//interface

// interface Xmen{
//   nombre:string,
//   poder:string
// }
//
//
// function enviarMision(xmen:Xmen) {
//   console.log("Enviando a:" + xmen.nombre)
// }
//
// function enviarCuartel(xmen:Xmen) {
//   console.log("Enviando al cuartel:" + xmen.nombre)
// }

//
// let wolverine:Xmen = {
//   nombre: "wolverine",
//   poder: "Regeneracion"
// };
//
// enviarMision(wolverine);
// enviarCuartel(wolverine);


//class


// class Avenger {
//   nombre:string = "sin nombre";
//   equipo:string = undefined;
//   nombreReal:string = undefined;
//
//   puedePelear:boolean = false;
//   peleasGanadas:number = 0;
//
//   constructor( nombre:string, equipo:string, nombreReal:string){
//     this.nombre = nombre
//     this.equipo = equipo
//     this.nombreReal = nombreReal
//   }
// }
//
// let antman:Avenger = new Avenger("Antman", "cap", "scott Land");
//
//
// console.log(antman)


//decorator

// 
// function consola(constructor:Function ){
//   console.log( constructor );
// }
//
//
// @consola
// class Villanos {
//   constructor( public nombres:string){
//
//   }
// }
