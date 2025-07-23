import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private utilsService: UtilsService
  ) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(environment.apiUrl + '/users/login', credentials);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');

    this.router.navigateByUrl('/');
    this.utilsService.presentToast(
      'error',
      'Logout',
      'Logout efetuado com sucesso!',
      3000
    );
  }

  isLogged(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
