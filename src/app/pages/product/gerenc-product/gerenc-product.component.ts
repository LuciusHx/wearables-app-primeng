import { Component } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { AuthService } from '../../../services/auth.service';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gerenc-product',
  imports: [CommonModule, TableComponent, MenuComponent, ButtonModule],
  templateUrl: './gerenc-product.component.html',
  styleUrl: './gerenc-product.component.scss',
})
export class GerencProductComponent {
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

  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private productsService: ProductsService,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  logout() {
    this.authService.logout();
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

  onRowSelect(event: any) {
    this.router.navigate(['/product-view', event.data.id]);
  }

  redirectToEdit(productId: string) {
    this.router.navigateByUrl('/edit-product/' + productId);
  }

  deleteProduct(productId: string): void {
    this.productsService.deleteProduct(productId).subscribe({
      next: () => {
        this.utilsService.presentToast(
          'success',
          'Sucesso',
          'Produto excluído com sucesso!',
          3000
        );
        this.loadProducts();
      },
      error: (error) => {
        this.utilsService.presentToast(
          'error',
          'Erro',
          'Não foi possível excluir o produto',
          3000
        );
      },
    });
  }
}
