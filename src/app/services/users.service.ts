import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users');
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/users/' + userId);
  }

  createUser(userData: any, imageFile?: File): Observable<User> {
    const formData = new FormData();

    if (imageFile) {
      formData.append('avatar', imageFile);
    }

    formData.append('name', userData.name);
    formData.append('username', userData.username);
    formData.append('role', userData.role);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    return this.http.post<User>(environment.apiUrl + '/users', formData);
  }

  deleteUser(userId: string) {
    return this.http.delete(environment.apiUrl + '/users/' + userId);
  }

  updateUser(
    userId: string,
    userData: any,
    imageFile?: File
  ): Observable<User> {
    const formData = new FormData();

    if (imageFile) {
      formData.append('avatar', imageFile);
    }

    formData.append('name', userData.name);
    formData.append('username', userData.username);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('role', userData.role);

    return this.http.put<User>(
      environment.apiUrl + '/user/' + userId,
      formData
    );
  }
}
