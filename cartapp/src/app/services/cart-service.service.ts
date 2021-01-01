import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpClient) { 
  }
  getCartItems() {
    return this.httpService.get('../../assets/mockData/cart.json');
  }
}
