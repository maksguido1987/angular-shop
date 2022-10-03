import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get<Product[]>(`${this.path}/${id}`);
  }
}
