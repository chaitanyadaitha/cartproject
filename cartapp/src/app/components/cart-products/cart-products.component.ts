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
  cartArray:any = [];
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
      this.cartArray = Object.keys(this.prices).map(key => {
        return (Object.assign({},this.prices[key]));
      });
    })
  }

  updateCart(event:any) {
    const { count, id } = event;
   
    this.products.forEach((element:any, key:any) => {
      if (element.id == id && count > 0) {
        this.prices[id] = { price: element.price * count, count, id };
        this.cartArray[key] = { price: element.price * count, count, id };
      } else this.cartArray[key] = { ...this.cartArray[key]}
    });
    
    this.cartArray.forEach((element:any) => {
      if (element.id == id && count == 0) {
        element.price = element.price * count;
        element.count = count;
      }
    })

    this.finalCount = this.cartArray.reduce((accumulator:any, currentValue:any) => {
      return ({ count: accumulator.count + currentValue.count})
    });
    this.finalPrice = this.cartArray.filter((val:any) => val.count > 0 ).reduce((acc:any, curr: any) => {
        return ({ price: acc.price + curr.price })
    }, {price: 0});
    this.cartData = {count : this.finalCount.count, price: this.finalPrice.price}
  }

}
