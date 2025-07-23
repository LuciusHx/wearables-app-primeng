import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment.prod';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/products');
  }

  getProductsById(id: string): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + '/products/' + id);
  }

  createProduct(productData: any, imageFile?: File): Observable<Product> {
    const formData = new FormData();
    const user: any = localStorage.getItem('user');

    if (imageFile) {
      formData.append('productImage', imageFile);
    }

    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('discount', productData.discount);
    formData.append('category', productData.category);
    formData.append('sizes', JSON.stringify(productData.sizes));
    formData.append('registredById', user);
    return this.http.post<Product>(environment.apiUrl + '/products', formData);
  }

  deleteProduct(id: string) {
    return this.http.delete(environment.apiUrl + '/products/' + id);
  }
}
