import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { SelectButtonModule } from 'primeng/selectbutton';

const NgPrimeComponents = [
  CardModule,
  DividerModule,
  AvatarModule,
  ButtonModule,
  ImageModule,
  SelectButtonModule,
];

@Component({
  selector: 'app-product-detail',
  imports: [NgPrimeComponents, CommonModule, FormsModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
})
export class ProductViewComponent {
  product: Product | undefined;
  selectedSize: any;
  sizeOptions: any[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  prepareSizeOptions() {
    if (this.product?.sizes) {
      this.sizeOptions = this.product.sizes.map((size) => ({
        label: size.size.label,
        value: size.size.id,
        stock: size.stock,
        size: size.size,
      }));

      if (this.sizeOptions.length > 0) {
        this.selectedSize = this.sizeOptions[0].value;
      }
    }
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
        this.prepareSizeOptions();
      },
      error: (err) => {
        console.error('Erro ao carregar produto:', err);
      },
    });
  }
}
