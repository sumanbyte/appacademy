/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here

function flatten(arr){
  let ans = []
  function helper(array){
    for(let i=0; i<array.length; i++){
      if(Array.isArray(array[i])){
        helper(array[i])
      }else{
        ans.push(array[i])
      }
    }
  }
  helper(arr)
  return ans
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
