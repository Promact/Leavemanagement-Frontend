import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from '../../../api/leave-application/leave-application.model';
import { LeaveApplicationService } from '../../../api/leave-application/leave-application.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-application-list',
  templateUrl: './leave-application-list.component.html',
  styleUrls: ['./leave-application-list.component.scss']
})
export class LeaveApplicationListComponent implements OnInit {

  public leaveApplications: LeaveApplication[];

  constructor(private leaveApplicationService: LeaveApplicationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveApplicationService.getLeaveApplications().subscribe((data) => {
      this.leaveApplications = data;
    }
    )
  }

  addLeaveApplication() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute.parent });
  }
  
}
