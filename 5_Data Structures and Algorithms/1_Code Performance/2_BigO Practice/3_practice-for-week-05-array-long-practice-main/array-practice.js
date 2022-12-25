const findMinimum = (arr) => {
  let smallest = arr[0];
  // Your code here
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
};

const runningSum = (arr) => {
  let sum = 0;
  let sumArr = [];
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumArr.push(sum);
  }
  return sumArr;
};

const evenNumOfChars = (arr) => {
  // Your code here
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.length % 2 === 0) {
      counter++;
    }
  }
  return counter;
};

const smallerThanCurr = (arr) => {
  // Your code here
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let ctr = 0;
    for (let j = 0; j < arr.length; j++) {
      if (el > arr[j]) {
        ctr++;
      }
    }
    ans.push(ctr);
  }

  return ans;
};

const twoSum = (arr, target) => {
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

const secondLargest = (arr) => {
  // Your code here
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  let index = arr.indexOf(largest);

  arr.splice(index, 1);

  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

const shuffle = (arr) => {
  if (arr.length == 0) return null; 
  let newArray = arr.slice();
  
  let currentIndex = newArray.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      
      currentIndex--;

      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
};



module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
