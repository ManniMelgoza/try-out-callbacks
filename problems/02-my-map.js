/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function should return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/



function myMap(array, cb) {
const newArr = [];
// console.log(array);
for (let value of array) {
    // console.log(value);
    const resultNum = cb(value);
    newArr.push(resultNum);

}
return newArr;
};

// let arrStr = function(array){

// for (let el in array) {
//     // console.log(array);
//      return array.toLowerCase();
//     }
// };

let arrNum = function(array) {
    for (let el in array) {
        console.log(el)
        // let elValue = array[el];
        // console.log('Multiply', array[el] * 10);
    }
};

console.log(myMap([ 10, 5, 9, 8 ], arrNum));   // [ 10, 5, 9, 8 ]
// console.log(arrNum([ 10, 5, 9, 8 ]));   // [ 10, 5, 9, 8 ]
// console.log(myMap([ 'RUN!', 'FORREST!' ], arrStr));   // [ 'RUN!', 'FORREST!' ]
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myMap;
} catch(e) {
    return null;
}
