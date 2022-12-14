import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
