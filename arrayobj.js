
var users=[
    {
        name:"kiran",
        age:30
    },
    {
        name:"spadana",
        age:20
    }

];

var fil=users.filter(function(item,index)
{
    return item.age>20;
});
console.log(users[0]);
console.log(users[0].name);