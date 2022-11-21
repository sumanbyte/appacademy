/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
***********************************************************************/

function arrayConverter(array) {
  let ans = {}
  // Your code here
  for (let i = 0; i < array.length; i++) {
    let ctr = 0;
    let el = array[i]
    for (let j = 0; j < array.length; j++) {
      let el2 = array[j]
      if(el === el2){
        ctr++
      }
    }
    
    ans[el] = ctr
  }
  return ans
}

// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["apple", "banana", "potato", "banana", "banana", 'nuts'])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;