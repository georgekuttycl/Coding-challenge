const read = require('readline-sync');
// import Math from ""
let flightArr = [];
let n = 3;

for (let i = 1; i <= n; i++) {
  let flightFare = read.question(`Enter the Flight fare of flight ${i}: `);
  flightArr.push(flightFare);
}

// ascending order
let min = flightArr.sort()[0];
console.log(`Flight fare in ascending order: ${flightArr.sort()}`);

// descending order
console.log(`Flight fare in descending order: ${flightArr.sort().reverse()}`);
let max = flightArr.sort().reverse()[0];

// Input name and search it in array
let flightFare = read.question("Enter the flight fare to search: ");
let index = 0,
  j;
for (let i = 1; i <= n; i++) {
  if (flightArr[i - 1] == flightFare) {
    index = 1;
    j = i;
    break;
  }
}

if (index == 0) {
  console.log(`The flight fare ${flightFare} is not present in the array`);
} else {
  console.log(
    `The flight fare ${flightFare} is present in the array at position ${j}`
  );
}

console.log(`The min fare amount is: ${min}`);
console.log(`The max fare amount is: ${max}`);

let count = {};
flightArr.forEach((x) => {
  count[x] = (count[x] || 0) + 1;
});
console.log(count);