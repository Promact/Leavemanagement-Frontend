import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeMasterRoutingModule } from './employee-master-routing.module';
import { EmployeeMasterComponent } from './employee-master.component';


@NgModule({
  declarations: [EmployeeMasterComponent],
  imports: [
    CommonModule,
    EmployeeMasterRoutingModule
  ]
})
export class EmployeeMasterModule { }
