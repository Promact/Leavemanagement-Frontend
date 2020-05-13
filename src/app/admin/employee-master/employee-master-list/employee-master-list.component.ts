import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../api/employee/employee.service';
import { Employee } from '../../../api/employee/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-master-list',
  templateUrl: './employee-master-list.component.html',
  styleUrls: ['./employee-master-list.component.scss']
})
export class EmployeeMasterListComponent implements OnInit {

  public employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) =>{
        this.employees = data;
      }
    )
  }

  addEmployee(){
    this.router.navigate(['add'], {relativeTo: this.activatedRoute.parent});
  }

  editEmployee(id: number){
    this.router.navigate(['edit', id], {relativeTo: this.activatedRoute.parent});
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe((data)=>{
      this.employees.splice(this.employees.findIndex(item=>item.id == id), 1);
    })
  }

}
