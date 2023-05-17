import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification/notification.service';
import { FoodListService } from './services/food/food-list.service';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartComponent,
    FoodpageComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    NewmenuComponent,
    ProductDescriptionPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-center",
      timeOut: 5000, // 5 seconds
      closeButton: true,
      progressBar: true
    }),
    FontAwesomeModule
  ],
  providers: [ FoodListService,NotificationService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
