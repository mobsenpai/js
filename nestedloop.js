adj = ["red", "big", "tasty"];
fruits = ["apple", "mango", "cherry"];

// Using for in loop
for (let x in adj) {
  for (let y in fruits) {
    console.log(adj[x], fruits[y]);
  }
}

// forEach() method
function repeat(value, index, array) {
  console.log(value);
}

adj.forEach(repeat);

// for of loop
for (let x of adj) {
  for (let y of fruits) {
    console.log(x, y);
  }
}
