import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartMainComponent } from './components/cart-main/cart-main.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';

// Service
import {CartService} from './services/cart-service.service';

import { CartProductComponent } from './components/cart-product/cart-product.component';
import { CartFooterComponent, DialogDataExampleDialog } from './components/cart-footer/cart-footer.component';
import { CartActionsComponent } from './components/cart-actions/cart-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    CartMainComponent,
    CartProductsComponent,
    CartProductComponent,
    CartFooterComponent,
    CartActionsComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
