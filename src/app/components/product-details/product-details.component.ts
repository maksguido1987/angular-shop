import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  productsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productsSubscription = this.route.data.subscribe((data) => {
      this.product = data['data']
    })
  }
}
