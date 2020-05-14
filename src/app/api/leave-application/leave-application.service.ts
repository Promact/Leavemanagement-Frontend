import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaveApplication } from './leave-application.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveApplicationService {

  private leaveApplicationApiUrl = 'http://localhost:5000/api/leaveapplication';

  constructor(
    private http: HttpClient
  ) {
  }

  getLeaveApplications() {
    return this.http.get<LeaveApplication[]>(this.leaveApplicationApiUrl);
  }

  addLeaveApplication(leaveApplication: LeaveApplication){
    return this.http.post<LeaveApplication>(this.leaveApplicationApiUrl, leaveApplication);
  }

  editLeaveApplication(leaveApplication: LeaveApplication){
    const url = `${this.leaveApplicationApiUrl}/${leaveApplication.id}`;
    return this.http.put<LeaveApplication>(url, leaveApplication);
  }
}
