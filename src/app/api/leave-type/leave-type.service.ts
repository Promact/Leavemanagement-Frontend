import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaveType } from './leave-type.model';

@Injectable()
export class LeaveTypeService {
  private leaveTypeApiUrl = 'http://localhost:5000/api/leavetype';

  constructor(
    private http: HttpClient
  ) {
  }

  getLeaveTypes() {
    return this.http.get<LeaveType[]>(this.leaveTypeApiUrl);
  }

  getLeaveTypeById(id: number){
    const url = `${this.leaveTypeApiUrl}/${id}`;
    return this.http.get<LeaveType>(url);
  }

  addLeaveType(leaveType: LeaveType){
    return this.http.post<LeaveType>(this.leaveTypeApiUrl, leaveType);
  }

  editLeaveType(leavetype: LeaveType){
    const url = `${this.leaveTypeApiUrl}/${leavetype.id}`;
    return this.http.put<LeaveType>(url, leavetype);
  }

  deleteLeaveType(id: number){
    const url = `${this.leaveTypeApiUrl}/${id}`;
    return this.http.delete(url);
  }
}
