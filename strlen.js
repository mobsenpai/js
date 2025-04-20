let str = "Hello check";
// console.log(str.length);

// Manual
let count = 0;
// for (let i in str) {
//   count += 1;
// }

// for (let i = 0; i < str.length; i++) {
//   count += 1;
// }

// for (let i of str) {
//   count += 1;
// }

str.split("").forEach((char) => {
  count += 1;
});

console.log(count);
