function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    return a.age - b.age
  })
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort((a, b) => {
    // Function to check if a number is odd
    const isOdd = (num) => num % 2 !== 0;

    // If both numbers are odd or both are even, sort them normally
    if (isOdd(a) && isOdd(b) || !isOdd(a) && !isOdd(b)) {
      return a - b;
    }

    // If one number is odd and the other is even, sort the odd number first
    return isOdd(a) ? -1 : 1;
  });

  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  if(s.length !== t.length) return false

  const sortedS = s.split('').sort().join('');
  const sortedT = s.split('').sort().join("")
  return sortedS === sortedT
}

function reverseBaseSort(arr) {
  // Your code here

  return arr.sort((a,b) => {
    if(Math.floor(Math.log10(a)+1) > Math.floor(Math.log10(b)+1)) return -1;
    if (Math.floor(Math.log10(a) + 1) < Math.floor(Math.log10(b) + 1)) return 1;
    return a-b;
  })

}

function frequencySort(arr) {
  let mapArr = new Map();
  for(const num of arr){
    mapArr.set(num, (mapArr.get(num) || 0) + 1);
  }
  return arr.sort((a,b) => {
   let freqA = mapArr.get(a);
   let freqB = mapArr.get(b);
   if(freqA !== freqB){
    return freqA - freqB;
   }

   return b-a;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];