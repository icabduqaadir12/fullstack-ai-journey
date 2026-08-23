// Dataset
const employees = [
    { name: "Ahmed", department: "IT", salary: 800, experience: 2 },
    { name: "Amina", department: "Finance", salary: 950, experience: 3 },
    { name: "Hassan", department: "IT", salary: 1200, experience: 5 },
    { name: "Fatima", department: "HR", salary: 700, experience: 1 },
    { name: "Mohamed", department: "Finance", salary: 1100, experience: 4 },
    { name: "Yusuf", department: "IT", salary: 1050, experience: 3 },
    { name: "Maryam", department: "HR", salary: 900, experience: 4 }
];


// get Top Three Employees

const getTopThreeEmployees = (employees) => {
    return [...employees].sort((a, b) => b.salary - a.salary)
    .slice(0,3);
}

console.log("TOP THREE EMPLOYEES:", getTopThreeEmployees(employees));

// get IT Salary Report

const getITSalaryReport = (employees) => {
    return employees.filter((employee) => employee.department === 'IT')
    .reduce((total, employee) => total + employee.salary, 0)
}

console.log("IT SALARY EMPLOYEES: $"+ getITSalaryReport(employees));

// get Experienced Employees

const getExperiencedEmployees = (employees) => {
    return employees.filter((employee) => employee.experience >= 3);
}

console.log("Experienced Employees:",getExperiencedEmployees(employees));


// Get Total Salary By Department

const getTotalSalaryByDepartment = (employees) => {
    return employees.reduce((total, employee) => {
        let department = employee.department

        if (total[department])
            total[department] += employee.salary;
        else
            total[department] = employee.salary;

        return total;
    }, {});
}

console.log("Total Salary By Department:", getTotalSalaryByDepartment(employees));


// Get Top Two Experienced Employees

const getTopTwoExperiencedEmployees = (employees) => {
    return [...employees].sort((a, b) => b.salary - a.salary)
    .filter((employee) => employee.experience >= 3)
    .slice(0,2);
}

console.log("Top Two Experienced Employees:", getTopTwoExperiencedEmployees(employees));