// var value = prompt("Enter the number"),
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// console.log(sum);

// Sum of digits

var num=prompt("Enter the number");
var sum=0;
var rem=0;

while(num){
    rem=num%10;
    sum+=rem;
    num=(num-rem)/10;
}
console.log(sum);

// descending order

var e=[2,87,56,90,34,2,0,5];
var w=e.sort(function(a,b)
{
    return a-b;
}
)
// console.log(w);
r=w.reverse();
console.log(r);

// Mail validate

var m=prompt("Enter the Mail id");
function Mail(m) {
    if (m.includes("@") && m.includes(".")) {
       console.log("Valid Mail") 
    } else {
        console.log("Invalid Mail")
    }
}
Mail(m);