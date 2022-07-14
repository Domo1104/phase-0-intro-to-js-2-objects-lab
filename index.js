// Write your solution in this file!
const employee = {
        name: "Chris",
        streetAddress: "Dumpster",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee}
    updateEmployee[key] = value
    return updateEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
 function deleteFromEmployeeByKey(employee, key, value) {
    const cloneEmployee = {...employee}
    delete cloneEmployee.key
    return {
        ...employee,
        [key]: value,
      }
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    return employee
    
 }