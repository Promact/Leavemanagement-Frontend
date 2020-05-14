import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveTypeComponent } from './leave-type.component';
import { LeaveTypeListComponent } from './leave-type-list/leave-type-list.component';
import { LeaveTypeAddComponent } from './leave-type-add/leave-type-add.component';
import { LeaveTypeEditComponent } from './leave-type-edit/leave-type-edit.component';

const routes: Routes = [{ path: '', component: LeaveTypeComponent ,
children:
  [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: LeaveTypeListComponent },
    { path: 'add', component: LeaveTypeAddComponent },
    { path: 'edit/:id', component: LeaveTypeEditComponent }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveTypeRoutingModule { }
