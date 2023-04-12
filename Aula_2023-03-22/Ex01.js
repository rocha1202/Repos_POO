let employeeList = [];

for (let i = 0; i < 3; i++) {
    addEmployee();
}

showEmployee();
totalSalaries();

function addEmployee() {
    employeeName = prompt('Nome')
    if (existEmployee(employeeName)) {
        alert(`O Funcionario já existe`)
        return
    }
    employeeSalary = +prompt('Salario')
    employeeDepart = prompt('Departamento')

    let employee = {
        name: employeeName,
        salary: employeeSalary,
        depart: employeeDepart,
        segSocial: function () {
            return this.salary * 0.11;
        }
    }
    employeeList.push(employee);

}

function existEmployee(nome) {
    return employeeList.some(employee => employee.name == nome)
}

function showEmployee() {
    for (employee of employeeList) {
        alert(`Name: ${employee.name}, \nSalary: ${employee.salary}, \nDepart: ${employee.depart}, \nSegSocial: ${employee.segSocial}`)
    }
}

function totalSalaries() {
    let totalSalar = 0
    for (employee of employeeList) {
        totalSalar += employee.salary;
    }
    alert(`Total Salarios: ${totalSalar}€`)
}
