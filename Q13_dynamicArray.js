const { Console } = require('console');
const fs= require('fs');
var read=require('readline-sync')

let array=[]
let i=0;

    while(true)
    {a=read.question("Enter the value...");
    if(a!='stop')
    {array.push(a)
    }

else
break;
    }
console.log(array)
