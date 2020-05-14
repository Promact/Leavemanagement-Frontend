import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../../api/leave-type/leave-type.service';
import { LeaveType } from '../../../api/leave-type/leave-type.model';
import { LeaveApplication } from '../../../api/leave-application/leave-application.model';
import { LeaveApplicationService } from '../../../api/leave-application/leave-application.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-application-add',
  templateUrl: './leave-application-add.component.html',
  styleUrls: ['./leave-application-add.component.scss']
})
export class LeaveApplicationAddComponent implements OnInit {

  leaveTypes: LeaveType[];
  leaveApplication: LeaveApplication = new LeaveApplication();

  constructor(private leaveTypeService: LeaveTypeService, private leaveApplicationService: LeaveApplicationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveTypeService.getLeaveTypes().subscribe((data)=>{
      this.leaveTypes = data;
    });
  }

  addLeaveType(){
    this.leaveApplication.leaveTypeId = +this.leaveApplication.leaveTypeId;
    this.leaveApplicationService.addLeaveApplication(this.leaveApplication).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
