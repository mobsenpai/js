const n = 1234;
let t = n;
let rev = 0;

while (t > 0) {
  let r = t % 10;
  rev = rev * 10 + r;
  t = parseInt(t / 10);
}

console.log(`REV of ${n}: ${rev}`);
