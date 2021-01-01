import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  @Input() product:any;
  @Output() updatePrice = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  priceChange(event:any) {
    this.updatePrice.emit({...event, price: this.product.price});
  }
}
