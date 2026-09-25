import { Employee } from "./employee.interface";

export class EmployeeRegistry {

    employees: Employee[] = [];
    
    addEmployee(employee: Employee) {
        this.employees.push(employee)
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

    clearEmployees() {
        this.employees = [];
    }
}