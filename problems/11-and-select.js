/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/
//Passing array of strings
//strings are include the letter 'e' and are all lowercase

function andSelect(array, cb1, cb2) {

  let newArr = [];
  for(let el in array){
    let val1 = cb1(array[el]);
    if (val1 === true){
      let val2 = cb2(val1);
      newArr.push(val2);
    }
    
  }
return newArr;
}

let includesE = (word) => {
   return word.includes('e')
};

const lowerCase = function(word) { 
  return word === word.toLowerCase();
};

// console.log(includesE('Apple'));
// console.log(lowerCase('Apple'));
console.log(andSelect(['Apple', 'ray', 'roscO'], lowerCase, includesE));


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = andSelect;
} catch(e) {
  return null;
}
