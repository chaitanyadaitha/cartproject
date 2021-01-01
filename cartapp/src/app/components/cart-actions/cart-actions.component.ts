import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-actions',
  templateUrl: './cart-actions.component.html',
  styleUrls: ['./cart-actions.component.scss']
})
export class CartActionsComponent implements OnInit {

  count = 0;
  @Output() cartEvent = new EventEmitter<any>();
  @Input() productId:any;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event) {
    console.log(event)
  }

  addItem() {
    if (this.count >= 0) {
      this.count = this.count + 1;
      this.cartEvent.emit({ count: this.count, id: this.productId, action: 'add'});
    }
  }

  reduceItem() {
    if (this.count > 0) {
      this.count = this.count - 1;
      this.cartEvent.emit({ count: this.count, id: this.productId, action: 'reduce'});
    }
  }
}
