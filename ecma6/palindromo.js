
let array = ["Ramiro","pelota", "radar","arepera", "joselo"]

let palindromo = []

console.log(array);
for (let i of array) {
  if (i === i.split("").reverse().join('')) {
    palindromo.push(i)
    console.log(palindromo);
    console.log("son iguales");
  }
}
