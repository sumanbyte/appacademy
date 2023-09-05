
function logBetween(lowNum, highNum) {

  let ans = [];
  for (let i = lowNum; i <= highNum; i++) {
    ans.push(i)
  }
  return ans;
}

function logBetweenStepper(min, max, step) {
  let ans = [];
  for (let i = min; i <= max; i += step) {
    ans.push(i)
  }
  console.log(ans)
}


function printReverse(min, max) {
  let ans = [];
  for (let i = max - 1; i >= min; i--) {
    ans.push(i)
  }
  console.log(ans)
}


function fizzBuzz(max) {
  let ans = [];
  for (let i = 3; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      ans.push(i)
    }
  }
  console.log(ans)
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function maxValue(array) {
  if (array.length == 0) {
    return null;
  }
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i]
    }
  }
  console.log(largest)
}



function myIndexOf(array, target) {
  console.log(array.indexOf(target));
}

function factorArray(array, number) {
  let ans = []
  for (let i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      ans.push(array[i])
    }
  }
  console.log(ans)
}



function oddRange(end) {
  let ans = [];
  for (let i = 1; i <= end; i++) {
    if (i % 2 !== 0) {
      ans.push(i);

    }
  }
  console.log(ans)
}


function reverseHyphenString(string) {
  let array = string.split('-')
  let ans = []
  for (let i = array.length - 1; i >= 0; i--) {
    ans.push(array[i]);
  }

  console.log(ans.join('-'))
}


function intersect(arr1, arr2) {
  let common = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
      }
    }
  }
  console.log(common)
}

function mirrorArray(array) {
  let newArr = [...array];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }

  console.log(newArr)
}

function abbreviate(sentence) {
  let words = sentence.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 4) {
      let removedVowel = ''
      for (let j = 0; j < word.length; j++) {
        if (!vowels.includes(word[j])) {
          removedVowel += word[j]
        }
      }
      newArr.push(removedVowel)
    } else {
      newArr.push(word);
    }
  }

  console.log(newArr.join(' '))
}

function adults(people) {
  let newArr = []
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.age >= 18) {
      newArr.push(person.name)
    }
  }

  console.log(newArr)
}
function countScores(people) {
  let newObj = {}

  for (let person of people) {
    const name = person.name;
    const score = person.score;

    if (newObj[name] === undefined) {
      newObj[name] = score;
    } else {
      newObj[name] += score;
    }
  }
  console.log(newObj)
}


function firstNPrimes(n) {
  let counter = 0;
  let ans = []
  let x = 2;
  while (counter != n) {
    if (isPrime(x)) {
      ans.push(x);
      counter++;
    }
    x++;
  }
  console.log(ans)
}

function peakFinder(array) {
  const peakIndices = [];

  if (array.length === 0) {
    return peakIndices;
  }

  if (array[0] > array[1]) {
    peakIndices.push(0);
  }

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peakIndices.push(i);
    }
  }

  if (array[array.length - 1] > array[array.length - 2]) {
    peakIndices.push(array.length - 1);
  }

}



function divisibleByThreePairSum(array) {
  let ans = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {

      if ((array[i] + array[j]) % 3 === 0) {
        ans.push([i, j])
      }
    }

  }
  console.log(ans)
}


function zipArray(arr1, arr2) {
  let ans = []

  for (let i = 0; i < arr1.length; i++) {
    ans.push([arr1[i], arr2[i]]);
  }

  console.log(ans);
}


function twoDimensionalTotal(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let nestedArray = array[i];
    for (let j = 0; j < nestedArray.length; j++) {
      sum += array[i][j];
    }
  }

  console.log(sum)
}

function countInnerElement(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let nestedArray = arr[i];

    for (let j = 0; j < nestedArray.length; j++) {
      let number = nestedArray[j];

      if (obj[number] === undefined) {
        obj[number] = 1;
      } else {
        obj[number] += 1
      }
    }
  }
  console.log(obj)
}

function twoDiff(array) {
  let ans = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let diff = array[i] - array[j]
      if (diff === 2 || diff === -2) {
        ans.push([i, j]);
      }
    }
  }
  console.log(ans)
}

function arrayDiff(arr1, arr2) {
  let ans = []
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      ans.push(arr1[i]);
    }
  }
  console.log(ans)
}

function valueCounter(obj, val) {
  let count = 0;
  for (const key in obj) {
    if (obj[key] === val) {
      count++;
    }

  }
  console.log(count)
}
function elementCount(array) {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
    }
  }
  console.log(obj)
}

