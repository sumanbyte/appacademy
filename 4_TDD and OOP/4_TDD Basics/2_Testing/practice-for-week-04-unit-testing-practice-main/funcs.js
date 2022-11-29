function isFive(num) {
  // Your code here
  return num === 5
}

function isOdd(number) {
  // Your code here
  if(typeof number !== 'number'){
    throw new Error(`${number} is not a number!`)
  }
  return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  // Your code here
  let ans = []

  for(let i=min; i<=max; i+=step){
    ans.push(i)
  }

  return ans
}



module.exports = { isFive, isOdd, myRange };