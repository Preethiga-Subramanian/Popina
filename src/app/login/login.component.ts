import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { NotificationService } from '../services/notification/notification.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userLoginform : any;
  constructor(private users:UsersService, private router:Router,private notifyService:NotificationService){}
  ngOnInit(){
    this.userLoginform = new FormGroup({
      mailid : new FormControl("",Validators.compose([Validators.required,Validators.email])),
      pwd1 : new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)]))});
  }
  userLoginFunction(data : any){
      this.users.getSingleUserData(data.mailid).subscribe({next:(singleUsersData) => {
      if(singleUsersData.length != 0 && singleUsersData[0].pwd == data.pwd1){
        if(singleUsersData[0].role == "user"){
          this.users.isAdmin = false;
          this.users.sharedData = singleUsersData;
        }else if(singleUsersData[0].role == "admin"){
          this.users.getAllUsersList().subscribe((result) =>{
            this.users.sharedData = result;
          });
          this.users.isAdmin = true;
        }
        this.notifyService.showSuccess("Login Successful ! Welcome Back !!");
        this.router.navigate(['/'+singleUsersData[0].id+'/'+singleUsersData[0].role]);
      }else if(singleUsersData.length != 0){
        this.notifyService.showWarning("Incorrect Password - login failure !");
      }else{
        this.notifyService.showWarning("you are not a Registered User - Register Here Now!!");
        this.router.navigate(['/user-register']);
      }
      },
      error:(error) => {
        console.log("Http Error:",error);
        this.notifyService.showWarning("Server Down!!");
      }
    });
  }
  backFunction(){
    this.router.navigate(['/home']);
  }
}