function nextTwoPrimes(num) {
  let ans = []
  let number = num + 1;
  let count = 0;

  while (count != 2) {
    if (isPrime(number)) {
      ans.push(number);
      count++;
    }
    number++;
  }
  console.log(ans)
}

function pairProduct(arr, num) {
  let i = 0, ans = [];

  while (i < arr.length) {
    j = i + 1;
    while (j < arr.length) {
      if ((arr[i] * arr[j]) === num) {
        ans.push([i, j]);
      }
      j++;
    }

    i++;
  }

  console.log(ans)
}

function twoDimensionalSize(array) {
  let size = 0;

  for (let i = 0; i < array.length; i++) {
    let nestedArray = array[i];
    for (let j = 0; j < nestedArray.length; j++) {
      size++;
    }
  }

  console.log(size)
}

function longWordCount(string) {
  let size = 0;
  let array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (word.length > 7) {
      size++;
    }
  }

  console.log(size)
}

function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(factorial)
}

function lcm(num1, num2) {
  let number = 1;
  while (true) {
    if (number % num1 === 0 && number % num2 === 0) {
      console.log(number)
      break;
    }
    number++;
  }

}

function hipsterfy(words) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let array = words.split(' ')
  const ans = []
  for (let i = 0; i < array.length; i++) {
    let word = array[i];

    for (let j = word.length - 1; j >= 0; j--) {
      let char = word[j];
      // console.log(char)
      if (vowels.includes(char)) {
        let first = word.slice(0, j);
        let second = word.slice(j + 1);
        ans.push(first + second)
        break;
      }
    }

  }
  console.log(ans.join(' '))
}

function objectToString(count) {
  let str = '';

  for (const key in count) {
    for (let i = 0; i < count[key]; i++) {
      str += key;
    }
  }
  console.log(str)
}

function shortestWord(sentence) {
  let array = sentence.split(' ');
  let smallest = array[0].length;
  let ans = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length < smallest) {
      smallest = array[i].length;
      ans = array[i];
    }
  }
  console.log(ans)
}

function greatestCommonFactor(num1, num2) {
  let divisor = 2;
  let ans = 1;

  while (true) {
    if (num1 % divisor == 0 && num2 % divisor == 0) {
      ans = divisor;
      break;
    }
    if (divisor >= num1 || divisor >= num2) break;
    divisor++;
  }
  console.log(ans)
}

function isPassing(assessments) {
  let scoreSum = 0;
  let number = 0;
  for (const assessment of assessments) {
    const score = assessment.score;
    scoreSum += score;
    number = assessment.number
  }
  if (scoreSum / number < 70) {
    console.log(false)
  } else {
    console.log(true);
  }

}

function valueConcat(array, obj) {
  let ans = []
  for (let i = 0; i < array.length; i++) {
    let name = array[i];

    if (obj.hasOwnProperty(name)) {
      ans.push(name + obj[name]);
    } else {
      ans.push(name)
    }
  }

  console.log(ans)

}

function threeInARow(arr) {
  let curr
  let prev
  let next

  for (let i = 1; i < arr.length - 2; i++) {
    curr = arr[i];
    prev = arr[i - 1];
    next = arr[i + 1]
    if (curr === prev && prev === next) {
      console.log(true);
      return;
    }
  }
  console.log(false)
}

function variableNameify(words) {
  let ans = words[0].toLowerCase()

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let firstChar = word.charAt(0).toUpperCase();
    let rest = word.slice(1).toLowerCase();
    ans += firstChar + rest;
  }

  console.log(ans)
}

function threeIncreasing(arr) {

  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1] + 1 && arr[i] === arr[i + 1] - 1) {
      console.log(true)
      return;
    }
  }

  console.log(false)
}

function reverse2D(array) {
  let str = '';

  for (let i = array.length - 1; i >= 0; i--) {
    let nestedArray = array[i];
    for (let j = nestedArray.length - 1; j >= 0; j--) {
      str += nestedArray[j];
    }
  }

  console.log(str)
}

function reverb(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let str = ''
  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i]
    if (vowels.includes(char)) {
      let next = word.slice(i)
      console.log(word + next);
      return;
    }
  }
  console.log(word)
}

function countRepeats(string) {
  let repeatedChars = []
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length - 1; j++) {
      if (string[i] == string[j] && !repeatedChars.includes(string[i])) {
        repeatedChars.push(string[i]);
      }
    }
  }
  console.log(repeatedChars.length)
}

function pairsToString(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i][0];
    let times = arr[i][1];

    for (let i = 0; i < times; i++) {
      str += char;
    }

  }
  console.log(str)
}

