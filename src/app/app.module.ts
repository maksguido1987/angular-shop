import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    BasketComponent,
    ProductDetailsComponent,
    DialogBoxComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
