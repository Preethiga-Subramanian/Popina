import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification/notification.service';
import { PasswordvalidationService } from '../services/passwordvalidation/passwordvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerFormData : any;
  finalage : string = "0";
  constructor(private users:UsersService,private customValidator:PasswordvalidationService,private router:Router,private notifyService:NotificationService){}
  ngOnInit(){
    this.registerFormData = new FormGroup({
      firstname : new FormControl("",Validators.compose([Validators.required])),
      lastname : new FormControl("",Validators.compose([Validators.required])),
      gender : new FormControl("",Validators.compose([Validators.required])),
      dob : new FormControl("",Validators.compose([Validators.required])),
      age : new FormControl(""),
      emailid : new FormControl("",Validators.compose([Validators.required,Validators.email])),
      pwd : new FormControl("",Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(12),this.customValidator.patternValidator()]))    });
  }
  onClickSubmit(data : any){
    data.age = this.finalage;
    this.users.saveUserData(data).subscribe(() => {
      this.notifyService.showSuccess("Registration successful !!");
      this.router.navigate(['/user-login']);
    });
  }
  calculateAge(event : Event):void{
    this.finalage = this.users.calculateAge(event);
  }
  backFunction(){
    this.router.navigate(['/home']);
  }
}
