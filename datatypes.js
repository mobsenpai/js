// dynamically typed
let a = 1; // number
let b = 4.5;
let c = a + b;

console.log(c);
console.log(typeof c);

/* 
  assignment = 
  arithmetic (mathematical) + - * /
*/

// word and number
console.log("hello" + 5);

// **** Some other things to know beforehand ****
// Block scope - undeclared variable
{
  x = 5; /* undeclared variable
            advised to declare a variable before use
          */
}
console.log(x);

// Block scope with - var
{
  var bv = 1;
}
console.log(bv); // var always have global scope

// Block scope with - let
{
  let bl = 1;
}

// console.log(bl); // cannot access outside block scope

// variables - var, let, const

let y = 10;
// let y = 20 // cannot re-declare let

var z = 10;
var z = "hello";
console.log(z); // can be re-declared
