/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {

let smallVal = array[0];

for (let i = 1; i < array.length; i++) {
let currentVal = array[i];



if (smallVal < currentVal) {
  return cb(smallVal)
} 

else {
  currentVal = smallVal;
}

}



}


let smallValue = (num) => {
return Math.sqrt(num)
}



console.log(minValueCallback([64, 25, 49, 9, 100], smallValue))
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
