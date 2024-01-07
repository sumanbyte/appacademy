function quicksort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <=1) return arr;
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0];
  let leftHalf = [];
  let rightHalf = [];
  for(let i=1; i<arr.length; i++){
    if(arr[i] >= pivot){
      rightHalf.push(arr[i]);
    }else{
      leftHalf.push(arr[i]);
    }
  }


  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  let sortedLeft = quicksort(leftHalf);
  // // Recursively sort the right
  let sortedRight = quicksort(rightHalf);

  // Return the left, pivot and right in sorted order
  return [...sortedLeft, pivot, ...sortedRight]
}




module.exports = [quicksort];
