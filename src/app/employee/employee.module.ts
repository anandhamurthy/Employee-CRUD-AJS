import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { SingleEmployeeViewComponent } from './single-employee-view/single-employee-view.component';

@NgModule({
  declarations: [
    EmployeeViewComponent,
    EmployeeUpdateComponent,
    EmployeeCreateComponent,
    SingleEmployeeViewComponent,
  ],
  imports: [CommonModule],
  exports: [
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeViewComponent,
    SingleEmployeeViewComponent,
  ],
})
export class EmployeeModule {}
