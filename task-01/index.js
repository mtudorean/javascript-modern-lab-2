const grades = [7, 9, 5, 10, 8, 6];

// toate notele mai mari sau egale cu 8
const highGrades = grades.filter(grade => grade >= 8);
console.log('Note >= 8:', highGrades);

// media notelor
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log('Media notelor:', average.toFixed(2));

// fiecare notă mărită cu 1 punct, fără a depăși 10
const increasedGrades = grades.map(grade => Math.min(grade + 1, 10));
console.log('Note mărite:', increasedGrades);
