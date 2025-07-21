import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { TotalStockPipe } from '../../pipes/total-stock.pipe';

import { FormsModule } from '@angular/forms';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';

import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';

import { ProductsService } from '../../services/products.service';

const NgPrimeComponents = [
  ButtonModule,
  SelectButton,
  DataView,
  TotalStockPipe,
  Skeleton,
];

@Component({
  selector: 'app-home',
  imports: [
    NgPrimeComponents,
    SearchFilterComponent,
    CommonModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  layout: 'grid' | 'list' = 'grid';
  options = ['list', 'grid'];

  products: Product[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  // ========= filtro =========
  filteredProducts = [...this.products];
  searchTerm = '';
  selectedCategories: string[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
    this.applyFilters();
  }

  // ========= Search Component =======
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
      const searchTerm = this.searchTerm?.toLowerCase() || '';

      // Verifica se o produto corresponde ao termo de busca
      const matchesSearch =
        !searchTerm ||
        (product.name && product.name.toLowerCase().includes(searchTerm)) ||
        (product.category?.name &&
          product.category.name.toLowerCase().includes(searchTerm));

      // Verifica se o produto pertence às categorias selecionadas
      const matchesCategory =
        !this.selectedCategories ||
        this.selectedCategories.length === 0 ||
        (product.category?.name &&
          this.selectedCategories.includes(product.category.name));

      return matchesSearch && matchesCategory;
    });
  }

  // ============ API =============
  loadProducts(): void {
    this.isLoading = true;
    this.error = null;

    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = [...products];
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar produtos';
        this.isLoading = false;
        console.error(err);
      },
    });
  }
}
