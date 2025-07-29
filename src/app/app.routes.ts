import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';

export const routes: Routes = [
  //client
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'product-view/:id',
        loadComponent: () =>
          import('./pages/product-view/product-view.component').then(
            (m) => m.ProductViewComponent
          ),
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./pages/auth/auth.component').then((m) => m.AuthComponent),
      },
    ],
  },
  //admin
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },

      // ===== PRODUCT ====
      {
        path: 'produtos',
        loadComponent: () =>
          import(
            './pages/product/gerenc-product/gerenc-product.component'
          ).then((m) => m.GerencProductComponent),
      },
      {
        path: 'create-product',
        loadComponent: () =>
          import(
            './pages/product/create-product/create-product.component'
          ).then((m) => m.CreateProductComponent),
      },
      {
        path: 'edit-product/:id',
        loadComponent: () =>
          import('./pages/product//edit-product/edit-product.component').then(
            (m) => m.EditProductComponent
          ),
      },
      // ===== USER ====
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/user/gerenc-users/gerenc-users.component').then(
            (m) => m.GerencUsersComponent
          ),
      },
      {
        path: 'create-user',
        loadComponent: () =>
          import('./pages/user/create-user/create-user.component').then(
            (m) => m.CreateUserComponent
          ),
      },
      {
        path: 'edit-user/:id',
        loadComponent: () =>
          import('./pages/user/edit-user/edit-user.component').then(
            (m) => m.EditUserComponent
          ),
      },
    ],
    canActivate: [AuthGuard],
  },
];
