import { db } from './db'


class Player {
  database:number = 0
  compu1:number = 0
  player:number = 0

  constructor(data){
    this.database = data
    let compu1:number = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)]
    let player:number = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)]
    // console.log(data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)])

    // console.log(player)
  }

  wild() {
  }


}

class Compu extends Player {


}


// console.log(db[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)])

let Play = new Player(db)
// let Pc = new Compu(db)
//

// let resutaldo = Play > Pc
