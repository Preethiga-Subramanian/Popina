import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:{id:number,foodName:string,quantity:number,price:number}[] = [];
  isItemAdded = false;
  constructor() { }
  addToCart(foodDetails:any):void{
    let cartItemIndex = this.cart.findIndex((item) => item.id === foodDetails.id)
    if(cartItemIndex != -1){
      let oldQuantity = this.cart[cartItemIndex].quantity;
      let oldPrice = this.cart[cartItemIndex].price;
      this.cart[cartItemIndex] = {...this.cart[cartItemIndex],quantity:(oldQuantity+1),price:oldPrice+foodDetails.price}
    }else{
      let newCartItem = {id:foodDetails.id,foodName:foodDetails.name,quantity:1,price:foodDetails.price};
      this.cart.push(newCartItem);
    }
    this.isItemAdded = true;
  }

  removeFromCart(id:number){
    let cartItemIndex = this.cart.findIndex((item) => item.id === id)
    if(cartItemIndex != -1 && this.cart[cartItemIndex].quantity > 1){
      let newQuantity = (this.cart[cartItemIndex].quantity)-1;
      let newPrice = (this.cart[cartItemIndex].price/this.cart[cartItemIndex].quantity)*newQuantity;
      this.cart[cartItemIndex] = {...this.cart[cartItemIndex],quantity:newQuantity,price:newPrice}
    }else if(cartItemIndex != -1){
      this.cart.splice(cartItemIndex,1);
    }else{
      console.log("nothing to delete")
    }
  }
  changeQuantity(id:number,quantity:number){
    console.log(id);
    console.log(quantity);
  }
}
