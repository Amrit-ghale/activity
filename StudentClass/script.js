class Student {
    constructor(firstName, lastName, major, gpa) {
        this.studentId = Math.floor(Math.random() * 90000000) + 10000000; // Generate a random 8 digit number
        this.firstName = firstName;
        this.lastName = lastName;
        this.major = major;
        this.gpa = gpa;
    }
}

// Create an array of Student instances
let students = [
    new Student("John", "Doe", "T111", 3.5),
    new Student("Alice", "Wind", "T111", 2.3),
    new Student("May", "Fire", "B203", 3.3),
    new Student("Chris", "Lewis", "B203", 2.7),
    new Student("Lucy", "Lu", "T111", 2.9),
    new Student("Edward", "Norton", "T111", 1.8),
];

// Add more student objects as needed



let currentStudentIndex = 0;

function generateStudentId() {
  const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
  return randomNumber.toString();
}

function displayStudentDetails(index) {
  const student = students[index];
  document.getElementById('student-id').textContent = student.studentId;
  document.getElementById('first-name').textContent = student.firstName;
  document.getElementById('last-name').textContent = student.lastName;
  document.getElementById('major').textContent = student.major;
  document.getElementById('gpa').textContent = student.gpa;
}

function navigateToFirst() {
  currentStudentIndex = 0;
  displayStudentDetails(currentStudentIndex);
}

function navigateToPrevious() {
  if (currentStudentIndex > 0) {
    currentStudentIndex--;
    displayStudentDetails(currentStudentIndex);
  }
}

function navigateToNext() {
  if (currentStudentIndex < students.length - 1) {
    currentStudentIndex++;
    displayStudentDetails(currentStudentIndex);
  }
}

function navigateToLast() {
  currentStudentIndex = students.length - 1;
  displayStudentDetails(currentStudentIndex);
}

function addNewStudent() {
  const studentId = generateStudentId();
  const firstName = prompt('Enter First Name:');
  const lastName = prompt('Enter Last Name:');
  const major = prompt('Enter Major:');
  const gpa = prompt('Enter GPA:');

  const newStudent = {
    studentId: studentId,
    firstName: firstName,
    lastName: lastName,
    major: major,
    gpa: gpa
  };

  students.push(newStudent);
  currentStudentIndex = students.length - 1;
  displayStudentDetails(currentStudentIndex);
}

function deleteStudent() {
  students.splice(currentStudentIndex, 1);
  if (currentStudentIndex >= students.length) {
    currentStudentIndex = students.length - 1;
  }
  displayStudentDetails(currentStudentIndex);
}

function searchStudents() {

  const searchType = document.getElementById('search-bar').value;
  const searchInput = document.getElementById('search-input').value.toLowerCase();

  let searchResults = [];

  if (searchType === 'major') {
    searchResults = students.filter(student => student.major.toLowerCase().includes(searchInput));
  } else if (searchType === 'last-name') {
    searchResults = students.filter(student => student.lastName.toLowerCase().includes(searchInput));
  } else if (searchType === 'gpa') {
    searchResults = students.filter(student => student.gpa.toLowerCase().includes(searchInput));
  }

  if (searchResults.length > 0) {
    currentStudentIndex = 0;
    displayStudentDetails(currentStudentIndex);
  } else {
    alert('No matching students found.');
  }
}

function sortStudentsByGpa() {
  students.sort((a, b) => parseFloat(b.gpa) - parseFloat(a.gpa));
  currentStudentIndex = 0;
  displayStudentDetails(currentStudentIndex);
}

function sortStudentsByLastName() {
  students.sort((a, b) => a.lastName.localeCompare(b.lastName));
  currentStudentIndex = 0;
  displayStudentDetails(currentStudentIndex);
}

function listMajorByAverageMarks() {
  const majorAverages = {};

  students.forEach(student => {
    if (majorAverages[student.major]) {
      majorAverages[student.major].marks.push(parseFloat(student.gpa));
    } else {
      majorAverages[student.major] = {
        marks: [parseFloat(student.gpa)],
        average: 0
      };
    }
  });

  for (const major in majorAverages) {
    const marksArray = majorAverages[major].marks;
    const sum = marksArray.reduce((total, mark) => total + mark, 0);
    const average = sum / marksArray.length;
    majorAverages[major].average = average;
  }

  const sortedMajors = Object.keys(majorAverages).sort((a, b) => majorAverages[b].average - majorAverages[a].average);
  alert('Majors by Average Marks (High to Low):\n' + sortedMajors.join('\n'));
}

document.getElementById('btn-first').addEventListener('click', navigateToFirst);
document.getElementById('btn-previous').addEventListener('click', navigateToPrevious);
document.getElementById('btn-next').addEventListener('click', navigateToNext);
document.getElementById('btn-last').addEventListener('click', navigateToLast);
document.getElementById('btn-add').addEventListener('click', addNewStudent);
document.getElementById('btn-delete').addEventListener('click', deleteStudent);
document.getElementById('btn-search').addEventListener('click', searchStudents);
document.getElementById('btn-sort-gpa').addEventListener('click', sortStudentsByGpa);
document.getElementById('btn-sort-last-name').addEventListener('click', sortStudentsByLastName);
document.getElementById('btn-list-major').addEventListener('click', listMajorByAverageMarks);

// Display the first student details initially
displayStudentDetails(currentStudentIndex);