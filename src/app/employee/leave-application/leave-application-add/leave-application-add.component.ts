import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveTypeDTO, LeaveApplicationDTO, LeaveTypeClient, LeaveApplicationClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-leave-application-add',
  templateUrl: './leave-application-add.component.html',
  styleUrls: ['./leave-application-add.component.scss']
})
export class LeaveApplicationAddComponent implements OnInit {

  leaveTypes: LeaveTypeDTO[];
  leaveApplication: LeaveApplicationDTO;

  constructor(private leaveTypeService: LeaveTypeClient, private leaveApplicationService: LeaveApplicationClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveTypeService.getLeaveTypeAll().subscribe((data)=>{
      this.leaveTypes = data;
    });
  }

  addLeaveType(){
    this.leaveApplication.leaveTypeId = +this.leaveApplication.leaveTypeId;
    this.leaveApplicationService.postLeaveApplication(this.leaveApplication).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
