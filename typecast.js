/*implicit 
typecasting*/

//to string
const result2 = "Hello" + 1;
const result3 = "Hello" + true;
const result4 = "Hello" + undefined;
const result5 = "Hello" + null;

//to number
const result6 = "4" * 2;
const result7 = "4" - 2;
const result8 = "4" * true; // true = 1, false = 0
const result9 = 4 + true;

console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);

/*explicit 
typecasting*/
const a = "3.14";
const b = "John Doe";
console.log(Number(a));
console.log(Number(b)); //Not a Number
