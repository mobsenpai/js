let a = "Happy new year!";

// method 1
let rev = "";

for (i in a) {
  // console.log(a[i]);
  rev = a[i] + rev;
}

console.log(rev);

// method 2
for (let j = a.length; j >= 0; j--) {
  console.log(a[j]);
}

// method 3
console.log(a.split("").reverse().join(""));
