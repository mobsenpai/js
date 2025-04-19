let n = 123;
let t = n;
let s = 0;

while (n > 0) {
  let r = n % 10;
  s = s + r;
  // n = Math.floor(n / 10);
  n = parseInt(n / 10);
}

console.log("Sum of digits: " + s);
