import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [Toolbar, AvatarModule, ButtonModule, CommonModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  isLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.isLogged = this.authService.isLogged();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Área do Admin',
        icon: 'pi pi-crown',
        routerLink: '/auth',
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
      },
    ];
  }
  logout() {
    this.authService.logout();
  }
}
