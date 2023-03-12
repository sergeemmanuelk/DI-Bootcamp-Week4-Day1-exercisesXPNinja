import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'path/to/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Product[] {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Product {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }
}
