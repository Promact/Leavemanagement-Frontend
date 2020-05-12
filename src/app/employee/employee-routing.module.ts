import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeComponent, 
    children: 
            [
                { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 
                { path: 'leave-application', loadChildren: () => import('./leave-application/leave-application.module').then(m => m.LeaveApplicationModule) }
            ] 
  }, 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
