const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let startTime = Date.now()
  let ans = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    ans.push(addNums(i));
  }
  let endTime = Date.now()
  let runTime = endTime - startTime
  console.log(runTime)
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  let ans = [];
  let startTime = Date.now()

  for (let i = increment; i <= 10 * increment; i += increment) {
    ans.push(addManyNums(i));
  }
  let endTime = Date.now()
  let runTime = endTime - startTime
  console.log(runTime);
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
