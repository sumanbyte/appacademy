/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'

*/
let vowels = 'aeiouAEIOU'

let removeLastVowel = function(word) {
    for(let i=word.length-1; i>=0; i--){
        if(vowels.includes(word[i])){
            let first = word.slice(0, i)
            let second = word.slice(i+1)
            return first + second
        }
    }
    return word
};


let hipsterfy = function(sentence) {
    let words = sentence.split(" ")
    let ans = words.map(function(word){
        return removeLastVowel(word)
    })
    return ans.join(" ")
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
