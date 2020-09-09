var a="full";

var x= new Promise(function(resolve,reject)
{
    if(a=="full")
         resolve();
    else
       reject();     



});
console.log("i have explanation");
x.then(function()
{
    console.log("i am happy");
}).catch(function(){

console.log("breakup");
});