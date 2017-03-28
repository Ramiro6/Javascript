class Name {
  constructor(first) {
    this.first = first
  }

  printAllName() {
    for( var i = 0; i < this.first.length; i++) {
      console.log(this.first[i]);
    }
  }

}

var x = new Name(["jose", "pepe", "manolo"])

x.printAllName()


// "holss"
