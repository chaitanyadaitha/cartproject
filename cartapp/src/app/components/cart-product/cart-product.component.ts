import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  @Input() product:any;
  @Input() prices: any;
  @Output() updateCart = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  cartActionChange(event:any) {
    this.updateCart.emit(event);
  }

}
