import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDTO, EmployeeClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-employee-master-edit',
  templateUrl: './employee-master-edit.component.html',
  styleUrls: ['./employee-master-edit.component.scss']
})
export class EmployeeMasterEditComponent implements OnInit {

  public employee: EmployeeDTO;

  constructor(private employeeClient: EmployeeClient, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeClient.getEmployee(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.employee = data;
    });
  }

  editEmployee(){
    this.employeeClient.putEmployee(this.employee.id, this.employee).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
