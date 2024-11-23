//If.. else.. if else..
a = 16;

if (a >= 18) {
  console.log(`Your age is ${a}, and you are eligible to vote!`);
} else if (a == 17) {
  console.log(`Your age is ${a}, you will be eligible to vote next year!`);
} else if (a == 16) {
  console.log(
    `Your age is ${a}, you will be eligible to vote next to next year`,
  );
} else {
  console.log("You are not eligible to vote");
}

// Switch statement
switch (a) {
  case 17:
    console.log("Eligible next year");
    break;
  case 16:
    console.log("Eligible next to next year");
    break;
  default:
    console.log("Not eligible to vote");
}
