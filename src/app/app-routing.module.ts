import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo:"trends", pathMatch: "full"},
  {path: '', loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)},
  {path: '', loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule)},
  {path: '', loadChildren: () => import("./shared/shared.module").then(m => m.SharedModule)},
  {path: '**', redirectTo:"404", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
