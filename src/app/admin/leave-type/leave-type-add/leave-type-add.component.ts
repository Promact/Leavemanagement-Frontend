import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveType, LeaveTypeClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-leave-type-add',
  templateUrl: './leave-type-add.component.html',
  styleUrls: ['./leave-type-add.component.scss']
})
export class LeaveTypeAddComponent implements OnInit {

  public leaveType: LeaveType;

  constructor(private leaveTypeClient: LeaveTypeClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addLeaveType(){
    this.leaveTypeClient.postLeaveType(this.leaveType).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
