import { calculateAnnulaSalary, calculateBonus, createEmployee, isEligibleForBonus } from "./employee";

// Test suite
// A test suite is not just a collection of assertions. It describes the expected behavior of the application.
// Below is a well structured test suite:
describe('Employee', () => {

    // Nested describe
    describe('Salary', () => {

        describe('Annual Salary', () => {

            it('should return annual salary', () => {
                const monthlySalary = 20000;

                const annualSalary = calculateAnnulaSalary(monthlySalary);

                expect(annualSalary).toBe(240000);
            });

            it('should return 0 when monthly salary is 0', () => {
                const monthlySalary = 0;

                const annualSalary = calculateAnnulaSalary(monthlySalary);

                expect(annualSalary).toBe(0);
            });

            // Observe one test one behaviour, we did not mention to test everything about salary in one single test
            // We took two cases, and this makes to spot the issue easy, if in case in future 
            //      Annual Salary
            //      √ should return annual salary (1 ms)
            //      X should return 0 when monthly salary is 0
            // We will easily know where the issue was
        });
    });

    describe('Bonus', () => {

        // We'll check with a normal input
        it('should return the calculated bonus amount 2000', () => {
            const salary = 20000;
            const bonusPercent = 10;

            const bonusAmount = calculateBonus(salary, bonusPercent);

            expect(bonusAmount).toBe(2000);
        });

        // Now we will check with normal input but different value, this becomes little stronger 
        it('should return the calculated bonus amount 5000', () => {
            const salary = 50000;
            const bonusPercent = 10;

            const bonusAmount = calculateBonus(salary, bonusPercent);

            expect(bonusAmount).toBe(5000);
        });

        it('should return zero when salary is zero', () => {
            const salary = 0;
            const bonusPercent = 10;

            const bonusAmount = calculateBonus(salary, bonusPercent);

            expect(bonusAmount).toBe(0);
        });

        it('should return zero when the bonus percent is zero', () => {
            const salary = 10000;
            const bonusPercent = 0;

            const bonusAmount = calculateBonus(salary, bonusPercent);

            expect(bonusAmount).toBe(0);
        });
    });

    describe('Employee Details', () => {
        it('should return employee details matching the Employee interface', () => {
            const employee = createEmployee('John', 25, 'Engineering', 50000);

            expect(employee).toEqual({
                name: 'John',
                age: 25,
                department: "Engineering",
                salary: 50000 
            });
        });
        
        it('should verify if name and department fields exist in employee details', () => {
            const employee = createEmployee('Varun', 24, 'QA', 60000);

            expect(employee).toMatchObject({name: 'Varun', department: 'QA'});
        });

        it('should check if employee details have fields name, age, department and salary', () => {
            const employee = createEmployee('Kiran', 25, 'cyber Security', 100000);

            expect(employee).toHaveProperty('name');
            expect(employee).toHaveProperty('department');
            expect(employee).toHaveProperty('age');
            expect(employee).toHaveProperty('salary');
        });

        it('should check if the salary of employee is greater than 0', () => {
            const employee = createEmployee('John', 25, 'Engineering', 50000);

            expect(employee.salary).toBeGreaterThan(0);
        });

        it('should check if the employee exists in the employee list', () => {
            const employeeList = [
                createEmployee('Kiran', 35, 'QA', 10000), 
                createEmployee('Arun', 25, 'IOT', 40000), 
                createEmployee('Tarun', 30, 'MBA', 30000)
            ];

            // we can use toContain when we     are checking using the same reference
            // expect(employeeList).toContain(employeeList[0]);

            // But if we try to check using the contents, we use "toContainEqual"
            expect(employeeList).toContainEqual({
                name: 'Arun',
                age: 25,
                department: 'IOT',
                salary: 40000
            });
        });
    });

    describe('Bonus Eligibility', () => {
        it('should return false when salary is equal to zero', () => {
            const salary = 0;

            const isEligible = isEligibleForBonus(salary);

            expect(isEligible).toBe(false);
        });

        it('should return false when salary is less than 30000', () => {
            const salary = 15000;
            
            const isEligible = isEligibleForBonus(salary);

            expect(isEligible).toBe(false);
        });

        it('should return false when the salary is 29999, Border case', () => {
            // 'should return false when salary is just below the eligibility threshold'
            const salary = 29999;
            
            const isEligible = isEligibleForBonus(salary);

            expect(isEligible).toBe(false);
        });

        it('should return true when salary is 30000, Border Case', () => {
            // 'should return true when salary equals the eligibility threshold'
            const salary = 30000;

            const isEligible = isEligibleForBonus(salary);

            expect(isEligible).toBe(true);
        });

        it('should return true when salary is greater than 30000', () => {
            const salary = 50000;

            const isEligible = isEligibleForBonus(salary);

            expect(isEligible).toBe(true);
        })
    });
});
