import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(environment.apiUrl + '/users/login', credentials);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('auth_token')
  }
}
