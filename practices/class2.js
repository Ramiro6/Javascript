var Animal = function(sound,clas) {
  this.sound = sound
  this.clas = clas
};

Animal.prototype.describete = function() {
  console.log(this.sound);
  console.log(this.clas);
}


var v1 = new Animal("guau","dog");

v1.describete();
