import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../api/employee/employee.model';
import { EmployeeService } from '../../../api/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-master-edit',
  templateUrl: './employee-master-edit.component.html',
  styleUrls: ['./employee-master-edit.component.scss']
})
export class EmployeeMasterEditComponent implements OnInit {

  public employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.employee = data;
    });
  }

  editEmployee(){
    this.employeeService.editEmployee(this.employee).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