function countAdjacentSums(arr, n){
  let count = 0;
  for(let i=0; i<arr.length-1; i++){
    if((arr[i] + arr[i+1]) === n){
      count++;
    }
  }
  console.log(count)
}

function signFlipCount(nums){
  let count = 0;
  for(let i=0; i<nums.length-1; i++){

    if(
      (nums[i] < 0 && nums[i+1] > 0) ||
      (nums[i] > 0 && nums[i + 1] < 0)
    ){
      count++;
    }
  }
  console.log(count)
}


function powerSequence(base, length){
  let ans = [base]
  let updatedBase = ans[0];
  for(let i=1; i<length; i++){
    updatedBase *= base
    ans.push(updatedBase)
  }
  console.log(ans)
}

function collapseString(str){
  let ans = []

  for(let i=0; i<str.length; i++){
    let char = str[i];
    if(!ans.includes(char)){
      ans.push(char);
    }
  }
  console.log(ans.join(''))
}


function oddWordsOut(sentence){
  let words = sentence.split(' ');
  let ans = [];

  for(let i=0; i<words.length; i++){
    let length = words[i].length;
    if(length % 2 === 0){
      ans.push(words[i]);
    }
  }

  console.log(ans.join(' '))

}

function mindPsAndQs(str){
  let currentStreak = 0, maxStreak = 0;

  for(let i=0; i<str.length; i++){
    if(str[i] === 'P' || str[i] === 'Q'){
      currentStreak++;
    }else{
      currentStreak = 0;
    }

    if(currentStreak > maxStreak) {
      maxStreak = currentStreak
    }
  }

  
  console.log(maxStreak)
}

function commonFactors(num1, num2){
  let ans = [1];
  let num = 2;
  while(true){
    if(num > num1 || num > num2){
      break;
    }
    if(num1%num==0 && num2%num == 0){
      ans.push(num);
    }
    num++;
  }
  console.log(ans)
}

function commonPrimeFactors(num1, num2){
  let ans = [];
  let num = 2;
  while(true){
    if(num > num1 || num > num2){
      break;
    }
    if(isPrime(num)){
      if(num1%num === 0 && num2%num === 0){
        ans.push(num)
      }
    }
    num++;
  }
  console.log(ans)
}

function splitHalfArray(array){
  const middleIndex = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIndex)
  let secondHalf;
  if(array.length % 2=== 0){
    secondHalf = array.slice(middleIndex);
  }else{
    secondHalf = array.slice(middleIndex+1)
  }

  console.log([firstHalf, secondHalf])
}


function threeUniqueVowels(string){
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let uniqueVowels = []

  for(let i=0; i<string.length; i++){
    if(VOWELS.includes(string[i])){
      if(!uniqueVowels.includes(string[i])){
        uniqueVowels.push(string[i])

      }
    }
  }

  if(uniqueVowels.length >=3 ){
    console.log(true);
  }else{
    console.log(false)
  }
}

function vowelShift(sentence){
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let ans = []
  let chars = sentence.split('');

  for(let i=0; i<chars.length; i++){
    if(VOWELS.includes(chars[i])){
      let index = VOWELS.indexOf(chars[i]);
      if(index == 4){
        index = -1;
      }
      let letter = VOWELS[index + 1];
      ans.push(letter)
    }else{
      ans.push(chars[i]);
    }
  }
  console.log(ans.join(''))
}

function hasSymmetry(array){
  const middleIndex = Math.floor(array.length/2)
  console.log(middleIndex)
  let fp = 0, lp = array.length-1;
  for(let i=0; i<middleIndex; i++){
    if(array[fp] === array[lp]){
      fp++;
      lp--;
    }else{
      console.log(false);
      return;
    }
  }

  console.log(true)
  
}

function evenSumArray(array){
  let ans = []

  for(let i=0; i<array.length; i++){
    let sum = 0;
    for(let j=2; j<=array[i]; j+= 2){
      sum += j;
    }
    ans.push(sum)
  }
  console.log(ans)
}

function numsToWords(numString){
  const numbers = ['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  let str = ''
  for(let i=0; i<numString.length; i++){
    let number =  Number(numString[i]);
    str += numbers[number]
  }

  console.log(str)
}

function moreDotLessDash(str){
  let chars = str.split('')
  let dotCount = 0, dashCount = 0;
  for(let i=0; i<chars.length; i++){
    if(chars[i] === '.') dotCount++;
    if(chars[i] === '-') dashCount++;
  }
  console.log(dotCount > dashCount)
}


