/*
//first exercise
const userValue = prompt ();
let res = userValue*userValue;
console.log(res);
//second exercise
let userValue1 = prompt();
userValue1 = parseFloat(userValue1);
let userValue2 = prompt();
userValue2 = parseFloat(userValue2);
console.log(userValue1, userValue2);
let avg = (userValue1 + userValue2)/2;
console.log(avg);
//third exercise
let squareWidth = prompt ();
let area = squareWidth * squareWidth;
console.log(area);
//forth exercise
let kilometres = prompt ();
kilometres = parseFloat(kilometres);
const miles = kilometres * 0.621371;
console.log(kilometres + ' kilometres = ', miles + ' miles');
//sixth exercise
let a = prompt();
a = parseFloat(a);
let b = prompt();
b = parseFloat(b);
x = -b/a;
console.log(x);
*/
//training
const x = prompt("Please input your number: ");


if (!isNaN(x)) {
    if (x % 2 === 0 ) {
        alert ("Number is even");
    }

    else {
        alert ("Number is odd");
    }
}
else {
    alert ("Value isn't number");
}


