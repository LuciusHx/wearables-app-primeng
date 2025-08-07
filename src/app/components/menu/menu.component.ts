import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MenuModule, DividerModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  itemsMenu: MenuItem[] = [];

    constructor(private router: Router) {}

  ngOnInit() {
    this.itemsMenu = [
      {
        label: 'Produtos',
        icon: 'pi pi pi-shop',
        command: () => {
          this.router.navigate(['/produtos']);
        },
      },
      {
        label: 'Usuários',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigate(['/users']);
        },
      },
    ];
  }
}
