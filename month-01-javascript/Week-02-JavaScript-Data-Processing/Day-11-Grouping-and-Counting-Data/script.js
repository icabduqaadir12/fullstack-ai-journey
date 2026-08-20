const employees = [
    { name: "Ahmed", department: "IT", salary: 800 },
    { name: "Amina", department: "Finance", salary: 950 },
    { name: "Hassan", department: "IT", salary: 1200 },
    { name: "Fatima", department: "HR", salary: 700 },
    { name: "Mohamed", department: "Finance", salary: 1100 }
];


// countEmployeesByDepartment

const countEmployeesByDepartment = (employees) => {
    return employees.reduce((counts, employee) => {
        let department = employee.department;

        if (counts[department]) {
            counts[department] += 1;
        } else {
            counts[department] = 1;
        }

        return counts;
    }, {});
}


console.log("Each Employees By Department: ", countEmployeesByDepartment(employees));



const qarashaad = [
    { amount: 500, category: "Food" },
    { amount: 200, category: "Transportation" },
    { amount: 800, category: "Food" },
    { amount: 150, category: "Groceries" },
    { amount: 1000, category: "Transportation" },
    { amount: 300, category: "Entertainment" }
];


// countExpensesByCategory

const countExpensesByCategory = (qarashaad) => {
    return qarashaad.reduce((counts, qarash) => {
        let category = qarash.category;

        if(counts[category])
            counts[category] += 1;
        else
            counts[category] = 1;

        return counts;
    }, {});
}


console.log("Counts Expenses By Category: ", countExpensesByCategory(qarashaad));



// getTotalSalaryByDepartment

const getTotalSalaryByDepartment = (employees) => {
    return employees.reduce((sumSalary, employee) => {
        
        let department = employee.department
        if (sumSalary[department]) {
            sumSalary[department] += employee.salary;
        } else {
            sumSalary[department] = employee.salary;
        }

        return sumSalary;
    }, {});
}

console.log(getTotalSalaryByDepartment(employees));