import { calculateAnnulaSalary, calculateBonus } from "./employee";

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
    });
});
