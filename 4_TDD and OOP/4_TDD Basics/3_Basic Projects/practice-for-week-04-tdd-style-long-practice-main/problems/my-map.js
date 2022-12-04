function myMap(inputArray, callback) {
  let ans = []

  for(let i=0; i<inputArray.length; i++){
    let el = inputArray[i]
    let item = callback(el, i, inputArray)
    ans.push(item)
  }
  
  return ans
}


module.exports = myMap;