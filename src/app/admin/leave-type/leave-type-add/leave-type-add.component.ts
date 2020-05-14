import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../../../api/leave-type/leave-type.model';
import { LeaveTypeService } from '../../../api/leave-type/leave-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-type-add',
  templateUrl: './leave-type-add.component.html',
  styleUrls: ['./leave-type-add.component.scss']
})
export class LeaveTypeAddComponent implements OnInit {

  public leaveType: LeaveType = new LeaveType();

  constructor(private leaveTypeService: LeaveTypeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addLeaveType(){
    this.leaveTypeService.addLeaveType(this.leaveType).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
