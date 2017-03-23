var numbers = "80:70:90:100"

averageColon(numbers);

function averageColon(numberString) {
  var numbersArray;

  numbersArray = numberString.split(":");

  console.log(numbersArray);

  var total = numbersArray.reduce(function (pre,value) {
    // debugger;
    return parseInt(pre) + parseInt(value);
  })
  var length = numbersArray.length

  console.log(total/length);
}
