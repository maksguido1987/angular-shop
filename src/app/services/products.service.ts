import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private path: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.path);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.path}/${id}`);
  }

  setProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.path, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.path}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.path}/${product.id}`, product);
  }
}
