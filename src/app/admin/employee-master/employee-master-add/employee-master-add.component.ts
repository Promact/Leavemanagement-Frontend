import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../api/employee/employee.model';
import { EmployeeService } from '../../../api/employee/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-master-add',
  templateUrl: './employee-master-add.component.html',
  styleUrls: ['./employee-master-add.component.scss']
})
export class EmployeeMasterAddComponent implements OnInit {

  public employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe((data)=>{
      this.router.navigate(['list'], {relativeTo: this.activatedRoute.parent});
    })
  }

}
