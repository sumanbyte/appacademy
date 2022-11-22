function changeContext(func, obj) {
  /*
  this thing alone binds the context and calls the function as well.
  return func.call(obj)
  */
    let changedContextFunc = func.bind(obj)
    return changedContextFunc()
}



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;