// function saludar(nombre:string) {
//   console.log("hola " + nombre.toUpperCase());
// }
//
// var wolverine = {
//   nombre: "Logan"
// };
//
// saludar(wolverine.nombre);
// let
// let mensaje = "hola";
//
//
// if(true) {
//   let mensaje = "adios"
// }
//
// console.log( mensaje )
// const
//
// let nombre:string = "Peter";
// let numero:number = 12334;
// let booleano:boolean = true;
// let cualquiera:any;
//
// cualquiera = nombre;
// cualquiera = booleano;
// cualquiera = numero;
// cualquiera = Date;
//
// let hoy:Date = new Date()
//
//
//
// let spiderman = {
//   nombre: "Peter",
//   edad: 20
// }
//
// function getNombre(){
//   return "fernando";
// }
//
// let nombre:string = "Ramiro"
// let apellido:string = "Ruiz"
// let edad:number = 28;
//
// // let texto = "Hola " + nombre + " " + apellido + "("+ edad + ")";
//
// let texto = `Hola, ${ nombre } ${apellido} (${ edad })`
//
// let texto2:string = `${ getNombre() }`
//
// console.log(texto)
// console.log(texto2)
// function activar( quien?:string,
//                   objeto:string = "batiseñal",
//                   momento?:string){
//   let mensaje:string;
//
//   if( momento){
//     mensaje = `${quien} activo la ${ objeto } en la ${ momento }`;
//   } else {
//     mensaje = `${quien} activo la ${ objeto }`;
//   }
//
//
//
//   console.log(mensaje)
//
// }
//
// activar("Gordon", "batiseñal", "tarde");
// FUCTION arrow
//  let miFunction = function(a) {
//    return a;
//  }
//
//  let miFunctionF = (a) => a;
//
// let miFunction2 = function( a:number, b:number ) {
//   return a + b;
// }
//
// let miFunction2F = (a:number, b:number ) => a + b;
//
// let miFunction3 = function( nombre:string ) {
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
//
// let miFunction3F = ( nombre:string ) => {
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
// let nombre = "Pedro"
//
// let hulk = {
//   nombre: "Hulk",
//   smash(){
//     setTimeout(() => console.log(this.nombre + " smash!!!"), 1500);
//
//   }
// }
//
// hulk.smash();
