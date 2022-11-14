const prompt = require('readline-sync');
console.log("Flight Fare and Booking Time");
var obj = {};

var fare = prompt.questionFloat("Enter Flight fare : ");
var time = prompt.questionFloat("Enter flight time(24 format): ");
obj.fare = parseInt(`${fare}`);
obj.time = parseInt(`${time}`);
console.log("Flight fare and booking time");
console.log(obj);
console.log("Updated Fare");

if (obj.time >= 6 && obj.time <= 9) {
    const Price = parseInt(obj.fare);
    console.log(Price);
    const percentage = (Price / 100) * 10;

    console.log(percentage);
    const updatePrice = Price + percentage;
    console.log(updatePrice);
}
else if (obj.time >= 9 && obj.time <= 17) {
    const Price = parseInt(obj.fare);
    console.log(Price);
    const percentage = (Price / 100) * 20;

    console.log(percentage);
    const updatePrice = Price + percentage;
    console.log(updatePrice);
}
else if (obj.time >= 17 && obj.time <= 23) {
    const Price = parseInt(obj.fare);
    console.log(Price);
    const percentage = (Price / 100) * 7;

    console.log(percentage);
    const updatePrice = Price + percentage;
    console.log(updatePrice);
}
else if (obj.time >= 23 && obj.time <= 6) {
    const Price = parseInt(obj.fare);
    console.log(Price);
    const percentage = (Price / 100) * 5;

    console.log(percentage);
    const updatePrice = Price + percentage;
    console.log(updatePrice);
}