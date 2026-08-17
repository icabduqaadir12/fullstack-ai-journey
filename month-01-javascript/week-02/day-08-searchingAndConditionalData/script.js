const employees = [
    {
        id: 1,
        name: "Ahmed",
        department: "IT",
        salary: 800
    },
    {
        id: 2,
        name: "Amina",
        department: "Finance",
        salary: 950
    },
    {
        id: 3,
        name: "Hassan",
        department: "IT",
        salary: 1200
    },
    {
        id: 4,
        name: "Fatima",
        department: "HR",
        salary: 700
    },
    {
        id: 5,
        name: "Mohamed",
        department: "Finance",
        salary: 1100
    }
];



// find employee by id

const findEmployeeById = (employees, id) => {
    return employees.find((employee) => {
        return employee.id === id;
    });
}


console.log('Employee By Id:', findEmployeeById(employees, 5));


// get IT Employees
const getITEmployees = (employees) => {
    return employees.filter((employee) => {
        return employee.department === 'IT';
    });
}

console.log('IT Employees:', getITEmployees(employees));


// get hight salary employees

const getHighSalaryEmployees = (employees) => {
    return employees.filter((employee) => {
        return employee.salary > 900;
    });
}

console.log("High Salary Employees:", getHighSalaryEmployees(employees));


// find highest paid employee

const findHighestPaidEmployee = (employees) => {
    let highestPaidEmployee = employees[0];
    employees.forEach((employee) => {
        if (highestPaidEmployee.salary < employee.salary)
            highestPaidEmployee = employee;
    });
    return highestPaidEmployee;
}

console.log("Highest Paid Employee:",findHighestPaidEmployee(employees));


// get finance Employees

const getFinanceEmployees = (employees) => {
    return employees.filter((employee) => {
        return employee.department === 'Finance';
    });
}

console.log("Finance Employees: ", getFinanceEmployees(employees));


// find employee by name

const findEmployeeByName = (employees, name) => {
    return employees.find((employee) => {
        return employee.name === name;
    });
}

console.log("Employee By Name:", findEmployeeByName(employees, 'Hassan'));


// get employees with salary above

const getEmployeesWithSalaryAbove = (employees, salary) => {
    return employees.filter((employee) => {
        return employee.salary > salary;
    });
}

console.log("Employee With Salary Above:", getEmployeesWithSalaryAbove(employees, 900));