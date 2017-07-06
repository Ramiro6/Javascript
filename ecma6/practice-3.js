const DB = ["jose", "pepe", "manolo"]

class Db {
  
  constructor(y) {
    for( let i of DB ) {
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

let u = new Db(DB)
