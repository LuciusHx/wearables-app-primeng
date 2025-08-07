import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MenuComponent,
    ButtonModule,
    DividerModule,
    CardModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor() {}

  storedUser = localStorage.getItem('user');
  user = this.storedUser ? JSON.parse(this.storedUser) : null;
}
