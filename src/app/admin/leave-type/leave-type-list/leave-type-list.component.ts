import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../../../api/leave-type/leave-type.model';
import { LeaveTypeService } from '../../../api/leave-type/leave-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-type-list',
  templateUrl: './leave-type-list.component.html',
  styleUrls: ['./leave-type-list.component.scss']
})
export class LeaveTypeListComponent implements OnInit {

  public leaveTypes: LeaveType[];

  constructor(private leaveTypeService: LeaveTypeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveTypeService.getLeaveTypes().subscribe((data) => {
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
    this.leaveTypeService.deleteLeaveType(id).subscribe((data) => {
      this.leaveTypes.splice(this.leaveTypes.findIndex(item => item.id == id), 1);
    })
  }

}
