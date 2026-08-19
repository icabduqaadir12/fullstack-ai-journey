const employees = [
    { name: "Ahmed", department: "IT", salary: 800 },
    { name: "Amina", department: "Finance", salary: 950 },
    { name: "Hassan", department: "IT", salary: 1200 },
    { name: "Fatima", department: "HR", salary: 700 },
    { name: "Mohamed", department: "Finance", salary: 1100 }
];


// get Total IT salary

const getTotalITSalary = (employees) => {
    return employees.filter((employee) => {
        return employee.department === 'IT';
    })
    .reduce((totalITSalary, employee) => {
        return totalITSalary + employee.salary;
    }, 0);
}

console.log("TOTAL IT SALARY: $" + getTotalITSalary(employees));



// get Average Salary By Department

const getAverageSalaryByDepartment = (employees, department) => {
    let departmentEmployees = employees.filter((employee) => {
        return employee.department === department;
    })

    let totalSalaryByDepartment = departmentEmployees.reduce((totalSalary, employee) => {
        return (totalSalary + employee.salary)
    }, 0);

    let averageSalaryByDepartment = totalSalaryByDepartment / departmentEmployees.length
    return averageSalaryByDepartment;

}

console.log("Average Salary By Department: $"+ getAverageSalaryByDepartment(employees,'Finance'));



// get Total Salary Above

const getTotalSalaryAbove = (employees, value) => {
    return employees.filter((employee) => {
        return employee.salary > value;
    })
    .reduce((totalSalary, employee) => {
        return totalSalary + employee.salary;
    }, 0);
}


console.log("Total Salary Above: $"+getTotalSalaryAbove(employees, 900));