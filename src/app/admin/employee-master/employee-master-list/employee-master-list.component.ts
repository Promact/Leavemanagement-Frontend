import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDTO, EmployeeClient } from '../../../api/LeaveManagementApi';

@Component({
  selector: 'app-employee-master-list',
  templateUrl: './employee-master-list.component.html',
  styleUrls: ['./employee-master-list.component.scss']
})
export class EmployeeMasterListComponent implements OnInit {

  public employees: EmployeeDTO[];
  displayedColumns: string[] = ['name', 'DOB', 'DOJ', 'salary', 'email', 'action1', 'action2'];

  constructor(private employeeClient: EmployeeClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeClient.getEmployeeAll().subscribe((data) =>{
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
    this.employeeClient.deleteEmployee(id).subscribe((data)=>{
      this.employees.splice(this.employees.findIndex(item=>item.id == id), 1);
    })
  }

}
