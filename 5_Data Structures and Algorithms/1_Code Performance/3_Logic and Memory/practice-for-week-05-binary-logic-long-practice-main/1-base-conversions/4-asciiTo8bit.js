const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let ans = []
  for(let i=0; i<str.length; i++){
    // get the ascii code at ith index
    let asciiVal = str.charCodeAt(i)
    // convert the asciiValue to binary using toString() method.
    let binary = asciiVal.toString(2)
    // add leading zeros using addZeros function.
    let zeroAddedBinary = addZeros(binary, 8);
    // push the zeroAdded Binary to our answer.
    ans.push(zeroAddedBinary)
  }
  return ans.join("")
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 00110001 00110010 00110011

console.log(asciiTo8bit('ABC'));
// // 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001