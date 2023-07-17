import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'auth', loadChildren: () => import('@modules/pages/auth/auth.module').then(m=>m.AuthModule) },
      { path: '', loadChildren: () => import('@modules/pages/static/static.module').then(m=>m.StaticModule) },
      { path: '', loadChildren: () => import('@modules/pages/template/template.module').then(m=>m.TemplateModule) },
      { path: '', pathMatch:'full', redirectTo: '/home' }
    ]
  },
  { path: '**', pathMatch:'full', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
