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

let multiMap = function (value, n, cb) {

  if (typeof (value) === "number") {

    let res = cb(value)
    for (let i = 0; i < n - 1; i++) {
      res *= 10
    }
    return res

  } else if (typeof (value) === 'string') {
    let res = cb(value)
    let notValue = ''
    let ans = ''

    for (let i = 0; i < res.length; i++) {
      if (!value.includes(res[i])) {
        notValue += res[i]
      }
    }

    if(notValue !== ''){

      for (let i = 0; i < n; i++) {
        ans += notValue
      }
      
    }

    return value + ans
  }
};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
