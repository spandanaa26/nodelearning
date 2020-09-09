var numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers.reverse());

var evennumbers=numbers.filter(function(item,index)
{
    return item%2==0;
})
console.log(evennumbers);