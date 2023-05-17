import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public response : any;
  sharedData : any;
  isAdmin : boolean = false;
  url : string = 'http://localhost:3000/foods';
  constructor(private http:HttpClient) {  }

  calculateAge(event : Event):string{
    let today = new Date();
    let birthdate:Date = new Date();
    let finalage :string = "";
    if(event.target != null){
      birthdate = new Date((event.target as HTMLInputElement).value);
      let age:number = today.getFullYear() - birthdate.getFullYear();
      const mon = today.getMonth() - birthdate.getMonth();
      if(mon<0 || (mon===0 && today.getDate() < birthdate.getDate())){
        age--;
      }
      finalage = age.toString();
    }
    return finalage;
  }
  getAllUsersList():Observable<any>{
    return this.http.get(this.url);
  }
  getSingleUserData(email: string):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("emailid",email);
    return this.http.get(this.url,{params:queryParams});
  }
  saveUserData(singleUserData : object):Observable<any>{
    return this.http.post(this.url,singleUserData);
  }
  deleteUserData(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  getUserDetailsById(id:number):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get(this.url,{params:queryParams});
  }
  updateUserData(id:number,data:object):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data);
  }
}
