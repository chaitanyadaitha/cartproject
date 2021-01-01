import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.scss']
})
export class CartMainComponent implements OnInit {

  products: any;

  constructor() { }

  ngOnInit(): void {
  }

}
