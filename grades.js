let maths, python, c, english, pmo, total, avg;

// Giving values | use user input instead
maths = 90;
python = 0;
c = 70;
pmo = 90;
english = 85;

// Operations
total = maths + python + c + pmo + english;
avg = total / 5;

// logic
if (maths >= 45 && python >= 45 && c >= 45 && pmo >= 45 && english >= 45) {
  if (avg >= 75) {
    console.log("Distinct");
  } else if (avg >= 65 && avg < 75) {
    console.log("First Divison");
  } else if (avg >= 55 && avg < 65) {
    console.log("Second Division");
  } else if (avg >= 45 && avg < 55) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
} else {
  console.log("Failed in one or multiple subjects");
}
