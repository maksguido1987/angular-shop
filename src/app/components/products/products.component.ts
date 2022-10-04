import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.type';
import { ProductsService } from 'src/app/services/products.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productsSubscription: Subscription = new Subscription(); // подписаться

  constructor(
    private ProductsService: ProductsService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    // let dialogConfig = new MatDialogConfig() можно так добавлять параметры

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.postData(result);
    });
  }

  postData(value: Product): void {
    this.ProductsService.setProduct(value).subscribe((result) =>
      this.products.push(result)
    );
  }

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
