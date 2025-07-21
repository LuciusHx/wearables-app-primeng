import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/products');
  }

  getProductsById(id: string): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + '/products/' + id);
  }

  createProduct(productData: any, imageFile?: File): Observable<Product> {
    const formData = new FormData();

    if (imageFile) {
      formData.append('image', imageFile);
    }
    formData.append('product', JSON.stringify(productData)); // add como json
    return this.http.post<Product>(environment.apiUrl + '/products', formData);
  }
}
