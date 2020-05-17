import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';
import { LeaveTypeService } from './leave-type/leave-type.service';
import { LeaveApplicationService } from './leave-application/leave-application.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ EmployeeService, LeaveTypeService, LeaveApplicationService ] 
})

export class ApiModule {
  

 }
