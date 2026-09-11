const employees = [
  { id: 1, name: 'Ana Popescu', department: 'IT', salary: 5000, experience: 4 },
  { id: 2, name: 'Ion Ionescu', department: 'HR', salary: 3500, experience: 2 },
  { id: 3, name: 'Maria Dumitru', department: 'IT', salary: 6000, experience: 6 },
  { id: 4, name: 'Andrei Stan', department: 'Sales', salary: 4000, experience: 1 },
  { id: 5, name: 'Elena Radu', department: 'Sales', salary: 4500, experience: 5 },
  { id: 6, name: 'Bogdan Marin', department: 'IT', salary: 5500, experience: 3 },
  { id: 7, name: 'Cristina Vasile', department: 'HR', salary: 3800, experience: 7 },
];

// gruparea angajaților după departament
const groupByDepartment = (employeesList) =>
  employeesList.reduce((groups, employee) => {
    const { department } = employee;
    groups[department] = groups[department] || [];
    groups[department].push(employee);
    return groups;
  }, {});

// filtrarea angajaților după departament
const filterByDepartment = (employeesList, department) =>
  employeesList.filter(employee => employee.department === department);

// calcularea salariului mediu
const getAverageSalary = (employeesList) => {
  const total = employeesList.reduce((sum, { salary }) => sum + salary, 0);
  return employeesList.length ? total / employeesList.length : 0;
};

// identificarea angajaților cu experiență mai mare de 3 ani
const getExperiencedEmployees = (employeesList) =>
  employeesList.filter(({ experience }) => experience > 3);

// majorarea salariului cu 10% pentru angajații cu experiență > 3 ani
const giveRaiseToExperienced = (employeesList) =>
  employeesList.map(employee =>
    employee.experience > 3
      ? { ...employee, salary: Math.round(employee.salary * 1.1) }
      : { ...employee }
  );

// afișarea unui raport final
const displayReport = (employeesList) => {
  employeesList.forEach(({ name, department, salary, experience }) => {
    console.log(`${name} | ${department} | ${salary} lei | ${experience} ani experiență`);
  });
};

// --- exemple de utilizare ---
console.log('--- Angajați grupați pe departament ---');
console.log(groupByDepartment(employees));

console.log('--- Angajați din IT ---');
console.log(filterByDepartment(employees, 'IT'));

console.log('--- Salariul mediu ---');
console.log(getAverageSalary(employees).toFixed(2));

console.log('--- Angajați cu experiență > 3 ani ---');
console.log(getExperiencedEmployees(employees));

const updatedEmployees = giveRaiseToExperienced(employees);
console.log('--- Raport final după majorare ---');
displayReport(updatedEmployees);

export {
  groupByDepartment,
  filterByDepartment,
  getAverageSalary,
  getExperiencedEmployees,
  giveRaiseToExperienced,
  displayReport,
};
