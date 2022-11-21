/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
    let small = arr[0]
    // return the smallest value in the array. (no callback passed)
    if(cb === undefined){
        arr.forEach(el => {
            if(el < small){
                small = el
            }
        });
        return small
    }
    
    // return the smallest value in the array. (on callbacked element)
    arr.forEach(ele=>{
        let res = cb(ele)
        if(res < small){
            small = res
        }
    })


    return small

};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
