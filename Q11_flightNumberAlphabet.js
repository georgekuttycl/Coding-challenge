const { Console } = require('console');

const fs= require('fs');
let point=0
var read=require('readline-sync')

console.log("1. Odd - F")
console.log("2. Even - W")
console.log("3. Prime - Q")
console.log("4. Fibo - N")
console.log("5. Armstrong Numbers - A")

num=read.question("Enter the prefix...");

if(num== 'F' || num=='f')
    odd_()
if(num== 'W'|| num=='w')
    even()
if(num=='Q'||num=='q')
    prime_()
if(num=='A'||num=='a')
    armstrong()
if(num == 'N'||num=='n')
    fibo()
function odd_(){
    for(i=101;i<=111;i+=2)
    process.stdout.write('F'+ i+' ')

}

function even(){
    for(i=100;i<=111;i+=2)
    process.stdout.write('W'+ i+' ')

}

function prime_(){

    for (let i = 2; i <= 30; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }


        if (i > 1 && flag == 0) {
            process.stdout.write('Q'+i+' ');
        }
    }
}

function fibo(){
    let p=1;
    let q=1;
  process.stdout.write('N'+p+' ')
  process.stdout.write('N'+q+' ')
    for(i=0;i<5;i++){
        p=p+q;
        q=p+q
        process.stdout.write('N'+p+' ')
        process.stdout.write('N'+q+' ')

    }
}

function armstrong(){

    for (let i = 0; i <= 54750; i++) {

        // converting number to string
        let numberOfDigits = i.toString().length;

        let sum = 0;

        let temp = i;

        while (temp > 0) {

            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;

            temp = parseInt(temp / 10);
        }

        if (sum == i) {
            process.stdout.write('A'+i+' ');
        }
    }
}