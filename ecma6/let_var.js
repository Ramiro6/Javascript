const N = 3
const SOME = []
for (let i = 0; i < N; i++) {
  SOME[i] = function() {
    console.log("number " + i);
  };
}

for (let j = 0; j < SOME.length; j++) {
  SOME[j]();
}

// difference

for (var i = 0; i < N; i++) {
  SOME[i] = function() {
    console.log("number " + i);
  };
}

for (var j = 0; j < SOME.length; j++) {
  SOME[j]();
}
