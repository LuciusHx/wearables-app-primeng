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
  selectedCategories: any | null;
  categories = ['Masculina', 'Feminina', 'Unissex'];

  showResetButton: boolean = false;

  onSearchChange(event: any) {
    const term = event.target.value;
    this.searchChange.emit(term);
  }

  onCategoryChange(event: { value: string[] }) {
    this.selectedCategories = event.value;
    this.categoryChange.emit(this.selectedCategories);
  }

  onFilterApply() {
    this.filterApply.emit();
  }
}
