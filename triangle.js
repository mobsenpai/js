const a = 90;
const b = 45;
const c = 45;

const sum = a + b + c;

if (sum == 180) {
  if (a > 90 || b > 90 || c > 90) {
    console.log("Obtuse triangle");
  } else if (a == 90 || b == 90 || c == 90) {
    console.log("Right triangle");
  } else {
    console.log("Acute triangle");
  }
} else {
  console.log("Invalid triangle");
}
