import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Select } from 'primeng/select';
import { FluidModule } from 'primeng/fluid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  imports: [
    CommonModule,
    FormsModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    Select,
    FluidModule,
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string[]>();
  @Output() filterApply = new EventEmitter<void>();

  searchTerm: string = '';
  selectedCategories: any;
  categories = ['Masculina', 'Feminina', 'Unissex'];

  showResetButton: boolean = false;

  onSearchChange(event: any) {
    const term = event.target.value;
    this.searchChange.emit(term);
  }

  onCategoryChange(event: { value: string[] }) {
    this.selectedCategories = event.value;
    this.categoryChange.emit(this.selectedCategories);
    this.checkFilters();
  }

  onFilterApply() {
    this.filterApply.emit();
  }

  resetFilters() {
    this.selectedCategories = [];
    this.searchTerm = '';
    this.showResetButton = false;

    // Emitir os valores resetados
    this.searchChange.emit('');
    this.categoryChange.emit([]);
  }

  private checkFilters() {
    // Mostra o botão se houver qualquer filtro ativo
    this.showResetButton =
      this.selectedCategories.length > 0 || !!this.searchTerm;
  }
}
