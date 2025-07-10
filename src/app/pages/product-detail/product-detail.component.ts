import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';

import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { CardModule } from 'primeng/card';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [HeaderComponent, CardModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: Product | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const productId = this.route.snapshot.params['id'] || '';
    if (!productId) {
      console.error('ID do produto não encontrado na URL');
      return;
    }

    this.productsService.getProductsById(productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        console.error('Erro ao carregar produto:', err);
      },
    });
  }
}
