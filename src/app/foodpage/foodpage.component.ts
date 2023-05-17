import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodListService } from '../services/food/food-list.service';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent {
    foodDetails:any;
    cartDetails:{id:number,foodName:string,quantity:number,price:number}[] = [];
    isItemAdded:boolean = false;
    quantity:number = 0;

    constructor(private foodServices:FoodListService,private route:ActivatedRoute,private notifyService:NotificationService,private cartService:CartService,private router:Router){}
    ngOnInit():void{
      this.foodDetailsPage();
    }
    ngOnChange():void{
      this.foodDetailsPage();
    }

    foodDetailsPage():void{
      this.cartDetails = this.cartService.cart;
      let cartItemIndex = this.cartDetails.findIndex((item) => item.id == this.route.snapshot.params['id'])
      if(cartItemIndex != -1){
        this.isItemAdded = true;
        this.quantity = this.cartDetails[cartItemIndex].quantity;
      }else{
        this.isItemAdded = false;
      }
      this.foodServices.getFoodDetailsById(this.route.snapshot.params['id']).subscribe({next:(result) => {
        this.foodDetails = result;
      },
      error:(e) => {
        console.log(e);
        this.notifyService.showError("Server Down!!");
      }
      });
    }
    addToCart(foodDetails:any){
      this.cartService.addToCart(foodDetails);
      this.foodDetailsPage();
    }
    removeFromCart(id:number){
      this.cartService.removeFromCart(id);
      this.foodDetailsPage();
    }
    backFunction(){
      this.router.navigate(['/menu']);
    }
}
