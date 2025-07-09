import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
