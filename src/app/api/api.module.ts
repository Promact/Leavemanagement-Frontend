import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeClient, LeaveTypeClient, LeaveApplicationClient } from './LeaveManagementApi';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ EmployeeClient, LeaveTypeClient, LeaveApplicationClient ] 
})

export class ApiModule {
  

 }
