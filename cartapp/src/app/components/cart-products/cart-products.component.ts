import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {

  products:any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(res => this.products = res['cartProducts']);
  }

  updatePrice(event:any) {
    const { count, id, action, price } = event;
    this.products.forEach((element:any) => {
      if (element.id == id) {
        if (action == 'add') { element.price =  element.price + price * count }
        else element.price = element.price - price * count
      }
    });
  }

}
