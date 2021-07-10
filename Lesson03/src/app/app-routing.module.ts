import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {AdminComponent} from "./modules/admin/admin.component";
import {ErrorComponent} from "./components/error/error.component";
import {InfoComponent} from "./components/info/info.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {DashboardComponent} from "./modules/admin/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'info/:id', component: InfoComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
