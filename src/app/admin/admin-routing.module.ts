import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent, 
    children: 
          [
            { path: 'employee', loadChildren: () => import('./employee-master/employee-master.module').then(m => m.EmployeeMasterModule) },
            { path: 'leave-type', loadChildren: () => import('./leave-type/leave-type.module').then(m => m.LeaveTypeModule) },
            { path: 'leave-application', loadChildren: () => import('./leave-application/leave-application.module').then(m => m.LeaveApplicationModule) },
          ] 
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
