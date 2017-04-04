// Arrow function

var numero = [1,2,3,4,5]

var multiplo = numero.map(function(n) {
  return n * n;
});

console.log(multiplo);

////////
var numero = [1,2,3,4,5]

var multiplo = numero.map( (n) => {
  return n * n;
});

console.log(multiplo);

///////

setTimeout(function() {
  this.nombre = "pepe"
  console.log(this.nombre);
},500);

setTimeout(function() {
  this.nombre = "joselo"
  console.log(this.nombre);
},1000)

////////


setTimeout(() => {
  this.nombre = "pepe"
  console.log(this.nombre);
},500);

setTimeout(() => {
  this.nombre = "joselo"
  console.log(this.nombre);
},1000)
