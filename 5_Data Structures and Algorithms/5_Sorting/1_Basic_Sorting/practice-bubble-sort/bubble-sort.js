// bubble-sort.js
// 0) 0-8 1) 0-7 2) 0-6 3) 0-5
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Log the array at each step
        console.log(arr.join(','));
      }
    }
  }
}

module.exports = bubbleSort;
