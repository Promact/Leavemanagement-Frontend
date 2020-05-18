import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDTO, EmployeeClient } from '../../api/LeaveManagementApi';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: EmployeeDTO;

  constructor(private employeeClient: EmployeeClient, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //TODO: get employee by current login id
    this.employeeClient.getEmployee(12).subscribe((data)=>{
      this.profile = data;
    });
  }

}
