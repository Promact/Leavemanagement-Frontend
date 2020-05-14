import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveTypeRoutingModule } from './leave-type-routing.module';
import { LeaveTypeComponent } from './leave-type.component';
import { LeaveTypeListComponent } from './leave-type-list/leave-type-list.component';
import { LeaveTypeAddComponent } from './leave-type-add/leave-type-add.component';
import { LeaveTypeEditComponent } from './leave-type-edit/leave-type-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeaveTypeComponent, LeaveTypeListComponent, LeaveTypeAddComponent, LeaveTypeEditComponent],
  imports: [
    CommonModule,
    LeaveTypeRoutingModule,
    FormsModule
  ]
})
export class LeaveTypeModule { }
