const student = [12, "yash", "raj", 19]; //array

let course1 = [];
let grades = {};

for (let i = 1; i <= 5; i++) {
  let courses = prompt(`Enter course: ${i}`);
  course1.push(courses);
}

for (let i of course1) {
  const marks = parseInt(prompt(`Enter marks of: ${i}`), 10);
  grades[i] = marks;
}

// avg of grades
const totalMarks = Object.values(grades).reduce((acc, mark) => acc + mark, 0);
const avg = totalMarks / Object.keys(grades).length;

// Print all information
console.log(`ID: ${student[0]}`);
console.log(`First Name: ${student[1]}`);
console.log(`Last Name: ${student[2]}`);
console.log(`Age: ${student[3]}`);
for (const [course, mark] of Object.entries(grades)) {
  console.log(`Course Enrolled: ${course}, Marks Obtained: ${mark}`);
}
console.log(`Average marks obtained: ${avg}`);
