import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveTypeDTO, LeaveTypeClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-leave-type-edit',
  templateUrl: './leave-type-edit.component.html',
  styleUrls: ['./leave-type-edit.component.scss']
})
export class LeaveTypeEditComponent implements OnInit {

  public leaveType: LeaveTypeDTO;

  constructor(private leaveTypeClient: LeaveTypeClient, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveTypeClient.getLeaveType(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.leaveType = data;
    });
  }

  editLeaveType(){
    this.leaveTypeClient.putLeaveType(this.leaveType.id, this.leaveType).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
