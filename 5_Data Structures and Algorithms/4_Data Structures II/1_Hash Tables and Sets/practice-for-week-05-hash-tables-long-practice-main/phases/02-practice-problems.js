function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const chars1 = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (chars1[char]) {
      chars1[char]++;
    } else {
      chars1[char] = 1;
    }
  }

  const chars2 = {};

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!chars1[char]) {
      return false;
    } else if (chars2[char]) {
      chars2[char]++;
    } else {
      chars2[char] = 1;
    }
  }


  for (let key in chars1) {
    let val1 = chars1[key];
    let val2 = chars2[key];

    if (val1 !== val2) {
      return false;
    }
  }

  return true;
}



function commonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const common = [];

  for (const num of arr2) {
    if (set1.has(num)) {
      common.push(num);
    }
  }

  return common;
}


function duplicate(arr) {
  const seen = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      return num; // Found the first duplicate
    }
    seen.add(num);
  }

  return null; // No duplicates found
}





function twoSum(nums, target) {
  // Your code here
  const seen = {};

  for (const num of nums) {
    const complement = target - num;

    if (seen[complement]) {
      return true;
    }

    seen[num] = true;
  }

  return false;

}


function wordPattern(pattern, strings) {
  if (pattern.length !== strings.length) {
    return false;
  }

  const patternMap = new Map();
  const wordMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = strings[i];

    if (!patternMap.has(char)) {
      patternMap.set(char, word);
    } else {
      if (patternMap.get(char) !== word) {
        return false;
      }
    }

    if (!wordMap.has(word)) {
      wordMap.set(word, char);
    } else {
      if (wordMap.get(word) !== char) {
        return false;
      }
    }
  }

  return true;
}




module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];