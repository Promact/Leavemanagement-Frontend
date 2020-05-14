import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveApplicationRoutingModule } from './leave-application-routing.module';
import { LeaveApplicationComponent } from './leave-application.component';
import { LeaveApplicationListComponent } from './leave-application-list/leave-application-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeaveApplicationComponent, LeaveApplicationListComponent],
  imports: [
    CommonModule,
    LeaveApplicationRoutingModule,
    FormsModule
  ]
})
export class LeaveApplicationModule { }
