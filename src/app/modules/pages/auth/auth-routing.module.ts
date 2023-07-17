import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('@modules/pages/auth/template/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('@modules/pages/auth/template/register/register.module').then(m => m.RegisterModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
