//var add=require('./add');

//console.log(add.addition(4,5));

//var s=require('./sub');
//console.log(s.subtraction(26,12));

var file=require('fs');
//file.writeFileSync("./demo.txt","spandsdhana");
 var da=file.readFileSync('./demo.txt',{encoding:'utf-8'});

 console.log(da);