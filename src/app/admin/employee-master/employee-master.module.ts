import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeMasterRoutingModule } from './employee-master-routing.module';
import { EmployeeMasterComponent } from './employee-master.component';
import { EmployeeMasterListComponent } from './employee-master-list/employee-master-list.component';
import { EmployeeMasterAddComponent } from './employee-master-add/employee-master-add.component';
import { EmployeeMasterEditComponent } from './employee-master-edit/employee-master-edit.component';



@NgModule({
  declarations: [EmployeeMasterComponent, EmployeeMasterListComponent, EmployeeMasterAddComponent, EmployeeMasterEditComponent],
  imports: [
    CommonModule,
    EmployeeMasterRoutingModule,
    FormsModule
  ]
})
export class EmployeeMasterModule { }
