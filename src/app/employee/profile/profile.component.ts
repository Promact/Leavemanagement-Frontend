import { Component, OnInit } from '@angular/core';
import { Employee } from '../../api/employee/employee.model';
import { EmployeeService } from '../../api/employee/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //TODO: get employee by current login id
    this.employeeService.getEmployeeById(12).subscribe((data)=>{
      this.profile = data;
    });
  }

}
