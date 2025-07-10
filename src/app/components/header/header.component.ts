import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [
    Toolbar,
    AvatarModule,
    ButtonModule,
    CommonModule,
    MenubarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isAdmin: boolean = true;
  items: MenuItem[] | undefined;
  isLogged: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLogged = this.authService.isLogged();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Área do Admin',
        icon: 'pi pi-crown',
        command: () => {
          this.router.navigate(['/auth']);
        },
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
