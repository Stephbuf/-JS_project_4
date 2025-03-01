// Define function
function calculateGPA(arr) {
  const gradeToPoints = {
    "A+": 95, "A": 90, "A-": 85,
    "B+": 80, "B": 75, "B-": 70,
    "C+": 68, "C": 64, "C-": 60,
    "D+": 55, "D": 50, "F": 49
  };

  let totalPoints = 0;

  // Convert letter grades to numeric points
  for (const grade of arr) {
    if (gradeToPoints.hasOwnProperty(grade)) {
      totalPoints += gradeToPoints[grade];
    } else {
      console.warn("Unrecognized grade: " + grade);
    }
  }

  if (arr.length === 0) return "No grades provided";

  // Calculate the average
  let average = totalPoints / arr.length;

  // Grade to Letter
  let finalGrade;
  if (average >= 95) {
    finalGrade = "A+";
  } else if (average >= 90) {
    finalGrade = "A";
  } else if (average >= 85) {
    finalGrade = "A-";
  } else if (average >= 80) {
    finalGrade = "B+";
  } else if (average >= 75) {
    finalGrade = "B";
  } else if (average >= 70) {
    finalGrade = "B-";
  } else if (average >= 67) {
    finalGrade = "C+";
  } else if (average >= 64) {
    finalGrade = "C";
  } else if (average >= 60) {
    finalGrade = "C-";
  } else if (average >= 55) {
    finalGrade = "D+";
  } else if (average >= 50) {
    finalGrade = "D";
  } else {
    finalGrade = "F";
  }

  // Return the final letter GPA
  return finalGrade;
}

let studentGrades = ["A", "B+", "C", "B+"]; 

// Calculate GPA
let studentGPA = calculateGPA(studentGrades);

// Show Results
document.write("Your GPA is " + studentGPA);