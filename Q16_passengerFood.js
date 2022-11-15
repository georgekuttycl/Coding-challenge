const fs= require('fs');
const { off } = require('process');
var read=require('readline-sync')
let name=''
let food=''
let seat=''

let len= read.question("Enter the length...");

for(i=0;i<len;++i){
name[i]=read.question("Enter the Name...");
food[i]=read.question("Enter the food preference...");
seat[i]=read.question("Enter the seatno...");
}
num=read.question("Enter 1 for ascending and 2 for descending...");

if(num=='1'){
Sort_asc(name, food, seat);
}
else if(num=='2'){
Sort_des(name, food, seat);
}

function Sort_des(name, food, seat){

    for(var i = 0; i < seat.length; i++){

      for(var j = 0; j < ( seat.length - i -1 ); j++){

        if(arr[j] < arr[j+1]){

          var temp = seat[j]
          seat[j] = seat[j + 1]
          seat[j+1] = temp

           temp = name[j]
          name[j] = name[j + 1]
          name[j+1] = temp

          temp = food[j]
          food[j] = food[j + 1]
          food[j+1] = temp

        }
      }
    }
    console.log("Desc Order")
    console.log(seat);
    console.log(name);
    console.log(food);
   }



   function Sort_asc(name, food, seat){

    for( i = 0; i < seat.length; i++){
        console.log("Sorting @ i?")
      for( j = 0; j < ( seat.length - i -1 ); j++){
        console.log("Sorting @ j?")
        if(seat[j] > seat[j+1]){

            var temp = seat[j]
            seat[j] = seat[j + 1]
            seat[j+1] = temp

             temp = name[j]
            name[j] = name[j + 1]
            name[j+1] = temp

            temp = food[j]
            food[j] = food[j + 1]
            food[j+1] = temp
            console.log("Sorting @ if?")
        }
      }
    }
    console.log("ascending Order")
    console.log(seat);
   console.log(name);

   console.log(food);

   }