// Write your solution in this file!
const employee={
    name:"Ahmed",
    streetAddress:"Eastleigh"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const object={...employee}
    object[key]=value
    return object
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee

}

function deleteFromEmployeeByKey(employee, key){
    let newemployee={...employee}
    delete newemployee[key]
    return newemployee

}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return  employee;
}