/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

function mySome(array, cb) {

    for (let i = 0; i < array.length; i++){

       if(cb(array[i], i) === true) return true;        
    }
    return false
    }
    
    let elIndex = function(el, i) {
    if (el === (i)) { 
        return true;
    } else {
    return false;
    }
    }
    
    
    console.log(mySome([0,3,5,9,9], elIndex))
    console.log(mySome([1,3,5,9,9], elIndex))

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = mySome;
} catch(e) {
    return null;
}
