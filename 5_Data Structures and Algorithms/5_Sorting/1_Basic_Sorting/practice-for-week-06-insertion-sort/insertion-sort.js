// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let  arrCopy = arr.slice();
  let sortedArr = [];
  while(arrCopy.length !== 0) {


    console.log(sortedArr.join(","))
    let poppedElement = arrCopy.pop();
    let insertIndex = sortedArr.length;
    while(insertIndex > 0 && sortedArr[insertIndex -1] > poppedElement) {
      sortedArr[insertIndex] = sortedArr[insertIndex -1];
      insertIndex--;
    }
    sortedArr[insertIndex] = poppedElement;
  }
  return sortedArr;
}
arr = [2, 4, 6, 8, 1, 3, 5, 7, 9]
console.log(insertionSort(arr));

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  


  // Set a pointer dividing the array into sorted and unsorted halves
  for (let divider = 1; divider < arr.length; divider++) {
    // Console.log to visualize the state of the array in each iteration
    console.log(arr.join(','));

    // Grab the first value from the unsorted half
    let unsortedValue = arr[divider];

    // For each value starting from the divider
    let i = divider ;

    // Check if the value to the left is smaller than the unsorted value
    while (i > 0 && arr[i -1] > unsortedValue) {
      // If so, shift the value to the right by 1
      arr[i] = arr[i -1];
      i--;
    }

    // Insert the unsorted value at the break point
    arr[i] = unsortedValue;

    
  }

  

  // Return the mutated array
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];