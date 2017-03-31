class Play {
  constructor(game) {
    this.game = game;
  };

  fun(){
    var number = Math.floor(Math.random(3)*4)
    console.log(this.game[number]);
  };

};




var x = new Play(["tenis","football","basket"]);

x.fun();
