import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDTO, EmployeeClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-employee-master-add',
  templateUrl: './employee-master-add.component.html',
  styleUrls: ['./employee-master-add.component.scss']
})
export class EmployeeMasterAddComponent implements OnInit {

  public employee: EmployeeDTO;

  constructor(private employeeClient: EmployeeClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeClient.postEmployee(this.employee).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
