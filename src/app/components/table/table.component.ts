import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  format?: (value: any) => any;
}

const NgComponents = [
  TableModule,
  TagModule,
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  MultiSelectModule,
  SelectModule,
  ButtonModule,
  Menu,
];

@Component({
  selector: 'app-table',
  imports: [CommonModule, NgComponents],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() loading: boolean = false;
  @Input() paginator: boolean = true;
  @Input() rows: number = 10;
  @Input() rowsPerPageOptions: number[] = [5, 10, 25, 50];
  @Input() showCurrentPageReport: boolean = true;
  @Input() selectionMode: 'single' | 'multiple' | null = null;

  @Output() rowSelect = new EventEmitter<any>();
  @Output() rowUnselect = new EventEmitter<any>();
  @Output() sort = new EventEmitter<any>();

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  selectedRow: any;

  menuItems: MenuItem[] = [];

  updateMenuItems(rowData: any): void {
    this.menuItems = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => this.edit.emit(rowData.id),
      },
      {
        label: 'Deletar',
        icon: 'pi pi-trash',
        command: () => this.delete.emit(rowData.id),
      },
    ];
  }

  onRowSelect(event: any) {
    this.rowSelect.emit(event);
  }

  onRowUnselect(event: any) {
    this.rowUnselect.emit(event);
  }

  onSort(event: any) {
    this.sort.emit(event);
  }

  getCellValue(row: any, column: TableColumn): any {
    const value = row[column.field];
    return column.format ? column.format(value) : value;
  }
}
