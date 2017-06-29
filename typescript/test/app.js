// Uso de Let y Const
// let nombre:string = "Ricardo Tapia";
// let edad:number = 23;
//
// const PERSONAJE = {
//   nombre: nombre,
//   edad: edad
// };
// console.log(PERSONAJE.nombre, PERSONAJE.edad)
// Cree una interfaz que sirva para validar el siguiente objeto
// interface Batman {
//   nombre = "Bruno Diaz",
//   artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
// }
// interface Justiciero {
//   nombre:string,
//   artesMarciales:string[]
// }
//
// function habilidades( personaje:Justiciero) {
//   console.log("El personaje es: " + personaje.nombre)
//   console.log(personaje.artesMarciales.map((n) => console.log(n)))
// }
//
//
// let batman:Justiciero = {
//   nombre: "Bruno Díaz",
//   artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
// }
//
//
// habilidades(batman)
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
//
// // console.log(resultadoDoble(2, 2))
//
//
// let resultadoDobleArrow = (a,b) => (a + b) * 2;
//
//
// console.log(resultadoDobleArrow(2,2))
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
// function getAvenger( nombre:string,
//                      poder?:string,
//                      arma:string = "arco" ){
//
//   let mensaje:string;
//
//   if( poder ){
//      mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//   }else{
//      mensaje = nombre + " tiene un " + poder
//   }
//
//   console.log(mensaje)
// };
//
// getAvenger("Joselo", "planchar")
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
// class Rectangulo {
//   base:number = 0
//   altura:number = 0
//
//   constructor(base:number, altura:number ){
//     this.base = base;
//     this.altura = altura
//   }
//
//   multi(){
//     return this.base * this.altura
//   }
//
//
// }
//
// let calculo = new Rectangulo(2,2)
//
// console.log(calculo.multi())
