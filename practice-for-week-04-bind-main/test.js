// Your code here
const Employee = require('./employee')

const john = new Employee('John Wick', 'Dog Lover');

// say name function
const sayName = john.sayName
const sayNameFunc = sayName.bind(john)

setTimeout(sayNameFunc, 2000)


//say occupation function
const sayOccupation = john.sayOccupation

const sayOccupationFunc = sayOccupation.bind(john)

setTimeout(sayOccupationFunc, 3000);


/*
if we extract john.sayName or sayOccupation to a variable sayName or sayOccupation and invoke it function style. eg: sayName() or sayOccupation(). function style invocation searches the function sayName or sayOccupation in the global context but the function is defined in the context of john. 

This is where the bind comes into play.

// Syntax of bind
funcName.bind(context)

if we wish to use the function sayName or sayOccupation in the global context(we are invoking the function function-style), we must bind the function sayName or sayOccupation to the john context. bind returns a new function bound to the context of john in which we are here storing it in a variable named sayNameFunc and sayOccupationFunc and these two functions are also needed to be invoked in order to run them.

*/