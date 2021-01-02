import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {

  products:any;
  prices:any = [];
  finalCount:any = 0;
  finalPrice:any = 0;
  cartData:any = {count: 0, price: 0};

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((res:any) => { 
      this.products = res['cartProducts'];
       this.prices = this.products.reduce((acc:any, product: any) => {
         return {...acc, [product.id]: { price: product.price, count: 0}}
      }, {})
    })
  }

  updateCart(event:any) {
    const { count, id } = event;
    this.products.forEach((element:any) => {
      if (element.id == id && count > 0) {
        this.prices[id] = { price: element.price * count, count };
      }
    });
    
    let cartArray = Object.keys(this.prices).map(key => (this.prices[key]));
    this.finalCount = cartArray.reduce((accumulator:any, currentValue:any) => {
      return ({ count: accumulator.count + currentValue.count})
    });
    this.finalPrice = cartArray.filter((val) => val.count > 0 ).reduce((acc:any, curr: any) => {
        return ({ price: acc.price + curr.price })
    });
    this.cartData = {count : this.finalCount.count, price: this.finalPrice.price}
  }

}
