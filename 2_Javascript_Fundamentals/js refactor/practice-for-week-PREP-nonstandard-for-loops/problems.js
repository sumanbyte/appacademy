function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let ansarr = []
    for(let i=1; i<arr.length; i+=2){
            ansarr.push(arr[i])
    }
    return ansarr
}
function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let ansarr = []
    const n = arr.length;
    const last = n%2 === 0 ? n-1 : n-2
    for(let i=last; i>=0; i-=2){
        ansarr.push(arr[i])
    }
    return ansarr
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let ansArr = []
    for(let i=1; i<arr.length; i*=2){
        ansArr.push(arr[i])

    }
    return ansArr
}
// console.log(secondPower([1,24,36,48,5,6,7,19,9,10]))
function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code 
    let ansArr = []
    for(let i=1; i<arr.length; i*=n){
        ansArr.push(arr[i])
    }
    return ansArr
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let ansArr = []
    let halfArrLength = Math.ceil((arr.length)/2);

    if(halfArrLength % 2 === 0){
        halfArrLength--;
    }
 
    for(let i=0; i<halfArrLength; i++){
        ansArr.push(arr[i])
    }
    return ansArr;
}



function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here arr length =5/2 = 2.5 ~ 3 [1,2,3,4,5,6]
    let ansArr = []
    let middle = Math.ceil((arr.length-1)/2);
    if(middle %2 == 0){
        middle ++;
    }
    for(let i=middle; i<arr.length; i++){
        ansArr.push(arr[i])
    }
    return ansArr
    
}


  

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}