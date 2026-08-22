const employees = [
    { name: "Ahmed", department: "IT", salary: 800 },
    { name: "Amina", department: "Finance", salary: 950 },
    { name: "Hassan", department: "IT", salary: 1200 },
    { name: "Fatima", department: "HR", salary: 700 },
    { name: "Mohamed", department: "Finance", salary: 1100 }
];


// Get Employees By Highest Salary

const getEmployeesByHighestSalary = (employees) => [...employees].sort((a, b) => b.salary - a.salary);

console.log("Employees By Highest Salary: ", getEmployeesByHighestSalary(employees));


// Get Employees By Lowest Salary

const getEmployeesByLowestSalary = (employees) => [...employees].sort((a, b) => a.salary - b.salary);

console.log("Employees By Lowest Salary: ", getEmployeesByLowestSalary(employees))


// Get Top Three Employees

const getTopThreeEmployees = (employees) => {
    // Sort employees as Descending order while keeping original employees.
    const highestSalary = [...employees].sort((a, b) => b.salary - a.salary);
    // Top Three
    return highestSalary.slice(0,3);
}

console.log("Top Three Employees: ", getTopThreeEmployees(employees))