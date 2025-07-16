import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';

import { AuthService } from '../../services/auth.service';
import { TableComponent } from '../../components/table/table.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

const NgComponents = [ButtonModule, MenuModule, DividerModule];

@Component({
  selector: 'app-dashboard',
  imports: [NgComponents, CommonModule, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  itemsMenu: MenuItem[] = [
    {
      label: 'Novo Produto',
      icon: 'pi pi-plus',
      routerLink: '/create-product',
    },
    {
      label: 'Novo Usuário',
      icon: 'pi pi-user-plus',
      routerLink: '/create-user',
    },
  ];
  products: Product[] = [];

  columns = [
    { field: 'name', header: 'Nome', sortable: true },
    {
      field: 'price',
      header: 'Preço',
      sortable: true,
      format: (value: number) => `R$${value.toFixed(2)}`,
    },
    { field: 'stock', header: 'Estoque', sortable: true },
  ];
  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
        this.loading = false;
      },
    });
  }

  logout() {
    this.authService.logout();
  }

  onRowSelect(event: any) {
    console.log('Selected row:', event.data);
    this.router.navigate(['/product-detail', event.data.id]);
  }
}
