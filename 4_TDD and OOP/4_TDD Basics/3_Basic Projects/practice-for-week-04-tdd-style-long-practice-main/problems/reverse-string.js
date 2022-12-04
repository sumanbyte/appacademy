module.exports = function reverseString(string) {
  // Your code here
  if(typeof string !== 'string'){
    throw new TypeError('Must be a type of string')
  }
  let ans = ''
  for(let i=string.length-1; i>=0; i--){
    ans += string[i]
  }
  return ans
};