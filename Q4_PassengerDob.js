const read = require('readline-sync');
var secondsInAMinute = 60,
    minutesInAnHour = 60,
    hoursInADay = 24,
    daysInAYear = 364.25;
var days, hours, minutes, seconds, age;
console.log("Passenger Date of birth");

// var pass_dob = read.questionFloat('Enter Dob(yyyy-mm-dd): ');
var d = new Date(read.question('Enter Dob(yyyy-mm-dd): '));
console.log(d);
console.log(d.getFullYear());
current_date = new Date()
cmm = current_date.getYear()
var age = d- cmm;
console.log(age);
days = age * daysInAYear;
console.log("Days :" + days);

hours = age * hoursInADay * daysInAYear;
console.log("Hours :" + hours);

minutes = age * minutesInAnHour * hoursInADay * daysInAYear;
console.log("Minutes :" + minutes);

seconds = age * secondsInAMinute * minutesInAnHour * hoursInADay * daysInAYear;
console.log("Seconds :" + seconds);
