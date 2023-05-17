import { Component } from '@angular/core';
import { FoodListService } from '../services/food/food-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-description-page',
  templateUrl: './product-description-page.component.html',
  styleUrls: ['./product-description-page.component.scss']
})
export class ProductDescriptionPageComponent {
  proteinsList:any;
  constructor(private fds:FoodListService, private router:Router){}
  ngOnInit(){
    this.proteinsList = this.fds.getAllProteinsList();
    this.fds.getAllProteinsList().subscribe({next:(proteinsData) => {
        this.proteinsList = proteinsData;
        console.log(this.proteinsList);
      },
      error:(error) => {
        console.log("Http Error:",error);
      }
    });
  }
}
