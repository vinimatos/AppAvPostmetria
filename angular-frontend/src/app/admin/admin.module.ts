import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [AdminComponent, AdminDashboardComponent],
  providers: [AdminService]

})
export class AdminModule {
}
