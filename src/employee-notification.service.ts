import { Employee } from "./employee.interface";
import { NotifcationService } from "./notification.service";

export class EmployeeNotificationService {

    constructor(private notificationService: NotifcationService) {}

    notifyEmployee(employee: Employee) {
        this.notificationService.send("Hello Mister");
    }
}