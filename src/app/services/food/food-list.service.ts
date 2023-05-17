import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  url : string = 'http://localhost:3000/foods';

  constructor(private http:HttpClient) { }
  getAllFoodList():Observable<any>{
      return this.http.get(this.url);
  }
  getSelectedFoodList(searchItem:string):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name",searchItem);
    return this.http.get(this.url,{params:queryParams});
  }
  getFoodDetailsById(id:number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get(this.url,{params:queryParams});
  }
  getAllProteinsList(){
    return this.http.get("http://localhost:3000/foodDescription");
}
}
