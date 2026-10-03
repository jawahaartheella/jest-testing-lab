import { EmployeeNotificationService } from "./employee-notification.service";
import { Employee } from "./employee.interface";
import { NotifcationService } from "./notification.service";

describe('Employee Notification Service', () => {
    let employeeNotificationService: EmployeeNotificationService;
    let notificationService: NotifcationService;
    let employee: Employee;

    beforeAll(() => {
        notificationService = {
            send: jest.fn()
        }
        employeeNotificationService = new EmployeeNotificationService(notificationService);
        employee = {
            name: 'John',
            age: 25,
            department: 'HRM',
            salary: 3000000
        }
    });

    it('should test if send method from notification service is called', () => {
        employeeNotificationService.notifyEmployee(employee);

        expect(notificationService.send).toHaveBeenCalled();
        expect(notificationService.send).toHaveBeenCalledTimes(1);
        expect(notificationService.send).toHaveBeenCalledWith('Hello Mister');
    });

    it('should test if notifyEmployee is called', () => {
        employeeNotificationService.notifyEmployee(employee);
        employeeNotificationService.notifyEmployee(employee);

        expect(employeeNotificationService.notifyEmployee).toHaveBeenCalled();
        expect(employeeNotificationService.notifyEmployee).toHaveBeenCalledTimes(2);
        expect(employeeNotificationService.notifyEmployee).toHaveBeenCalledWith(employee);
    });
    // Intentional experiment: The above "should test if notifyEmployee is called", test will give error
    // notifyEmployee is a real function, not a Jest mock,
    // so toHaveBeenCalled() cannot be used directly on it.
    // We will learn how to test/spy on existing methods
    // with jest.spyOn() in Part 9.

    // Error:
        // FAIL  src/employee-notification.service.spec.ts
        // ● Employee Notification Service › should test if notifyEmployee is called

        //     expect(received).toHaveBeenCalled()

        //     Matcher error: received value must be a mock or spy function

        //     Received has type:  function
        //     Received has value: [Function notifyEmployee]

        //     33 |         employeeNotificationService.notifyEmployee(employee);
        //     34 |
        //     > 35 |         expect(employeeNotificationService.notifyEmployee).toHaveBeenCalled();
        //         |                                                            ^
        //     36 |         expect(employeeNotificationService.notifyEmployee).toHaveBeenCalledTimes(2);
        //     37 |         expect(employeeNotificationService.notifyEmployee).toHaveBeenCalledWith(employee);
        //     38 |     });

        //     at Object.<anonymous> (src/employee-notification.service.spec.ts:35:60)

        // PASS  src/employee.spec.ts

        // Test Suites: 1 failed, 2 passed, 3 total
        // Tests:       1 failed, 22 passed, 23 total
        // Snapshots:   0 total
        // Time:        1.127 s
        // Ran all test suites.
});