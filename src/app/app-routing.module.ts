import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { SingleEmployeeViewComponent } from './employee/single-employee-view/single-employee-view.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeViewComponent,
  },
  {
    path: 'update/:id',
    component: EmployeeUpdateComponent,
  },
  {
    path: 'view/:id',
    component: SingleEmployeeViewComponent,
  },
  {
    path: 'create',
    component: EmployeeCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
