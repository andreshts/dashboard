import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    PagesComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [DashboardComponent, ProductsComponent, UsersComponent],
})
export class PagesModule {}
