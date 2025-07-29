import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-menu',
  imports: [MenuModule, DividerModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  itemsMenu: MenuItem[] = [
    {
      label: 'Produtos',
      icon: 'pi pi pi-shop',
      routerLink: '/produtos',
    },
    {
      label: 'Usuários',
      icon: 'pi pi-user',
      routerLink: '/users',
    },
  ];
}
