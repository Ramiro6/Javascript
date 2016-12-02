// first class

// var Name = function (first,second_Name) {
//   this.first = first
//   this.second_Name = second_Name
// };
//
// Name.prototype.print = function() {
//   console.log(this.first);
//   console.log(this.second_Name);
// }
//
// var see = new Name("George","knooft");
//
// see.print();

//second class
//
// var Animal = function(name,style){
//   this.name = name
//   this.style = style
// };
//
// Animal.prototype.print = function() {
//   console.log(this.name);
//   console.log(this.style);
// }
//
// var see = new Animal("sucks","pug")
//
// see.print()


var Vacation = function(country,food) {
  this.country = country
  this.food = food
}

Vacation.prototype.print = function() {
  console.log(this.country);
  console.log(this.food);
}

var see = new Vacation("EEUU","Hot Dog")
see.print()
