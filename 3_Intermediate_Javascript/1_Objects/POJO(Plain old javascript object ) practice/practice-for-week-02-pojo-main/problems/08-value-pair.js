/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  let combined = [obj1, obj2];

  let ans = []
  
  for(let i=0; i<combined.length; i++){
    let obj = combined[i]
    for(let objKey in obj){
      if(objKey === key){
        ans.push(obj[objKey])
      }
    }
  }
  
  return ans
}

// let object1 = {name: 'One', location: 'NY', age: 3};
// let object2 = {name: 'Two', location: 'SF'};
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;