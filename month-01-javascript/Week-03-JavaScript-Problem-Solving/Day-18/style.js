const employees = [
    { id: 1, name: "Ahmed", department: "IT", salary: 800 },
    { id: 2, name: "Amina", department: "Finance", salary: 950 },
    { id: 3, name: "Hassan", department: "IT", salary: 1200 },
    { id: 4, name: "Fatima", department: "HR", salary: 700 },
    { id: 5, name: "Mohamed", department: "Finance", salary: 1100 }
];


// find Employee By Id
const findEmployeeById = (employees, id) => employees.find((employee) => employee.id === id);
console.log(findEmployeeById(employees, 4))

// get Employee Index
const getEmployeeIndex = (employees, id) => employees.findIndex((employee) => employee.id === id);
console.log(getEmployeeIndex(employees, 3));

// update Employee Salary
const updateEmployeeSalary = (employees, id, newSalary) => {
    return employees.map((employee) => {
        if (employee.id === id) {
            return {
                ...employee,
                salary: newSalary
            }
        }

        return employee
    });
}

console.log(updateEmployeeSalary(employees, 5, 1300));