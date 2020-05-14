import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveApplicationComponent } from './leave-application.component';
import { LeaveApplicationListComponent } from './leave-application-list/leave-application-list.component';

const routes: Routes = [{ path: '', component: LeaveApplicationComponent,
children:
  [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: LeaveApplicationListComponent }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveApplicationRoutingModule { }
