// Do not modify!
const GradeBook = require('./classes/gradebook.js');
const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;

// You can modify the following lines
let grades1Average = gradesAvg.call(grades);
let grades1WithBonus = gradesAvg.apply(grades, [20]);

console.log('Grade list');
console.log(grades1Average);     // should print out: 58
console.log(grades1WithBonus);   // should print out: 78

/*
before we were extracting the function gradesAvg which is a instance method of GradeBook and passing the gradesAvg function "grades" instance.
eg. 
const grades = new GradeBook([10, 20, 30, 40])
let gradesAvg = grades.getAverage
gradesAvg(grades)
gradesAvg(grades, [20])

the context of gradesAvg is in the global context so even though we extracted grades.getAverage from the "grades" instance, it is still evaluated to undefined. 

This is where call and apply comes into picture.

call and apply have similar syntax
call syntax - funcName.call(context, args) // comma seperated values
apply syntax - funcName.apply(context, [args]) // accepts an array as arguments.

the args in both of these methods are for the function that will get invoked for and the context is the object where we want to bind our function context to.

for example
function funcName(sirName){
    console.log(`${this.name} ${sirName}`)
}

let funcObj = {name: 'Ram'}

// syntax of call
// funcName.call(context, args)

// if i use it then
funcName.call(funcObj, 'Thapa')
//output
Ram Thapa

Here as you've noticed call doesn't actually returns a function but it instead returns the value of the function.

We passed funcObj to bind the context of funcName to the funcObj. we also passed an additional argument 'Thapa' which will go to the funcName function's argument and in this way the function funcName has access to both this.name and sirName values so it console logs 'Ram Thapa'.

Now coming back to the above problem solution.
we have binded the gradesAvg context to the grades instance object. Remember, that call or apply doesn't return function but instead their results. so first result gets stored in grades1Average and second result grades1WithBonus. so we simply console logged the output to pass the case specified.

*/

