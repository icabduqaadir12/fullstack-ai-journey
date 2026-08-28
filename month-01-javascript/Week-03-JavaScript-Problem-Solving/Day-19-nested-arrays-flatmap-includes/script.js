const employees = [
    {
        name: "Ahmed",
        department: "IT",
        skills: ["JavaScript", "React"]
    },
    {
        name: "Amina",
        department: "Finance",
        skills: ["Excel", "SQL"]
    },
    {
        name: "Hassan",
        department: "IT",
        skills: ["JavaScript", "Node.js", "MongoDB"]
    },
    {
        name: "Fatima",
        department: "HR",
        skills: ["Excel", "Communication"]
    },
    {
        name: "Mohamed",
        department: "IT",
        skills: ["Python", "Machine Learning"]
    }
];


// Javascript Employees
const getJavaScriptEmployees = (employees) => {
    return employees.filter((employee) => employee.skills.includes('JavaScript'));
}

console.log(getJavaScriptEmployees(employees));

//  Javascript Employee Names
const getJavaScriptEmployeeNames = (employees) => {
    return employees.filter((employee) => employee.skills.includes('JavaScript'))
    .map(employee => employee.name);
}

console.log(getJavaScriptEmployeeNames(employees));

// All Skills Employee
const getAllSkills = (employees) => {
    return employees.flatMap(employee => employee.skills);
}

console.log(getAllSkills(employees));