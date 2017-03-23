//--------

var food = ["pizza","cookies","bread"]

var msg = food.reduce (function (pre,food) {
  return pre + " AND " + food   
})

console.log(msg);

// -----------

var food = ["pizza","cookies","bread"]

var best = food.filter (function (food) {
  return food !== "bread";
});

console.log(best);


//---------

var obj = {
  food: "pizza",
  amount: 999
}

console.log(obj.food);
