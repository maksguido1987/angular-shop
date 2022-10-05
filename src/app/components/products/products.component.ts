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
  constructor(
    private ProductsService: ProductsService,
    public dialog: MatDialog
  ) {}

  products: Product[];
  productsSubscription: Subscription = new Subscription(); // подписаться

  openDialog(product?: Product): void {
    // let dialogConfig = new MatDialogConfig() можно так добавлять параметры

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      // if (result && result.id) this.updateData(result);
      // else this.postData(result);
    });
  }

  postData(value: Product): void {
    this.ProductsService.setProduct(value).subscribe((result) =>
      this.products.push(result)
    );
  }

  updateData(product: Product): void {
    this.ProductsService.updateProduct(product).subscribe(
      (result) =>
        (this.products = this.products.map((product) => {
          if (product.id === result.id) return result;
          else return product;
        }))
    );
  }

  deleteProduct(id: number): void {
    this.ProductsService.deleteProduct(id).subscribe((result) =>
      this.products.find((product) => {
        if (product.id === id) {
          const idx = this.products.findIndex((product) => product.id === id);
          this.products.splice(idx, 1);
        }
      })
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
