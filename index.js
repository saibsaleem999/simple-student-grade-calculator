// Task 1: Creating Student Data
let students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 82 },
  { name: "Charlie", score: 76 },
  { name: "David", score: 64 },
  { name: "Eva", score: 58 }
];

let totalScore = 0; // Initialize total score

// Task 2: Calculating and Assigning Grades
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  totalScore += student.score;

  let grade = "";

  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 80) {
    grade = "B";
  } else if (student.score >= 70) {
    grade = "C";
  } else if (student.score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(student.name + " received grade: " + grade);
}

// Task 3: Calculating the Average Score
function calculateAverage(totalScore, numberOfStudents) {
  return totalScore / numberOfStudents;
}

let average = calculateAverage(totalScore, students.length);
console.log("The average class score is: " + average);


// 5 students ka data array me hai

// For loop se scores add + grade assign ho raha hai

// if / else if se grade conditions clear hain

// Function calculateAverage se average nikal raha ha