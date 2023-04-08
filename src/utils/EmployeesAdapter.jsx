export const EmployeesAdapter = (arr) => {
    const data = arr && arr.map((employee) => {
        return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age,
        }
    })

    return data
}