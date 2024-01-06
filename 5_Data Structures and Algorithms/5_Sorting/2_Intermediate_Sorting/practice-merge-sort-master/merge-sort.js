// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <=1){
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let leftHalf = arr.slice(0, arr.length/2);
  let rightHalf = arr.slice(arr.length/2);
  
  // Recursively sort the left half
  
  // Recursively sort the right half

  // Merge the halves together and return
  return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

console.log(mergeSort([4,1,0,6, 22, 1]))

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let newArr = [];

  // Point to the first value of each array
  let indexA =0, indexB=0;
  // While there are still values in each array...
  while(indexA < arrA.length && indexB < arrB.length  ){
    if(arrA[indexA] < arrB[indexB]){
      newArr.push(arrA[indexA]);
      indexA++;
    }else{
      newArr.push(arrB[indexB]);
      indexB++;
    }
  }
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
  console.log(newArr)
  return newArr.concat(arrA.slice(indexA), arrB.slice(indexB))
}

module.exports = [merge, mergeSort];

