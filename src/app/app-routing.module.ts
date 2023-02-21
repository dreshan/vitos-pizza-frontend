import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './card-page/card-page.component';
import {HomeComponent} from './home/home.component';
import { PizzadetailsComponent } from './pizzadetails/pizzadetails.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'pizza/:id', component:PizzadetailsComponent},
  {path:'cart-page', component:CardPageComponent},
  {path:'register-page', component:RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
