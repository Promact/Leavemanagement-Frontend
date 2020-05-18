import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveApplicationDTO, LeaveApplicationClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-leave-application-list',
  templateUrl: './leave-application-list.component.html',
  styleUrls: ['./leave-application-list.component.scss']
})
export class LeaveApplicationListComponent implements OnInit {

  public leaveApplications: LeaveApplicationDTO[];

  constructor(private leaveApplicationClient: LeaveApplicationClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveApplicationClient.leaveApplication().subscribe((data) => {
      this.leaveApplications = data;
    }
    )
  }

  addLeaveApplication() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute.parent });
  }
  
}
