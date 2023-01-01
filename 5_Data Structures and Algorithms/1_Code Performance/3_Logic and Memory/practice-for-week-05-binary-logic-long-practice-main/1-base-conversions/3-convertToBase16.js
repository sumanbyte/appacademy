const decToBin = require("./2-convertToBase2");
// Convert the integers in the console.logs below to base 16:

/******************************************************************************/


const addZeros = (str, newLength) => {
  if (str.length < newLength) {
    let newStr = str.padStart(newLength, "0");
    return newStr;
  }
  return str;
};

function binToHex(str) {
  str = str.split("0b")[1]

  let fourcount = 0;

  for (let i = 0; i < str.length; i += 4) {
    fourcount++;
  }

  str = addZeros(str, fourcount * 4);
  
  let arr = [];
  
  for (let i = 0; i < str.length; i += 4) {
    arr.push(str.slice(i, i + 4));
  }
  
  
  var out = "";
  for (var c of arr) {
    switch (c) {
      case "0000":
        out += "0";
        break;
      case "0001":
        out += "1";
        break;
      case "0010":
        out += "2";
        break;
      case "0011":
        out += "3";
        break;
      case "0100":
        out += "4";
        break;
      case "0101":
        out += "5";
        break;
      case "0110":
        out += "6";
        break;
      case "0111":
        out += "7";
        break;
      case "1000":
        out += "8";
        break;
      case "1001":
        out += "9";
        break;
      case "1010":
        out += "a";
        break;
      case "1011":
        out += "b";
        break;
      case "1100":
        out += "c";
        break;
      case "1101":
        out += "d";
        break;
      case "1110":
        out += "e";
        break;
      case "1111":
        out += "f";
        break;
      default:
        return "";
    }
  }
  

  return "0x" + out;
}

const convertToBase16 = str =>{
  if(typeof str === 'number'){
    let temp = decToBin(str)
    let res = "0b" + temp;
    return binToHex(res);
  }else if (typeof str === 'string'){
    return binToHex(str);
  }
}


/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
