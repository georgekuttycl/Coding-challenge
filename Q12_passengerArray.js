const { Console } = require('console');
const fs= require('fs');
let passget=''
let destget =''
let name=[];
let dest=[];
let merge=[];
var read=require('readline-sync')
l=read.question("Enter the number of passengers...");

for(i=0;i<l;++i){

    passget=read.question("Enter the name of passenger ...");
    name.push(passget)

    destget=read.question("Enter the destination ...");
    dest.push(destget)

}

for(i=0;i<l;++i){
    merge[i]=name[i]+' '+dest[i]
}
console.log(merge)