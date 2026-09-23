import type { Employee } from "./employee.interface.js";

export function createEmployee(name: string, age: number, dept: string, salary: number): Employee {
    const employee: Employee = {
        name: name,
        age: age,
        department: dept,
        salary: salary
    }

    return employee;
}

export function calculateAnnulaSalary(salary: number): number {
    return salary * 12;
}

export function calculateBonus(salary: number, bonusPercent: number): number {
    return salary * (bonusPercent/100);
}

export function isEligibleForBonus(salary: number): boolean {
    if(salary >= 30000) {
        return true;
    }
    return false;
}
