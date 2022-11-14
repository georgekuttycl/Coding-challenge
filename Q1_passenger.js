const read = require('readline-sync');
var passenger = [];
let n = 3
//accepting passenger details
console.log("Passenger Names");
for(var i=0;i<n;i++){
    passenger[i] = read.question('Enter passenger number ' + (i+1)+':');
}
console.log("Passenger Details");
console.log(passenger);

//sorting ascending orders
var size = passenger.length;
for(var i = 0; i<size-1; i++)
{
for (var j = i+1; j<passenger.length; j++)
{
if(passenger[i].localeCompare(passenger[j])>0)
{
var temp = passenger[i];
passenger[i] = passenger[j];
passenger[j] = temp;
}
}
}
console.log("Passenger details in ascending order")
console.log(passenger);

//sorting descending orders
console.log("Passenger details in descending order")
console.log(passenger.sort().reverse());

//searching the names
console.log("Search the name");
var passName = read.question("Enter passenger name to search: ");
let index = 0;
for (var i = 1; i <= n; i++) {
    if (passName == passenger[i - 1]) {
      console.log(
        `The passenger ${passName} is present in the array at postion ${i}`
      );
      index=1;
      break;
    }
  }
  if(index==0) {
    console.log(`The passenger ${passName} is not present in the array `);
  }

// print the length of names in each element
console.log("Length of passenger name ");
for (let i = 1; i <= n; i++) {
    console.log(`Length of ${passenger[i - 1]} is ${passenger[i - 1].length}`);
  }

  // split the names at space and print for each elt
  console.log("split passenger name ");
  for (let i = 1; i <= n; i++) {
    let name = passenger[i - 1];
    let nameArray = name.split(" ");
    console.log(`${nameArray}`);
  }

//duplicate values
const counts = {};
passenger.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)




