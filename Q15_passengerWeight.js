const { Console } = require('console');
const fs= require('fs');
var read=require('readline-sync')
let w=23
array=[]
weight=[]
l=read.question("Enter the number of passengers...");
for(i=0;i<l;++i){
    array[i]=read.question("Enter the weight")
    weight[i]=array[i]-w;
}

Sort_des(array)

function Sort_des(arr){

    for(var i = 0; i < arr.length; i++){

      for(var j = 0; j < ( arr.length - i -1 ); j++){

        if(arr[j] < arr[j+1]){

          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }

    console.log("Desc Order")
    console.log(arr);
   }
   for(i=0;i<l;++i){

    weight[i]=(array[i]-w)*15;
}
console.log(weight)