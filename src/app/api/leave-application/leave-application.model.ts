export class LeaveApplication {
    id: number;
    employeeId: number;
    employeeName: string;
    startDate: Date;
    endDate: Date;
    leaveTypeId: number;
    leaveTypeName: string;
    numberOfDays: number;
    leaveStatus: LeaveStatus
}

export enum LeaveStatus{
    Pending,
    Approved,
    Rejected
}
