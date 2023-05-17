import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartDetails:{id:number,foodName:string,quantity:number,price:number}[] = [];
  totalPrice:number = 0;
  constructor(private cartService:CartService){}
  ngOnInit():void{
    this.cartDetails = this.cartService.cart;
    console.log(this.cartDetails);
    this.cartDetails.forEach(element => {
      this.totalPrice += element.price;
    });
  }


}
