function linearSearch (arr, target) {

  // Can you solve this in one line?
  //Challenge Accepted
  return arr.indexOf(target) == -1 ? -1 : target;

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let hi = arr.length-1;
  let lo = 0;

  // While high and low indices do not overlap...
  while(lo <= hi){
    let mid = Math.floor((lo+hi)/2);
    if(arr[mid] == target){
      return arr[mid]
    }else if(target > arr[mid]){
      lo = mid + 1;
    }else if(target < arr[mid]){
      hi = mid -1;
    }
  }

  return -1;

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]