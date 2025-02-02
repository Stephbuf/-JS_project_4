
// Define function
function calculateGPA(arr) {
  let totalPoints = 0;

  // Loop through each grade in the array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A+") {
      // A+ is 95-100%, middle is about 97.5
      totalPoints += 97.5;
    } else if (arr[i] === "A") {
      // A is 90-94%, middle is about 92
      totalPoints += 92;
    } else if (arr[i] === "A-") {
      // A- is 85-89%, middle is about 87
      totalPoints += 87;
    } else if (arr[i] === "B+") {
      // B+ is 80-84%, middle is about 82
      totalPoints += 82;
    } else if (arr[i] === "B") {
      // B is 75-79%, middle is about 77
      totalPoints += 77;
    } else if (arr[i] === "B-") {
      // B- is 70-74%, middle is about 72
      totalPoints += 72;
    } else if (arr[i] === "C+") {
      // C+ is 67-69%, middle is about 68
      totalPoints += 68;
    } else if (arr[i] === "C") {
      // C is 64-66%, middle is about 65
      totalPoints += 65;
    } else if (arr[i] === "C-") {
      // C- is 60-63%, middle is about 61.5
      totalPoints += 61.5;
    } else if (arr[i] === "D+") {
      // D+ is 55-59%, middle is about 57
      totalPoints += 57;
    } else if (arr[i] === "D") {
      // D cis 50-54%, middle is about 52
      totalPoints += 52;
    } else if (arr[i] === "F") {
      // F corresponds to 0-49%. 
      totalPoints += 49;
    } else {
      // Warn if an unrecognized grade is encountered.
      console.warn("Unrecognized grade: " + arr[i]);
    }
  }

  let average = totalPoints / arr.length;

  // Numberic grade to letter 
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

  // Return the final letter GPA.
  return finalGrade;
}

// Array of letter grades.
let studentGrades = ["A", "B+", "A-", "B+"];

// Call calculateGPA 
let studentGPA = calculateGPA(studentGrades);

// Display the result
document.write("Your GPA is " + studentGPA);


