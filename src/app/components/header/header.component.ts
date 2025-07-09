import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [Toolbar, AvatarModule, ButtonModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isAdmin: boolean = true;

  isLogged: boolean = false;
  constructor(private authService: AuthService) {
    this.isLogged = this.authService.isLogged();
  }

  logout(){
    this.authService.logout()
  }
}
