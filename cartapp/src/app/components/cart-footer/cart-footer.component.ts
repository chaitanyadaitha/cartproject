import { Input } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.scss']
})
export class CartFooterComponent implements OnInit {

  @Input() cartData:any;

  dialogHtml:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogHtml = 
      `<h2>Total Price of Items: ${this.cartData['price']}</h2>
        <h3 style="color: green">Your Transaction has been successful</h3>
      `
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: {
        price: this.cartData['price']
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

}

@Component({
  selector: 'checkout-dialog',
  templateUrl: 'checkout-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
