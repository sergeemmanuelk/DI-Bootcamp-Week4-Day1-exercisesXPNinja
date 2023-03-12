import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[]
  /*products = [
    { name: 'Iphone 14 Pro Max', price: 950000 },
    { name: 'Airpods Pro 3', price: 129000 },
    { name: 'Samsung Galaxy A50', price: 700000 }
  ]*/

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    
  }

  viewDetail(product: Product) {

  }
}
