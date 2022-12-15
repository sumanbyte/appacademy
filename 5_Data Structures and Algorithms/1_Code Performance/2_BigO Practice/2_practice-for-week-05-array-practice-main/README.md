# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Because Array.push method has time complexity of O(1) because it only creates one additional space at the end of the array and has space complexity of O(1) because Array.push method only pushes on item at a time. 

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Similar to Array.pop method it has both time and space complexity O(1). because it just removes one element from the array. Hence it takes constant time to carry out the operation regardless of the input size.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: shift method removes first array item only and it end up mutating the entire array therefore time complexity of O(n) and  takes constant space.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: unshift method adds elements and mutates the array pushing other elements by 1 therefore time complexity is O(n) and space hence both time and space complexity is O(1)

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: the arr.splice method allows us to insert or remove array array of a specific index. hence we have to traverse up until that point there fore it has time complexity of O(n) and also we have to need space accordingly if we want to insert more elements.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: arr.slice method allows us to remove elements and it doesn't mutate the array. it creates a shallow copy therefore if input array grows it will take the same space hence it has space complexity of O(n) also it takes us more time to traverse and return the values as our requirements get higher. therefore O(n) will be the time complexity of arr.slice.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: arr.indexOf just returns the index of an array element therefore it has a time complexity of O(n) because we have to traverse through the array n times as the target element is far. it just returns the index of an array element therefore has space complexity of O(1).

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: array.map returns an array hence as the input size grows the amount of space it requires grows therefore it has space complexity of O(n). it has to traverse each element nth time therefore it has time complexity of O(n)

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: as the input size gets bigger the amount of space and time required grows as well in arr.filter() method therefore has time and space complexity of O(n)

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: as the input size gets bigger the amount of time required grows as well hence time complexity of O(n) but it has a accumulator which holds the final answer therefore space it requires is constant therefore space complexity of O(1)

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: arr.reverse method doesn't make copy of the original array but it reverses the reference to the original array therefore has space complexity of O(1). but input size is directly proportional to the time it takes and hence space complexity of O(n).

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: the amount of space it requires is increases also the input array grows larger, therefore space complexity of O(n). but if array gets larger it takes more time to spread the array values. therefore has space complexity of O(1) and time complexity of O(n).

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax