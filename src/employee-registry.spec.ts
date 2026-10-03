import { EmployeeRegistry } from "./employee-registry";
import { Employee } from "./employee.interface";

describe('Employee Resgitry', () => {
    let registry: EmployeeRegistry;

    beforeEach(() => {
        registry = new EmployeeRegistry;
    });
    
    afterEach(() => {
        // console.log("Test Completed");
    });

    beforeAll(() => {
        // console.log("All Tests Starting");
    });
    
    afterAll(() => {
        // console.log("All Tests Finished");
    });

    it('should add an employee to the registry', () => {
        const employee: Employee = {
            name: 'John',
            age: 25,
            department: 'Engineering',
            salary: 25000
        }

        registry.addEmployee(employee);
        
        expect(registry.getEmployees().length).toBeGreaterThan(0);
        expect(registry.getEmployees().length).toBe(1);
        // console.log("Test 1");
    });

    it('should return 3 employees, testing multiple employees', () => {
        registry.addEmployee({
            name: 'John',
            age: 25,
            department: 'Engineering',
            salary: 25000
        });
        registry.addEmployee({
            name: 'Kamala',
            age: 25,
            department: 'Engineering',
            salary: 25000
        });
        registry.addEmployee({
            name: 'Priya',
            age: 25,
            department: 'Engineering',
            salary: 25000
        });

        expect(registry.getEmployees().length).toBe(3);
        // console.log("Test 2");
    });
});

describe('EmployeeRegistry Independence', () => {
    let registry: EmployeeRegistry;
    beforeEach(() => {
        registry = new EmployeeRegistry();
    });

    it('Should add employee', () => {
        const employee: Employee = {
            name: 'John',
            age: 25,
            department: 'Housing',
            salary: 10000
        }

        registry.addEmployee(employee);

        expect(registry.employees.length).toBe(1);
    });

    it('should start with an empty registry', () => {
        expect(registry.employees.length).toBe(0);
    });

    it('should clear all employees', () => {
        registry.clearEmployees();

        expect(registry.employees.length).toBe(0);
    });
});