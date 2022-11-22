function allTheArgs(func, ...args) {
  // we have to return a function passing the given args array. We are spreading the args while passing each arguments to the function who use it as we are returning a function and that function will be assigned to some kind of variable.
  // bind method returns a function we are passing the this as it refers to the global context. our returned function will be used by the global variable so it needs global context.
  return func.bind(this, ...args)
}



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;