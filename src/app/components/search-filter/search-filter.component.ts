import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Select } from 'primeng/select';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-search-filter',
  imports: [
    FormsModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    Select,
    FluidModule 
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterApply = new EventEmitter<void>();

  categories = ['Camisetas', 'Calças', 'Acessórios'];
  selectedCategories: string[] = [];

  onFilterApply() {
    this.filterApply.emit();
  }

}
