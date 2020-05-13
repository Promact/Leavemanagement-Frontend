import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeMasterComponent } from './employee-master.component';
import { EmployeeMasterListComponent } from './employee-master-list/employee-master-list.component';
import { EmployeeMasterAddComponent } from './employee-master-add/employee-master-add.component';
import { EmployeeMasterEditComponent } from './employee-master-edit/employee-master-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeMasterComponent,
    children:
      [
        { path: '', pathMatch: 'full', redirectTo: 'list' },
        { path: 'list', component: EmployeeMasterListComponent },
        { path: 'add', component: EmployeeMasterAddComponent },
        { path: 'edit/:id', component: EmployeeMasterEditComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeMasterRoutingModule { }
