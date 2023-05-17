import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'newmenu',component:NewmenuComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'pdp',component:ProductDescriptionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
