import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';

export const routes: Routes = [
  //client
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'auth', component: AuthComponent },
    ],
  },
  //admin
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'create-product', component: CreateProductComponent }
    ],
    canActivate: [AuthGuard],
  },
];
