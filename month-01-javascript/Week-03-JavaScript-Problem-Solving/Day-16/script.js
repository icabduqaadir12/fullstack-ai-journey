const employees = [
    {
        name: "Ahmed",
        department: {
            name: "IT",
            location: "Nairobi"
        },
        salary: 800
    },
    {
        name: "Amina",
        department: {
            name: "Finance",
            location: "Mogadishu"
        },
        salary: 950
    },
    {
        name: "Fatima",
        department: null,
        salary: 700
    },
    {
        name: "Hassan",
        department: {
            name: "IT",
            location: "Nairobi"
        },
        salary: 1200
    }
];


// get Employee Departments

const getEmployeeDepartments = (employees) => {
    return employees.map((employee) => {
        return employee.department?.name ?? 'Unknown'
    });
}

console.log(getEmployeeDepartments(employees));

// get Employee Locations

const getEmployeeLocations = (employees) => {
    return employees.map((employee) => employee.department?.location ?? 'Unknown');
}

console.log(getEmployeeLocations(employees))