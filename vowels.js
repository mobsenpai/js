n = "b";

if (/^[a-zA-Z]+$/.test(n)) {
  if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
    console.log(`${n} is a vowel`);
  } else {
    console.log(`${n} is a consonant`);
  }
} else {
  console.log(`${n} is a number`);
}

// I know this has a lot of flaws but its just for testing
