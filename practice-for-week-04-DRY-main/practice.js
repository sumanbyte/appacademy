function bigOrSmall(num1, num2, preference){
  // returns the number prefered by user between the two
  if(preference === 'big'){
    return num1 > num2 ? num1 : num2;
  }else{
    return num1 > num2 ? num2 : num1;
  }
}


function multiplyBiggerNumByTwo(num1, num2) {
  return bigOrSmall(num1, num2, 'big') * 2
}

function divideBiggerNumByThree(num1, num2) {
  return bigOrSmall(num1, num2, 'big') / 3
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${bigOrSmall(sum1, sum2, 'big')} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
    return `I adopted a dog that weighs ${bigOrSmall(weight1, weight2, 'small')} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};