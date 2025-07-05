import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { TotalStockPipe } from '../../pipes/total-stock.pipe';

import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../../components/header/header.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';

const COMPONENTS = [SearchFilterComponent, HeaderComponent];

@Component({
  selector: 'app-home',
  imports: [
    COMPONENTS,
    DataView,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule,
    CommonModule,
    TotalStockPipe,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  layout: 'grid' | 'list' = 'grid';
  options = ['list', 'grid'];

  products: Product[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
      id: '7',
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
      id: '8',
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

  // ========= filtro =========
  filteredProducts = [...this.products];
  searchTerm = '';
  selectedCategories: string[] = [];

  handleSearch(term: string) {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  handleCategoryChange(categories: string[]) {
    this.selectedCategories = categories;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch =
        !this.searchTerm ||
        product.name.toLowerCase().includes(this.searchTerm) ||
        product.category.toLowerCase().includes(this.searchTerm);

      const matchesCategory =
        !this.selectedCategories ||
        this.selectedCategories.length === 0 ||
        this.selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }

  ngOnInit() {
    this.applyFilters();
  }
}
