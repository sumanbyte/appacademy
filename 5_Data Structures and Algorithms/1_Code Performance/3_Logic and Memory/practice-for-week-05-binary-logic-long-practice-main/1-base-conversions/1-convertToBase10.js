// Convert the integers in the console.logs below to base 10:

/******************************************************************************/
function hex2bin(hex) {
  hex = hex.replace("0x", "").toLowerCase();
  var out = "";
  for (var c of hex) {
    switch (c) {
      case "0":
        out += "0000";
        break;
      case "1":
        out += "0001";
        break;
      case "2":
        out += "0010";
        break;
      case "3":
        out += "0011";
        break;
      case "4":
        out += "0100";
        break;
      case "5":
        out += "0101";
        break;
      case "6":
        out += "0110";
        break;
      case "7":
        out += "0111";
        break;
      case "8":
        out += "1000";
        break;
      case "9":
        out += "1001";
        break;
      case "a":
        out += "1010";
        break;
      case "b":
        out += "1011";
        break;
      case "c":
        out += "1100";
        break;
      case "d":
        out += "1101";
        break;
      case "e":
        out += "1110";
        break;
      case "f":
        out += "1111";
        break;
      default:
        return "";
    }
  }

  return out;
}

function binToDec(str) {
  let binaryStr = str.split("0b")[1];
  let sum = Number(binaryStr[binaryStr.length - 1]);

  let power = 1;
  let index = binaryStr.length - 2;

  for (let i = binaryStr.length - 2; i >= 0; i--) {
    let requiredChar = binaryStr[index];

    sum += requiredChar * Math.pow(2, power);
    power++;
    index--;
  }
  return sum;
}

const convertToBase10 = (str) => {
  if(str.startsWith("0x")){
    let ans = hex2bin(str)
    let binAns = "0b" + ans
    return binToDec(binAns)
  }
  return binToDec(str)
};

/******************************************************************************/

// console.log(convertToBase10("0b1100")); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914

module.exports = hex2bin