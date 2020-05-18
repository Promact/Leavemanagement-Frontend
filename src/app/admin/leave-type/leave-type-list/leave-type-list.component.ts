import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveTypeDTO, LeaveTypeClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-leave-type-list',
  templateUrl: './leave-type-list.component.html',
  styleUrls: ['./leave-type-list.component.scss']
})
export class LeaveTypeListComponent implements OnInit {

  public leaveTypes: LeaveTypeDTO[];

  constructor(private leaveTypeClient: LeaveTypeClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveTypeClient.getLeaveTypeAll().subscribe((data) => {
      this.leaveTypes = data;
    }
    )
  }

  addLeaveType() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute.parent });
  }

  editLeaveType(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.activatedRoute.parent });
  }

  deleteLeaveType(id: number) {
    this.leaveTypeClient.deleteLeaveType(id).subscribe((data) => {
      this.leaveTypes.splice(this.leaveTypes.findIndex(item => item.id == id), 1);
    })
  }

}
