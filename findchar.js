let ch = "a";
let str = "Hello how are you?";
let f = 0;

for (i = 0; i <= str.length; i++) {
  if (str[i] == ch) {
    f = 1;
    console.log(`${ch} found at ${i} position`);
    break;
  }
}
