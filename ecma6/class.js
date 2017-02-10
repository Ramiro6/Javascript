class Tutor {
  constructor(nombre,last_name) {
    this.nombre = nombre;
    this.last_name = last_name;
  }

  full_name(){
    return this.nombre + " " +this.last_name
  }
}

var x = new Tutor("ramiro","ruiz");

console.log(x.nombre,x.last_name);
console.log(x.full_name());
