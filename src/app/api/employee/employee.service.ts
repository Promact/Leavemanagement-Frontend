import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  private employeeApiUrl = 'http://localhost:5000/api/employee';

  constructor(
    private http: HttpClient
  ) {
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.employeeApiUrl);
  }

  getEmployeeById(id: number){
    const url = `${this.employeeApiUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee){
    return this.http.post<Employee>(this.employeeApiUrl, employee);
  }

  editEmployee(employee: Employee){
    const url = `${this.employeeApiUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  deleteEmployee(id: number){
    const url = `${this.employeeApiUrl}/${id}`;
    return this.http.delete(url);
  }
  
}
