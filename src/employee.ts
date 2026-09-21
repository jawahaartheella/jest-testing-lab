import type { Employee } from "./employee.interface.js";

const employee: Employee = {
    name: "John",
    age: 25,
    department: "Engineering",
    salary: 67500
}

export function calculateAnnulaSalary(salary: number): number {
    return salary * 12;
}

export function calculateBonus(salary: number, bonusPercent: number): number {
    return salary * (bonusPercent/100);
}
