var db = ["jose", "pepe", "manolo"]

class Db {

  constructor(y) {
    for( let i of db ) {
      let x = i.split("",1).toString().toUpperCase()
      let y = i.substr(1)
      console.log(x + y);
    }
    this.wild()
  }

  wild(){
    console.log("Joselin LSLSLSLSLLSLSL");
  }
}

let u = new Db(db)
