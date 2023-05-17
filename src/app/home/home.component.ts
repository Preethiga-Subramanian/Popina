import { Component } from '@angular/core';
import { FoodListService } from '../services/food/food-list.service';
import { NotificationService } from '../services/notification/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods:any;
  inputnumber:number = 0;
  isItemAdded:boolean = false;

  constructor(private foodlistservice:FoodListService, private notifyService:NotificationService, private router:ActivatedRoute){}
  ngOnInit():void{
    this.router.params.subscribe(params =>{
      if(params['searchItem']){
        console.log(params['searchItem'])
        this.foodlistservice.getSelectedFoodList(params['searchItem']).subscribe({next:(result) =>{
          this.foods = result;
        },
          error:(e) => {
            console.log(e);
            this.notifyService.showError("Server Down!!");
          }
        });
      }
      else{
        this.foodlistservice.getAllFoodList().subscribe({next:(result) =>{
          this.foods = result;
        },
          error:(e) => {
            console.log(e);
            this.notifyService.showError("Server Down!!");
          }
        });
      }
    })

  }

}
