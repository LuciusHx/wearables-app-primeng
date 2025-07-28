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
      items: [
        {
          label: 'Novo Produto',
          icon: 'pi pi-plus',
          routerLink: '/create-product',
        },
      ],
    },
    {
      label: 'Usuários',
      items: [
        {
          label: 'Usuários',
          icon: 'pi pi-user',
          routerLink: '/users',
        },
        {
          label: 'Novo Usuário',
          icon: 'pi pi-user-plus',
          routerLink: '/create-user',
        },
      ],
    },
  ];
}
