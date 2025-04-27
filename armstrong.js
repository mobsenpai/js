const num = 153;
let t = num;
let arm = 0;
while (t > 0) {
  let r = t % 10;
  arm = r * r * r + arm;
  t = parseInt(t / 10);
}

console.log("OUTPUT: ", arm);
if (arm == num) {
  console.log(`${num} is an armstrong num`);
} else {
  console.log(`${num} is not an armstrong num`);
}
