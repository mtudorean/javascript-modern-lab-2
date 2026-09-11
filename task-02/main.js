import { calculateAverage } from './utils.js';

const students = [
  { id: 1, name: 'Ana', grade: 9 },
  { id: 2, name: 'Ion', grade: 7 },
  { id: 3, name: 'Maria', grade: 10 },
  { id: 4, name: 'Andrei', grade: 6 },
  { id: 5, name: 'Elena', grade: 8 },
];

// afișarea tuturor elevilor
function displayAllStudents() {
  students.forEach(({ id, name, grade }) => {
    console.log(`ID: ${id} | Nume: ${name} | Nota: ${grade}`);
  });
}

// identificarea elevilor cu nota >= 8
function getTopStudents() {
  return students.filter(student => student.grade >= 8);
}

// calcularea mediei clasei
function getClassAverage() {
  const grades = students.map(student => student.grade);
  return calculateAverage(grades);
}

// căutarea unui elev după id (aruncă eroare dacă nu există)
function findStudentById(id) {
  const student = students.find(student => student.id === id);
  if (!student) {
    throw new Error(`Elevul cu id-ul ${id} nu a fost găsit.`);
  }
  return student;
}

// adăugarea unui elev nou
function addStudent(newStudent) {
  students.push(newStudent);
}

// afișarea informațiilor folosind template literals
function displayStudentInfo(student) {
  console.log(`Elevul ${student.name} (id: ${student.id}) are nota ${student.grade}.`);
}

// --- exemple de utilizare ---
displayAllStudents();
console.log('Elevi cu nota >= 8:', getTopStudents());
console.log('Media clasei:', getClassAverage().toFixed(2));

try {
  const student = findStudentById(2);
  displayStudentInfo(student);

  findStudentById(99); // va arunca eroare, prinsă mai jos
} catch (error) {
  console.log('Eroare:', error.message);
}

addStudent({ id: 6, name: 'Bogdan', grade: 8 });
console.log('--- După adăugare elev nou ---');
displayAllStudents();
