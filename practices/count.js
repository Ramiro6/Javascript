class Number {
  constructor(nu) {
    this.nu = nu
  }

  new(){
    for( var i = this.nu; i <= 30; i++) {
      console.log(i);
      if (i === 30) {
        console.log("End");
      };
    }

  }
}

var a = new Number(0)

console.log(a.new());
