import { db } from './db'


class Player {
  database:number = 0

  constructor(data){
    this.database = data
    let compu1:number = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)]
    let player:number = data[Math.round(Math.floor(Math.random() * (11 - 0)) + 0)]

    if(compu1 > player){
      console.log("You Win")
    } else {
      console.log("You loses")
    }
  }

  wild() {
  }


}

let play = new Player(db)
