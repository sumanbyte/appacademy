// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try{
  let res = sum(null);
  console.log(res);
}catch(e){
  if(e instanceof TypeError){
    console.log(e.name + ": " + e.message)
  }
}

// 2.
function sayName(name){
  if(typeof name !== 'string'){
    throw new TypeError("Invalid name! Must be a string!")
  }
  return "Hello "+ name;
}
// tests
try{
  sayName("Alex");
  sayName(1);
}catch(error){
  console.log(error.name + ": " + error.message)
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet(null)
}catch(e){
  console.log("Hello World!")
}