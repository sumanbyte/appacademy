

function selectionSort(arr) {

  // Copy the original array
  let newArr = [...arr]
  // Create an array to store the sorted values
  let sorted = [], minimum, index;
  // While the array is not empty...
  while(newArr.length != 0){
    // Do not move this console.log
    console.log(sorted.join(","));
    minimum = newArr[0]
    index = 0;
    for(let j=0; j<newArr.length; j++){
      if(newArr[j] < minimum){
        minimum = newArr[j];
        index = j
      }
    }
    newArr.splice(index, 1)
    sorted.push(minimum)
  }


    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array
  return sorted
}



function selectionSortInPlace(arr) {
  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider;
    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    let minValue = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = minValue;

    // Increment the divider and repeat
    divider++;
  }
}


module.exports = [selectionSort, selectionSortInPlace];
