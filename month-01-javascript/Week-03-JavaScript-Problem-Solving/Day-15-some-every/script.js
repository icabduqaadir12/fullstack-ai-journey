const employees = [
    { name: "Ahmed", department: "IT", salary: 800, experience: 2 },
    { name: "Amina", department: "Finance", salary: 950, experience: 3 },
    { name: "Hassan", department: "IT", salary: 1200, experience: 5 },
    { name: "Fatima", department: "HR", salary: 700, experience: 1 },
    { name: "Mohamed", department: "Finance", salary: 1100, experience: 4 },
    { name: "Yusuf", department: "IT", salary: 1050, experience: 3 },
    { name: "Maryam", department: "HR", salary: 900, experience: 4 }
];



// hasHighSalaryEmployee
const hasHighSalaryEmployee = (employees) => {
    return employees.some((employee) => {
        return employee.salary > 1100;
    });
}

console.log("Has Hight Salary Employee(>1100):", hasHighSalaryEmployee(employees));


// allExperienced

const allExperienced = (employees) => {
    return employees.every((employee) => {
        return employee.experience >= 2;
    });
}

console.log('All Experienced:', allExperienced(employees));