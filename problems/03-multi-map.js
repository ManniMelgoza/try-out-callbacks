/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
// Iterate n times inside of the callback
    // Use for loop to iterate n times



function multiMap(val, n, cb) {
  for (let i = 0; i < n; i++) {
    //Have "num * 10" be the new value on each iteration.
    val = cb(val) 
  }
  return val
}
  
  let multiplier = function(num) {
  return num * 10;
  }




  // let result1 = multiMap(7, 2, function(n) {
  //   return n * 10;
  // });
  // console.log(result1); // 700
  
  // let result2 = multiMap(7, 3, function(n) {
  //     return n * 10;
  // });
  // console.log(result2); // 7000
  
  // let result3 = multiMap("hi", 5, function(s) {
  //   return s + "!";
  // });
  // console.log(result3); // hi!!!!!
console.log(multiMap(4, 3, multiplier))
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch(e) {
  return null;
}
