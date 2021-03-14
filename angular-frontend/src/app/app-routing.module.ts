import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(module => module.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
