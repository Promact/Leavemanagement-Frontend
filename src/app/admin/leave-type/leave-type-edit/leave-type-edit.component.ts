import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../../../api/leave-type/leave-type.model';
import { LeaveTypeService } from '../../../api/leave-type/leave-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-type-edit',
  templateUrl: './leave-type-edit.component.html',
  styleUrls: ['./leave-type-edit.component.scss']
})
export class LeaveTypeEditComponent implements OnInit {

  public leaveType: LeaveType = new LeaveType();

  constructor(private leaveTypeService: LeaveTypeService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveTypeService.getLeaveTypeById(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.leaveType = data;
    });
  }

  editLeaveType(){
    this.leaveTypeService.editLeaveType(this.leaveType).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
