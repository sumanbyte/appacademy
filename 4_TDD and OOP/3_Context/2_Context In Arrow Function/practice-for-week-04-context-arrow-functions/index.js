const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);
  console.log(`Hi my name is ${name}`);
}


greetAfterNameChange(michelle.changeName, 'Elle');
  // should print out: Hi my name is Elle
/*
We can also use the following way by not modifying the method style defined in User Class.
changeName(){

}
If this method is defined this way then we can only access this method by method style invocation.
eg: michelle.changeName(args)
Because the context of the instance of User class is only available to it's instance methods we cannot reference it directly and use it. We have to bind our function context to the instance's context.

However if the method is defined in arrow function way then we can use and access the method using function style invocation as well.
Because when used arrow function it refers to the code block it was written inside. Also arrow function this refers to whatever code it contains not who calls it.
it also creates multiple instances of changeName method when called multiple times unlike the regular method.

let changeNameFunc = michelle.changeName.bind(michelle)

greetAfterNameChange(changeNameFunc, 'Elle');
  // should print out: Hi my name is Elle
*/