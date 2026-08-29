const employees = [
    {
        id: 1,
        name: "Ahmed",
        department: "IT",
        salary: 800,
        experience: 2,
        skills: ["JavaScript", "React"]
    },
    {
        id: 2,
        name: "Amina",
        department: "Finance",
        salary: 950,
        experience: 3,
        skills: ["Excel", "SQL"]
    },
    {
        id: 3,
        name: "Hassan",
        department: "IT",
        salary: 1200,
        experience: 5,
        skills: ["JavaScript", "Node.js", "MongoDB"]
    },
    {
        id: 4,
        name: "Fatima",
        department: "HR",
        salary: 700,
        experience: 1,
        skills: ["Excel", "Communication"]
    },
    {
        id: 5,
        name: "Mohamed",
        department: "Finance",
        salary: 1100,
        experience: 4,
        skills: ["Python", "Machine Learning"]
    },
    {
        id: 6,
        name: "Yusuf",
        department: "IT",
        salary: 1050,
        experience: 3,
        skills: ["JavaScript", "React", "Docker"]
    }
];


// getITEmployees
const getITEmployees = (employees) => employees.filter((employee) => employee.department === 'IT');
console.log(getITEmployees(employees));

// getEmployeeNames
const getEmployeeNames = (employees) => employees.map((employee) => employee.name);
console.log(getEmployeeNames(employees));

// calculateTotalSalary
const calculateTotalSalary = (employees) => employees.reduce((total, employee) => total + employee.salary, 0)
console.log(calculateTotalSalary(employees));

// getHighPaidITEmployeeNames
const getHighPaidITEmployeeNames = (employees) => employees.filter((employee) => employee.department === 'IT' && employee.salary > 900).map((employee) => employee.name);
console.log(getHighPaidITEmployeeNames(employees));

// getHighestPaidEmployee
const getHighestPaidEmployee = (employees) => {
    return [...employees].sort((a, b) => b.salary - a.salary)[0].name
}

console.log(getHighestPaidEmployee(employees));

// hasPythonEmployee
const hasPythonEmployee = (employees) => employees.some((employee) => employee.skills.includes("Excel"));
console.log(hasPythonEmployee(employees));


// allEmployeesAboveSalary
const allEmployeesAboveSalary = (employees, salary) => employees.every((employee) => employee.salary >= salary);
console.log(allEmployeesAboveSalary(employees, 600)); //true
console.log(allEmployeesAboveSalary(employees, 800)); //false


// getTopTwoITEmployees
const getTopTwoITEmployees = (employees) => {
    return employees.filter((employee) => employee.department === 'IT')
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 2)
    .map((employee) => employee.name);
}
console.log(getTopTwoITEmployees(employees));


// getAverageExperiencedITSalary
const getAverageExperiencedITSalary = (employees) => {
    const salaries = employees.filter((employee) => employee.department === 'IT' && employee.experience >= 3)
    .map((employee) => employee.salary);
    const average = (salaries.reduce((total, employee) => total + employee)) / salaries.length;
    return average
}

console.log(getAverageExperiencedITSalary(employees));