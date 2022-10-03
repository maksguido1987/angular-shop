import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.type';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productsSubscription: Subscription = new Subscription(); // подписаться

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.productsSubscription = this.ProductsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
