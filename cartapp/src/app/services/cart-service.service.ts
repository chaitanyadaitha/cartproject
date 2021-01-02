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
  getImages() {
    return this.httpService.get('https://picsum.photos/v2/list?page=1&limit=10');
  }
}
