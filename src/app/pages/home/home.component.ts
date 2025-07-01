import { Component } from '@angular/core';

import { Product } from '../../models/product.model';

import { HeaderComponent } from '../../components/header/header.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TotalStockPipe } from '../../pipes/total-stock.pipe';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    SearchFilterComponent,
    CardModule,
    ButtonModule,
    CommonModule,
    TotalStockPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Product[] = [
    {
      name: 'Camiseta Slim',
      price: 89.9,
      discount: 10,
      category: 'Masculina',
      registredById: 'a55cfd80-df67-4f02-b75a-3fc466ab35e7',
      sizes: [
        { label: 'P', stock: 12 },
        { label: 'M', stock: 20 },
        { label: 'G', stock: 15 },
      ],
    },
    {
      name: 'Calça Jeans Skinny',
      price: 159.9,
      discount: 15,
      category: 'Feminina',
      registredById: 'b23ae456-e89b-12d3-a456-426614174000',
      sizes: [
        { label: '36', stock: 8 },
        { label: '38', stock: 10 },
        { label: '40', stock: 5 },
      ],
    },
    {
      name: 'Blazer Slim Fit',
      price: 299.9,
      discount: 20,
      category: 'Masculina',
      registredById: 'a55cfd80-df67-4f02-b75a-3fc466ab35e7',
      sizes: [
        { label: '38', stock: 5 },
        { label: '40', stock: 7 },
        { label: '42', stock: 3 },
      ],
    },
    {
      name: 'Vestido Midi Floral',
      price: 179.9,
      discount: 12,
      category: 'Feminina',
      registredById: 'c33de789-f45g-56h1-i789-567891234567',
      sizes: [
        { label: 'P', stock: 6 },
        { label: 'M', stock: 9 },
        { label: 'G', stock: 4 },
      ],
    },
    {
      name: 'Tênis Casual',
      price: 249.9,
      discount: 25,
      category: 'Unissex',
      registredById: 'd44ef123-g56h-78i2-j123-678912345678',
      sizes: [
        { label: '36', stock: 10 },
        { label: '38', stock: 15 },
        { label: '40', stock: 12 },
      ],
    },
    {
      name: 'Moletom com Capuz',
      price: 129.9,
      discount: 10,
      category: 'Unissex',
      registredById: 'b23ae456-e89b-12d3-a456-426614174000',
      sizes: [
        { label: 'P', stock: 7 },
        { label: 'M', stock: 14 },
        { label: 'G', stock: 8 },
      ],
    },
    {
      name: 'Shorts de Praia',
      price: 69.9,
      discount: 5,
      category: 'Masculina',
      registredById: 'a55cfd80-df67-4f02-b75a-3fc466ab35e7',
      sizes: [
        { label: 'M', stock: 18 },
        { label: 'G', stock: 22 },
        { label: 'GG', stock: 10 },
      ],
    },
    {
      name: 'Saia Plissada',
      price: 99.9,
      discount: 8,
      category: 'Feminina',
      registredById: 'c33de789-f45g-56h1-i789-567891234567',
      sizes: [
        { label: 'P', stock: 5 },
        { label: 'M', stock: 11 },
        { label: 'G', stock: 7 },
      ],
    },
  ];

}
